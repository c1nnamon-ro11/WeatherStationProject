import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isOnPage = false;
  pageName = "USER PROFILE"

  constructor(
    public authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.isOnPage = true
  }

  navigateToDataDashboard(){
    this.router.navigate(['data-dashboard'])
  }
}