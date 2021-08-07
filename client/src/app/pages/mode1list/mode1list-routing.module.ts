import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mode1ListComponent } from './mode1list.component';

const routes: Routes = [
  {
    path: '',
    component: Mode1ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mode1ListRoutingModule { }
