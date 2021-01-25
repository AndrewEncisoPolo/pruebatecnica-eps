import { Component, OnInit } from '@angular/core';
import { EpsService } from '../eps.service';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Paciente {
  idPaciente: number;
  nombre: string;
  tipoDocumento: string;
  documento: number;
  nroSeguroSocial: number;
  departamento: string;
  ciudad: string;
  sede: string;
  codigoPostal: number;
  direccion: string;
  idTipoUsuario: number;
  telefono: number;
  idTipoDocumento: number;
  idDepartamento: number;
  idCiudad: number;
  idSede: number;
}

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  displayedColumns = ['options', 'idPaciente', 'nombre', 'tipoDocumento', 'documento', 'nroSeguroSocial', 'departamento', 'ciudad', 'sede', 'direccion'];
  dataSource:any;
  citas:any;

  constructor(private http: HttpClient,private service: EpsService) {
    
  }

  ngOnInit(): void {
    this.service.getPaciente().subscribe(data => {
      this.citas = data
      this.dataSource = new MatTableDataSource<Paciente>(this.citas);
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });
  }

}
