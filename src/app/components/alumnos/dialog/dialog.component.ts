import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  listaGeneros: string[] = ["M", "F"];
  formularioRegistroAlumnos!: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private fromBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {

    this.formularioRegistroAlumnos = this.fromBuilder.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      noContacto: ['', Validators.required]
    });


    if (this.editData) {
      this.actionBtn = "Update";
      this.formularioRegistroAlumnos.controls['nombre'].setValue(this.editData.nombre);
      this.formularioRegistroAlumnos.controls['apellidoPaterno'].setValue(this.editData.apellidoPaterno);
      this.formularioRegistroAlumnos.controls['apellidoMaterno'].setValue(this.editData.apellidoMaterno);
      this.formularioRegistroAlumnos.controls['fechaNacimiento'].setValue(this.editData.fechaNacimiento);
      this.formularioRegistroAlumnos.controls['genero'].setValue(this.editData.genero);
      this.formularioRegistroAlumnos.controls['noContacto'].setValue(this.editData.noContacto);
    }

  }

  addAlumno() {
    if (!this.editData) {
      if (this.formularioRegistroAlumnos.valid) {
        this.api.postAlumno(this.formularioRegistroAlumnos.value)
          .subscribe({
            next: (res) => {
              alert("Quedaron registrados los datos del alumno");
              this.formularioRegistroAlumnos.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error al registrar los datos del alumno");
            }
          })
      };
    } else {
      this.updateAlumno()
    }
  }

  updateAlumno() {
    this.api.putAlumno(this.formularioRegistroAlumnos.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Se han actualizado los datos del alumno");
          this.formularioRegistroAlumnos.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error mientras se actualizaban los datos del alumno");
        }
      }
      )
  }

}
