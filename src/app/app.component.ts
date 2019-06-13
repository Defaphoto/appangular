import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estaLogeado = false;
  email = {};
  constructor(private autorizacionService:AutorizacionService){
    this.autorizacionService.logeado().subscribe((resultado)=> {
      if(resultado && resultado.uid){
        this.estaLogeado = true;
        this.email = this.autorizacionService.userNameEmail();
      }else{
        this.estaLogeado = false;
      }
    },(error)=> {
      this.estaLogeado=false;
    });

  }
  logout(){
    this.autorizacionService.logout();
  }


  
}
