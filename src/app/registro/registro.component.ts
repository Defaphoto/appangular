import {Component} from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})

export class RegistroComponent{
    registro:any = {}
    constructor(private autorizacionService:AutorizacionService){
        
    }
    registrarse(){
        this.autorizacionService.registro(this.registro.email,this.registro.password);
    }
}