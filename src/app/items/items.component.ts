import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  selectedItem: Item;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.itemsService.loadItems()
      .then(items => this.items = items)
      .then(this.diffFeaturedItems.bind(this));
  }

  // diffFeaturedItems handles the case where one item is set as featured in the database,
  // but the user browses to another featured item manually using the URL bar
  diffFeaturedItems(items: Item[]) {
    const supposedlyFeaturedID = this.route.snapshot.firstChild.params['id'];

    if (supposedlyFeaturedID) {
      let supposedlyFeaturedItem = items.find(item => item.id === +supposedlyFeaturedID);

      if (!supposedlyFeaturedItem.featured) {
        this.setItemAsFeatured(supposedlyFeaturedItem);
      }
    }
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item)
      .then(responseItem => {
        if (item.id) {
          this.replaceItem(responseItem);
        } else {
          this.pushItem(responseItem);
        }
      });

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  replaceItem(item: Item) {
    this.items = this.items.map(mapItem => {
      return mapItem.id === item.id ? item : mapItem;
    });
  }

  pushItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item)
      .then(() => {
        this.items.splice(this.items.indexOf(item), 1);
      });

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }

  unsetFeaturedItem() {
    const featured = this.items.find(item => item.featured);

    if (featured) {
      this.saveItem(Object.assign({}, featured, {featured: false}));
    }
  }

  setItemAsFeatured(item: Item) {
    this.unsetFeaturedItem();

    item.featured = true;

    this.saveItem(item);

    this.router.navigate(['featured', item.id], {relativeTo: this.route});
  }

}

