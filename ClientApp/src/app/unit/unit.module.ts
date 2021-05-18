import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './list/list.component';


@NgModule({
  declarations: [
    UnitComponent,
  ],
  imports: [
    CommonModule,
    UnitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UnitModule { }
