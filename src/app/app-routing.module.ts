import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import ('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import ('./modules/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'curso',
    loadChildren: () => import ('./modules/curso/curso.module').then(m => m.CursoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
