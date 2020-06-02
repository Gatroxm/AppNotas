import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario.component';
import { CrearTareaComponent } from './tareas/crear-tarea.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { VerTareaComponent } from './tareas/ver-tarea.component';
import { EditarTareaComponent } from './tareas/editar-tarea.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          titulo: 'Bienbenida'
        }
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          titulo: 'Usuarios'
        }
      },
      {
        path: 'crear-usuario',
        component: CrearUsuarioComponent,
        data: {
          titulo: 'Crear Usuario'
        }
      },
      {
        path: 'ver-usuario/:id',
        component: VerUsuarioComponent,
        data: {
          titulo: 'Ver Usuario'
        }
      },
      {
        path: 'editar-usuario/:id',
        component: EditarUsuarioComponent,
        data: {
          titulo: 'Editar Usuario'
        }
      },
      {
        path: 'tareas',
        component: TareasComponent,
        data: {
          titulo: 'Tareas'
        }
      },
      {
        path: 'crear-tarea',
        component: CrearTareaComponent,
        data: {
          titulo: 'Crear Tarea'
        }
      },
      {
        path: 'ver-tarea/:id',
        component: VerTareaComponent,
        data: {
          titulo: 'Crear Tarea'
        }
      },
      {
        path: 'editar-tarea/:id',
        component: EditarTareaComponent,
        data: {
          titulo: 'Crear Tarea'
        }
      },
      {
        path: 'acount-settings',
        component: AccountSettingsComponent,
        data: {
          titulo: 'Ajustes'
        }
      },
      {
        path: 'perfil',
        component: ProfileComponent,
        data: {
          titulo: 'Perfil'
        }
      },
      {
         path: '', redirectTo: '/welcome', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
