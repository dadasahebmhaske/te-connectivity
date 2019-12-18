import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditListComponent } from './audit-list/audit-list.component';
import { AuditComponent } from './audit/audit.component';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { PlanningComponent } from './planning/planning.component';
const routes: Routes = [
  {  path:'audit-list',component:AuditListComponent},
  {  path:'audit',component:AuditComponent},
  {  path:'planning-list',component:PlanningListComponent},
  {  path:'planning',component:PlanningComponent},
];


export const routing=[RouterModule.forChild(routes)]
export const compArray=[AuditListComponent, AuditComponent, PlanningListComponent, PlanningComponent];
