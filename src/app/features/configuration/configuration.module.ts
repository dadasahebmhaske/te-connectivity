import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '../../shared/layout/layout.module';
import { compArray, routing } from './configuration-routing.module';
import {ConfigurationDirective} from '../../directive/configuration.directive';
@NgModule({
  declarations: [compArray,ConfigurationDirective],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ],
  exports:[ConfigurationDirective]
})
export class ConfigurationModule { }
