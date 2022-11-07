import { Component, OnInit } from '@angular/core';
import {ForecastService} from "../../services/forecast.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.css']
})
export class DataDashboardComponent implements OnInit {
  constructor(
    public forecastService: ForecastService,
    public authService: AuthService) { }

  ngOnInit(): void {
  }

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  // @ts-ignore
  file: File = null; // Variable to store file
// On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.forecastService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      }
    );
  }
}
