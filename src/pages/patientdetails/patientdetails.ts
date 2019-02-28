import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PersonalPage} from'../personal/personal'; 
import {LifestylePage} from '../lifestyle/lifestyle';
import {MedicalPage} from '../medical/medical';
import { AlertController } from 'ionic-angular';
import {ProviderserviceProvider} from '../../Providers/providerservice/providerservice';

/**
 * Generated class for the PatientdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientdetails',
  templateUrl: 'patientdetails.html',
})
export class PatientdetailsPage {
   public patientdetailsarr:any=[];
   public username;
   public mobile_num;
   public gmail_id;
   public params;
   public patientdetailss:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ProviderserviceProvider) {
    this.navParams = navParams;
    this.patientdetailss = this.navParams;
    console.log("patientdetails########",this.patientdetailss)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientdetailsPage');
     this.patientdetailsarr = this.navParams.data.patientdetails;
  }

  closeModal(){
    this.navCtrl.pop();
  }
  tab1root=PersonalPage;
  tab2root=MedicalPage;
  tab3root=LifestylePage;

}
