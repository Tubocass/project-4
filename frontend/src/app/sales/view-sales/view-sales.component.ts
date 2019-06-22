import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/sales.service';
import { SalesFigure } from '../model/SalesFigure';
import { Stats } from '../model/Stats';
import { SimpleDate } from '../model/Date';

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
    this.getAllSales();
    // this.getStats();
    // this.getSalesBetween(new SimpleDate(1988,8,6),new SimpleDate(1988,8,16));
    this.salesService.sales.subscribe(sale => {
      console.log(sale);
      this.dailySales.push(sale)
    })
  }
  getAllSales(): void{
    this.salesService.getAllDailySales()
      .subscribe(dailies => {
        this.dailySales = dailies;
    })
  }
  getSalesBetween(begin:SimpleDate, end:SimpleDate): void{
    this.salesService.getSalesBetween(begin, end)
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
