import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { EnterSalesComponent } from './enter-sales/enter-sales.component';
import { SalesComponent } from './sales-parent/sales-parent.component';

const routes: Routes = [
  {path: '', component: SalesComponent},
  {path: 'view', component: ViewSalesComponent},
  {path: 'enter', component: EnterSalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
