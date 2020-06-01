import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          titulo: 'Usuarios'
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
        path: 'acount-settings',
        component: AccountSettingsComponent,
        data: {
          titulo: 'Ajustes'
        }
      },
      {
         path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
