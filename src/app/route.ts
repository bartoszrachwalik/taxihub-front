import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardClient} from './auth/auth-guard-client.service';
import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {AuthGuardDriver} from './auth/auth-guard-driver.service';
import {DriverComponent} from './driver/driver.component';
import {AuthGuardCorporation} from './auth/auth-guard-corporation.service';
import {CorporationComponent} from './corporation/corporation.component';
import {MakeOrderComponent} from './client/make-order/make-order.component';
import {OrderHistoryComponent} from './order/order-history/order-history.component';
import {DriverHistoryResolver} from './driver/driver.history.resolver';
import {ActiveOrderComponent} from './client/active-order/active-order.component';
import {ProfilComponent} from './profile/profile.component';
import {ShowOrderComponent} from './driver/show-order/show-order.component';
import {DriversComponent} from './corporation/drivers/drivers.component';
import {CorporationHistoryResolver} from './corporation/corporation.history.resolver';
import {RegistrationComponent} from './registration/registration.component';
import {RegistrationClientComponent} from './registration/registration-client/registration-client.component';
import {RegistrationCompanyComponent} from './registration/registration-company/registration-company.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ClientHistoryResolver} from './client/client.history.resolver';

export const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: '', canActivate: [AuthGuardClient], component: AppComponent, children: [
    {path: 'client', component: ClientComponent},
  ]
  },
  {
    path: '', canActivate: [AuthGuardDriver], component: AppComponent, children: [
    {path: 'driver', component: DriverComponent},
  ]
  },
  {
    path: '', canActivate: [AuthGuardCorporation], component: AppComponent, children: [
    {path: 'corporation', component: CorporationComponent},
  ]
  },
  {
    path: 'client', component: ClientComponent, children: [
    {path: 'make-order', component: MakeOrderComponent},
    {path: 'client-order-history', component: OrderHistoryComponent, resolve: {history: ClientHistoryResolver}},
    {path: 'active-order', component: ActiveOrderComponent},
    {path: 'profile', component: ProfilComponent}
  ]
  },
  {
    path: 'driver', component: DriverComponent, children: [
    {path: 'show-order', component: ShowOrderComponent},
    {path: 'driver-order-history', component: OrderHistoryComponent, resolve: {history: DriverHistoryResolver}},
    {path: 'profile', component: ProfilComponent}
  ]
  },
  {
    path: 'corporation', component: CorporationComponent, children: [
    {path: 'drivers', component: DriversComponent},
    {path: 'corporation-order-history', component: OrderHistoryComponent, resolve: {history: CorporationHistoryResolver}},
    {path: 'profile', component: ProfilComponent}
  ]
  },
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration/client', component: RegistrationClientComponent},
  {path: 'registration/corporation', component: RegistrationCompanyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'confirm/driver/:token', component: ConfirmComponent},
  {path: '**', component: PageNotFoundComponent}
];
