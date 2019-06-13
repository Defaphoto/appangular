import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';

@Injectable()

export class AutorizacionService{
    constructor(private angularAuth:AngularFireAuth, private router:Router){

    }
    public login = (email,password) => {
        this.angularAuth.auth.signInWithEmailAndPassword(email,password).then((response)=> {
            alert('Usuario logeado');
            console.log('Uduario logeado');
            this.router.navigate(['lugares']);
        }).catch((error)=> {
            alert('Ha ocurrido un error');
            console.log(error);
        })
    }

    public registro = (email,password) => {
        this.angularAuth.auth.createUserWithEmailAndPassword(email,password).then((response)=>{
            alert('Usuario registrado');
            console.log('Usuario registrado');
            this.router.navigate(['lugares']);
        }).catch((error)=> {
            alert('Ha ocurrido un error');
            console.log(error);
        });
    }

    public loginFacebook = () => {
        return this.angularAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((resultado)=> {
            alert('Usuario logeado por facebook')
            console.log('Usuario logeado por facen¡book');
            this.router.navigate(['lugares']);
        }).catch((error)=> {
            console.log(error);
        })
    }

    public logeado(){
        return this.angularAuth.authState;
    }

    public logout(){
        this.angularAuth.auth.signOut();
        alert('Sesion Cerrada')
        this.router.navigate(['login']);
    }

    public userNameEmail(){
        return this.angularAuth.auth.currentUser.email;
    }
}