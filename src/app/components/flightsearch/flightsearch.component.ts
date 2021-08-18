import { FlightService } from './../../services/flight.service';
import { Flight } from './../../interfaces/flight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css'],
  providers:[
    FlightService
  ]
})
export class FlightsearchComponent implements OnInit {
  froms:string='';
  tos:string='';
  dates:Date=new Date();
  message:string='';
  flights:Array<Flight>=new Array<Flight>();
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    console.log(this.froms);
    
  }
  getFlight(){ 
    if(this.froms==''&&this.tos==''){
      this.message="Pease enter the details"
    }
    else{
      this.flightService.getAllFlightsByArea(this.froms,this.tos,this.dates).subscribe((dbflight)=>this.flights=dbflight);
    }
    
  }
}