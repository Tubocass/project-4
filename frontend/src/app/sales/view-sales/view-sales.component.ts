import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/sales.service';
import { SalesFigure } from '../model/SalesFigure';
import { Stats } from '../model/Stats';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {
  dailySales: SalesFigure[];
  dailyStats: Stats;

  constructor(private salesService:SalesService) { }

  ngOnInit() {
    this.getSales();
    this.getStats();
    this.salesService.sales.subscribe(sale => {
      console.log(sale);
      this.dailySales.push(sale)
    })
  }
  getSales(): void{
    this.salesService.getAllDailySales()
      .subscribe(dailies => {
      this.dailySales = dailies;
    })
  }
  getStats(): void{
    this.salesService.getSalesStats('WEDNESDAY')
      .subscribe(stats => {
      this.dailyStats = stats;
    })
  }
}
