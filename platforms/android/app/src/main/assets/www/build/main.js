webpackJsonp([7],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_providerservice_providerservice__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upcomingbookings_upcomingbookings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pastbookings_pastbookings__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.appointmentdetails = [];
        this.upcomingbooking = [];
        this.pastbooking = [];
        this.tab1root = __WEBPACK_IMPORTED_MODULE_4__upcomingbookings_upcomingbookings__["a" /* UpcomingbookingsPage */];
        this.tab2root = __WEBPACK_IMPORTED_MODULE_5__pastbookings_pastbookings__["a" /* PastbookingsPage */];
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AppointmentPage');
        // this.todaysappointment();
        this.subscription = __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs__["Observable"].interval(5000).subscribe(function (x) {
            _this.todaysappointment();
        });
    };
    AppointmentPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppointmentPage.prototype.todaysappointment = function () {
        var _this = this;
        this.api.patientdetails()
            .subscribe(function (resp) {
            if (resp.Message_Code == "ASS") {
                _this.appointmentdetails = resp.output;
                _this.upcomingbooking.length = 0;
                _this.pastbooking.length = 0;
                for (var i = 0; i < _this.appointmentdetails.length; i++) {
                    if (_this.appointmentdetails[i].token_status == "Booked") {
                        _this.upcomingbooking.push(_this.appointmentdetails[i]);
                    }
                    else {
                        _this.pastbooking.push(_this.appointmentdetails[i]);
                    }
                }
                console.log("booked tokensssss", _this.upcomingbooking);
                console.log("consulted tokensssss", _this.pastbooking);
                console.log("patient detailsss", _this.appointmentdetails);
            }
        });
    };
    AppointmentPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation');
        this.api.patientdetails()
            .subscribe(function (resp) {
            if (resp.Message_Code == "ASS") {
                _this.appointmentdetails = resp.output;
                _this.upcomingbooking.length = 0;
                _this.pastbooking.length = 0;
                for (var i = 0; i < _this.appointmentdetails.length; i++) {
                    if (_this.appointmentdetails[i].token_status == "Booked") {
                        _this.upcomingbooking.push(_this.appointmentdetails[i]);
                    }
                    else {
                        _this.pastbooking.push(_this.appointmentdetails[i]);
                    }
                }
                console.log("booked tokensssss", _this.upcomingbooking);
                console.log("consulted tokensssss", _this.pastbooking);
                console.log("patient detailsss", _this.appointmentdetails);
                refresher.complete();
            }
        });
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\appointment\appointment.html"*/'<ion-content class="background-color">\n\n  <!-- <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher> -->\n\n  <ion-tabs class="relative" color="primary" tabsPlacement="top">\n\n    <ion-tab tabTitle="Upcoming Bookings" [root]="tab1root" [rootParams]="upcomingbooking"></ion-tab>\n\n    <ion-tab tabTitle="Past Bookings" [root]="tab2root" [rootParams]="pastbooking"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\appointment\appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingbookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patientdetails_patientdetails__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_providerservice_providerservice__ = __webpack_require__(55);
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
 * Generated class for the UpcomingbookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpcomingbookingsPage = /** @class */ (function () {
    function UpcomingbookingsPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.upcomingbooking = [];
        this.records = true;
        this.appointment = {
            "checked": false,
        };
        this.navParams = navParams;
        this.upcomingbooking = this.navParams.data;
    }
    UpcomingbookingsPage.prototype.ionViewDidLoad = function () {
        if (this.upcomingbooking.length == 0) {
            this.records = false;
        }
        console.log('ionViewDidLoad UpcomingbookingsPage');
    };
    UpcomingbookingsPage.prototype.navpatiententdetails = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__patientdetails_patientdetails__["a" /* PatientdetailsPage */], { "patientdetails": param });
        console.log("parammmmm", param);
    };
    UpcomingbookingsPage.prototype.updateappointment = function (appointment) {
        var _this = this;
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
                _this.api.updateappoinment('Cancel', appointment.app_id)
                    .subscribe(function (resp) {
                    if (resp.Message_Code == "RUS") {
                        console.log("Patient Cancelled Successfully");
                    }
                });
            }
        });
        alert.addButton({
            text: 'CheckOut',
            handler: function (data) {
                console.log("Appointment checkedout", data);
                appointment.flag = true;
                _this.api.updateappoinment('Checkout', appointment.app_id)
                    .subscribe(function (resp) {
                    if (resp.Message_Code == "RUS") {
                        console.log("Patient Checkout Successfully");
                    }
                });
            }
        });
        alert.present();
        this.appointment.checked = false;
    };
    UpcomingbookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upcomingbookings',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\upcomingbookings\upcomingbookings.html"*/'<ion-content>\n\n    <h4 *ngIf="!records" style="text-align: center;height: 100%;margin-top: 70%;">No Records Found</h4>\n\n    <ion-card *ngFor="let appointment of upcomingbooking" class="border-redius-15" (click)="navpatiententdetails(appointment)">\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-3>\n\n            <ion-avatar item-left>\n\n              <img  class="borde-redus-100" src="../../assets/imgs/background/background-2.jpg" style="height: 70px;\n\n              ">\n\n            </ion-avatar>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-6>\n\n            <p>User Name:<b>{{appointment.user_name}}</b></p>\n\n            <p>Token No:<b>{{appointment.token_no}}</b></p>\n\n            <p>Time:<b>{{appointment.token_time |date:"HH:mm a"}}</b></p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n              <ion-toggle color="primary" (ionChange)="updateappointment(appointment)" [checked]="appointment.flag"></ion-toggle>\n\n          </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\upcomingbookings\upcomingbookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]])
    ], UpcomingbookingsPage);
    return UpcomingbookingsPage;
}());

