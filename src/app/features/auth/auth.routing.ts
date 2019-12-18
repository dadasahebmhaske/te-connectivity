
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes:Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  }
  // {
  //   path: 'register',
  //   loadChildren: './register/register.module#RegisterModule'
  // },
  // {
  //   path: 'forgot-password',
  //   loadChildren: './forgot/forgot.module#ForgotModule'
  // },

];

export const routing = RouterModule.forChild(routes);
