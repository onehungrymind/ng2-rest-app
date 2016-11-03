/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { WidgetsComponent } from './widgets.component';
import { WidgetsService } from '../shared';
import { RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from '../testing';

class WidgetsServiceStub {}

let comp: WidgetsComponent;
let fixture: ComponentFixture<WidgetsComponent>;

describe('Component: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouterOutletStubComponent,
        WidgetsComponent
      ],
      providers: [
        {provide: WidgetsService, useClass: WidgetsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub},
      ]
    });

    fixture = TestBed
      .overrideComponent(WidgetsComponent, {set: {template: ''}})
      .createComponent(WidgetsComponent);

    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
