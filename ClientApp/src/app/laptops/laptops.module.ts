import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaptopsRoutingModule } from './laptops-routing.module';
import { LaptopListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LaptopListComponent
  ],
  imports: [
    CommonModule,
    LaptopsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LaptopsModule { }
