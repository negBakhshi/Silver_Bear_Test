import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortRoutingModule } from './port-routing.module';
import { PortComponent } from './list/list.component';


@NgModule({
  declarations: [
    PortComponent,
  ],
  imports: [
    CommonModule,
    PortRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortModule { }
