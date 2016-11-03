import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget>;
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService
  ) {}

  ngOnInit() {
    this.widgets = this.widgetsService.loadWidgets();
  }

  resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget);
    this.widgets.splice(this.widgets.indexOf(widget), 1);

    // Generally, we would want to wait for the result of `widgetsService.deleteWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

}

