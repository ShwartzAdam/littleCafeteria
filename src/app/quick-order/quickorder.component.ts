import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quick-order',
  templateUrl: './quickorder.component.html',
  styleUrls: ['./quickorder.component.css'],
  //providers: [OrderService]
})
export class QuickOrderComponent implements OnInit {

  // private orderService : OrderService -> inside the constructor
  mainDisplay : boolean = false;
  coffeAndDrinkDisplay : boolean = true;
  coffeDisplay : boolean = true;
  sandwichDisplay : boolean = true;
  snackDisplay : boolean = true;
  constructor() { }

  ngOnInit() {

  }

  advancePaging(index) : void {
    let id = index;
    switch (id){
      case 1:
        console.log("1");
        this.mainDisplay = true;
        this.coffeAndDrinkDisplay = false;
        break;
      case 2:
        console.log("2");
        this.mainDisplay = true;
        this.coffeDisplay = false;
        break;
      case 3:
        console.log("3");
        this.mainDisplay = true;
        this.sandwichDisplay = false;
        break;
      case 4:
        console.log("4");
        this.mainDisplay = true;
        this.snackDisplay = false;
    }
  }
  backwardPagin() : void{
    this.mainDisplay = false;
    this.coffeAndDrinkDisplay = true;
    this.coffeDisplay = true;
    this.sandwichDisplay = true;
    this.snackDisplay = true;
  }
}
