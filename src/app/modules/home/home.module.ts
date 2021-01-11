import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';

@NgModule({
  declarations: [HomePageComponent, CursoDetailPageComponent, CursoContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
