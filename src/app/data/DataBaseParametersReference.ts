import {IParametersData} from "../models/ParametersData";

// Defined format of data for cards representing
// Can be removed if sent package will contain those parameters
export const parametersData: IParametersData[] = [
  {
    name: 'TEMPERATURE',
    class: "fa-thermometer-half",
    id:"temp",
    data: "",
    measurement: " °C"
  },
  {
    name: 'HUMIDITY',
    class: "fa-tint",
    id:"hum",
    data: "",
    measurement: " %" },
  {
    name: 'PRESSURE',
    class: "fa-angle-double-down",
    id:"pres",
    data: "",
    measurement: " hPa" },
  {
    name: 'BRIGHTNESS',
    class: "fa-sun",
    id:"bright",
    data: "",
    measurement: " lx" },
  {
    name: 'AIR QUALITY',
    class: "fa-sun",
    id:"airQuality",
    data: "",
    measurement: " smth" },
  {
    name: 'HEIGHT',
    class: "fa-arrow-up",
    id:"height",
    data: "",
    measurement: " m" },
]
