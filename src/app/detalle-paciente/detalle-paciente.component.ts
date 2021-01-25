import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EpsService } from '../eps.service';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: EpsService) { }

  idpaciente:any;
  paciente:any;
  departamento:any;

  ngOnInit(): void {
    this.service.getDepartamento().subscribe(data => {
      this.departamento = data;
    });

    this.idpaciente = this.route.snapshot.paramMap.get("id");

    this.service.geteditPaciente(this.idpaciente).subscribe(data => {
      this.paciente = data;
      this.departamento = this.paciente[0].idDepartamento;
    });
  }

  ciudad:any;

  getCiudad(id:number) {
    this.service.getCiudad(id).subscribe(data => {
      this.ciudad = data;
    });
  }
}
