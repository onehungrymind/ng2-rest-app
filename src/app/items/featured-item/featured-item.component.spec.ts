/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing';
import { FeaturedItemComponent } from './featured-item.component';
import { ItemsService } from '../../shared';

class ItemsServiceStub {}

let comp: FeaturedItemComponent;
let fixture: ComponentFixture<FeaturedItemComponent>;

describe('Component: Featured', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedItemComponent ],
      providers: [
        {provide: ItemsService, useClass: ItemsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });

    fixture = TestBed.createComponent(FeaturedItemComponent);
    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
