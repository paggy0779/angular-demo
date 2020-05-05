import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-register-urf',
  templateUrl: './register-urf.component.html',
  styleUrls: ['./register-urf.component.css']
})
export class RegisterUrfComponent implements OnInit {

  gender: string[] = ['Male', 'Female', 'Transgender'];
  userForm: FormGroup;
  data: User[] = [];
  constructor(private fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   uemail: new FormControl(''),
    //   upwd: new FormControl(''),
    //   ucpwd: new FormControl(''),
    //   ugender: new FormControl(''),
    //   uterms: new FormControl(false),
    // })
    this.userForm = this.fb.group({
      uemail: ['', [Validators.required, Validators.pattern(/^\w+[\w-\.0-9]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)]],
      upwd: ['', [Validators.required, Validators.minLength(6)]],
      ucpwd: [''],
      ugender: [null, [Validators.required]],
      uterms: [false, [Validators.requiredTrue]]
    })
    this.fetchUsers();
  }

  fetchUsers() {
    this.data = this._userService.getUserList();
  }

  register() {
    this._userService.addUser(this.userForm.value);
    this.userForm.reset();
    this.fetchUsers();
  }

  getEmailError() {
    return this.userForm.controls['uemail'].errors.required ? 'Email Required' : this.userForm.controls['uemail'].errors.pattern ? 'Please enter a valid email' : ''
  }

}
