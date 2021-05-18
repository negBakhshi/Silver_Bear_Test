import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicCardModelComponent } from './list/list.component';

const routes: Routes = [
  { path: 'graphicCardModel', component: GraphicCardModelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicCardModelRoutingModule { }
