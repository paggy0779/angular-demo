import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments:string[] = ['JS','PHP','Java','Android'];
  today = new Date();
  constructor(private fb:FormBuilder,private _service:EmployeeService) { }

  employee = this.fb.group({
    name:[null],
    salary:[null],
    post:[null],
    department:[null]
  })

  ngOnInit(): void {
  }

  add(){
    this._service.postEmployee(this.employee.value).subscribe(
      () => {
        alert('Employee Added Successfully');
        this.employee.reset();
      }
    )
  }

}
