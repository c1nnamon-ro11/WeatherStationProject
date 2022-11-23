import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {SignInComponent} from "./components/registration/sign-in/sign-in.component";
import {SignUpComponent} from "./components/registration/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./components/registration/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./components/registration/verify-email/verify-email.component";

// Route guard
import { AuthGuard } from "./shared/guard/auth.guard";
import {ContentComponent} from "./components/layout/content/content.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'register-user',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./components/data/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'data-dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./components/data/data-dashboard/data-dashboard.module').then(m => m.DataDashboardModule)
      },
      {
        path: 'history-dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./components/data/history-dashboard/history-dashboard.module').then(m => m.HistoryDashboardModule)
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
