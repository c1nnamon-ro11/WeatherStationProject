import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataDashboardComponent } from './data-dashboard.component';
import {ParametersContainerComponent} from "../parameters-container/parameters-container.component";
import {ParametersContainerModule} from "../parameters-container/parameter-container.module";
import {DataDashboardRoutingModule} from "./data-dashboard-routing.module";
import {BigCardCitiesInfoModule} from "../big-card-cities-info/big-card-cities-info.module";
import {DataBaseDataModule} from "../data-base-data/data-base-data.module";
import {ButtonModule} from "../../elements/button/button.module";

@NgModule({
  declarations: [
    DataDashboardComponent,
    ParametersContainerComponent
  ],
    imports: [
        CommonModule,
        ParametersContainerModule,
        DataDashboardRoutingModule,
        BigCardCitiesInfoModule,
        DataBaseDataModule,
        ButtonModule
    ]
})
export class DataDashboardModule { }
