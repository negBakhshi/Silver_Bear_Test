import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryComponent } from './list/list.component';

const routes: Routes = [
  { path: 'memory', component: MemoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryRoutingModule { }
