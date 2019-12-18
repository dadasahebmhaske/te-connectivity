import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { AuditListComponent } from './audit-list/audit-list.component';
import { AuditComponent } from './audit/audit.component';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { PlanningComponent } from './planning/planning.component';

@NgModule({
  declarations: [AuditListComponent, AuditComponent, PlanningListComponent, PlanningComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
