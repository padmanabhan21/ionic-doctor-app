import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
 public personalprofile:any=[];
 public patientdetails:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.patientdetails = this.navParams.data.patientdetails;
    console.log("personal profileeee******",this.patientdetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
    this.personalprofile=[
      {info:"personal",name:"john",img:"assets/imgs/logo/venkat.jpeg",contact_number:"9700820429",
      Email_id:"john@gmail.com",Gender:"Male",Date_of_birth:"1994-01-23",Blood_group:"B+",Martialstatus:"married",
      Height:"5.8",Weight:"70",Emergency_contact:"9700082942",Location:"chenni",
  
        
      } 
    ]
    // this.personalprofile = this.navParams.get("patientdetailss");
    this.patientdetails = this.navParams.get('patientdetailss');
    // console.log("personal profile@@@@@@@@@",this.patientdetails);
  }

}
