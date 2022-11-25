import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {RealTimeInfoService} from "../../../shared/services/realtimeInfo.service";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public realTimeInfoService: RealTimeInfoService) { }

  ngOnInit(): void {
  }

}
