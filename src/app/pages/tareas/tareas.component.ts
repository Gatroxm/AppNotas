import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/service.index';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: [
  ]
})
export class TareasComponent implements OnInit {

  public data: any[] = [];
  public usuarios: any;
  constructor(public tareaService: TareasService) { }

  ngOnInit(): void {
    this.cargarTareas();
  }
  cargarTareas(){
    this.tareaService.traerTareas().subscribe(tareas => this.data = tareas);
  }

  eliminarTarea(id: string){
    this.tareaService.borrarTarea(id).subscribe( tarea => this.cargarTareas());
  }
  activarTarea(id: string){
    this.tareaService.activarTarea(id).subscribe( tarea => this.cargarTareas());
  }
}
