import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.css']
})
export class DataDashboardComponent implements OnInit {

  isOnPage = false

  constructor(
    public authService: AuthService) { }

  ngOnInit(): void {
    this.isOnPage = true
  }
}
