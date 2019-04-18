import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/sales.service';
import { SalesFigure } from '../model/SalesFigure';

@Component({
  selector: 'app-enter-sales',
  templateUrl: './enter-sales.component.html',
  styleUrls: ['./enter-sales.component.css']
})
export class EnterSalesComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  ngOnInit() {
   // let date = `{${new Date('1988-08-10').toISOString().split('T')[0]}}`
   let date = {year: 1988, month: 8, day: 10};
    let sf = new SalesFigure(date, 400, 200);
    console.log(sf)
    this.salesService.addDailySales(sf).subscribe(daily => console.log(daily))
  }

}
