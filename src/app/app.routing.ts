﻿import { Routes } from '@angular/router';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {AuthGuard} from './_guards';
import {RegisterComponent} from './register/register.component';
import {GetpaymentComponent} from './get-payment/getpayment.component';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';
import { GmailComponent } from './gmail/gmail.component';
import { ProfileComponent} from './profile/profile.component';
import {
    BlogComponent,
    ContactComponent,
    HowItWorksComponent,
    PrivacyAndPolicyComponent,
    TermsAndConditionsComponent,
    TermsComponent,
    PrivacyComponent,
    WhatIsInfluexpaiComponent
} from './contact/contact.component';
import { UpdatePassComponent} from './update-pass/update-pass.component';
import { GoogleaccountComponent } from './googleaccount/googleaccount.component';
import {BrandComponent} from './brand/brand.component';
import {InfluencersComponent} from './influencers/influencers.component';
import {AgenciesComponent} from './Agencies/Agencies.component';
import {PricingComponent} from './pricing/pricing.component';
import {PricingstepsComponent} from './pricingsteps/pricingsteps.component';
import {MyRfmComponent} from './my-rfm/my-rfm.component';
import {RfmComponent} from './rfm/rfm.component';
import {RfmDetailComponent} from './rfm-detail/rfm-detail.component'
import {PaymentmethodsComponent } from './paymentmethods/paymentmethods.component';
import { from } from 'rxjs';
export const AppRoutes: Routes = [

    {
        path : 'agencies', component: AgenciesComponent
    },
    { path : 'my-profile', component: ProfileComponent},
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'what-is-InfluExpAI',
        component: WhatIsInfluexpaiComponent
    },
   
    {
        path: 'How-It-Works',
        component: HowItWorksComponent
    },
    {
        path: 'Terms-and-Conditions',
        component: TermsAndConditionsComponent
    },
    { path: 'paymentmethod' , component : PaymentmethodsComponent},
    {
        path: 'terms',
        component: TermsComponent
    },
    {
        path: 'privacy_policy',
        component: PrivacyAndPolicyComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },

    {
        path: 'brand',
        component: BrandComponent
    },
    {
        path: 'influencers',
        component: InfluencersComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    // { path: '', component: HomepageComponent },
    { path: '', component: DashboardLayoutComponent,  children: [
        // { path: 'twitter/categories',  loadChildren: './home/twittercategories.module#TwittercategoriesModule' },
        { path: 'youtube/search', loadChildren: './youtube-search/youtube-search.module#YoutubeSearchModule'},
        { path: 'googleaccount' , component : GoogleaccountComponent},
        
        { path: 'facebook/search', loadChildren: './facebook-search/facebook-search.module#FacebookSearchModule'},
        { path: 'instagram/search', loadChildren: './instagram-search/instagram-search.module#InstagramSearchModule' },
        { path: 'linkedin/search', loadChildren: './linkedin-search/linkedin-search.module#LinkedinSearchModule' },
        { path: 'pinterest/search', loadChildren: './pinterest-search/pinterest-search.module#PinterestSearchModule'},
        { path: 'periscope/search', loadChildren: './periscope-search/periscope-search.module#PeriscopeSearchModule'},
        { path: 'medium/search', loadChildren: './medium-search/medium-search.module#MediumSearchModule'},
        { path: 'twitter/search', loadChildren: './twitter-search/twitter-search.module#TwitterSearchModule' },
        { path: 'flickr/search', loadChildren: './flickr-search/flickr-search.module#FlickrSearchModule' },
        { path: 'search/results/:query', loadChildren: './generic-search/generic-search.module#GenericSearchModule' },
        { path: 'blogosphere/list/:query', loadChildren: './blog-search/blogosphere-list-inf.module#BlogosphereListInfModule'},
        { path: 'blogosphere/search',  loadChildren: './blog-search/blog-search.module#BlogosphereSearchModule'},
    //     { path: 'blogs/search/v2/:query', loadChildren: './blogsearch/blogsearch.module#BlogsearchModule'},
    // //     { path: 'blogs/search/v3/:query', component: BlogSearchCategoriesComponent },
    //     { path: 'blogs/list/:query', loadChildren: './blogsearch/blog-list-inf.module#BlogListInfModule'},
        { path: 'twitter/list/:query', loadChildren: './twitter-list/twitter-list.module#TwitterListModule'},
        { path: 'youtube/list/:query', loadChildren: './youtube-search/youtube-list-inf.module#YoutubeListInfModule' },
        { path: 'instagram/list/:query', loadChildren: './instagram-search/instagram-list-inf.module#InstagramListInfModule' },
        {path:  'facebook/list/:query', loadChildren:'./facebook-search/facebook-list-inf.module#FacebookListInfModule'},
        {path:  'linkedin/list/:query', loadChildren:'./linkedin-search/linkedin-list-inf.module#LinkedinListInfModule'},
        {path:  'pinterest/list/:query', loadChildren:'./pinterest-search/pinterest-list-inf.module#PinterestListInfModule'},
        {path:  'flickr/list/:query', loadChildren:'./flickr-search/flickr-list-inf.module#FlickrListInfModule'},
        {path:  'medium/list/:query', loadChildren:'./medium-search/medium-list-inf.module#MediumListInfModule'},
        {path:  'periscope/list/:query', loadChildren:'./periscope-search/periscope-list-inf.module#PeriscopeListInfModule'},
        { path: 'dashboard',  loadChildren: './userdashboard-template/userdashboard.module#UserDashboardModule'},
        { path: '',  loadChildren: './userdashboard-template/userdashboard.module#UserDashboardModule'},
        { path: 'subscription-history',  loadChildren: './subscription-history/subscription-history.module#SubscriptionHistoryModule'},
    //     { path: '',  loadChildren: './userdashboard-template/userdashboard.module#UserDashboardModule'},
    //     { path: 'search/:query', loadChildren: './home/search.module#SearchModule' },
    //     { path: 'email/settings/:id', loadChildren: './email-settings/email-settings.module#EmailSettingsModule'},
    //     { path: 'email/settings', loadChildren: './email-settings/email-settings.module#EmailSettingsModule' },
        { path: 'multi/search',  loadChildren: './home/searchpage.module#SearchPageModule' },
        { path: 'optin/search', loadChildren: './opt-in-influencers/opt-in-influencers.module#OptInInfluencersModule' },
    //     { path: 'messenger', loadChildren: './messenger/messenger.module#MessengerModule' },
    //     { path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
        // {path:  'my-profile',loadChildren:'./profile/profile.module#ProfileModule'},

        { path: 'pricingsub',  component:PricingComponent },
    // { path: 'pricing/steps', component: PricingstepsComponent, canActivate: [AuthGuard]},

        // {path:  'update-password',loadChildren:'./update-pass/update-pass.module#UpdatePassModule'},
        { path: 'update-password' , component : UpdatePassComponent}
        //
    ], canActivate: [AuthGuard] },

    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    {path: 'gmail', component: GmailComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    {path: 'contactus', component: ContactComponent},
    { path: 'payment', component: GetpaymentComponent },
    // <li><a href="https://www.influexpai.com/pricing"><i class="fa fa-chevron-right"></i> Pricing</a> </li>
    { path: 'pricing', component: PricingComponent },
    {path: 'my-rfm', component: MyRfmComponent},
    {path: 'rfm-detail', component:RfmDetailComponent},
    {path: 'rfm', component: RfmComponent},
    { path: 'reset-password',  loadChildren: './reset-password/reset-password.module#ResetPasswordModule' },
    { path: 'page-not-found', loadChildren: './error400/error400.module#Error400Module' },
    { path: 'new-password/:token', loadChildren: './reset-password/change-password.module#ChangePasswordModule' },
    { path: 'confirm-password/:code', component:ConfirmPasswordComponent },
    { path: '**', loadChildren: './login/login.module#LoginModule' },


];
