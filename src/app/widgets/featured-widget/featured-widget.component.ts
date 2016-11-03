import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { WidgetsService, Widget } from '../../shared';

@Component({
  selector: 'app-featured-widget',
  templateUrl: './featured-widget.component.html',
  styleUrls: ['./featured-widget.component.css']
})
export class FeaturedWidgetComponent implements OnInit {
  widget: Widget;

  constructor(
    private route: ActivatedRoute,
    private widgetsService: WidgetsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.widgetsService.loadWidget(params['id'])
        .subscribe(widget => this.widget = widget);
    });
  }

}
