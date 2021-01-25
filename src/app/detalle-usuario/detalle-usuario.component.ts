import { Component, OnInit } from '@angular/core';
import { EpsService } from '../eps.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  idUsuario:any;
  usuario:any;
  departamento:any;


  constructor(private route: ActivatedRoute,private service: EpsService) {
    this.service.getDepartamento().subscribe(data => {
      this.departamento = data;
    });

    this.idUsuario = this.route.snapshot.paramMap.get("id");

    this.service.geteditUsuario(this.idUsuario).subscribe(data => {
      this.usuario = data;
    });
  }


  ngOnInit(): void {


  }

  ciudad:any;

  getCiudad(id:number) {
    this.service.getCiudad(id).subscribe(data => {
      this.ciudad = data;
    });
  }
}
