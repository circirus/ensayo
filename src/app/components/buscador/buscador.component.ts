import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../servicios/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any [] = [];
  termino: string;
  
  constructor(private activateRouter: ActivatedRoute, private _heroesService:HeroesService, private router: Router) { }

  ngOnInit() {

    this.activateRouter.params.subscribe(params => {
      this.termino = params['termino'];
     
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    })
  }
  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] ); //idx es una variable de que es de tipo numero
  
    } 

}
