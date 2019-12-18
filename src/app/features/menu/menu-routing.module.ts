import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenulistComponent } from 'src/app/features/menu/menulist/menulist.component';

const routes: Routes = [
  {
    path: 'menu-list',
    component: MenulistComponent
  },
];

export const routing=[RouterModule.forChild(routes)]

export const compArray=[MenulistComponent];
