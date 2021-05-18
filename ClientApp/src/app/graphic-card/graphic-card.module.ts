import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicCardRoutingModule } from './graphic-card-routing.module';
import { GraphicCardComponent } from '../graphic-card/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GraphicCardComponent
  ],
  imports: [
    CommonModule,
    GraphicCardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GraphicCardModule { }
