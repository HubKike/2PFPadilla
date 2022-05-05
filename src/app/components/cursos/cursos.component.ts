import { Component, OnInit, ViewChild } from '@angular/core';

//Components
import { DialogCursosComponent } from './dialog-cursos/dialog-cursos.component';
import { ApiService } from 'src/app/services/api.service';

//Angular Material
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  displayedColumns: string[] = ['curso', 'descripcion', 'nivel', 'action'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getListaCursos();
  }

  openDialog() {
    this.dialog.open(DialogCursosComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getListaCursos();
      }
    })
  }
  
  getListaCursos() {
    this.api.getCurso()
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
    this.dialog.open(DialogCursosComponent, {
      width: '30',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getListaCursos();
      }
    })
  }

  deleteCurso(id: number) {
    this.api.deleteCurso(id)
      .subscribe({
        next: (res) => {
          alert("Product Deleted Successfully");
          this.getListaCursos();
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
