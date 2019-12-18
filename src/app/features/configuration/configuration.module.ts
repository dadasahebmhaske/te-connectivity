import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '../../shared/layout/layout.module';
import { compArray, routing } from './configuration-routing.module';

@NgModule({
  declarations: [compArray],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ]
})
export class ConfigurationModule { }
