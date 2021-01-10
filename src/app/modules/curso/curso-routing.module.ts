import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoPageComponent } from './pages/curso-page/curso-page.component';

const routes: Routes = [
  {
    path: '',
    component: CursoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
