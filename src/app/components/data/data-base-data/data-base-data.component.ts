import { Component, OnInit } from '@angular/core';
import {RealTimeInfoService} from "../../../shared/services/realtimeInfo.service";
import {AuthService} from "../../../shared/services/auth.service";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {filter, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-data-base-data',
  templateUrl: './data-base-data.component.html',
  styleUrls: ['./data-base-data.component.css']
})
export class DataBaseDataComponent implements OnInit {

  dataRows: any;
  newDataFormat: any[] = [];

  constructor(private db: AngularFireDatabase,
              public authService: AuthService,
              public realTimeInfoService: RealTimeInfoService) { }

  ngOnInit(): void {
    this.GetDataFromDataBase()
  }

  // Get weather parameters from RTDB for cards
  GetDataFromDataBase() {
    //let savedData = this.realTimeInfoService.GetSavedDataFromRTDB();
    this.realTimeInfoService.savedData$.subscribe((data: any)=> {
      this.newDataFormat = [];
      this.dataRows = data;

      console.log(this.dataRows, 'datarows')
      let numberOfData = 1;

      let years = Object.keys(this.dataRows);
      for(let year of years) {
        //console.log(year, 'year')
        // @ts-ignore
        let months = Object.keys(this.dataRows[year])

        for(let month of months) {
          //console.log(year + '-' + month, 'month')
          // @ts-ignore
          let days = Object.keys(this.dataRows[year][month])

          for(let day of days) {
            //console.log(year + '-' + month + '-' + day, 'day')
            // @ts-ignore
            let times = Object.keys(this.dataRows[year][month][day]);

            for(let time of times) {
              // @ts-ignore
              //console.log(this.dataRows[year][month][day][time], 'time')

              let dataFormatObject = {
                number: numberOfData,
                // @ts-ignore
                dataDate: year + '-' + month + '-' + day,
                dataTime: time,
                // @ts-ignore
                data: this.dataRows[year][month][day][time]
              }

              this.newDataFormat.unshift(dataFormatObject) //push?
              numberOfData++;
            }
          }
        }
      }
    });
  }

  DeleteDataFromDataBase(dateReference: string) {
    dateReference = dateReference.split('-').join('/')
     this.db.object(`data/${this.realTimeInfoService.GetUserId()}/HistoricalData/${dateReference}`).remove()
       .then(() => alert(`Data on date ${dateReference} was deleted from DB`))
  }
}
