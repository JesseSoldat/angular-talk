import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})

export class RegisterComponent implements OnInit {
  ngOnInit() {
  }

  formSubmitted(user) {
    console.log(user);
  }

  
}