import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/sales.service';
import { SalesFigure } from '../model/SalesFigure';
import { SimpleDate } from '../model/Date';

@Component({
  selector: 'app-enter-sales',
  templateUrl: './enter-sales.component.html',
  styleUrls: ['./enter-sales.component.css']
})
export class EnterSalesComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  addSales(date, online, inStore){
    let sf = new SalesFigure(SimpleDate.parse(date), parseInt(online), parseInt(inStore));
    this.salesService.addDailySales(sf).subscribe(daily => {
    //  console.log(daily);
    let figure = new SalesFigure(SimpleDate.parse(daily.date), daily['onlineTotal'], daily['inStoreTotal']);

     this.salesService.sales.next(figure);
    })
  }

  ngOnInit() {
    // document.getElementById('datePicker').addEventListener('change', (e)=> console.log( ))
  //  test
  //  let date = {year: 1988, month: 8, day: 10};
  //  let sf = new SalesFigure(date, 400, 200);
  //  console.log(sf)
  //  this.salesService.addDailySales(sf).subscribe(daily => console.log(daily))
  }
}
