import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { EditorialesService } from 'src/app/services/editoriales.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-nueva-editoriales',
  templateUrl: './nueva-editoriales.component.html',
  styleUrls: ['./nueva-editoriales.component.css']
})
export class NuevaEditorialesComponent implements OnInit {
  editorial:FormGroup;
  parametro:string;

  constructor(
    private _services:EditorialesService,
    private _router:ActivatedRoute,
    private rt:Router) { 
  this.editorial = new FormGroup({
    'id': new FormControl("0"),
    'Nombre': new FormControl("", [Validators.required,Validators.minLength(3)]),
    'Estado' : new FormControl("", [Validators.required])

  });
  
  this._router.params.subscribe(params=>{
    this.parametro=params["id"];
  })



  }
  ngOnInit() {
    if(this.parametro!='nuevo')
    {
      this._services.getEditorialesId(this.parametro).subscribe((params:any)=>{
        this.editorial.controls["id"].setValue(params.id);
        this.editorial.controls["Nombre"].setValue(params.nombre);
        this.editorial.controls["Estado"].setValue(params.estado);
        console.log(params);
      });
    }
  }

  guardareditorial(){
    if(this.editorial.valid ==true)
    {
  this._services.posteditoriales(this.editorial.value).subscribe(data=>{
    this.rt.navigate(["/editoriales"]);
  });
}
  }

}
