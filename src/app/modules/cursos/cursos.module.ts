import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosDialogoComponent } from './cursos-dialogo/cursos-dialogo.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
