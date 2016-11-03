/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { WidgetsComponent } from './widgets.component';
import { RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from '../testing';

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
