import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { HistoryDashboardComponent} from "./history-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: HistoryDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryDashboardRoutingModule {}
