import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styles: [
  ]
})
export class EditarUsuarioComponent implements OnInit {
  forma: FormGroup;
  public user: any;
  constructor( public usuarioService: UsuariosService, public _route: ActivatedRoute, public router: Router ) {}

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required ),
      // email: new FormControl( null, [Validators.required, Validators.email] ),
      role: new FormControl( 'USER_ROLE', Validators.required ),
    });
    this.user = this.usuarioService.buscarUsuario(this._route.snapshot.paramMap.get('id')).subscribe(usuario => {
      this.forma.setValue({
        nombre: usuario['nombre'],
        role: usuario['role']
      });
   });
  }
  editarUsuario() {
    let id = this._route.snapshot.paramMap.get('id');
    if (!this.forma.valid){
      return;
    }
    this.usuarioService.actualizarUsuario(this.forma.value, id).subscribe( response =>  this.router.navigate(['/usuarios']) );
  }
}
