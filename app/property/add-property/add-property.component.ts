import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm){

    console.log('congratulations,form submitted');
    console.log(Form);
  }

}
