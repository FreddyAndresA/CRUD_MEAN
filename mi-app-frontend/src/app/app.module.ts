import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { ListarContactosComponent } from './components/listar-contactos/listar-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearContactoComponent,
    ListarContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
