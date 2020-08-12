import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HeroesService } from '../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


heroe:any={}; //Crea variable de Heroes
  constructor( private activatedRoute:ActivatedRoute,

    private _heroeService:HeroesService)
    {
    this.activatedRoute.params.subscribe(params=>{

      // console.log(params['id']);
      this.heroe=this._heroeService.getHeroe(params['id']);
    });
   } //Creamos un parametro tipo ActivatedRoute para usar tema de las ruras

  ngOnInit() {
  }

}
