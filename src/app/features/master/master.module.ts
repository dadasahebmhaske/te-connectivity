import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './master-routing.module';
import { CompanyComponent } from './company/company.component';
import {LayoutModule} from '../../shared/layout/layout.module';
import { PlantMasterListComponent } from './plant-master-list/plant-master-list.component';
import { PlantMasterComponent } from './plant-master/plant-master.component';
import { LayerMastreListComponent } from './layer-mastre-list/layer-mastre-list.component';
import { LayerMastreComponent } from './layer-mastre/layer-mastre.component';
import { SectionMasterListComponent } from './section-master-list/section-master-list.component';
import { SectionMasterComponent } from './section-master/section-master.component';
import { SubSectionMasterListComponent } from './sub-section-master-list/sub-section-master-list.component';
import { SubSectionMasterComponent } from './sub-section-master/sub-section-master.component';
//import { UigridmDirective } from './../../directive/uigridm.directive';
@NgModule({
  declarations: [CompanyComponent, PlantMasterListComponent, PlantMasterComponent, LayerMastreListComponent, LayerMastreComponent, SectionMasterListComponent, SectionMasterComponent, SubSectionMasterListComponent, SubSectionMasterComponent],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ],
  exports:[]
})
export class MasterModule { }
