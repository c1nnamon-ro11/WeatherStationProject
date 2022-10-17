import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parameters-container',
  templateUrl: './parameters-container.component.html',
  styleUrls: ['./parameters-container.component.css']
})
export class ParametersContainerComponent implements OnInit {

  //constructor() { }
  products = [
    { name: 'TEMPERATURE', class: "fa-thermometer-half", id:"temp", data: "%TEMPERATURE%", measurement: " °C" },
    { name: 'HUMIDITY', class: "fa-tint", id:"hum", data: "%HUMIDITY%", measurement: " %" },
    { name: 'PRESSURE', class: "fa-angle-double-down", id:"pres", data: "%PRESSURE%", measurement: " hPa" },
    { name: 'BRIGHTNESS', class: "fa-sun", id:"bright", data: "%BRIGHTNESS%", measurement: " lx" },
    { name: 'AIR QUALITY', class: "fa-sun", id:"airQuality", data: "%AIRQUALITY%", measurement: " smth" },
    { name: 'HEIGHT', class: "fa-arrow-up", id:"height", data: "%HEIGHT%", measurement: " m" },
  ];
  ngOnInit(): void {
  }

}
