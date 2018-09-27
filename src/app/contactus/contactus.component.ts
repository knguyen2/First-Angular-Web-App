import { Component, OnInit } from '@angular/core';
import { Contactus } from './../shared/contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  states = [
    {value: 'CA', text: 'California'},
    {value: 'VA', text: 'Virginia'},
    {value: 'NC', text: 'North Carolina'},
    {value: 'NY', text: 'New York'},
    {value: 'MD', text: 'Maryland'},
    {value: 'UT', text: 'Ulta'},
    {value: 'WA', text: 'Washington'},
    {value: 'TN', text: 'Tennesses'},
    {value: 'FL', text: 'Florida'},
    {value: 'SD', text: 'Soth Dakota'},
    {value: 'KT', text: 'Kent Tuckie'},
    {value: 'GA', text: 'Georgia'},
    {value: 'NC', text: 'North Carolina'}
  ];


  contact: Contactus = {
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  }; 

  

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Contact',this.contact);
  }

}
