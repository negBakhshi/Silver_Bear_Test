import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CPURoutingModule } from './cpu-routing.module';
import { ListCPUComponent } from './list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListCPUComponent
  ],
  imports: [
    CommonModule,
    CPURoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CPUModule { }
