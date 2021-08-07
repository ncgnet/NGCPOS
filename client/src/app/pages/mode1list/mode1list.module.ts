import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mode1ListComponent } from './mode1list.component';
import { Mode1ListRoutingModule } from './mode1list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    Mode1ListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    Mode1ListComponent
  ]
})
export class Mode1ListModule { }
