import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/sales.service';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  ngOnInit() {
    this.salesService.getAllDailySales()
    .subscribe(dailies => {console.log(dailies)})
  }

}
