import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @Input() title:string;
  @Output() childEvent = new EventEmitter();
  
  constructor() { }

  ngOnChanges(){
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

  register(frm){
    this.childEvent.emit(frm.form.value);
  }

}
