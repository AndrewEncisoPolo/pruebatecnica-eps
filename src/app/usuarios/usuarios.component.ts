import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpsService } from '../eps.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Usuarios {
  idUsuario: number;
  tipoUsuario: string;
  nombre: string;
  tipoDocumento: string;
  documento: number;
  departamento: number;
  ciudad: number;
  sede: string;
  direccion: string;
  idTipoUsuario: number;
  idDocumento: number;
  idDepartamento: number;
  idCiudad: number;
  idSede: number;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  displayedColumns = ['options', 'idUsuario', 'tipoUsuario', 'nombre', 'tipoDocumento', 'documento', 'departamento', 'ciudad', 'sede', 'direccion'];
  dataSource:any;
  usuarios:any;

  constructor(private http: HttpClient,private service: EpsService) {
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data => {
      this.usuarios = data
      this.dataSource = new MatTableDataSource<Usuarios>(this.usuarios);
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });
  }


}
