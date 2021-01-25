import { Component, OnInit } from '@angular/core';
import { EpsService } from '../eps.service';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder } from '@angular/forms';

export interface Citas {
  idCita: number;
  paciente: string;
  doctor: string;
  sede: string;
  idPaciente: number;
  idDoctor: number;
  idSede: number;
  fecha: Date;
}

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  displayedColumns = ['idCita', 'paciente', 'doctor', 'sede', 'idPaciente', 'idDoctor', 'idSede', 'fecha'];
  dataSource:any;
  citas:any;

  constructor(private http: HttpClient,private service: EpsService,private fb: FormBuilder) {
    this.mostrarCita = false;
    this.alertaDocumento = false;
  }

  especializacion:any;

  ngOnInit() {
    this.service.getCitas().subscribe(data => {
      this.citas = data
      this.dataSource = new MatTableDataSource<Citas>(this.citas);
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });

    this.service.getEspecializacion().subscribe(data => {
      this.especializacion = data;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  documentoExiste:any;
  alertaDocumento:any;
  mostrarCita:any;
  pacienteExiste:any;
  pacienteData:any;
  idSede:any;
  idPaciente:any;
  
  searchPaciente = this.fb.group({
    documento: ['']
  });

  // Obtener Paciente por Nro de Documento
    searchPacienteDocumento(): void {
      this.service.getPacienteDocumento(this.searchPaciente.value['documento']).subscribe(
        data => {
          this.documentoExiste = data;

          if(this.documentoExiste[0]['salida']==true){
            this.mostrarCita = true;
            this.idPaciente = this.documentoExiste[0]['idPaciente'];
            this.service.getPacienteCita(this.documentoExiste[0]['idPaciente']).subscribe(
              data => {
                this.pacienteExiste = data;
                this.pacienteData = this.pacienteExiste[0];
                this.idSede = this.pacienteData['idSede'];
            });
          }else{
            this.mostrarCita = false;
            this.alertaDocumento = true;
          }
      });
    }

  // Obtener Doctor por ID de Sede y ID Especialización
    doctor:any;
    onChangeGetDoctor(id: number){
      this.service.getDoctor(this.idSede,id).subscribe(data => {
        this.doctor = data;
      });
    }

    idDoctor:any;
    getIDDoctor(id:number){
      this.idDoctor = id;
    }

  // Obtener Agenda disponible por ID Doctor
    agendaDisponible:any;
    fechacita:any;

    onChangeGetAgenda(fecha: Date){
      this.fechacita = fecha;
      this.service.getAgendaDisponible(this.idDoctor,fecha).subscribe(data => {
        this.agendaDisponible = data;
      });
    }
  
  // Formulario Crear Cita
    formregistrarCita = this.fb.group({
      HoraCita: ['']
    });

    registrarCita(): void {
      this.service.registrocita(this.idDoctor,this.idPaciente,this.idSede,this.formregistrarCita.value['HoraCita'],this.fechacita)
      .subscribe(data => {
        console.log(data);
      })
    }
}