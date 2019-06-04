import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor() { }
  
  members = [];
  sho:any={};
  sho2:any = {};
  
  

  ngOnInit() {
  }
  price;
  total;
  val;
  days;
  guests;
  sho11:any ={};
  sho22:any ={};
  sho222:any ={};
  sho33:any ={};
  sho223:any ={};
  sho44:any ={};
  sho224:any ={};
  sho55:any ={};



  save(k) {


    if (k ==1){

      this.members.push(this.sho);
      console.log(this.sho);
      this.sho = {};


      this.price = 5000;
      this.total = this.members[0].guests*this.members[0].days*this.price;
      this.sho2.total = this.total;
      this.days = this.members[0].days;
      this.guests = this.members[0].guests;
      this.members.splice(0,1);
    }

    else if (k == 2) {
      this.members.push(this.sho11);
    
      this.sho11= {};


      this.price = 2000;
      this.total = this.members[0].guests*this.members[0].days*this.price;
      this.sho22.total = this.total;
      this.days = this.members[0].days;
      this.guests = this.members[0].guests;
      this.members.splice(0,1);
    }

    else if (k == 3) {
      this.members.push(this.sho222);
    
      this.sho222= {};


      this.price = 3000;
      this.total = this.members[0].guests*this.members[0].days*this.price;
      this.sho33.total = this.total;
      this.days = this.members[0].days;
      this.guests = this.members[0].guests;
      this.members.splice(0,1); 
    }

    else if (k == 4) {
      this.members.push(this.sho223);
    
      this.sho223= {};


      this.price = 4000;
      this.total = this.members[0].guests*this.members[0].days*this.price;
      this.sho44.total = this.total;
      this.days = this.members[0].days;
      this.guests = this.members[0].guests;
      this.members.splice(0,1); 
    }

    else if (k == 5) {
      this.members.push(this.sho224);
    
      this.sho224= {};


      this.price = 3500;
      this.total = this.members[0].guests*this.members[0].days*this.price;
      this.sho55.total = this.total;
      this.days = this.members[0].days;
      this.guests = this.members[0].guests;
      this.members.splice(0,1); 
    }



  }





}
