import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BigCardCitiesInfoComponent } from './components/data/big-card-cities-info/big-card-cities-info.component';
import { HttpClientModule} from "@angular/common/http";
import { ParametersContainerComponent } from './components/data/parameters-container/parameters-container.component';
import { ParameterCardComponent } from './components/data/parameter-card/parameter-card.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AuthService} from "./shared/services/auth.service";
import { SignInComponent } from './components/registration/sign-in/sign-in.component';
import { SignUpComponent } from './components/registration/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/registration/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/registration/verify-email/verify-email.component';
import { DashboardComponent } from './components/data/dashboard/dashboard.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AppRoutingModule} from "./app-routing.module";
import {RealTimeInfoService} from "./shared/services/realtimeInfo.service";
import { DataDashboardComponent } from './components/data/data-dashboard/data-dashboard.component';
import { TopnavComponent } from './components/layout/topnav/topnav.component';
import { BottomnavComponent } from './components/layout/bottomnav/bottomnav.component';
import { SidebarMenuComponent } from './components/layout/sidebar-menu/sidebar-menu.component';
import {DashboardModule} from "./components/data/dashboard/dashboard.module";
import {DataDashboardModule} from "./components/data/data-dashboard/data-dashboard.module";
import {LayoutModule} from "./components/layout/layout.module";
import { DataBaseDataComponent } from './components/data/data-base-data/data-base-data.component';
import { HistoryDashboardComponent } from './components/data/history-dashboard/history-dashboard.component';
import { ButtonComponent } from './components/elements/button/button.component';
import {DataBaseDataModule} from "./components/data/data-base-data/data-base-data.module";

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        HttpClientModule,
        AppRoutingModule,
        RouterOutlet,
        RouterLinkWithHref,
        DataBaseDataModule,
        /*    LayoutModule,
        DashboardModule,
        DataDashboardModule,*/
    ],
    providers: [
        AuthService,
        RealTimeInfoService
    ],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
