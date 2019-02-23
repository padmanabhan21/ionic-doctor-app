webpackJsonp([5],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SessionStorageService} from 'ngx-webstorage';
/*
  Generated class for the ProviderserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProviderserviceProvider = /** @class */ (function () {
    function ProviderserviceProvider(http) {
        this.http = http;
        console.log('Hello ProviderserviceProvider Provider');
    }
    // Get Template
    ProviderserviceProvider.prototype.getfunction = function () {
        return this.http.get('')
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProviderserviceProvider.prototype.patientdetails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            "business_id": 102,
            "doctor_id": "vani116",
            "business_date": "2019-02-18"
        };
        return this.http.post('https://doctorappnew.herokuapp.com/SelectAppoinment', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProviderserviceProvider.prototype.extractData = function (res) {
        var body = res.json();
        console.log(JSON.stringify(body));
        return body;
    };
    ProviderserviceProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Response */]) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    ProviderserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ProviderserviceProvider);
    return ProviderserviceProvider;
}());

//# sourceMappingURL=providerservice.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patientdetails_patientdetails__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_providerservice_providerservice__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.appointmentdetails = [];
        this.appointment = {
            "checked": false,
        };
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
            .subscribe(function (resp) {
            if (resp.Message_Code == "ASS") {
                _this.appointmentdetails = resp.output;
                console.log("patient detailsss", _this.appointmentdetails);
            }
        });
        // console.log("appointmentdetails", this.patientdetails);
    };
    AppointmentPage.prototype.navpatiententdetails = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__patientdetails_patientdetails__["a" /* PatientdetailsPage */], { "patientdetails": param });
        console.log("parammmmm", param);
    };
    AppointmentPage.prototype.updateappointment = function (appointment) {
        var alert = this.alertCtrl.create({
            subTitle: "Choose Reason For Appointment",
        });
        // alert.setTitle('Choose Reason For Appointment');
        alert.addInput({
            type: 'radio',
            label: 'Headache',
            value: 'Headache',
        });
        alert.addInput({
            type: 'radio',
            label: 'General',
            value: 'General',
        });
        alert.addInput({
            type: 'radio',
            label: 'Nausea',
            value: 'Nausea',
        });
        alert.addInput({
            type: 'radio',
            label: 'Viral',
            value: 'Viral',
        });
        alert.addButton({
            text: 'Cancel',
            handler: function (data) {
                console.log("apppointment Cancelled", data);
                appointment.flag = true;
            }
        });
        alert.addButton({
            text: 'CheckOut',
            handler: function (data) {
                console.log("Appointment checkedout", data);
                appointment.flag = true;
            }
        });
        alert.present();
        this.appointment.checked = false;
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"E:\ionic-doctor-app\src\pages\appointment\appointment.html"*/'<!--\n  Generated template for the AppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>appointment</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content  class="background-color">\n    <ion-card *ngFor="let appointment of appointmentdetails" class="border-redius-15" (click)="navpatiententdetails(appointment)">\n        <img src="assets/imgs/logo/venkat.jpeg"/>\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-3>\n            <ion-avatar item-left>\n              <img  class="borde-redus-100" [src]="appointment.custoimg">\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-1></ion-col>\n          <ion-col col-6>\n            <p>User Name:<b>{{appointment.user_name}}</b></p>\n            <p>Token No:<b>{{appointment.token_no}}</b></p>\n            <p>Time:<b>{{appointment.token_time}}</b></p>\n          </ion-col>\n          <ion-col col-2>\n              <ion-toggle color="primary" (ionChange)="updateappointment(appointment)" [checked]="appointment.flag"></ion-toggle>\n          </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\ionic-doctor-app\src\pages\appointment\appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifestyle_lifestyle__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medical_medical__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_providerservice_providerservice__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PatientdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientdetailsPage = /** @class */ (function () {
    function PatientdetailsPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.patientdetailsarr = [];
        this.patientdetailss = {};
        this.tab1root = __WEBPACK_IMPORTED_MODULE_2__personal_personal__["a" /* PersonalPage */];
        this.tab2root = __WEBPACK_IMPORTED_MODULE_4__medical_medical__["a" /* MedicalPage */];
        this.tab3root = __WEBPACK_IMPORTED_MODULE_3__lifestyle_lifestyle__["a" /* LifestylePage */];
        this.navParams = navParams;
        // console.log("returning Navparams",this.navParams.data.patientdetails); // returns NavParams {data: Object}
        this.patientdetailss = this.navParams;
        console.log("patientdetails########", this.patientdetailss);
    }
    PatientdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientdetailsPage');
        this.patientdetailsarr = this.navParams.get("patientdetails");
        console.log("patient details$$$$$$", JSON.stringify(this.patientdetailsarr));
        this.username = this.patientdetailsarr.user_name;
        this.mobile_num = this.patientdetailsarr.mobile;
        this.gmail_id = this.patientdetailsarr.email;
        //  this.patientdetailss = this.patientdetailsarr;
    };
    PatientdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patientdetails',template:/*ion-inline-start:"E:\ionic-doctor-app\src\pages\patientdetails\patientdetails.html"*/'<!--\n  Generated template for the PatientdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>patientdetails</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-3>\n            <ion-avatar item-left>\n              <img class="border-redius" src="assets/imgs/logo/venkat.jpeg">\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-1></ion-col>\n          <ion-col col-7>\n            <b>{{user_name}}</b><br>\n            <b>{{mobile_num}}</b><br>\n            <b>{{gmail_id}}</b>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-tabs class="relative" color="main" tabsPlacement="top">\n      <ion-tab tabTitle="personal" [root]="tab1root" [rootParams]="patientdetailss" ></ion-tab>\n      <ion-tab tabTitle="medical" [root]="tab2root"></ion-tab>\n      <ion-tab tabTitle="lifestyle" [root]="tab3root"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"E:\ionic-doctor-app\src\pages\patientdetails\patientdetails.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]) === "function" && _c || Object])
    ], PatientdetailsPage);
    return PatientdetailsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=patientdetails.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = /** @class */ (function () {
    function PersonalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.personalprofile = [];
        this.patientdetails = {};
        this.patientdetails = this.navParams.data.patientdetails;
        console.log("personal profileeee******", this.patientdetails);
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
        this.personalprofile = [
            { info: "personal", name: "john", img: "assets/imgs/logo/venkat.jpeg", contact_number: "9700820429",
                Email_id: "john@gmail.com", Gender: "Male", Date_of_birth: "1994-01-23", Blood_group: "B+", Martialstatus: "married",
                Height: "5.8", Weight: "70", Emergency_contact: "9700082942", Location: "chenni",
            }
        ];
        // this.personalprofile = this.navParams.get("patientdetailss");
        this.patientdetails = this.navParams.get('patientdetailss');
        // console.log("personal profile@@@@@@@@@",this.patientdetails);
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"E:\ionic-doctor-app\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>personal</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n<ion-list *ngFor="let personal of personalprofile">\n    <!-- //name -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-9>\n          <ion-row>\n            Name\n          </ion-row>\n          <ion-row>\n            {{personal.name}}\n          </ion-row>\n        </ion-col>\n        <ion-col col-3>\n          <ion-avatar item-right>\n            <img [src]="personal.img">\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- mobile Numbe  -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <!-- <ion-row> -->\n         Mobile Number\n          <!-- </ion-row> -->\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder=" enter your number">{{personal.contact_number}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- Email-id -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Email_id\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="Emter your gmail id">{{personal.Email_id}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- Gender -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Gender\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="add gender">{{personal.Gender}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- dateofbirth -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n           Date of birth\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="Emter your date_of_birth">{{personal.Date_of_birth}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- bloodgroup -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Blood Group\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="Emter your date_of_birth">{{personal.Blood_group}}+</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- marital status -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Martial Status\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="add marital status">{{personal.Martialstatus}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- Height -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Height\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="add Height">{{personal.Height}} inches</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- Weight -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Weight\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="add Weight">{{personal.Weight}} (kg)</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- Emergency Contact -->\n    <ion-item>\n      <ion-row>\n        <ion-col col-8>\n          <ion-row>\n            Emergency Contact\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <p placeholder="add emergency details">{{personal.Emergency_contact}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- Location -->\n    <ion-item>\n        <ion-row>\n          <ion-col col-8>\n            <ion-row>\n           Location\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <p placeholder="add Location">{{personal.Location}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic-doctor-app\src\pages\personal\personal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], PersonalPage);
    return PersonalPage;
    var _a, _b;
}());

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LifestylePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LifestylePage = /** @class */ (function () {
    function LifestylePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LifestylePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LifestylePage');
    };
    LifestylePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lifestyle',template:/*ion-inline-start:"E:\ionic-doctor-app\src\pages\lifestyle\lifestyle.html"*/'<!--\n  Generated template for the LifestylePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>lifestyle</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content >\n    <ion-list>\n        <ion-item>\n          <ion-row>\n            <ion-col col-8>\n              <ion-row>\n                Smoking Habits\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <p placeholder="add details">i dont\'t smoke</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col col-8>\n              <ion-row>\n                  Alcolhol consumption\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <p placeholder="add details">non-drinker</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col col-8>\n              <ion-row>\n               Activity level\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <p placeholder="add details">Active(High)</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col col-8>\n              <ion-row>\n               Food preference \n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <p placeholder="add details">i dont\'t smoke</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row>\n            <ion-col col-8>\n              <ion-row>\n               Profession\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <p placeholder="add details">it Professional</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic-doctor-app\src\pages\lifestyle\lifestyle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LifestylePage);
    return LifestylePage;
}());

