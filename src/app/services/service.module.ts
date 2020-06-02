import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuariosService,
  TareasService,
  LoginGuardGuard
} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    TareasService,
    UsuariosService,
    LoginGuardGuard,
  ]
})
export class ServiceModule { }
