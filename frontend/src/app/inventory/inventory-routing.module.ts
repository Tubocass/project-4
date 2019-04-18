import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackInventoryComponent } from './track-inventory/track-inventory.component';

const routes: Routes = [
  {path:'', component: TrackInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
