import { Flight } from './flight';
export interface Booking{
    id?:number;
    firstName:string;
    lastName:string;
    gender:string;
    flight:Flight;
    seatNumber:string;
}