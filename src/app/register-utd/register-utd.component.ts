import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-utd',
  templateUrl: './register-utd.component.html',
  styleUrls: ['./register-utd.component.css']
})
export class RegisterUtdComponent implements OnInit {

  gender:string[] = ['Male','Female','Transgender'];
  
  userData = {}
  
  register(userForm:NgForm){
    this.userData = userForm.form.value;
    console.log(this.userData);
    userForm.form.reset();
  }
  constructor() { }

  ngOnInit() {

  }

}
