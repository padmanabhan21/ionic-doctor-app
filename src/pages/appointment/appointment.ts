import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PatientdetailsPage} from '../patientdetails/patientdetails';

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

   public appointmentdetails:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
     this.appointmentdetails=[
       {id:"1",custoimg:"assets/imgs/logo/venkat.jpeg",username:"john",tokenno:"10934",time:"11:30 PM",background:"background-color: steelblue;"},
       {id:"2",custoimg:"assets/imgs/logo/venkat.jpeg",username:"king",tokenno:"10935",time:"11:35 PM"},
       {id:"3",custoimg:"assets/imgs/logo/venkat.jpeg",username:"rock",tokenno:"10936",time:"11:40 PM"},
       {id:"4",custoimg:"assets/imgs/logo/venkat.jpeg",username:"jango",tokenno:"10937",time:"11:50 PM"},
       {id:"5",custoimg:"assets/imgs/logo/venkat.jpeg",username:"hello",tokenno:"10938",time:"12:30 PM"},
       {id:"6",custoimg:"assets/imgs/logo/venkat.jpeg",username:"darling",tokenno:"10939",time:"11:10 PM"},
     ]
console.log("appointmentdetails",this.appointmentdetails);
  }

}
