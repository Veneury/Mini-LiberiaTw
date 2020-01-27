import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AutoresComponent } from './components/autores/autores.component';
import { NuevoAutorComponent } from "./components/nuevo-autor/nuevo-autor.component";
import { EditorialesComponent } from './components/editoriales/editoriales.component';
import { NuevaEditorialesComponent } from './components/nueva-editoriales/nueva-editoriales.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AutoresComponent,
    NuevoAutorComponent,
    EditorialesComponent,
    NuevaEditorialesComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
