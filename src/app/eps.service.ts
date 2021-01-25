import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpsService {

  constructor(private http: HttpClient) { }

  // Url 
    url = "https://localhost:44338/";

  // Consultas Http 

    getDepartamento() {
      return this.http.get(this.url+'Departamento');
    }

    getCiudad(id:number) {
      return this.http.get(this.url+'Ciudad?id='+id);
    }

    getTipoDocumento() {
      return this.http.get(this.url+'TipoDocumento');
    }

    getCitas() {
      return this.http.get(this.url+'Cita');
    }

    getUsuarios(){
      return this.http.get(this.url+'Usuarios');
    }

    getEspecializacion(){
      return this.http.get(this.url+'Especializacion');
    }

    getPaciente(){
      return this.http.get(this.url+'Paciente');
    }

    getPacienteDocumento(documento:number){
      return this.http.get(this.url+'PacienteDocumento?documento='+documento);
    }

    getPacienteCita(id:number){
      return this.http.get(this.url+'PacienteCita?id='+id);
    }

    getDoctor(sede:number,especializacion:number){
      return this.http.get(this.url+'Doctor?sede='+sede+'&especializacion='+especializacion);
    }

    getAgendaDisponible(idDoctor:number, fecha: Date){
      return this.http.get(this.url+'HoraCita?iddoctor='+idDoctor+'&fecha='+fecha);
    }

    geteditUsuario(id:number){
      return this.http.get(this.url+'EditUsuario?id='+id);
    }

    geteditPaciente(id:number){
      return this.http.get(this.url+'EditPaciente?id='+id);
    }

    registrocita(idUsuario:number,idPaciente:number,idSede:number,idHoraCita:number,fecha:Date){
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
      const json = {"IDUsuario": idUsuario , "IDPaciente": idPaciente, "IDSede": idSede, "IDHoraCita": idHoraCita, "Fecha": fecha};
      const body = JSON.stringify(json);
      return this.http.post<any>(this.url+'Cita', body, { headers });
    }
}
