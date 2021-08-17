import { Flight } from './../../interfaces/flight';
import { FlightService } from './../../services/flight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availiableflights',
  templateUrl: './availiableflights.component.html',
  styleUrls: ['./availiableflights.component.css'],
  providers:[
    FlightService
  ]
})
export class AvailiableflightsComponent implements OnInit {
  flight:Flight={
    flightname:'',
    from:'',
    to:'',
    date: new Date(),
    fare: 0
  }
  constructor(private flightServices:FlightService) { }

  ngOnInit(): void {
  }
  addflight(){
    this.flightServices.addFlight(this.flight).subscribe((data)=>console.log(data)
    )
    this.flight.flightname='';
    this.flight.date=new Date();
    this.flight.fare=0;
    this.flight.from='';
    this.flight.to='';
  }
}
