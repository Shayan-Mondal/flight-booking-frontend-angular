import { FlightService } from './../../services/flight.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Booking } from 'src/app/interfaces/booking';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-selectedfligth',
  templateUrl: './selectedfligth.component.html',
  styleUrls: ['./selectedfligth.component.css'],
  providers:[
    FlightService
  ]
})
export class SelectedfligthComponent implements OnInit {
  flightid:number=0;
  s:string='abcdefghijklmnopqrstuvwxyz';
  booking:Booking={
    firstName:'',
    lastName:'',
    gender:'',
    flight:{
      flightname:'',
      from:'',
      to:'',
      date:new Date(),
      fare:0
    },
    seatNumber:''
  }
  constructor(private activatedRoute:ActivatedRoute,private flightService:FlightService,private bookingService:BookingService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.flightid=parseInt(params['id']);
    })
    this.flightService.getFlightById(this.flightid).subscribe((data)=>this.booking.flight=data);
    console.log(this.booking);
    this.booking.seatNumber=''+Math.round(Math.random()*100)+this.s.charAt(Math.floor(Math.random()*this.s.length));
  }
  postBooking(){
    this.bookingService.addBooking(this.booking).subscribe((data)=>
    {
      this.router.navigate([`/bookingconfirmation/${data.id}`]);
    });
    
  }
}
