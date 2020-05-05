import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  greeting:string = "Good afternoon";
  
  today = new Date();

  person:object = {
    fname:'Sonu',
    lname:'Chandan'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
