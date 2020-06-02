import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaredModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario.component';
import { CrearTareaComponent } from './tareas/crear-tarea.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario.component';
import { ProfileComponent } from './profile/profile.component';
import { TareasComponent } from './tareas/tareas.component';
import { VerTareaComponent } from './tareas/ver-tarea.component';
import { EditarTareaComponent } from './tareas/editar-tarea.component';
const componets = [
  PagesComponent,
  UsuariosComponent,
  WelcomeComponent,
  CrearUsuarioComponent,
  CrearTareaComponent,
  EditarUsuarioComponent,
  VerUsuarioComponent,
  ProfileComponent,
  TareasComponent,
  VerTareaComponent,
  EditarTareaComponent
]
@NgModule({
  declarations: [
    ...componets
  ],
  imports: [
    CommonModule,
    SaredModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...componets
  ]
})
export class PageModule {}