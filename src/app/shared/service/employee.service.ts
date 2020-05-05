import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../model/employee';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = "http://localhost:3000";

  apiURL = `${this.baseURL}/${'employees'}`;

  constructor(private _http:HttpClient) { }

  // errorHandler
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || 'Server Error')
  }

  // fetch employee list
  getEmployees() {
    return this._http.get<Employee[]>(this.apiURL).pipe(
      catchError(this.errorHandler)
    );
  }

  // fetch single employee
  getSingleEmployee(id:number) {
    const url = `${this.apiURL}/${id}`;
    return this._http.get<Employee>(url);
  }

  // add employee
  postEmployee(emp:Employee) {
    return this._http.post(this.apiURL,emp);
  }

  // update employee
  putEmployee(emp:Employee) {
    const url = `${this.apiURL}/${emp.id}`;
    return this._http.put(url,emp);
  }

  // delete employee
  deleteEmployee(id:number) {
    const url = `${this.apiURL}/${id}`;
    return this._http.delete(url);
  }

}
