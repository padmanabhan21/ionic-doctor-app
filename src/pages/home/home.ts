import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import{AppointmentPage} from '../appointment/appointment';
import {ProviderserviceProvider} from '../../Providers/providerservice/providerservice';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-2.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg'
  ];

  public loginForm: any;
  public loginobj:any={};

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public api: ProviderserviceProvider,
    public session: SessionStorageService,
    public formBuilder: FormBuilder) {
    // this.loginForm = formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.compose([Validators.minLength(6),
    //     Validators.required])]
    // });
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    if (!this.loginForm.valid) {
      console.log('Invalid or empty data');
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
    }
  }

  navappointmentpage(param,param1){
    this.api.login(param,param1)
    .subscribe((resp:any)=>{
      if(resp.Message_Code == "RUS"){
        this.session.store("business_id",param);
        this.session.store("doctor_id",param1);
        this.navCtrl.push(AppointmentPage);
      }
      else{
        const toast = this.toastCtrl.create({
          message: 'Please Enter correct credentials',
          position: 'bottom',
          duration: 3000
        });
        toast.present();
      }
    })
  }
}
