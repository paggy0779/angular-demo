import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  departments:string[] = ['JS','PHP','Java','Android'];
  id:number;

  constructor(private fb:FormBuilder,private _service:EmployeeService,private _route:ActivatedRoute,private _router:Router) { }

  employee = this.fb.group({
    id:[null],
    name:[null],
    salary:[null],
    post:[null],
    department:[null]
  });

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (params) => {
        this.id = parseInt(params.get('id'));
        console.log(this.id);
      }
    );
    this._service.getSingleEmployee(this.id).subscribe(
      (res) => {
        this.employee.setValue({
          ...res
        })
      }
    );
  }

  edit(){
    this._service.putEmployee(this.employee.value).subscribe(
      () => {
       alert('Employee Updated Successfully!');
        this._router.navigate(['/employees']);
      }
    )
  }

}
