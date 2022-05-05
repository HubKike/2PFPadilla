import { Component, OnInit, ViewChild } from '@angular/core';

//Components
import { DialogoProfesoresComponent } from './dialogo-profesores/dialogo-profesores.component';
import { ApiService } from 'src/app/services/api.service';

//Angular Material
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'noContacto', 'action'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}
  
  ngOnInit(): void {
    this.getListaProfesores();
  }
  
  openDialog() {
    this.dialog.open(DialogoProfesoresComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getListaProfesores();
      }
    })
  }

  getListaProfesores() {
    this.api.getProfesor()
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

  editProfesor(row: any) {
    console.log(row);
    this.dialog.open(DialogoProfesoresComponent, {
      width: '30',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getListaProfesores();
      }
    })
  }
  
  deleteProfesor(id: number) {
    this.api.deleteProfesor(id)
      .subscribe({
        next: (res) => {
          alert("Product Deleted Successfully");
          this.getListaProfesores();
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
