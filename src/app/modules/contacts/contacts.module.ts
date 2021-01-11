import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';


@NgModule({
  declarations: [ContactsPageComponent, ContactsFormComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
