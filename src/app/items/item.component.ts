import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  //providers: [OrderService]
})
export class ItemComponent implements OnInit ,OnDestroy {

  constructor() { }

  ngOnInit() : void {
    throw new Error("Method not implemented.");
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


}
