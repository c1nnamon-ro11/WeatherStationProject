import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "../../shared/services/auth.service";
import {IParametersData} from "../../models/ParametersData";
import {filter, switchMap, tap} from "rxjs";
import {parametersData as parametersReference} from '../../data/DataBaseParametersReference';
import * as _ from 'lodash'

@Component({
  selector: 'app-parameters-container',
  templateUrl: './parameters-container.component.html',
  styleUrls: ['./parameters-container.component.css']
})
export class ParametersContainerComponent implements OnInit {

  constructor(private db: AngularFireDatabase, public authService: AuthService) {
  }
  parameters: IParametersData[] = parametersReference;

  ngOnInit(): void {
    this.authService.userData$
      .pipe(
        filter(Boolean),
        switchMap(() => this.db.object(`users/${this.authService.userData.uid}/weatherData`).valueChanges()),
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
