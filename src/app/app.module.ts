import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { BigCardCitiesInfoComponent } from './components/big-card-cities-info/big-card-cities-info.component';
import { HttpClientModule} from "@angular/common/http";
import { ParametersContainerComponent } from './components/parameters-container/parameters-container.component';
import { ParameterCardComponent } from './components/parameter-card/parameter-card.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AuthService} from "./shared/services/auth.service";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AppRoutingModule} from "./app-routing.module";
import {RealTimeInfoService} from "./shared/services/realtimeInfo.service";

@NgModule({
  declarations: [
    AppComponent,
    BigCardCitiesInfoComponent,
    ParametersContainerComponent,
    ParameterCardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLinkWithHref,
  ],
  providers: [
    AuthService,
    RealTimeInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
