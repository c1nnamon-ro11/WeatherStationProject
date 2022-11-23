import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {DataBaseDataComponent} from "./data-base-data.component";
import {ButtonModule} from "../../elements/button/button.module";

@NgModule({
  declarations: [
    DataBaseDataComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
    ],
  exports: [
    DataBaseDataComponent
  ]
})
export class DataBaseDataModule { }
