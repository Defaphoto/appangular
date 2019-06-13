import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger,state,style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations:[
    trigger('contenedorAnimable',[
      state('inicial',style({
        opacity:0,
      })),
      state('final',style({
        opacity:1,
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),
    ])
  ]
})
export class LugaresComponent {
  state = 'inicial';

  animacionInicia(e){
    console.log('Inicia '+e);
  }
  animacionTermina(e){
    console.log('Termina '+e);

  }
  lat: number = 51.678418;
  lng: number = 7.809007;
  lugares =[];
  constructor(private lugaresService:LugaresService){
    lugaresService.getLugares().valueChanges().subscribe(lugares => {
      /*var lugaresArray = lugares;
      this.lugares = Object.keys(lugaresArray).map((key) => lugaresArray[key]);
      */
     this.lugares = lugares;
     this.state='final';
    },error => {
      alert('La pagina se ha caido por problemas tecnicos, en poco tiempo seguira en funcionamiento, disculpe las molestias. Error '+error.statusText);
    });

  }


}