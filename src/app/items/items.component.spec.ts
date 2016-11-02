/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemsService } from '../shared';
import { RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from '../testing';

class ItemsServiceStub {}

let comp: ItemsComponent;
let fixture: ComponentFixture<ItemsComponent>;

describe('Component: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouterOutletStubComponent,
        ItemsComponent
      ],
      providers: [
        {provide: ItemsService, useClass: ItemsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub},
      ]
    });

    fixture = TestBed
      .overrideComponent(ItemsComponent, {set: {template: ''}})
      .createComponent(ItemsComponent);

    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
