import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutoresComponent } from './components/autores/autores.component';
import { NuevoAutorComponent } from "./components/nuevo-autor/nuevo-autor.component";
import { EditorialesComponent } from './components/editoriales/editoriales.component';
import { NuevaEditorialesComponent } from './components/nueva-editoriales/nueva-editoriales.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'autores',component:AutoresComponent},
  {path:'libros',component:MantenimientoComponent},
  {path:'prestamos',component:MantenimientoComponent},
  {path:'nuevo-autor/:id',component:NuevoAutorComponent},
  {path:'editoriales',component:EditorialesComponent},
  {path:'nueva-editorial/:id',component:NuevaEditorialesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
