import {ModuleWithProviders} from "@angular/core"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import { PlantMasterListComponent } from "src/app/features/master/plant-master-list/plant-master-list.component";
import { PlantMasterComponent } from "src/app/features/master/plant-master/plant-master.component";
import { LayerMastreListComponent } from "src/app/features/master/layer-mastre-list/layer-mastre-list.component";
import { LayerMastreComponent } from "src/app/features/master/layer-mastre/layer-mastre.component";
import { SectionMasterListComponent } from "src/app/features/master/section-master-list/section-master-list.component";
import { SectionMasterComponent } from "src/app/features/master/section-master/section-master.component";
import { SubSectionMasterListComponent } from "src/app/features/master/sub-section-master-list/sub-section-master-list.component";
import { SubSectionMasterComponent } from "src/app/features/master/sub-section-master/sub-section-master.component";

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
  {
    path: 'layer',
    component: LayerMastreComponent
  },
  {
    path: 'section-list',
    component: SectionMasterListComponent
  },
  {
    path: 'section',
    component: SectionMasterComponent
  },
  {
    path: 'sub-section-list',
    component: SubSectionMasterListComponent
  },
  {
    path: 'sub-section',
    component: SubSectionMasterComponent
  },

];


export const routing = RouterModule.forChild(routes)
