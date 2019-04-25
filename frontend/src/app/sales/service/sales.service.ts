import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SalesFigure } from '../model/SalesFigure';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  public sales = new Subject<SalesFigure>();
  private salesURL = 'http://localhost:8080/sales';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getAllDailySales(): Observable<SalesFigure[]>{
    return this.http.get<SalesFigure[]>(this.salesURL+'/allsales')
  }
  addDailySales(daily:SalesFigure): Observable<any>{
    return this.http.post<SalesFigure>(this.salesURL, daily, this.httpOptions);
  }
}