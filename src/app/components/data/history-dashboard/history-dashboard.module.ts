import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryDashboardComponent} from "./history-dashboard.component";
import {HistoryDashboardRoutingModule} from "./history-dashboard-routing.module";
import {DataBaseDataModule} from "../data-base-data/data-base-data.module";

@NgModule({
  declarations: [
    HistoryDashboardComponent
  ],
  imports: [
    CommonModule,
    HistoryDashboardRoutingModule,
    DataBaseDataModule
  ]
})
export class HistoryDashboardModule {}
