import { PersonalService } from 'src/app/services/personal.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-personal-dialogo',
  templateUrl: './personal-dialogo.component.html',
  styleUrls: ['./personal-dialogo.component.css']
})
export class PersonalDialogoComponent {}
