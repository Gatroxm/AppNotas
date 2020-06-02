import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor( public usuarioService: UsuariosService,public router: Router){

  }
  canActivate(): boolean {
    if (this.usuarioService.estaLogeado()) {
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
