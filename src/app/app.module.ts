import {BrowserModule} from '@angular/platform-browser';

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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistrationClientComponent} from './registration-client/registration-client.component';
import {RegistrationCompanyComponent} from './registration-company/registration-company.component';
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'main', component: MainComponent, children: [
      {path: 'client', component: ClientComponent},
      {path: 'driver', component: DriverComponent},
      {path: 'corporation', component: CorporationComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'registration/client', component: RegistrationClientComponent},
  {path: 'registration/company', component: RegistrationCompanyComponent},
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
    RegistrationClientComponent,
    RegistrationCompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
