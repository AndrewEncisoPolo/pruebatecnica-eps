import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitasComponent } from './citas/citas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';

@NgModule({
  declarations: [
    AppComponent, 
    CitasComponent,
    UsuariosComponent,
    PacientesComponent,
    LoginComponent,
    NavbarComponent,
    DetalleUsuarioComponent,
    DetallePacienteComponent,
    DetalleCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
