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
    provideFirebaseApp(() => initializeApp({apiKey: "AIzaSyDQBcguYwkJZKL5aSIeX93NHkf8UbOzLN8",
      authDomain: "proyectom-21417.firebaseapp.com",
      projectId: "proyectom-21417",
      storageBucket: "proyectom-21417.firebasestorage.app",
      messagingSenderId: "123108399587",
      appId: "1:123108399587:web:90d89db16c3633901428d6",
      measurementId: "G-M75K1KBLTV"
     })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"proyectom-21417","appId":"1:123108399587:web:115a477852cd4d7d1428d6","storageBucket":"proyectom-21417.firebasestorage.app","apiKey":"AIzaSyDQBcguYwkJZKL5aSIeX93NHkf8UbOzLN8","authDomain":"proyectom-21417.firebaseapp.com","messagingSenderId":"123108399587","measurementId":"G-2DT69V8DHK"}))],
  bootstrap: [AppComponent],
})
export class AppModule {}
