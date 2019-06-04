import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  msg:any ="";

  contact() {
    this.msg ="We will get back to you as soon possible...";
  }
  clickMe() {
    this.msg ="";
  }

  ngOnInit() {
  }

}

