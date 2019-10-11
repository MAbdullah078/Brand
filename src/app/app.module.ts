import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AlertComponent} from './_directives';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {RouterModule} from '@angular/router';
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import {AppRoutes} from './app.routing';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HeaderComponent} from "./userdashboard-template/header.component";
import {SideMenuComponent} from "./userdashboard-template/side-menu.component";
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import {PreloaderModule} from "./components/preloader.module";
import {GetpaymentComponent} from './get-payment/getpayment.component';
import {BlackgeeksRecaptchaModule} from 'recaptcha-blackgeeks';
import {RegisterComponent} from './register/register.component';
import {RecapchaModule} from './recapcha/recapcha.module';
import {MatIconModule} from '@angular/material/icon';
import { BrandComponent } from './brand/brand.component';
import {PricingstepsComponent} from './pricingsteps/pricingsteps.component';
import {PricingComponent} from './pricing/pricing.component';
import { InfluencersComponent } from './influencers/influencers.component';
import {AgenciesComponent} from './Agencies/Agencies.component';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { SocialLoginModule, AuthService } from 'angular5-social-login';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {
  BlogComponent,
  HowItWorksComponent,
  PrivacyAndPolicyComponent,
  TermsAndConditionsComponent,
  TermsComponent,
  WhatIsInfluexpaiComponent,
  PrivacyComponent
} from './contact/contact.component';

import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatRippleModule,
  MatSelectModule,

  MatTableModule
} from '@angular/material';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';
import {AuthGuard} from './_guards';
import {PushNotificationsService} from 'angular2-notifications/dist';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
// import { GenericSearchComponent } from './generic-search/generic-search.component';
export function provideConfig() {
  
  
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('85788264424-vq2bg22ln549j057ve4h6l7blstajggs.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('1123089954556968')
    }

  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    PricingComponent,
    PricingstepsComponent,
    SideMenuComponent,
    AgenciesComponent,
    BrandComponent,
    ContactComponent,
    GetpaymentComponent,
    RegisterComponent,
    ConfirmPasswordComponent,
    AlertComponent,
    DashboardLayoutComponent,
    FooterComponent,
    BlogComponent,
    InfluencersComponent,
    HowItWorksComponent,
    PrivacyAndPolicyComponent,
    PrivacyComponent,
    TermsAndConditionsComponent,
    TermsComponent,
    WhatIsInfluexpaiComponent,
    // GenericSearchComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BlackgeeksRecaptchaModule,
    SlimLoadingBarModule,
    PreloaderModule,
    ReactiveFormsModule,
    HttpModule,
    SocialLoginModule,
    FormsModule,
    MatIconModule,
    RecapchaModule,
    MatSlideToggleModule,
    TextMaskModule,
    MatCardModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,JwSocialButtonsModule
  ],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
    AuthGuard, PushNotificationsService,AuthService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }

