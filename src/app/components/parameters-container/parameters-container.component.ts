import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule} from "@angular/fire/compat/database";

@Component({
  selector: 'app-parameters-container',
  templateUrl: './parameters-container.component.html',
  styleUrls: ['./parameters-container.component.css']
})
export class ParametersContainerComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  products = [
    { name: 'TEMPERATURE', class: "fa-thermometer-half", id:"temp", data: "%TEMPERATURE%", measurement: " °C" },
    { name: 'HUMIDITY', class: "fa-tint", id:"hum", data: "%HUMIDITY%", measurement: " %" },
    { name: 'PRESSURE', class: "fa-angle-double-down", id:"pres", data: "%PRESSURE%", measurement: " hPa" },
    { name: 'BRIGHTNESS', class: "fa-sun", id:"bright", data: "%BRIGHTNESS%", measurement: " lx" },
    { name: 'AIR QUALITY', class: "fa-sun", id:"airQuality", data: "%AIRQUALITY%", measurement: " smth" },
    { name: 'HEIGHT', class: "fa-arrow-up", id:"height", data: "%HEIGHT%", measurement: " m" },
  ];

  data: any = [];
  ngOnInit(): void {

  }
  getDataFromRTDB() {
    const ref = this.db.list("data");
    ref.valueChanges().subscribe((data) => {
      this.data = data;
    });
    console.log(ref.valueChanges());
    console.log(this.data);
    this.products.filter((product) => product.id === this.data.va)
  }

//   for(let databaseIndicator of Object.values(databaseIndicators)){
//   databaseIndicator.reference.on('value', (snapshot) => {
//   databaseIndicator.value = snapshot.val();
//   console.log(`${databaseIndicator.name}: ${databaseIndicator.value}`);
// document.getElementById(databaseIndicator.path).innerHTML = databaseIndicator.value;
// });
}
