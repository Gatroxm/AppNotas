import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public usuarios: any;
  constructor( public usuarioService: UsuariosService, public router: Router) {
   }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios(){
    this.usuarioService.traerUsuario().subscribe( users => {
      this.usuarios = users;
    });
  }
  borrarUser(id: string){
    this.usuarioService.borrarUsuario(id).subscribe(user => this.cargarUsuarios());
  }
  activarrUser(id: string){
    this.usuarioService.activarUsuario(id).subscribe(user => this.cargarUsuarios());
  }
}
