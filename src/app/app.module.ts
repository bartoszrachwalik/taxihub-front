import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {appRoutes} from './route';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {DriverComponent} from './driver/driver.component';
import {ClientComponent} from './client/client.component';
import {CorporationComponent} from './corporation/corporation.component';
import {DriversComponent} from './corporation/drivers/drivers.component';
import {ShowOrderComponent} from './driver/show-order/show-order.component';
import {MakeOrderComponent} from './client/make-order/make-order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DriversListItemComponent} from './corporation/drivers/drivers-list-item/drivers-list-item.component';
import {LoginService} from './login/login.service';
import {OrderItemComponent} from './driver/show-order/order-item/order-item.component';
import {AuthGuardClient} from './auth/auth-guard-client.service';
import {AuthGuardDriver} from './auth/auth-guard-driver.service';
import {AuthGuardCorporation} from './auth/auth-guard-corporation.service';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActiveOrderComponent} from './client/active-order/active-order.component';
import {NotificationService} from './notification/notification.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule} from 'angular5-toaster/dist';
import {OrderService} from './order/order.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OrderHistoryComponent} from './order/order-history/order-history.component';
import {DriverHistoryResolver} from './driver/driver.history.resolver';
import {ClientHistoryResolver} from './client/client.history.resolver';
import {CorporationHistoryResolver} from './corporation/corporation.history.resolver';
import {ConfirmComponent} from './confirm/confirm.component';
import {DriverService} from './driver/driver.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './login/auth.service';
import {TokenInterceptor} from './login/token.interceptor';
import {ProfilComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {RegistrationClientComponent} from './registration/registration-client/registration-client.component';
import {RegistrationCompanyComponent} from './registration/registration-company/registration-company.component';
import {CorporationService} from './corporation/corporation.service';
import {ClientService} from './client/client.service';
import {OrderHistoryItemComponent} from './order/order-history/order-history-item/order-history-item.component';
import { RegistrationDriverComponent } from './corporation/registration-driver/registration-driver.component';

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
    OrderHistoryItemComponent,
    OrderItemComponent,
    ActiveOrderComponent,
    ConfirmComponent,
    RegistrationClientComponent,
    RegistrationCompanyComponent,
    ProfilComponent,
    RegistrationComponent,
    RegistrationDriverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule,
    AngularFireModule.initializeApp(environment.firebase, 'TaxiHub'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUgiu4t-XEJPDsgrExygjaXC155TwjQaE',
      libraries: ['places']
    }),
    AgmDirectionModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [
    LoginService,
    AuthGuardDriver,
    AuthGuardClient,
    AuthGuardCorporation,
    NotificationService,
    LoginComponent,
    AuthService,
    OrderService,
    DriverHistoryResolver,
    ClientHistoryResolver,
    CorporationHistoryResolver,
    DriverService,
    CorporationService,
    ClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
