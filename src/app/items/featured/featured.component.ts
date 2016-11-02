import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ItemsService, Item } from '../../shared';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
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
