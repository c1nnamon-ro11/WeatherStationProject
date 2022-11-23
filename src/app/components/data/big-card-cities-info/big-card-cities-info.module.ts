import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BigCardCitiesInfoComponent} from "./big-card-cities-info.component";

@NgModule({
  declarations: [
    BigCardCitiesInfoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BigCardCitiesInfoComponent
  ]
})
export class BigCardCitiesInfoModule{ }
