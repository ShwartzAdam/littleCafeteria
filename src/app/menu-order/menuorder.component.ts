import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'menu-order',
  templateUrl: './menuorder.component.html',
  styleUrls: ['./menuorder.component.css'],
  //providers: [OrderService]
})
export class MenuOrderComponent implements OnInit ,OnDestroy {

  constructor() { }

  ngOnInit() : void {
  }

  ngOnDestroy(): void {
  }


}
