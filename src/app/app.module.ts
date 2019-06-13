import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

import {Routes, RouterModule} from "@angular/router";
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CrearComponent } from './crear/crear.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service';
import { MyGuard } from './services/my-guard.service';

const appRoutes: Routes = [
  {path:'',component: LugaresComponent},
  {path:'lugares',component: LugaresComponent},
  {path:'detalle/:id',component: DetalleComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'crear/:id',component: CrearComponent, canActivate:[MyGuard]},
  {path:'login',component: LoginComponent},
  {path:'registro',component: RegistroComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyDc70_aIuOh2J-28UXgiK-6zmjXEefPVOw",
  authDomain: "platzisquare-1558833524675.firebaseapp.com",
  databaseURL: "https://platzisquare-1558833524675.firebaseio.com",
  projectId: "platzisquare-1558833524675",
  storageBucket: "platzisquare-1558833524675.appspot.com",
  messagingSenderId: "323051148811",
  appId: "1:323051148811:web:437ba0cde2057b87"
};

@NgModule({
  declarations: [
    ResaltarDirective,
    AppComponent,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf_ErpGo65jZvXR2YDJhnrVkd40SrVjO8'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [LugaresService,AutorizacionService,MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
