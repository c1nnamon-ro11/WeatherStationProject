import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {BigCardCitiesInfoModule} from "../big-card-cities-info/big-card-cities-info.module";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BigCardCitiesInfoModule
  ]
})
export class DashboardModule { }
