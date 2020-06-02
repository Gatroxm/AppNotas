import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any =  [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Inicio', url: '/welcome'},
        {titulo: 'Ajustes', url: '/acount-settings'}
      ]
    },
    {
      titulo: 'Usuarios',
      icono: 'mdi mdi-account-box',
      submenu:[
        {titulo: 'Crear', url: '/crear-usuario'},
        {titulo: 'Listar', url: '/usuarios'},
      ]
    },
    {
      titulo: 'Tareas',
      icono: 'mdi mdi-format-line-weight',
      submenu:[
        {titulo: 'Crear', url: '/crear-tarea'},
        {titulo: 'Listar', url: '/tareas'},
      ]
    },
  ];

  constructor() { }
}
