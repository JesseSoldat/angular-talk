import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})

export class RegisterComponent implements OnInit {
  ngOnInit() {
  }

  formSubmitted({email, password}) {
    console.log(email);
    console.log(password);
    
  }

  
}