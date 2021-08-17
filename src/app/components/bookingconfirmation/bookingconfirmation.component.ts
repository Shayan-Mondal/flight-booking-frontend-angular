import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bookingconfirmation',
  templateUrl: './bookingconfirmation.component.html',
  styleUrls: ['./bookingconfirmation.component.css']
})
export class BookingconfirmationComponent implements OnInit {
  bookingid?:number;
  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.bookingid=parseInt(params['id']);
    })
  }

}
