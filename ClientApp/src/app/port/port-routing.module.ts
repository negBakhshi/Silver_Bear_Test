import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortComponent } from './list/list.component';

const routes: Routes = [
  { path: 'port', component: PortComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortRoutingModule { }
