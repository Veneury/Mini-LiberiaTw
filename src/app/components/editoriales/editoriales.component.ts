import { Component, OnInit } from '@angular/core';
import { Editoriales } from 'src/app/interfaces/autores';
import { EditorialesService } from 'src/app/services/editoriales.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {
  editoriales:Editoriales[]=[];
  titulos:string[]=["ID","Nombre","Estado","Acciones"];
  constructor(private _services: EditorialesService) {

   }

  ngOnInit() {
    this._services.getEditoriales().subscribe((data:any)=>{
        this.editoriales=data;
    })
  }

}
