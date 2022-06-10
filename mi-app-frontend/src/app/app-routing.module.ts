import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { ListarContactosComponent } from './components/listar-contactos/listar-contactos.component';

const routes: Routes = [
  {path: '', component: ListarContactosComponent},
  {path: 'listar-contactos', component: ListarContactosComponent},
  {path: 'crear-contacto', component: CrearContactoComponent},
  {path: 'editar-contacto/:id', component: CrearContactoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
