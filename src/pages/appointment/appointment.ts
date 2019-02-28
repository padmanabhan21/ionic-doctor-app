import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ProviderserviceProvider} from '../../Providers/providerservice/providerservice';
import { Observable } from '../../../node_modules/rxjs';
import {UpcomingbookingsPage}from '../upcomingbookings/upcomingbookings';
import {PastbookingsPage} from '../pastbookings/pastbookings';

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  public appointmentdetails: any = [];
  public patientdetails;
  public upcomingbooking=[];
  public pastbooking=[];
  public subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public api:ProviderserviceProvider) {
  }

  tab1root=UpcomingbookingsPage;
  tab2root=PastbookingsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
    // this.todaysappointment();
    this.subscription = Observable.interval(5000).subscribe(x => {
      this.todaysappointment();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  todaysappointment(){
    this.api.patientdetails()
    .subscribe((resp:any) => {
      if(resp.Message_Code == "ASS"){
          this.appointmentdetails =resp.output;
          this.upcomingbooking.length = 0;
          this.pastbooking.length = 0;
          for(var i=0;i<this.appointmentdetails.length;i++){
            if(this.appointmentdetails[i].image == null){
              this.appointmentdetails[i].image = '../../assets/imgs/background/background-3.jpg';
            }
            if(this.appointmentdetails[i].token_status == "Booked"){
              this.upcomingbooking.push(this.appointmentdetails[i]);
            }
            else{
              this.pastbooking.push(this.appointmentdetails[i]);
            }
          }
          console.log("booked tokensssss",this.upcomingbooking);
          console.log("consulted tokensssss",this.pastbooking);
          console.log("patient detailsss",this.appointmentdetails);  
       }
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation');

    this.api.patientdetails()
    .subscribe((resp:any) => {
      if(resp.Message_Code == "ASS"){
          this.appointmentdetails =resp.output;
          this.upcomingbooking.length = 0;
          this.pastbooking.length = 0;
          for(var i=0;i<this.appointmentdetails.length;i++){
            if(this.appointmentdetails[i].token_status == "Booked"){
              this.upcomingbooking.push(this.appointmentdetails[i]);
            }
            else{
               this.pastbooking.push(this.appointmentdetails[i]);
            }
          }
          console.log("booked tokensssss",this.upcomingbooking);
          console.log("consulted tokensssss",this.pastbooking);
          console.log("patient detailsss",this.appointmentdetails);  
          refresher.complete();
        }
    });
  }
}

