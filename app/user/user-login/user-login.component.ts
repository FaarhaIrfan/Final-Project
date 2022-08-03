import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  userName : string = '';
  password : string = '';
  role : string = '';

  roles : string[];
  alertify: any;

  constructor(private authService : AuthService) {
    this.roles=[
      'admin',
      'user'
    ]
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userName+" "+this.password+" "+this.role)
  }

  onLogin(loginForm:NgForm)
  {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertify.success('Login Successful');

    }
    else{
      this.alertify.console.error('Login failed');

    }

  }

}
