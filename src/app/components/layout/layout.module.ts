import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TopnavComponent} from "./topnav/topnav.component";
import {BottomnavComponent} from "./bottomnav/bottomnav.component";
import {SidebarMenuComponent} from "./sidebar-menu/sidebar-menu.component";
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [TopnavComponent, BottomnavComponent, SidebarMenuComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ContentComponent],
})
export class LayoutModule {}
