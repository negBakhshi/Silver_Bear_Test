import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageRoutingModule } from './storage-routing.module';
import { StorageComponent } from './list/list.component';

@NgModule({
  declarations: [
    StorageComponent,
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StorageModule { }
