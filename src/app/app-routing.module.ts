import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Items } from './items/items.component';

const routes: Routes = [
  {path: '',      component: Items },
  {path: 'items', component: Items},
  {path: '*',     component: Items }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
