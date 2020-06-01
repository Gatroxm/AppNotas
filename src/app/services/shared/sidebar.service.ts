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
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'Usuarios', url: '/usuarios'},
        {titulo: 'Tareas', url: '/tareas'},
        {titulo: 'Ajustes', url: '/acount-settings'},
      ]
    },
  ];

  constructor() { }
}
