import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';

import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Firebase setup instructions

// 1. delete this line, then...
// import { firebaseConfig } from '../../env'; 

// 2. Add your own firebase config to environment.ts
// 3. Then use it to initialize angularfire2 below, like so AngularFireModule.initializeApp(environment.firebaseConfig),


import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard'; 

import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
    // AngularFireStorageModule
  ],
  declarations: [],
  providers: [
    AuthService, 
    AuthGuard,     
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class CoreModule { }
