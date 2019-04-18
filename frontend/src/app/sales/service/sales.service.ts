import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private salesURL = 'http://localhost:8080/sales';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

 public getAllDailySales(): Observable<any>{
    return this.http.get<any>(this.salesURL+'/allsales')

  }
}