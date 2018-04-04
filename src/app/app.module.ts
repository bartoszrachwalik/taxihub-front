import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {DriverComponent} from './driver/driver.component';
import {ClientComponent} from './client/client.component';
import {OrderHistoryComponent} from './client/order-history/order-history.component';
import {CorporationComponent} from './corporation/corporation.component';
import {DriversComponent} from './corporation/drivers/drivers.component';
import {ShowOrderComponent} from './driver/show-order/show-order.component';
import {MakeOrderComponent} from './client/make-order/make-order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DriversListItemComponent} from './corporation/drivers/drivers-list-item/drivers-list-item.component';
import {LoginServiceService} from './services/login-service.service';
import {OrderItemComponent} from './driver/show-order/order-item/order-item.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'main', component: MainComponent, children: [
    {path: 'client', component: ClientComponent},
    {path: 'driver', component: DriverComponent},
    {path: 'corporation', component: CorporationComponent},
  ]
  },
  {
    path: 'main/client', component: ClientComponent, children: [
      {path: 'make-order', component: MakeOrderComponent},
      {path: 'order-history', component: OrderHistoryComponent}
    ]
  },
  {
    path: 'main/driver', component: DriverComponent, children: [
      {path: 'show-order', component: ShowOrderComponent},
      {path: 'order-history', component: OrderHistoryComponent}
    ]
  },
  {
    path: 'main/corporation', component: CorporationComponent, children:[
      {path: 'drivers', component: DriversComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
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
    MakeOrderComponent,
    PageNotFoundComponent,
    MakeOrderComponent,
    DriversListItemComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
