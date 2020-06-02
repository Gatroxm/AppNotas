import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareasService, UsuariosService } from '../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styles: [
  ]
})
export class CrearTareaComponent implements OnInit {
  forma: FormGroup;
  public usuarios: any;
  constructor(public usuariosService: UsuariosService, public tareaService: TareasService, public router: Router) {

    this.usuariosService.traerUsuario().subscribe((usuario) => this.usuarios = usuario);

   }

  ngOnInit(): void {
    let usuarioLogin = JSON.parse(localStorage.getItem('usuario'));
    let userAutor= usuarioLogin['nombre'];
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required ),
      prioridad: new FormControl(null, Validators.required ),
      fechaVencimiento: new FormControl(null, Validators.required ),
      asignadoA: new FormControl('Seleccione Un Usuario', Validators.required ),
      autor: new FormControl(userAutor, Validators.required ),
    });
  }
  creaTarea(){
    if (!this.forma.valid){
      return;
    }
    this.tareaService.crearTarea(this.forma.value).subscribe(tarearesponse => this.router.navigate(['/tareas']));
  }
}
