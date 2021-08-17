import { Flight } from './../interfaces/flight';
import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient:HttpClient) { }
  getFlightById(id:number):Observable<Flight>{
    return this.httpClient.get<Flight>(`http://localhost:3000/flight/${id}`);
  }
  getAllFlightsByArea(froms:string,tos:string,dates:Date):Observable<Flight[]>{
    return this.httpClient.get<Flight[]>(`http://localhost:3000/flight?from=${froms}&&to=${tos}&&date=${dates}`);
  }
  addFlight(flight:Flight):Observable<Flight[]>{
    return this.httpClient.post<Flight[]>("http://localhost:3000/flight/",JSON.stringify(flight),httpOptions);
  }
  
}
