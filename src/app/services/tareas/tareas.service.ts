import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_servicios } from '../../config/config';
import { map } from 'rxjs/operators';
import { Tarea } from 'src/app/models/tarea.model';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(public http: HttpClient) {}

  crearTarea(t: any){
    const url = URL_servicios + '/tarea';
    return this.http.post(url, t).pipe(map( (resp: any) =>{
      return resp.Tarea;
    }));
  }
  traerTareas() {
    const url = URL_servicios + '/tareas';
    return this.http.get(url).pipe(map( (resp: any) => {
      return resp.tareas;
    }));
  }
  borrarTarea(id: string){
    const url = URL_servicios + '/tarea/' + id;
    return this.http.delete(url).pipe(map( (resp: any) => {
      return resp.tarea;
    }));
  }
  activarTarea(id: string){
    const url = URL_servicios + '/activartarea/' + id;
    return this.http.get(url).pipe(map( (resp: any) => {
      return resp.tarea;
    }));
  }
  buscarTarea(id: string){
    const url = URL_servicios + '/tarea/' + id;
    return this.http.get(url).pipe(map( (resp: any) => {
      return resp.tarea;
    }));
  }
  actualizarTarea( tarea: Tarea, id: string ) {
    const url = URL_servicios + '/tarea/' + id;
    return this.http.put(url, tarea).pipe(map( (resp: any) => {
      return resp.usuario;
    }));
  }

}
