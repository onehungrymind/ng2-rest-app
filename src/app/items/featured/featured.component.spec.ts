/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing';
import { FeaturedComponent } from './featured.component';
import { ItemsService } from '../../shared';

class ItemsServiceStub {}

let comp: FeaturedComponent;
let fixture: ComponentFixture<FeaturedComponent>;

describe('Component: Featured', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedComponent ],
      providers: [
        {provide: ItemsService, useClass: ItemsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });

    fixture = TestBed.createComponent(FeaturedComponent);
    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
