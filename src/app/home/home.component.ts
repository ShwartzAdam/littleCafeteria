import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers: [UserService]
})
export class HomeComponent implements OnInit {

  //private UserService : userService;
  // -> inside the constructor
  // init with login display and basic nav
  displayLogin : boolean = false;
  displayNav : boolean = false;
  // if nav activated , Signup view , Forgot-pass view
  displaySignUp : boolean = true;
  displayForPass : boolean = true;
  // return button
  displayReturnButton : boolean = true;
  constructor() { }

  ngOnInit() {

  }

  changeDisplay(index) : void {
    let id = index;
    switch (id){
      case 1:
        console.log("1");
        //hide login and bottom nav
        this.displayLogin = true;
        this.displayNav = true;
        //show forget password and and return button
        this.displayForPass = false;
        this.displayReturnButton = false;
        break;
      case 2:
        console.log("2");
        //hide login and bottom nav
        this.displayLogin = true;
        this.displayNav = true;
        //show sign up and and return button
        this.displaySignUp = false;
        this.displayReturnButton = false;
        break;
      case 3:
        console.log("3");
        //hide all and return to login view
        this.displaySignUp = true;
        this.displayForPass = true;
        this.displayReturnButton = true;
        // display login and nav
        this.displayLogin = false;
        this.displayNav = false;
        break;
    }
  }



}
