import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialogo-profesores',
  templateUrl: './dialogo-profesores.component.html',
  styleUrls: ['./dialogo-profesores.component.css']
})
export class DialogoProfesoresComponent implements OnInit {
  
  listaGeneros: string[] = ["M", "F"];
  formularioRegistroProfesores!: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private fromBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogoProfesoresComponent>
  ) { }

  ngOnInit(): void {

    this.formularioRegistroProfesores = this.fromBuilder.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      genero: ['', Validators.required],
      noContacto: ['', Validators.required]
    });


    if (this.editData) {
      this.actionBtn = "Update";
      this.formularioRegistroProfesores.controls['nombre'].setValue(this.editData.nombre);
      this.formularioRegistroProfesores.controls['apellidoPaterno'].setValue(this.editData.apellidoPaterno);
      this.formularioRegistroProfesores.controls['apellidoMaterno'].setValue(this.editData.apellidoMaterno);
      this.formularioRegistroProfesores.controls['genero'].setValue(this.editData.genero);
      this.formularioRegistroProfesores.controls['noContacto'].setValue(this.editData.noContacto);
    }

  }


  addProfesor() {
    if (!this.editData) {
      if (this.formularioRegistroProfesores.valid) {
        this.api.postProfesor(this.formularioRegistroProfesores.value)
          .subscribe({
            next: (res) => {
              alert("Quedaron registrados los datos del profesor");
              this.formularioRegistroProfesores.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error al registrar los datos del profesor");
            }
          })
      };
    } else {
      this.updateProfesor()
    }
  }
  
  updateProfesor() {
    this.api.putProfesor(this.formularioRegistroProfesores.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Se han actualizado los datos del profesor");
          this.formularioRegistroProfesores.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error mientras se actualizaban los datos del profesor");
        }
      }
      )
  }

}
