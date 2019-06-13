import { Injectable } from "@angular/core";
import { AutorizacionService } from './autorizacion.service';
import { CanActivate } from '@angular/router';

@Injectable()

export class MyGuard implements CanActivate{
    estaLogeado = false;
    constructor(private autorizacionService:AutorizacionService){
        this.autorizacionService.logeado().subscribe((resultado)=> {
        if(resultado && resultado.uid){
            this.estaLogeado = true;
        }else{
            this.estaLogeado = false;
        }
        },(error)=> {
        this.estaLogeado=false;
        });
    }

    canActivate(){
        return this.estaLogeado;
    }
}