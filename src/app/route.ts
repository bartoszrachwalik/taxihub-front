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
import {ActiveOrderComponent} from './client/active-order/active-order.component';
import {ProfileComponent} from './profile/profile.component';
import {ShowOrderComponent} from './driver/show-order/show-order.component';
import {DriversComponent} from './corporation/drivers/drivers.component';
import {RegistrationComponent} from './registration/registration.component';
import {RegistrationClientComponent} from './registration/registration-client/registration-client.component';
import {RegistrationCompanyComponent} from './registration/registration-company/registration-company.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegistrationDriverComponent} from './corporation/registration-driver/registration-driver.component';
import {CarEditComponent} from './car/car-edit/car-edit.component';

export const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: '', component: AppComponent, children: [
    {
      path: 'client', component: ClientComponent, canActivate: [AuthGuardClient], children: [
      {path: 'make-order', component: MakeOrderComponent},
      {path: 'history', component: OrderHistoryComponent},
      {path: 'active-order', component: ActiveOrderComponent},
      {path: 'profile', component: ProfileComponent}
    ]
    },
    {
      path: 'driver', component: DriverComponent, canActivate: [AuthGuardDriver], children: [
      {path: 'show-order', component: ShowOrderComponent},
      {path: 'history', component: OrderHistoryComponent},
      {path: 'car', component: CarEditComponent},
      {path: 'profile', component: ProfileComponent}
    ]
    },
    {
      path: 'corporation', canActivate: [AuthGuardCorporation], component: CorporationComponent, children: [
      {path: 'drivers', component: DriversComponent},
      {path: 'history', component: OrderHistoryComponent},
      {path: 'profile', component: ProfileComponent}
    ]
    }
  ]
  },
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration/client', component: RegistrationClientComponent},
  {path: 'registration/corporation', component: RegistrationCompanyComponent},
  {path: 'corporation/registration/driver', component: RegistrationDriverComponent},
  {path: 'login', component: LoginComponent},
  {path: 'confirm/driver/:token', component: ConfirmComponent},
  {path: '**', component: PageNotFoundComponent}
];
