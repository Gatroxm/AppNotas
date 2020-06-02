import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
declare function initPlugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  valida: boolean = false;
  constructor( public router: Router, public usuarioService: UsuariosService) { }

  ngOnInit(): void {
    initPlugins();
  }
  ingresar( forma: NgForm) {

    if ( forma.invalid ){
      return;
    }
    let usuario = new Usuario(
      null,
      forma.value.email,
      null,
      forma.value.password
    );
    this.usuarioService.login(usuario).subscribe( correcto => {
      this.router.navigate(['/welcome'])
    });
  }

}
