import { Injectable } from '@angular/core';
import { Widget, widgets } from './widget.model';

@Injectable()
export class WidgetsService {
  widgets: Widget[] = widgets;

  constructor() {}

  loadWidgets() {
    return [...this.widgets];
  }

  loadWidget(id) {
    return this.widgets.find(widget => widget.id === +id);
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    this.widgets = [...this.widgets, widget];
    return widget;
  }

  updateWidget(widget: Widget) {
    this.widgets = this.widgets.map(w => {
      return w.id === widget.id ? widget : w;
    });

    return widget;
  }

  deleteWidget(widget: Widget) {
    this.widgets = this.widgets.filter(w => w.id !== widget.id);
    return widget;
  }
}
