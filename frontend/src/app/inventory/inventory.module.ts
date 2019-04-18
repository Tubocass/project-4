import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { TrackInventoryComponent } from './track-inventory/track-inventory.component';

@NgModule({
  declarations: [TrackInventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
