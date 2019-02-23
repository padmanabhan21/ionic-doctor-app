import { BrowserModule } from '@angular/platform-browser';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//appointment page 
import {AppointmentPage} from '../pages/appointment/appointment';
//patientdetails page
import {PatientdetailsPage} from '../pages/patientdetails/patientdetails'; 
//tabs
import {PersonalPage} from '../pages/personal/personal';
import{LifestylePage} from '../pages/lifestyle/lifestyle';
import{MedicalPage} from '../pages/medical/medical';
import { ProviderserviceProvider } from '../Providers/providerservice/providerservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppointmentPage,
    PatientdetailsPage,
    PersonalPage,
    LifestylePage,
    MedicalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // HttpClient,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppointmentPage,
    PatientdetailsPage,
    PersonalPage,
    LifestylePage,
    MedicalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderserviceProvider
  ]
})
export class AppModule {}
