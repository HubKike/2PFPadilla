import { AlumnosService } from 'src/app/services/alumnos.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-dialogo',
  templateUrl: './alumnos-dialogo.component.html',
  styleUrls: ['./alumnos-dialogo.component.css']
})
export class AlumnosDialogoComponent {}
