import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruitbasket',
  templateUrl: './fruitbasket.component.html',
  styleUrls: ['./fruitbasket.component.css']
})
export class FruitbasketComponent implements OnInit {

  heading:string = "All Season Fruits Mart"
  fruits_hindi:string[] = ["अंगूर","कीवी","सेब","तरबूज","खरबूजा"]
  fruits_english:string[] = ["Grapes","Kiwi","Apple","Watermelon","Muskmelon"]
  fruits_price = ["Rs.100/Kg", "Rs.75/packet","Rs.200/Kg", "Rs.120/piece", "Rs.110/piece"]
  fruits:string[] = []
  language : string = "english"
  seperatorcolor = "orange"
  customername : string = "Guest"
  customermobile: number = 999999999;
  customeremail:string="";
  selectedfruitIndex:number = -1;

  checkprice(i){
    this.selectedfruitIndex = i;
  }
  changelanguage(lang)
  {
    this.language = lang;
    if(this.language == 'hindi'){
      this.fruits = this.fruits_hindi;
    }
    else{
      this.fruits = this.fruits_english;
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.fruits = this.fruits_english
    console.log(this.fruits.length)
  }

}
