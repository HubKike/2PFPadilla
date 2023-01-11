import { CursosService } from 'src/app/services/cursos.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-cursos-dialogo',
  templateUrl: './cursos-dialogo.component.html',
  styleUrls: ['./cursos-dialogo.component.css']
})
export class CursosDialogoComponent {}
