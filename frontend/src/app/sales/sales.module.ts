import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { EnterSalesComponent } from './enter-sales/enter-sales.component';
import { SalesComponent } from './sales/sales.component';
import { SimpleDatePipe } from '../pipes/simpleDatePipe';
import { avgPipe } from '../pipes/avgPipe';

@NgModule({
  declarations: [
    ViewSalesComponent, 
    EnterSalesComponent, 
    SalesComponent,
    SimpleDatePipe,
    avgPipe
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
