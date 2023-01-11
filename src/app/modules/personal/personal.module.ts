import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { PersonalDialogoComponent } from './personal-dialogo/personal-dialogo.component';


@NgModule({
  declarations: [
    PersonalComponent,
    PersonalDialogoComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
