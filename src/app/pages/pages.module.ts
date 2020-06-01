import { NgModule } from '@angular/core';
import { SaredModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
@NgModule({
  declarations: [
    PagesComponent,
    UsuariosComponent
  ],
  imports: [
    SaredModule,
    PagesRoutingModule,
    FormsModule,
  ],
  exports: [
    PagesComponent,
    UsuariosComponent
  ]
})
export class PageModule {}