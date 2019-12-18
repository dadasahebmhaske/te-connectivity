import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing , masterArray } from './master-routing.module';

import {LayoutModule} from '../../shared/layout/layout.module';

@NgModule({
  declarations: [masterArray],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ],
  exports:[]
})
export class MasterModule { }
