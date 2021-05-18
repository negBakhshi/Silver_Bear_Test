import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCPUComponent } from './list/list.component';

const routes: Routes = [
  { path: 'cpu', component: ListCPUComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPURoutingModule { }
