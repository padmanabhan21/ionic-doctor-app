import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
})
export class MedicalPage {

  public medical:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalPage');

    this.medical=[
      {info:"medical",Allergies:"No",Current_Medications:"No",Past_Medications:"No",
      Chronic_Diseases:"No",injuries:"No",Surgiries:"No"}
    
    ]
  }

}
