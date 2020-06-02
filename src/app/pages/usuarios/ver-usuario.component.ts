import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styles: [
  ]
})
export class VerUsuarioComponent implements OnInit {

  forma: FormGroup;
  public user;
  constructor( public usuarioService: UsuariosService, public _route: ActivatedRoute, public router: Router ) {}
  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required ),
      role: new FormControl( 'USER_ROLE', Validators.required ),
    });
    this.usuarioService.buscarUsuario(this._route.snapshot.paramMap.get('id')).subscribe((usuario: any) => {
      this.user = usuario;
      this.forma.setValue({
        nombre: usuario['nombre'],
        role: usuario['role'],
      });
   });
  }
  editarUsuario() {
    let id = this._route.snapshot.paramMap.get('id');
    if (!this.forma.valid){
      return;
    }
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.role
    );
    this.usuarioService.actualizarUsuario(usuario, id).subscribe( response =>  this.router.navigate(['/usuarios']) );
  }
}
