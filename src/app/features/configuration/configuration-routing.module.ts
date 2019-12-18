import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path:'user-list',component:UserListComponent},
  {path:'user',component:UserComponent},
];


export const routing=[RouterModule.forChild(routes)];
export const compArray=[UserListComponent,UserComponent];