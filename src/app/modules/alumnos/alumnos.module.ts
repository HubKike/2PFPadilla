import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AlumnosDialogoComponent } from './alumnos-dialogo/alumnos-dialogo.component';

@NgModule({
  declarations: [
    AlumnosDialogoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule {}