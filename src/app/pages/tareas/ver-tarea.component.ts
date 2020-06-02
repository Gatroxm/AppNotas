import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/service.index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styles: [
  ]
})
export class VerTareaComponent implements OnInit {
  
  public tarea;
  constructor(public tareaService: TareasService, public _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tareaService.buscarTarea(this._route.snapshot.paramMap.get('id')).subscribe(resp => {
      this.tarea = resp;
    });
  }
}
