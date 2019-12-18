import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing , masterArray } from './master-routing.module';

import {LayoutModule} from '../../shared/layout/layout.module';
import {MasterDirective} from '../../directive/master.directive';
@NgModule({
  declarations: [masterArray,MasterDirective],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ],
  exports:[MasterDirective]
})
export class MasterModule { }
