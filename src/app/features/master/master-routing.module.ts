import {ModuleWithProviders} from "@angular/core"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantMasterListComponent } from "src/app/features/master/plant-master-list/plant-master-list.component";
import { PlantMasterComponent } from "src/app/features/master/plant-master/plant-master.component";
import { LayerMastreListComponent } from "src/app/features/master/layer-mastre-list/layer-mastre-list.component";
import { LayerMastreComponent } from "src/app/features/master/layer-mastre/layer-mastre.component";
import { SectionMasterListComponent } from "src/app/features/master/section-master-list/section-master-list.component";
import { SectionMasterComponent } from "src/app/features/master/section-master/section-master.component";
import { SubSectionMasterListComponent } from "src/app/features/master/sub-section-master-list/sub-section-master-list.component";
import { DesignationListComponent } from "src/app/features/master/designation-list/designation-list.component";
import { DesignationComponent } from "src/app/features/master/designation/designation.component";
import { AreaListComponent } from "src/app/features/master/area-list/area-list.component";
import { AreaComponent } from "src/app/features/master/area/area.component";
import { MethodMasterListComponent } from "src/app/features/master/method-master-list/method-master-list.component";
import { MethodMasterComponent } from "src/app/features/master/method-master/method-master.component";
import { SubSectionMasterComponent } from "src/app/features/master/sub-section-master/sub-section-master.component";

export const routes:Routes = [
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
  {
    path: 'designation-list',
    component: DesignationListComponent
  },
  {
    path: 'designation',
    component: DesignationComponent
  },

  {
    path: 'area-list',
    component: AreaListComponent
  },
  {
    path: 'area',
    component: AreaComponent
  },
  {
    path: 'method-list',
    component: MethodMasterListComponent
  },
  {
    path: 'method',
    component: MethodMasterComponent
  },
];


export const routing = [RouterModule.forChild(routes)];
export const masterArray=[PlantMasterListComponent, PlantMasterComponent, LayerMastreListComponent,LayerMastreComponent,SectionMasterListComponent,SectionMasterComponent,SubSectionMasterComponent,SubSectionMasterListComponent,DesignationListComponent,DesignationComponent,AreaListComponent,AreaComponent,MethodMasterListComponent, MethodMasterComponent]