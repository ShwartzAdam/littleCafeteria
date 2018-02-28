import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu.component';
import {OrderComponent} from "./quick-order/order/order.component";
import {QuickOrderComponent} from "./quick-order/quickorder.component";
import {MenuOrderComponent} from "./menu-order/menuorder.component";
import {TrackingComponent} from "./tracking/tracking.component";
import {LoginComponent} from "./home/login/login.component";
import {SignUpComponent} from "./home/signup/signup.component";
import {ForgotPassComponent} from "./home/forgot-password/forgotpass.component";
import {AppRoutingModule} from "./app-routing.module";
import {ItemComponent} from "./items/item.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrderComponent,
    QuickOrderComponent,
    MenuOrderComponent,
    TrackingComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPassComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //httpclientmodule
    NgSemanticModule
  ],
  //providers: [ ApiService, LoggedInGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
