import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicCardModelRoutingModule } from './graphic-card-model-routing.module';
import { GraphicCardModelComponent } from './list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GraphicCardModelComponent
  ],
  imports: [
    CommonModule,
    GraphicCardModelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GraphicCardModelModule { }
