import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataDashboardComponent } from './data-dashboard.component';
import {BigCardCitiesInfoComponent} from "../big-card-cities-info/big-card-cities-info.component";
import {ParametersContainerComponent} from "../parameters-container/parameters-container.component";
import {ParametersContainerModule} from "../parameters-container/parameter-container.module";
import {DataDashboardRoutingModule} from "./data-dashboard-routing.module";

@NgModule({
  declarations: [
    DataDashboardComponent,
    BigCardCitiesInfoComponent,
    ParametersContainerComponent
  ],
  imports: [
    CommonModule,
    ParametersContainerModule,
    DataDashboardRoutingModule
  ]
})
export class DataDashboardModule { }
