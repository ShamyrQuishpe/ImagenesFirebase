import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyB4n_LqqTgsBbO0Qd3_7DnwQUVrM7jLPo4",
      authDomain: "movil24b.firebaseapp.com",
      projectId: "movil24b",
      storageBucket: "movil24b.firebasestorage.app",
      messagingSenderId: "401408439008",
      appId: "1:401408439008:web:8cfee98688bf1e78205685"
     })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),],
  bootstrap: [AppComponent],
})
export class AppModule {}
