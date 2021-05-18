import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrandModule } from './brand/brand.module';
import { LaptopsModule } from './laptops/laptops.module'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListBrandComponent } from './brand/list/list.component';
import { ListCPUComponent } from './cpu/list/list.component';
import { GraphicCardComponent } from './graphic-card/list/list.component';
import { MemoryComponent } from './memory/list/list.component';
import { PortComponent } from './port/list/list.component';
import { StorageComponent } from './storage/list/list.component';
import { UnitComponent } from './unit/list/list.component';
import { GraphicCardModelComponent } from './graphic-card-model/list/list.component';
import { CPUModule } from './cpu/cpu.module';
import { GraphicCardModule } from './graphic-card/graphic-card.module';
import { GraphicCardModelModule } from './graphic-card-model/graphic-card-model.module';
import { MemoryModule } from './memory/memory.module';
import { PortModule } from './port/port.module';
import { StorageModule } from './storage/storage.module';
import { UnitModule } from './unit/unit.module';
import { from } from 'rxjs';
import { LaptopListComponent } from './laptops/list/list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    LaptopsModule,
    HttpClientModule,
    FormsModule,
    BrandModule,
    CPUModule,
    GraphicCardModule,
    GraphicCardModelModule,
    MemoryModule,
    PortModule,
    StorageModule,
    UnitModule,
    RouterModule.forRoot([
      { path: '', component: LaptopListComponent, pathMatch: 'full' },
      { path: 'laptop', component: LaptopListComponent },
      { path: 'brand', component: ListBrandComponent },
      { path: 'cpu', component: ListCPUComponent },
      { path: 'graphicCard', component: GraphicCardComponent },
      { path: 'memory', component: MemoryComponent },
      { path: 'port', component: PortComponent },
      { path: 'storage', component: StorageComponent },
      { path: 'unit', component: UnitComponent },
      { path: 'graphicCardModel', component: GraphicCardModelComponent }
    ], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
