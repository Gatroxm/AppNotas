import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuariosService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  
  usuarioLogin: string;
  nombre: string;
  constructor( public _sidebar: SidebarService, public usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioLogin = JSON.parse(localStorage.getItem('usuario'));
    this.nombre = this.usuarioLogin['nombre'];
  }

}
