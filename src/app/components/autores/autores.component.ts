import { Component, OnInit } from '@angular/core';
import { Autores } from 'src/app/interfaces/autores';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autores:Autores[]=[];
  titulos:string[]=["ID","Nombre","Apellido","Biografía","Estado","Acciones"];
  constructor(private autoresServices: AutoresService) { }

  ngOnInit() {
    this.getAutoresData();
  }
  
  getAutoresData()
  {
    this.autoresServices.getAutores().subscribe((data:any)=>{
      this.autores=data;
       console.log(data);
    });
  }


}
