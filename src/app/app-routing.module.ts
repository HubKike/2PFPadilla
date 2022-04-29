import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const routes: Routes = [
  {path:'', component:CursosComponent},
  {path:'alumnos', component:AlumnosComponent},
  {path:'cursos', component:CursosComponent},
  {path:'profesores', component:ProfesoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
