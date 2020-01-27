import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoresService } from 'src/app/services/autores.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Autores } from 'src/app/interfaces/autores';
//import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/common/http';
@Component({
  selector: 'app-nuevo-autor',
  templateUrl: './nuevo-autor.component.html',
  styleUrls: ['./nuevo-autor.component.css']
})
export class NuevoAutorComponent implements OnInit {
autor:FormGroup;
parametro:string;
  constructor(private _Services:AutoresService,
    private _router:Router, private _activatedRouter: ActivatedRoute) {
    this.autor = new FormGroup({
        'id': new FormControl("0",[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
        'Nombre': new FormControl("",[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
        'Apellido':new FormControl("",[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
        'Biografica':new FormControl("",[Validators.required]),
        'Estado':new FormControl("")
    });
   
    this._activatedRouter.params.subscribe(params=>{
      this.parametro = params["id"];
      
     
    })
   }

  ngOnInit() {
    if(this.parametro!='nuevo')
    {
      this._Services.getautoresid(this.parametro).subscribe((params:any)=>{
        
        this.autor.controls["id"].setValue(params.id);
        this.autor.controls["Nombre"].setValue(params.nombre);
        this.autor.controls["Apellido"].setValue(params.apellido);
        this.autor.controls["Biografica"].setValue(params.biografica);
        this.autor.controls["Estado"].setValue(params.estado);
        console.log(params);
      });
    }
  }

  guardarAutores()
  {
    
    if(this.autor.valid ==true)
    {
        
          this._Services.postAutores(this.autor.value).subscribe(data=>{
            this._router.navigate(["/autores"]);
           
           });
        
    }
  }

}