//# sourceMappingURL=upcomingbookings.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
        this.patientdetails = this.navParams.data.patientdetails;
        console.log("personal profileeee******", this.patientdetails);
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\personal\personal.html"*/'<ion-content>\n\n<ion-list>\n\n    <!-- //name -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n            Name\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          {{patientdetails.user_name}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- mobile Numbe  -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n         Mobile Number\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder=" enter your number">{{patientdetails.mobile}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- Email-id -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Email_id\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="Emter your gmail id">{{patientdetails.email}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- Gender -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Gender\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="add gender">{{patientdetails.gender}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- dateofbirth -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n           Date of birth\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="Emter your date_of_birth">{{patientdetails.birthday}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- bloodgroup -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Blood Group\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="Emter your date_of_birth">{{patientdetails.blood_group}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- marital status -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Martial Status\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="add marital status">{{patientdetails.married_status}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- Height -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Height\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="add Height">{{patientdetails.height}} cm</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- Weight -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Weight\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="add Weight">{{patientdetails.weight}} (kg)</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- Emergency Contact -->\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            Emergency Contact\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p placeholder="add emergency details">{{patientdetails.emergency_contact_mobile}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <!-- Location -->\n\n    <ion-item>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-row>\n\n           Location\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <p placeholder="add Location">{{patientdetails.area}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\personal\personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PersonalPage);
    return PersonalPage;
}());

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        this.lyfstyledetails = {};
    }
    LifestylePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LifestylePage');
        this.lyfstyledetails = this.navParams.data.patientdetails;
        console.log("personal profileeee******", this.lyfstyledetails);
    };
    LifestylePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lifestyle',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\lifestyle\lifestyle.html"*/'<ion-content >\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-row>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n                Smoking Habits\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <p placeholder="add details">{{lyfstyledetails.smoking_habits}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-row>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n                  Alcolhol consumption\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <p placeholder="add details">{{lyfstyledetails.alcohol_consumption}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-row>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n               Activity level\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <p placeholder="add details">{{lyfstyledetails.activity_level}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-row>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n               Food preference \n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <p placeholder="add details">{{lyfstyledetails.food_preference}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-row>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n               Profession\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <p placeholder="add details">{{lyfstyledetails.occupation}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\lifestyle\lifestyle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LifestylePage);
    return LifestylePage;
}());

//# sourceMappingURL=lifestyle.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        this.medicaldetails = {};
    }
    MedicalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalPage');
        this.medicaldetails = this.navParams.data.patientdetails;
        console.log("medical profileeee******", this.medicaldetails);
    };
    MedicalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medical',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\medical\medical.html"*/'<!--\n\n  Generated template for the MedicalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>medical</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <!-- Allergies -->\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-row>\n\n              Allergies\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <p placeholder="add allergies">{{medicaldetails.allergies}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <!-- Current Medications -->\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-row>\n\n              Current Medications\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <p placeholder="add Medications">{{medicaldetails.current_medications}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <!-- Past Medications -->\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-row>\n\n              Past Medications\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <p placeholder="Past Medications">{{medicaldetails.past_medications}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <!-- Chronic Diseases -->\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-row>\n\n              Chronic Diseases\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <p placeholder="add disease">{{medicaldetails.chronic_diseases}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <!-- Injuries -->\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-row>\n\n              Injuries\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <p placeholder="add incident">{{medicaldetails.injuries}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <!-- Surgeries -->\n\n      <ion-item>\n\n          <ion-row>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n             Surgeries\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <p placeholder="add addsurgeries">{{medicaldetails.surgeries}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\medical\medical.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MedicalPage);
    return MedicalPage;
}());

//# sourceMappingURL=medical.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastbookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patientdetails_patientdetails__ = __webpack_require__(86);
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
 * Generated class for the PastbookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PastbookingsPage = /** @class */ (function () {
    function PastbookingsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.pastbooking = [];
        this.navParams = navParams;
        this.pastbooking = this.navParams.data;
        console.log("DATA SUCCESS", this.pastbooking);
    }
    PastbookingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PastbookingsPage');
    };
    PastbookingsPage.prototype.navpatiententdetails = function (param) {
        var pastbooking = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__patientdetails_patientdetails__["a" /* PatientdetailsPage */], { "patientdetails": param });
        pastbooking.present();
        console.log("parammmmm", param);
    };
    PastbookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pastbookings',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\pastbookings\pastbookings.html"*/'<ion-content>\n\n    <ion-card *ngFor="let appointment of pastbooking" class="border-redius-15" (click)="navpatiententdetails(appointment)">\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-3>\n\n            <ion-avatar item-left>\n\n              <img  class="borde-redus-100" src="../../assets/imgs/background/background-2.jpg" style="height: 70px;">\n\n            </ion-avatar>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-6>\n\n            <p>User Name:<b>{{appointment.user_name}}</b></p>\n\n            <p>Token No:<b>{{appointment.token_no}}</b></p>\n\n            <p>Time:<b>{{appointment.token_time |date:"HH:mm a"}}</b></p>\n\n          </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\pastbookings\pastbookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], PastbookingsPage);
    return PastbookingsPage;
}());

