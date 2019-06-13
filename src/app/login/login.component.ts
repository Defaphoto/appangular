import {Component}  from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent{
    loginParams:any = {};
    constructor(private autorizacionService:AutorizacionService){
        
    }

    login(){
        debugger;
        this.autorizacionService.login(this.loginParams.email,this.loginParams.password);
    }

    loginFacebook(){
        this.autorizacionService.loginFacebook();
    }

    

    
}