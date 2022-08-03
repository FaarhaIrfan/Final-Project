import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  name : string ='';
  username : string = '' ;
  password : string = '' ;
  contact : number;
  confirmpassword : string='';

  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl()
    });
  }

  onSubmit(){
 console.log(this.registrationForm);
  }

  signup(){
    console.log(this.name+" "+ this.username+" "+this.password+"" +this.confirmpassword  +""+this.contact)
  }

}
