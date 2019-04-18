import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'sales', loadChildren: './sales/sales.module#SalesModule'},
  {path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
