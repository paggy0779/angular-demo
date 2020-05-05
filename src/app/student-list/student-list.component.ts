import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  formTitle:string = "Registration";
  students:object[] = [];
  constructor() { }

  ngOnInit() {
  }

  addStudent(data){
    this.students.push(data);
  }

}
