import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog-cursos',
  templateUrl: './dialog-cursos.component.html',
  styleUrls: ['./dialog-cursos.component.css']
})
export class DialogCursosComponent implements OnInit {

  listaNiveles: string[] = ["Básico", "Intermedio", "Avanzado"];
  formularioRegistroCursos!: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private fromBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogCursosComponent>
  ) { }

  ngOnInit(): void {

    this.formularioRegistroCursos = this.fromBuilder.group({
      curso: ['', Validators.required],
      descripcion: ['', Validators.required],
      nivel: ['', Validators.required]
    });


    if (this.editData) {
      this.actionBtn = "Update";
      this.formularioRegistroCursos.controls['curso'].setValue(this.editData.curso);
      this.formularioRegistroCursos.controls['descripcion'].setValue(this.editData.descripcion);
      this.formularioRegistroCursos.controls['nivel'].setValue(this.editData.nivel);
    }

  }

  addCurso() {
    if (!this.editData) {
      if (this.formularioRegistroCursos.valid) {
        this.api.postCurso(this.formularioRegistroCursos.value)
          .subscribe({
            next: (res) => {
              alert("Quedaron registrados los datos del alumno");
              this.formularioRegistroCursos.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error al registrar los datos del alumno");
            }
          })
      };
    } else {
      this.updateCurso()
    }
  }

  updateCurso() {
    this.api.putCurso(this.formularioRegistroCursos.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Se han actualizado los datos del curso");
          this.formularioRegistroCursos.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error mientras se actualizaban los datos del alumno");
        }
      }
      )
  }

}
