import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ParameterCardComponent} from "../parameter-card/parameter-card.component";

@NgModule({
  declarations: [
    ParameterCardComponent
  ],
  exports: [
    ParameterCardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ParametersContainerModule { }
