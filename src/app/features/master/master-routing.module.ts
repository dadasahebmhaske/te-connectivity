import {ModuleWithProviders} from "@angular/core"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import { PlantMasterListComponent } from "src/app/features/master/plant-master-list/plant-master-list.component";
import { PlantMasterComponent } from "src/app/features/master/plant-master/plant-master.component";
import { LayerMastreListComponent } from "src/app/features/master/layer-mastre-list/layer-mastre-list.component";

export const routes:Routes = [
  
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'Plant-list',
    component: PlantMasterListComponent
  },
  {
    path: 'Plant',
    component: PlantMasterComponent
  },
  {
    path: 'layer-list',
    component: LayerMastreListComponent
  },

];


export const routing = RouterModule.forChild(routes)
