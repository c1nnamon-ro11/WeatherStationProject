import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {RealTimeInfoService} from "../../../shared/services/realtimeInfo.service";
import {forEach} from "lodash";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.css']
})
export class DataDashboardComponent implements OnInit {

  isOnPage = false

  constructor(
    public authService: AuthService,
    public realTimeInfoService: RealTimeInfoService,
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.isOnPage = true
  }

  SetDataToRTDB() {
    let dateTime = new Date();
    // Date
    let year = dateTime.getFullYear();
    let month = ("0" + (dateTime.getMonth()+1)).slice(-2);
    let day = ("0" + dateTime.getDate()).slice(-2);
    //let datePath = `${dateTime.getFullYear()}/${(dateTime.getMonth()+1)}/${dateTime.getDate()}`;
    let datePath = `${year}/${month}/${day}`;

    // Time
    let hours = ("0" + dateTime.getHours()).slice(-2);
    let minutes = ("0" + dateTime.getMinutes()).slice(-2);
    let seconds = ("0" + dateTime.getSeconds()).slice(-2);

    let time = `${hours}:${minutes}:${seconds}`;
    // Save data
    let dataToSave = this.realTimeInfoService.GetDataFromRTDB()
    this.db.object(`data/${this.realTimeInfoService.GetUserId()}/HistoricalData/${datePath}/${time}`).set(dataToSave)
      .then(() => alert('Data was saved to DB'))
  }
}
