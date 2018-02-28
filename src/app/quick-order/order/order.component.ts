import { Component, OnInit } from '@angular/core';
import {SemanticDropdownComponent} from "ng-semantic/src/dropdown/dropdown";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  //providers: [OrderService]
})
export class OrderComponent implements OnInit {

  // private orderService : OrderService -> inside the constructor

  constructor() { }

  ngOnInit() {

  }



}
