import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/service/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../shared/model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service:EmployeeService) { }

  employees:Observable<Employee[]>

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees(){
    this.employees = this._service.getEmployees();
  }

}