//# sourceMappingURL=pastbookings.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appointment/appointment.module": [
		681,
		6
	],
	"../pages/lifestyle/lifestyle.module": [
		682,
		5
	],
	"../pages/medical/medical.module": [
		683,
		4
	],
	"../pages/pastbookings/pastbookings.module": [
		684,
		3
	],
	"../pages/patientdetails/patientdetails.module": [
		685,
		2
	],
	"../pages/personal/personal.module": [
		686,
		1
	],
	"../pages/upcomingbookings/upcomingbookings.module": [
		687,
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_appointment__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_providerservice_providerservice__ = __webpack_require__(55);
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
    function HomePage(navCtrl, toastCtrl, api, formBuilder) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.formBuilder = formBuilder;
        this.backgrounds = [
            'assets/imgs/background/background-1.jpg',
            'assets/imgs/background/background-2.jpg',
            'assets/imgs/background/background-3.jpg',
            'assets/imgs/background/background-4.jpg'
        ];
        this.loginobj = {};
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
    HomePage.prototype.navappointmentpage = function (param, param1) {
        var _this = this;
        this.api.login(param, param1)
            .subscribe(function (resp) {
            if (resp.Message_Code == "RUS") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_appointment__["a" /* AppointmentPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Please Enter correct credentials',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="login-container">\n\n    <img class="logo" src="assets/imgs/logo/logo_original.png" />\n\n    <ion-list inset>\n\n      <p>Login:</p>\n\n      <ion-item>\n\n        <ion-input type="number" placeholder="Business Id" [(ngModel)]="business_id"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Doctor Id" [(ngModel)]="doctor_id"></ion-input>\n\n      </ion-item>\n\n      <button ion-button margin color="danger" (click)="navappointmentpage(business_id,doctor_id)">LOGIN</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appointment_appointment__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_patientdetails_patientdetails__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_personal_personal__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lifestyle_lifestyle__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_medical_medical__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_upcomingbookings_upcomingbookings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pastbookings_pastbookings__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Providers_providerservice_providerservice__ = __webpack_require__(55);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_upcomingbookings_upcomingbookings__["a" /* UpcomingbookingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pastbookings_pastbookings__["a" /* PastbookingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                }, {
                    links: [
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestyle/lifestyle.module#LifestylePageModule', name: 'LifestylePage', segment: 'lifestyle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical/medical.module#MedicalPageModule', name: 'MedicalPage', segment: 'medical', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pastbookings/pastbookings.module#PastbookingsPageModule', name: 'PastbookingsPage', segment: 'pastbookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patientdetails/patientdetails.module#PatientdetailsPageModule', name: 'PatientdetailsPage', segment: 'patientdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcomingbookings/upcomingbookings.module#UpcomingbookingsPageModule', name: 'UpcomingbookingsPage', segment: 'upcomingbookings', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_13__pages_medical_medical__["a" /* MedicalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_upcomingbookings_upcomingbookings__["a" /* UpcomingbookingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pastbookings_pastbookings__["a" /* PastbookingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(215);
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
    ProviderserviceProvider.prototype.login = function (param, param1) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            "doctor_id": param1,
            "business_id": param,
            "login_status": "login"
        };
        return this.http.post('https://doctorappnew.herokuapp.com/insert_doctor_login', body, options)
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
    ProviderserviceProvider.prototype.updateappoinment = function (param, param1) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            "token_status": param,
            "appointment_id": param1
        };
        return this.http.post('https://doctorappnew.herokuapp.com/UpdateAppoinment', body, options)
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

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(351);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifestyle_lifestyle__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medical_medical__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_providerservice_providerservice__ = __webpack_require__(55);
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
        this.patientdetailss = this.navParams;
        console.log("patientdetails########", this.patientdetailss);
    }
    PatientdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientdetailsPage');
        this.patientdetailsarr = this.navParams.data.patientdetails;
    };
    PatientdetailsPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    PatientdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patientdetails',template:/*ion-inline-start:"E:\Ionic\ionic-doctor-app\src\pages\patientdetails\patientdetails.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-row>\n\n        <ion-col col-11>\n\n            <ion-title>Patient Details</ion-title>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n            <ion-icon name="close" style="color:white" (click)="closeModal()"></ion-icon>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n\n    <img src="../../assets/imgs/background/background-4.jpg" />\n\n    <div class="card-title">\n\n      {{patientdetailsarr.user_name}}\n\n    </div>\n\n    <div class="card-subtitle">\n\n      {{patientdetailsarr.mobile}}\n\n    </div>\n\n  </ion-card>\n\n  <ion-tabs class="relative" color="primary" tabsPlacement="top">\n\n    <ion-tab tabTitle="Personal" [root]="tab1root" [rootParams]="patientdetailss"></ion-tab>\n\n    <ion-tab tabTitle="Medical" [root]="tab2root" [rootParams]="patientdetailss"></ion-tab>\n\n    <ion-tab tabTitle="Lifestyle" [root]="tab3root" [rootParams]="patientdetailss"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\ionic-doctor-app\src\pages\patientdetails\patientdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__Providers_providerservice_providerservice__["a" /* ProviderserviceProvider */]])
    ], PatientdetailsPage);
    return PatientdetailsPage;
}());

//# sourceMappingURL=patientdetails.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map