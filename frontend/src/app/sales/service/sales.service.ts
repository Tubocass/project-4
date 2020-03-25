import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SalesFigure } from '../model/SalesFigure';
import { Stats } from '../model/Stats';
import { SimpleDate } from '../model/Date';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  public sales = new Subject<SalesFigure>();
  private salesURL = 'http://localhost:8088/sales';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAllDailySales(): Observable<SalesFigure[]> {
    return this.http.get<SalesFigure[]>(this.salesURL + '/allsales');
  }
  getSalesBetween(begin: SimpleDate, end: SimpleDate): Observable<SalesFigure[]> {
    return this.http.get<SalesFigure[]>(this.salesURL + `/salesbetween?begin=${begin.printDate()}&end=${end.printDate()}`);
  }
  getSalesStats(day: string): Observable<Stats> {
    return this.http.get<Stats>(this.salesURL + `/salesstats?day=${day}`);
  }
  addDailySales(daily: SalesFigure): Observable<any> {
    return this.http.post<SalesFigure>(this.salesURL, daily, this.httpOptions);
  }
}
