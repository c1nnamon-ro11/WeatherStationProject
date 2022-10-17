import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  LoadCurrentWeather(cityCode: any): Observable<any> {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?id="+cityCode+"&appid=a3a43fdc00d8f9d3a4f251c5df2090b7" );
  }
}
