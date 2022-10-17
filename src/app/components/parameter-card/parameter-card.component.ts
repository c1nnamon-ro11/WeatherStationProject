import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parameter-card',
  templateUrl: './parameter-card.component.html',
  styleUrls: ['./parameter-card.component.css']
})
export class ParameterCardComponent implements OnInit {

  constructor() { }
  @Input() productList!: { name: string; class: string, id: string, data: string, measurement: string};

  ngOnInit() {
  }

}
