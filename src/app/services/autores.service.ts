import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Autores } from '../interfaces/autores';
@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  urlApi:string ="https://localhost:44363/api/";
  constructor(private http:HttpClient) { }

  getAutores(){
    return this.http.get<Autores>(this.urlApi + "autores");
  }

  postAutores(autores)
  {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //                'Content-Type': 'application/json',
    //                'Access-Control-Allow-Origin': '*',
    //                'Access-Control-Allow-Credentials': 'true'
    //   })
    // };
    var url = this.urlApi + "Autores/guardarAutores";
    return this.http.post(url,autores/*httpOptions*/);
  }
  public getautoresid(id:string)
  {
   return this.http.get(this.urlApi+"Autores/"+id);
  }

}
