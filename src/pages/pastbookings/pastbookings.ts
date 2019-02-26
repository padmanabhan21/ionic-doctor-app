import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PastbookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pastbookings',
  templateUrl: 'pastbookings.html',
})
export class PastbookingsPage {

  public pastbooking=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams = navParams;
    this.pastbooking = this.navParams.data;
    console.log("DATA SUCCESS",this.pastbooking);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastbookingsPage');
  }

}
