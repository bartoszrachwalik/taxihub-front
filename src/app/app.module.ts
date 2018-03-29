import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { ClientComponent } from './client/client.component';
import { OrderHistoryComponent } from './client/order-history/order-history.component';
import { CorporationComponent } from './corporation/corporation.component';
import { DriversComponent } from './corporation/drivers/drivers.component';
import { ShowOrderComponent } from './driver/show-order/show-order.component';
import { MakeOrderComponent } from './client/make-order/make-order.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: MainComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    DriverComponent,
    ClientComponent,
    OrderHistoryComponent,
    CorporationComponent,
    DriversComponent,
    ShowOrderComponent,
    MakeOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
