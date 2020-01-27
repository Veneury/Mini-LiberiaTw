import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Editoriales } from '../interfaces/autores';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {
  urlApi:string ="https://localhost:44363/api/";
  constructor(private http:HttpClient) { }

  getEditoriales()
  {
    return this.http.get<Editoriales>(this.urlApi + "Editoriales");
  }
  getEditorialesId(id:string)
  {
    return this.http.get<Editoriales>(this.urlApi + "Editoriales/" + id);
  }
  posteditoriales(editorial:string)
  {

    var url = this.urlApi + "Editoriales/guardarEditoriales";
    return this.http.post(url,editorial);
  }
}
