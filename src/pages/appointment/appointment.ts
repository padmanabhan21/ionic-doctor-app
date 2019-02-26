import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientdetailsPage } from '../patientdetails/patientdetails';
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
    this.todaysappointment();
    // this.subscription = Observable.interval(5000).subscribe(x => {
    //   this.todaysappointment();
    // });
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


  navpatiententdetails(param) {
    this.navCtrl.push(PatientdetailsPage ,{"patientdetails":param});
    console.log("parammmmm",param)
  }

  public appointment:any = {
    "checked": false,
  }
  updateappointment(appointment) {
    let alert = this.alertCtrl.create({
      subTitle:"Choose Reason For Appointment",
      // enableBackdropDismiss: false
    });
    // alert.setTitle('Choose Reason For Appointment');

    alert.addInput({
      type: 'radio',
      label: 'Headache',
      value: 'Headache',
      // checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'General',
      value: 'General',
      // checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Nausea',
      value: 'Nausea',
      // checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Viral',
      value: 'Viral',
      // checked: true
    });

    alert.addButton({
      text: 'Cancel',
      handler: data => {
        console.log("apppointment Cancelled", data);
        appointment.flag = true;
      }
    });
    alert.addButton({
      text: 'CheckOut',
      handler: data => {
        console.log("Appointment checkedout", data);
        appointment.flag = true;
      }
    });
    alert.present();
    this.appointment.checked = false;
  }
  
}