//# sourceMappingURL=lifestyle.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalPage = /** @class */ (function () {
    function MedicalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medical = [];
    }
    MedicalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalPage');
        this.medical = [
            { info: "medical", Allergies: "No", Current_Medications: "No", Past_Medications: "No",
                Chronic_Diseases: "No", injuries: "No", Surgiries: "No" }
        ];
    };
    MedicalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medical',template:/*ion-inline-start:"E:\ionic-doctor-app\src\pages\medical\medical.html"*/'<!--\n  Generated template for the MedicalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>medical</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n    <ion-list *ngFor="let medi of medical">\n        <!-- Allergies -->\n      <ion-item>\n        <ion-row>\n          <ion-col col-8>\n            <ion-row>\n              Allergies\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <p placeholder="add allergies">{{medi.Allergies}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <!-- Current Medications -->\n      <ion-item>\n        <ion-row>\n          <ion-col col-8>\n            <ion-row>\n              Current Medications\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <p placeholder="add Medications">{{medi.Current_Medications}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <!-- Past Medications -->\n      <ion-item>\n        <ion-row>\n          <ion-col col-8>\n            <ion-row>\n              Past Medications\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <p placeholder="Past Medications">{{medi.Past_Medications}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <!-- Chronic Diseases -->\n      <ion-item>\n        <ion-row>\n          <ion-col col-8>\n            <ion-row>\n              Chronic Diseases\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <p placeholder="add disease">{{medi.Chronic_Diseases}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <!-- Injuries -->\n      <ion-item>\n        <ion-row>\n          <ion-col col-8>\n            <ion-row>\n              Injuries\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <p placeholder="add incident">{{medi.injuries}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <!-- Surgeries -->\n      <ion-item>\n          <ion-row>\n            <ion-col col-8>\n              <ion-row>\n             Surgeries\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <p placeholder="add addsurgeries">{{medi.Surgiries}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic-doctor-app\src\pages\medical\medical.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MedicalPage);
    return MedicalPage;
}());

//# sourceMappingURL=medical.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appointment/appointment.module": [
		679,
		4
	],
	"../pages/lifestyle/lifestyle.module": [
		680,
		3
	],
	"../pages/medical/medical.module": [
		681,
		2
	],
	"../pages/patientdetails/patientdetails.module": [
		682,
		1
	],
	"../pages/personal/personal.module": [
		683,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_appointment__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.backgrounds = [
            'assets/imgs/background/background-1.jpg',
            'assets/imgs/background/background-2.jpg',
            'assets/imgs/background/background-3.jpg',
            'assets/imgs/background/background-4.jpg'
        ];
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    HomePage.prototype.openResetPassword = function () {
        console.log('Reset password clicked');
    };
    HomePage.prototype.doLogin = function () {
        if (!this.loginForm.valid) {
            console.log('Invalid or empty data');
        }
        else {
            var userEmail = this.loginForm.value.email;
            var userPassword = this.loginForm.value.password;
            console.log('user data', userEmail, userPassword);
        }
    };
    HomePage.prototype.navappointmentpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_appointment__["a" /* AppointmentPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic-doctor-app\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="login-container">\n\n    <img class="logo" src="assets/imgs/logo/logo_original.png" />\n\n    <form (submit)="doLogin()">\n\n      <strong>Login:</strong>\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password"></ion-input>\n\n      </ion-item>\n\n      <button ion-button margin color="danger" (click)="navappointmentpage()">LOGIN</button>\n\n      <p (click)="openResetPassword()"><strong>Forgot your password?</strong></p>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic-doctor-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_patientdetails_patientdetails__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lifestyle_lifestyle__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_medical_medical__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Providers_providerservice_providerservice__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Http, Response, RequestOptions, Headers } from '@angular/http';








//appointment page 

//patientdetails page

//tabs




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_patientdetails_patientdetails__["a" /* PatientdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_medical_medical__["a" /* MedicalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestyle/lifestyle.module#LifestylePageModule', name: 'LifestylePage', segment: 'lifestyle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical/medical.module#MedicalPageModule', name: 'MedicalPage', segment: 'medical', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patientdetails/patientdetails.module#PatientdetailsPageModule', name: 'PatientdetailsPage', segment: 'patientdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // HttpClient,
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_patientdetails_patientdetails__["a" /* PatientdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_medical_medical__["a" /* MedicalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic-doctor-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\ionic-doctor-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map