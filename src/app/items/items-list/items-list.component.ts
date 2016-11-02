import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../shared';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() featured = new EventEmitter();
}
