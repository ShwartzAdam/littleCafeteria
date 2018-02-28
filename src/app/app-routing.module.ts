import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
//import {OrderComponent} from "./quick-order/order/order.component";
import {QuickOrderComponent} from "./quick-order/quickorder.component";
import {MenuOrderComponent} from "./menu-order/menuorder.component";
import {TrackingComponent} from "./tracking/tracking.component";

//import {LoginComponent} from "./home/login/login.component";
import {SignUpComponent} from "./home/signup/signup.component";
import {ForgotPassComponent} from "./home/forgot-password/forgotpass.component";
import {ItemComponent} from "./items/item.component";

const appRoutes: Routes = [

  { path: '', redirectTo :'/home' ,pathMatch :'full'},
  { path: 'home', component: HomeComponent},
  { path: 'quickorder', component: QuickOrderComponent},
  { path: 'menuorder', component: MenuOrderComponent},
  { path: 'tracking', component: TrackingComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'forgotpass', component: ForgotPassComponent},
  { path: 'food', component: ItemComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
