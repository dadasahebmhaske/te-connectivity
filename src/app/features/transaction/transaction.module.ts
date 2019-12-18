import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '../../shared/layout/layout.module';

import {routing, compArray } from './transaction-routing.module';
import {TransactionDirective} from '../../directive/transaction.directive';



@NgModule({
  declarations: [compArray,TransactionDirective],
  imports: [
    CommonModule,
    LayoutModule,
    routing,    
  ],
  exports:[TransactionDirective]
})
export class TransactionModule { }
