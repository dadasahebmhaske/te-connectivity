import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './report-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UigridmDirective } from './../../directive/uigridm.directive';
import { ModalModule } from 'ngx-bootstrap';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [ CustomerDetailsComponent,UigridmDirective],
  imports: [
    CommonModule,
    routing,
    LayoutModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports:[UigridmDirective]
})
export class ReportModule { }
