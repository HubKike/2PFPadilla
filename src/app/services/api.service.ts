import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  rutaAlumnos: string = "http://localhost:3000/listaAlumnos/";
  rutaCursos: string = "http://localhost:3000/listaCursos/";
  rutaProfesores: string = "http://localhost:3000/listaProfesores/";

  //#region Alumnnos
  postAlumno(data: any) {
    return this.http.post<any>(this.rutaAlumnos, data);
  }

  getAlumno() {
    return this.http.get<any>(this.rutaAlumnos)
  }

  putAlumno(data: any, id: number) {
    return this.http.put<any>(this.rutaAlumnos + id, data)
  }

  deleteAlumno(id: number) {
    console.log(id)
    return this.http.delete<any>(this.rutaAlumnos + id)
  }
  //#endregion Alumnnos

  //#region Cursos

  postCurso(data: any) {
    return this.http.post<any>(this.rutaCursos, data);
  }

  getCurso() {
    return this.http.get<any>(this.rutaCursos)
  }

  putCurso(data: any, id: number) {
    return this.http.put<any>(this.rutaCursos + id, data)
  }

  deleteCurso(id: number) {
    console.log(id)
    return this.http.delete<any>(this.rutaCursos + id)
  }

  //#endregion Cursos

  //#region Profesores
  postProfesor(data: any) {
    return this.http.post<any>(this.rutaProfesores, data);
  }

  getProfesor() {
    return this.http.get<any>(this.rutaProfesores)
  }

  putProfesor(data: any, id: number) {
    return this.http.put<any>(this.rutaProfesores + id, data)
  }

  deleteProfesor(id: number) {
    console.log(id)
    return this.http.delete<any>(this.rutaProfesores + id)
  }
  //#endregion Profesores

}
