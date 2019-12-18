import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { routing } from './auth.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [AuthComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class AuthModule { }


