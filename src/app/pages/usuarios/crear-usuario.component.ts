import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styles: [
  ]
})
export class CrearUsuarioComponent implements OnInit {

  forma: FormGroup;

  constructor(public usuarioService: UsuariosService, public router: Router) { }

  public sonIguales( camp1: string, camp2: string) {
    return( group: FormGroup ) => {
      const pass1 = group.controls[camp1].value;
      const pass2 = group.controls[camp2].value;

      if (pass1 === pass2){
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      role: new FormControl( 'USER_ROLE', Validators.required ),
    }, { validators: this.sonIguales('password', 'password2' )});
  }

  creaUsuario() {
    if (!this.forma.valid){
      return;
    }
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.role,
      this.forma.value.password
    );
    this.usuarioService.crearUsuario(usuario).subscribe( response =>  this.router.navigate(['/usuarios']) );
  }
}
