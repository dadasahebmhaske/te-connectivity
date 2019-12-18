import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing,compArray } from './menu-routing.module';


@NgModule({
  declarations: [compArray],
  imports: [
    CommonModule,
    routing
  ]
})
export class MenuModule { }
