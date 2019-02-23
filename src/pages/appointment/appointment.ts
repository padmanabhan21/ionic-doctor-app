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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public api:ProviderserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
    // this.appointmentdetails = [
    //   {flag:true, id: "1", custoimg: "assets/imgs/logo/venkat.jpeg", username: "john", tokenno: "10934", time: "11:30 PM", background: "background-color: steelblue;" },
    //   {flag:false, id: "2", custoimg: "assets/imgs/logo/venkat.jpeg", username: "king", tokenno: "10935", time: "11:35 PM" },
    //   {flag:false, id: "3", custoimg: "assets/imgs/logo/venkat.jpeg", username: "rock", tokenno: "10936", time: "11:40 PM" },
    //   {flag:false, id: "4", custoimg: "assets/imgs/logo/venkat.jpeg", username: "jango", tokenno: "10937", time: "11:50 PM" },
    //   {flag:false, id: "5", custoimg: "assets/imgs/logo/venkat.jpeg", username: "hello", tokenno: "10938", time: "12:30 PM" },
    //   {flag:false, id: "6", custoimg: "assets/imgs/logo/venkat.jpeg", username: "darling", tokenno: "10939", time: "11:10 PM" },
    // ]


    this.api.patientdetails()
    .subscribe((resp:any) => {
      if(resp.Message_Code == "ASS"){
          this.appointmentdetails =resp.output;
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

