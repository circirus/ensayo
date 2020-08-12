import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from "./components/heroe/heroe.component";
import {BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes=[
   { path:'home', component:HomeComponent},//Todo esto son rutas por las que navegamos
   { path:'about', component:AboutComponent},
   { path:'heroes', component:HeroesComponent},
   { path:'heroe/:id', component:HeroeComponent}, // La ruta heroe recibe un paramatro ID
   { path:'buscar/:termino', component:BuscadorComponent},
   {path:'**', pathMatch: 'full',redirectTo:'home' }//Esta es la ruta que se va dirigir cuando  alla un error
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});