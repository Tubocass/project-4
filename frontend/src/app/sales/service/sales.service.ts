import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesFigure } from '../model/SalesFigure';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private salesURL = 'http://localhost:8080/sales';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getAllDailySales(): Observable<SalesFigure[]>{
    return this.http.get<any>(this.salesURL+'/allsales')
  }
  addDailySales(daily:SalesFigure): Observable<SalesFigure>{
    return this.http.post<any>(this.salesURL, daily, this.httpOptions);
  }
}