import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/booking';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}; 
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }
  addBooking(booking:Booking):Observable<Booking>{
    return this.httpClient.post<Booking>("http://localhost:3000/booking/",JSON.stringify(booking),httpOptions);
  }
  getBooking(id:number):Observable<Booking>{
    return this.httpClient.get<Booking>(`http://localhost:3000/booking/${id}`);
  }
}
