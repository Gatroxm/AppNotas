import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  } from '../../services/usuarios/usuarios.service';
import { TareasService, UsuariosService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styles: [
  ]
})
export class EditarTareaComponent implements OnInit {

  forma: FormGroup;
  public usuarios: any;
  public tarea: any;
  constructor(public usuariosService: UsuariosService, public tareaService: TareasService, public router: Router, public _route: ActivatedRoute) {

    this.usuariosService.traerUsuario().subscribe((usuario) => this.usuarios = usuario);

   }

  ngOnInit(): void {
    let usuarioLogin = JSON.parse(localStorage.getItem('usuario'));
    let userAutor= usuarioLogin['nombre'];
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required ),
      prioridad: new FormControl(null, Validators.required ),
      fechaVencimiento: new FormControl(null, Validators.required ),
      asignadoA: new FormControl('Seleccione Un Usuario', Validators.required )
    });
    this.tarea = this.tareaService.buscarTarea(this._route.snapshot.paramMap.get('id')).subscribe(resp => {
      this.forma.setValue({
        nombre: resp.nombre,
        prioridad: resp.prioridad,
        fechaVencimiento: resp.fechaVencimiento,
        asignadoA: resp.asignadoA
      });
   });
  }
  editarTarea(){
    let id = this._route.snapshot.paramMap.get('id');
    if (!this.forma.valid){
      return;
    }
    this.tareaService.actualizarTarea(this.forma.value, id).subscribe(tarearesponse => this.router.navigate(['/tareas']));
  }

}
