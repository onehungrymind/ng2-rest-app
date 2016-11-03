import { Component, Input } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent {
  @Input() widget: Widget;
}
