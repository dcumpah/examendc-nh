import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'curso/:id',
    component: CursoDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
