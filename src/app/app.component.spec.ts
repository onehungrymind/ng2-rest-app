/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { RouterLinkStubDirective }   from './testing';
import { RouterOutletStubComponent } from './testing';

import { AppComponent } from './app.component';

describe('App: Ng2RestApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular 2 REST Website');
  }));

  it('should render title in the header', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mdl-layout-title').textContent).toContain('Angular 2 REST Website');
  }));
});
