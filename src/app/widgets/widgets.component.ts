import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget>;
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.widgets = this.widgetsService.loadWidgets();
    this.diffFeaturedWidgets(this.widgets);
  }

  // diffFeaturedWidgets handles the case where one widget is set as featured-item in the database,
  // but the user browses to another featured-item widget manually using the URL bar
  diffFeaturedWidgets(widgets: Widget[]) {
    const supposedlyFeaturedID = this.route.snapshot.firstChild.params['id'];

    if (supposedlyFeaturedID) {
      let supposedlyFeaturedWidget = widgets.find(widget => widget.id === +supposedlyFeaturedID);

      if (!supposedlyFeaturedWidget.featured) {
        this.setWidgetAsFeatured(supposedlyFeaturedWidget);
      }
    }
  }

  resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    const responseWidget = this.widgetsService.saveWidget(widget);

    if (widget.id) {
      this.replaceWidget(responseWidget);
    } else {
      this.pushWidget(responseWidget);
    }

    // Generally, we would want to wait for the result of `widgetsService.saveWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

  replaceWidget(widget: Widget) {
    this.widgets = this.widgets.map(mapWidget => {
      return mapWidget.id === widget.id ? widget : mapWidget;
    });
  }

  pushWidget(widget: Widget) {
    this.widgets.push(widget);
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget);
    this.widgets.splice(this.widgets.indexOf(widget), 1);

    // Generally, we would want to wait for the result of `widgetsService.deleteWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

  unsetFeaturedWidget() {
    const featured = this.widgets.find(widget => widget.featured);

    if (featured) {
      this.saveWidget(Object.assign({}, featured, {featured: false}));
    }
  }

  setWidgetAsFeatured(widget: Widget) {
    this.unsetFeaturedWidget();

    this.saveWidget(Object.assign({}, widget, {featured: true}));

    this.router.navigate(['featured', widget.id], {relativeTo: this.route});
  }

}

