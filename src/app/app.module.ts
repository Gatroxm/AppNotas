import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Modulos */

import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';

/*Rutas*/
import { PageModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

/* Componentes */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
