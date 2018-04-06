import {BrowserModule} from '@angular/platform-browser';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {DriverComponent} from './driver/driver.component';
import {ClientComponent} from './client/client.component';
import {CorporationComponent} from './corporation/corporation.component';
import {DriversComponent} from './corporation/drivers/drivers.component';
import {ShowOrderComponent} from './driver/show-order/show-order.component';
import {MakeOrderComponent} from './client/make-order/make-order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DriversListItemComponent} from './corporation/drivers/drivers-list-item/drivers-list-item.component';
import {LoginServiceService} from './services/login-service.service';
import {OrderHistoryComponent} from './client/order-history/order-history.component';
import {DriverOrderHistoryComponent} from './driver/driver-order-history/driver-order-history.component';
import {OrderItemComponent} from './driver/show-order/order-item/order-item.component';
import {AuthGuardClient} from './auth-guard-client.service';
import {AuthGuardDriver} from './auth-guard-driver.service';
import {AuthGuardCorporation} from './auth-guard-corporation.service';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActiveOrderComponent } from './client/active-order/active-order.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: '', canActivate: [AuthGuardClient], component: AppComponent, children: [
      {path: 'client', component: ClientComponent}
    ]
  },
  {
    path: '', canActivate: [AuthGuardDriver], component: AppComponent, children: [
      {path: 'driver', component: DriverComponent}
    ]
  },
  {
    path: '', canActivate: [AuthGuardCorporation], component: AppComponent, children: [
      {path: 'corporation', component: CorporationComponent}
    ]
  },
  {
    path: 'client', component: ClientComponent, children: [
      {path: 'make-order', component: MakeOrderComponent},
      {path: 'order-history', component: OrderHistoryComponent},
      {path: 'active-order', component: ActiveOrderComponent}
    ]
  },
  {
    path: 'driver', component: DriverComponent, children: [
      {path: 'show-order', component: ShowOrderComponent},
      {path: 'driver-order-history', component: DriverOrderHistoryComponent}
    ]
  },
  {
    path: 'corporation', component: CorporationComponent, children: [
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
    LoginComponent,
    DriverComponent,
    ClientComponent,
    CorporationComponent,
    DriversComponent,
    ShowOrderComponent,
    MakeOrderComponent,
    PageNotFoundComponent,
    MakeOrderComponent,
    DriversListItemComponent,
    OrderHistoryComponent,
    DriverOrderHistoryComponent,
    OrderItemComponent,
    ActiveOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUgiu4t-XEJPDsgrExygjaXC155TwjQaE',
      libraries: ['places']
    }),
    AgmDirectionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginServiceService, AuthGuardDriver, AuthGuardClient, AuthGuardCorporation],
  bootstrap: [AppComponent]
})
export class AppModule {
}
