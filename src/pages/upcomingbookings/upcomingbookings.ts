import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientdetailsPage } from '../patientdetails/patientdetails';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the UpcomingbookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcomingbookings',
  templateUrl: 'upcomingbookings.html',
})
export class UpcomingbookingsPage {

  public upcomingbooking=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.navParams = navParams;
    this.upcomingbooking = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingbookingsPage');
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
