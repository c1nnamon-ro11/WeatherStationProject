import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "../../shared/services/auth.service";
import {IParametersData} from "../../models/ParametersData";
import {filter, switchMap, tap} from "rxjs";
import {parametersData as parametersReference} from '../../data/DataBaseParametersReference';
import {RealTimeInfoService} from "../../shared/services/realtimeInfo.service";

@Component({
  selector: 'app-parameters-container',
  templateUrl: './parameters-container.component.html',
  styleUrls: ['./parameters-container.component.css']
})
export class ParametersContainerComponent implements OnInit {
  constructor(private db: AngularFireDatabase,
              public authService: AuthService,
              public realTimeInfoService: RealTimeInfoService) {

  }
  user: string
  parameters: IParametersData[] = parametersReference;
  data: any
  ngOnInit(): void {
    this.getDataFromDrone()
  }

  getDataFromDrone() {
    this.authService.user
      .pipe(
        filter(Boolean),
        switchMap(() => this.db.object(`data/${this.realTimeInfoService.getUserId()}`).valueChanges()),
        tap((data: any) => {
          this.parameters = this.parameters.map((parameters) => {
            const gettedData = Object.entries(data).find(([key, value]) => {
              return key === parameters.id;
            });
            return {
              ...parameters,
              data: (gettedData?.[1] !== undefined? gettedData?.[1] : "Loading...") as string|number
            }
          })
        })
      ).subscribe()
  }
}
