import { Component, OnInit, ViewChild } from '@angular/core';

//Components
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';

//Angular Material
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  /* displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'comment', 'action']; */
  displayedColumns: string[] = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'fechaNacimiento', 'genero', 'noContacto', 'action'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //dfr:any= ApiService

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getListaAlumnos();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getListaAlumnos();
      }
    })
  }

  getListaAlumnos() {
    this.api.getAlumno()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error while fetching the Records!!")
        }
      })
  }

  editAlumno(row: any) {
    console.log(row);
    this.dialog.open(DialogComponent, {
      width: '30',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getListaAlumnos();
      }
    })
  }

  deleteAlumno(id: number) {
    this.api.deleteAlumno(id)
      .subscribe({
        next: (res) => {
          alert("Product Deleted Successfully");
          this.getListaAlumnos();
        },
        error: () => {
          alert("Error while deleting the product!!");
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
