import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosDialogoComponent } from './alumnos-dialogo/alumnos-dialogo.component';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosDialogoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
