import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ItemsService, Item } from '../../shared';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css']
})
export class FeaturedItemComponent implements OnInit {
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.itemsService.loadItem(params['id'])
        .subscribe(item => this.item = item);
    });
  }

}
