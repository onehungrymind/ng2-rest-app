/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing';
import { FeaturedWidgetComponent } from './featured-widget.component';
import { WidgetsService } from '../../shared';

class WidgetsServiceStub {}

let comp: FeaturedWidgetComponent;
let fixture: ComponentFixture<FeaturedWidgetComponent>;

describe('Component: Featured', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedWidgetComponent ],
      providers: [
        {provide: WidgetsService, useClass: WidgetsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });

    fixture = TestBed.createComponent(FeaturedWidgetComponent);
    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
