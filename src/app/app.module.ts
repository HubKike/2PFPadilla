import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { DialogComponent } from './components/alumnos/dialog/dialog.component';
import { ApiService } from './services/api.service';
import { DialogCursosComponent } from './components/cursos/dialog-cursos/dialog-cursos.component';
import { DialogoProfesoresComponent } from './components/profesores/dialogo-profesores/dialogo-profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ProfesoresComponent,
    CursosComponent,
    DialogComponent,
    DialogCursosComponent,
    DialogoProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
