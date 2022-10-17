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

@NgModule({
  declarations: [
    AppComponent,
    BigCardCitiesInfoComponent,
    ParametersContainerComponent,
    ParameterCardComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
