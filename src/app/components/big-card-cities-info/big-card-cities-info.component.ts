import { Component, OnInit } from '@angular/core';
import {OpenWeatherParametersModel} from "../../models/OpenWeatherParametersModel";
import {ForecastService} from '../../services/forecast.service';
import {citiesInfo as definedData} from '../../data/BigCardCities';
import {ICitiesInfo} from "../../models/CitiesInfo";

@Component({
  selector: 'app-big-card-cities-info',
  templateUrl: './big-card-cities-info.component.html',
  styleUrls: ['./big-card-cities-info.component.css']
})
export class BigCardCitiesInfoComponent {
  randomDataWeatherId!: number
  randomCardStyleId!: number
  data: ICitiesInfo[] = definedData
  cityWeather: OpenWeatherParametersModel = new OpenWeatherParametersModel()

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.loadCurrentWeather();
  }

  loadCurrentWeather(){
    this.randomCardStyleId = this.randomDataWeatherId = this.getRandomInt(3);
    this.randomDataWeatherId = this.getRandomInt(this.data.length);
    // @ts-ignore
    let openWeatherCity = this.data.find((obj:OpenWeatherParametersModel) => {
      return obj.id === this.randomDataWeatherId
    });

    // @ts-ignore
    this.forecastService.LoadCurrentWeather(openWeatherCity.openWeatherCityIndex).subscribe(
      res => {
        this.cityWeather.cityName = res.name;
        this.cityWeather.humidity = res.main.humidity;
        this.cityWeather.temperature = res.main.temp;
        this.cityWeather.pressure = res.main.pressure;
        this.cityWeather.overall = res.weather[0].main;
      }
    )
    this.cityWeather.factsAboutCity = [...openWeatherCity!.factsAboutCity];
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max)+1;
  }
}
