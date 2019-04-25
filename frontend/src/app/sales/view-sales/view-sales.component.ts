import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/sales.service';
import { SalesFigure } from '../model/SalesFigure';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {
  dailySales: SalesFigure[];

  constructor(private salesService:SalesService) { }

  ngOnInit() {
    this.getSales();
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

}
