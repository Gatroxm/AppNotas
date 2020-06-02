import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Modulos */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Rutas*/
import { PageModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

/* Componentes */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    ServiceModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
