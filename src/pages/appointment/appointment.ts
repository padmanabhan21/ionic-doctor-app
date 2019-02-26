import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientdetailsPage } from '../patientdetails/patientdetails';
import { AlertController } from 'ionic-angular';
import {ProviderserviceProvider} from '../../Providers/providerservice/providerservice';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public api:ProviderserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
    this.api.patientdetails()
    .subscribe((resp:any) => {
      if(resp.Message_Code == "ASS"){
          this.appointmentdetails =resp.output;
          for(var i=0;i<this.appointmentdetails.length;i++){
            if(this.appointmentdetails[i].token_status == "Booked"){
              this.upcomingbooking = this.appointmentdetails[i];
            }
            else{
              this.pastbooking = this.appointmentdetails[i];
            }
          }
          console.log("booked tokensssss",JSON.stringify(this.upcomingbooking));
          console.log("consulted tokensssss",JSON.stringify(this.pastbooking));
          console.log("patient detailsss",this.appointmentdetails);  
       }
       
    });
    // console.log("appointmentdetails", this.patientdetails);
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

