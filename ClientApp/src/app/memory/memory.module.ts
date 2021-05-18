import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryRoutingModule } from './memory-routing.module';
import { MemoryComponent } from './list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MemoryComponent,
  ],
  imports: [
    CommonModule,
    MemoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MemoryModule { }
