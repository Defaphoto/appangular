import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from "@angular/fire/firestore";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class LugaresService{
  API_ENDPOINT = 'https://platzisquare-1558833524675.firebaseio.com';


      constructor(private afDB:AngularFirestore, private http: HttpClient){

      }

      public getLugares(){
          return this.afDB.collection('lugares');
          /*debugger;
          return this.http.get(this.API_ENDPOINT+'/.json')
					.pipe(map((resultado)=>{
              return resultado['lugares'];
              debugger;
						})
          )
          debugger;
          */
      }
      public guardarLugar(lugar){
        this.afDB.collection("lugares").doc(""+lugar.id).set(lugar);
        /* const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.API_ENDPOINT + '/lugares.json'
      , lugar
      , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe();
      */
      }

      public obtenerGeoData(direccion){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json',{
          params : {
          address: direccion,
          key: 'AIzaSyBmkJLCzWo-wreGAbQR9nN4sJxZp91tQis'
          }
          });

      }

      public getLugar(id){
        return this.afDB.collection("lugares").doc(""+id);
      }


      public editarLugar(lugar){
        console.log(lugar);
        this.afDB.collection("lugares").doc(""+lugar.id).set(lugar);
        
      }
}