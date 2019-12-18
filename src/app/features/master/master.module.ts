import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './master-routing.module';
import { CompanyComponent } from './company/company.component';
import {LayoutModule} from '../../shared/layout/layout.module';
import { PlantMasterListComponent } from './plant-master-list/plant-master-list.component';
import { PlantMasterComponent } from './plant-master/plant-master.component';
import { LayerMastreListComponent } from './layer-mastre-list/layer-mastre-list.component';
import { LayerMastreComponent } from './layer-mastre/layer-mastre.component';
//import { UigridmDirective } from './../../directive/uigridm.directive';
@NgModule({
  declarations: [CompanyComponent, PlantMasterListComponent, PlantMasterComponent, LayerMastreListComponent, LayerMastreComponent],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ],
  exports:[]
})
export class MasterModule { }
