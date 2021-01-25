import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { LoginComponent } from './login/login.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'detalle-paciente/:id', component: DetallePacienteComponent},
  {path: 'detalle-usuario/:id', component: DetalleUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
