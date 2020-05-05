import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { Employee } from 'src/app/shared/model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] = [];
  errorMsg:string;
  searchKey:string;
  p:number = 1;
  key:string = "name";
  reverse:boolean = false;

  constructor(private _service:EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  fetchEmployees(){
    this._service.getEmployees().subscribe(
      (res) => {
        this.employees = res;
        console.log(this.employees);
      },
      (error) => {
        this.errorMsg = error;
      }
    )
  }

  deleteEmp(id:number){
    if(confirm('Are you sure to delete this employee ?')){
      this._service.deleteEmployee(id).toPromise()
      .then(
        () => {
          this.fetchEmployees();
        }
      );

      // .subscribe(
      //   () => {
      //     this.fetchEmployees();
      //   }
      // )
    }
  }

}
