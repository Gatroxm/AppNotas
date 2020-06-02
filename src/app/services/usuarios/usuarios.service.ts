import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_servicios } from '../../config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  token: string;
  usuario: Usuario;
  constructor(public http: HttpClient, private httpClient: HttpClient, public router: Router) {
    this.cargarStrorage();
  }

  estaLogeado(): boolean {
    if(localStorage.getItem('token').length > 60){
      return true;
    } else {
      return false;
    }
  }
  cargarStrorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else {
      this.token = '';
      this.usuario = null;
    }
  }
  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
  login(usuario: Usuario){
    const url = URL_servicios + '/login';
    return this.httpClient.post(url, usuario).pipe(map((resp:any) => {
      localStorage.setItem('id', resp.id);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      return true;
    }));
  }

  crearUsuario( usuario: Usuario ) {
    const url = URL_servicios + '/usuario';
    return this.http.post(url, usuario).pipe(map( (resp: any) =>{
      return resp.usuario;
    }));
  }
  actualizarUsuario( usuario: Usuario, id: string ) {
    const url = URL_servicios + '/usuario/' + id;
    console.log(usuario)
    return this.http.put(url, usuario).pipe(map( (resp: any) => {
      return resp.usuario;
    }));
  }

  traerUsuario() {
    const url = URL_servicios + '/usuario';
    return this.http.get(url ).pipe(map( (resp: any) => {
      return resp.usuarios;
    }));
  }

  borrarUsuario(id: string){
    const url = URL_servicios + '/usuario/' + id;
    return this.http.delete(url).pipe(map( (resp: any) => {
      return resp.usuario;
    }));
  }
  activarUsuario(id: string){
    const url = URL_servicios + '/activausuario/' + id;
    return this.http.get(url).pipe(map( (resp: any) => {
      return resp.usuario;
    }));
  }

  buscarUsuario(id: string) {
    const url = URL_servicios + '/usuario/' + id;
    return this.http.get(url).pipe(map( (resp: any) => {
      return resp.usuario;
    }));
  }
}
