import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '../../shared/layout/layout.module';

import {routing, compArray } from './transaction-routing.module';


@NgModule({
  declarations: [compArray],
  imports: [
    CommonModule,
    LayoutModule,
    routing
  ]
})
export class TransactionModule { }
