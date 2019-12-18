import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { ModalModule } from 'ngx-bootstrap';
import {UigriddashboardDirective} from '../../../directive/uigriddashboard.directive';
@NgModule({
  declarations: [AnalyticsComponent,UigriddashboardDirective],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,ModalModule.forRoot()
  ],exports:[UigriddashboardDirective]
})
export class AnalyticsModule { }
