import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardModule } from './components/dashboard/dashboard.module';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: 'alumnos', loadChildren: () => import('./modules/alumnos/alumnos.module').then(x => x.AlumnosModule)},
  {path: 'cursos', loadChildren: () => import('./modules/cursos/cursos.module').then(x => x.CursosModule)},
  {path: 'personal', loadChildren: () => import('./modules/personal/personal.module').then(x => x.PersonalModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }