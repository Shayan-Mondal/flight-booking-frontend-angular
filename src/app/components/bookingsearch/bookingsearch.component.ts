import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/interfaces/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookingsearch',
  templateUrl: './bookingsearch.component.html',
  styleUrls: ['./bookingsearch.component.css']
})
export class BookingsearchComponent implements OnInit {
  bookingid:number=0;
  message:string='';
  booking:Booking={
    id:0,
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
  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
  }
  getBooking(){
    if(this.bookingid==0){
      this.message="Invalid number"
    }
    else{
      this.bookingService.getBooking(this.bookingid).subscribe((data)=>this.booking=data);
    }
    
  }
}