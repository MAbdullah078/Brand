(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-1-center{\n    width: 35%;\n    margin: 120px auto;\n}\n.profile-form{\n    width: 90%;\n    margin: 60px auto;\n}\n.btn-file input[type=file] {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n.btn-file {\n    display: inline-block;\n    text-transform: capitalize;\n    padding: 8px 11px;\n    position: relative;\n    font-weight: 600;\n    background: linear-gradient(90deg,#a91f73 0,#ff4270 100%);\n    border-radius: 50px;\n    color: #fff;\n    font-size: 16px;\n    cursor: pointer;\n    border: 1px solid #fff;\n    transition: .4s;\n    vertical-align: top;\n}\n.login-form-1{\n    background: #fafafa;\n    width: 50%;\n    padding: 30px;\n    border-radius: 5px;\n    box-shadow: 0px 5px 10px #ccc;\n    margin: 0 auto;\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n}\n.login-form-1-header{\n    position: relative;\n    background: linear-gradient(90deg,#a91f73 0,#ff4270 100%);\n    padding: 10px;\n    box-sizing: border-box;\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n    margin-top: -60px;\n    width: 100%;\n    border-radius: 5px;\n}\n.login-form-1-header h3{\n    text-align: center;\n    margin-bottom: 6px !important;\n    color:#fff;\n}\n.logic-from-1-sl{\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n.logic-from-1-sl > li{\n    list-style: none;\n    margin: 15px 25px 15px 25px;\n    display: inline-block;\n}\n.logic-from-1-sl > li > a{\n    color: white;\n    text-decoration: none;\n    font-size: 40px;\n}\n.logic-from-1-sl > li > a > .fa-facebook:hover{\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    transition: 0.5s;\n    color: #428bca;\n}\n.logic-from-1-sl > li > a > .fa-twitter:hover{\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    transition: 0.5s;\n    color: #5bc0de;\n}\n.logic-from-1-sl > li > a > .fa-google-plus:hover {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    transition: 0.5s;\n    color: #d34836;\n}\n.login-form-1-body{\n    padding-top: 30px;\n\n\n}\n.login-form-1-body button{\n    display: block;\n    /* border: none; */\n    background: #000;\n    padding: 10px;\n    color: #fff;\n    border-radius: 30px;\n    box-sizing: border-box;\n    font-size: 17px;\n    /* font-weight: 500; */\n}\n.login-form-1-body button:hover{\n    box-shadow: 0px 7px 15px #a5a5a5;\n    transition: 0.5s all;\n}\n.login-form-1-body > a{\n    text-align: center;\n    margin: 10px 0 5px 0;\n    font-size: 18px;\n    color: #3f51b5;\n    display:block;\n}\n.login-form-1-body > a:hover{\n    color: #25B7D3;\n    text-decoration: underline;\n}\n.login-form-1-body > div{\n    font-size: 18px;\n    padding: 0px;\n}\n.login-form-1-body > div h4{\n    margin: 0px;\n}\n.login-form-1-body > div > a{\n    color: #cc0000;\n}\n.login-form-1-body > div > a:hover{\n    color: #25B7D3;\n    text-decoration: underline;\n}\n.login-form-1-body input {\n    margin: 10px 0px;\n    font-size: 21px;\n}\n.login-form-1-body h3 {\n    color: #616161;\n    font-size: 17px;\n}\n.signup-header-text{\n    text-align: center;\n    font-size: 22px;\n}\n.profile-form-btn{\n    width: 100%;\n    background:#000;\n    border: none;\n    color: #ffffff;\n    padding: 14px;\n    font-weight: 600;\n    border-radius: 36px;\n    font-size: 16px;\n}\n.profile-form-btn:hover{\n    background: #cc0000;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"login-form-1-center profile-form\">\n    <form  class=\"login-form-1\" role=\"form\" #form=\"ngForm\"  name=\"form\" novalidate>\n      <div class=\"login-form-1-header \" style=\"background-color: black\">\n        <h3>Brand Profile </h3>\n        <!--<ul class=\"logic-from-1-sl\">-->\n        <!--<li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>-->\n        <!--<li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>-->\n        <!--<li><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>-->\n        <!--</ul>-->\n      </div>\n      <div class=\"login-form-1-body\">\n\n\n        <div  class=\"row\">\n          <div class=\"col-md-12 text-center\">\n          <!----><img  class=\"img-responsive\" height=\"200px\" style=\"border-radius: 100px\" data-target=\".bd-example-modal-lg3\" data-toggle=\"modal\"  [src]=\"profile_image\"  onerror=\"this.src='../../assets/img/Blank_Avatar.png'\" >\n          <!--<input type=\"file\"  class=\"upload-input\" style=\"opacity: 0;\"  (change)=\"onChange($event)\" accept=\"image/*\">-->\n\n          <!--<button class=\"btn btn-rounded\" value=\"\">Upload Picture</button>-->\n          </div>\n        </div>\n        <div class=\"row \">\n          <div class=\"col-md-12 text-center mt-3\">\n                        <span class=\"btn-file\">\n                Upload Image\n                <input type=\"file\"  class=\"upload-input\" (change)=\"onChange($event)\" accept=\"image/*\">\n              </span>\n          </div>\n        </div>\n\n        <!--<div class=\"form-group profile-group label-overlay\">-->\n          <!--<h4 for=\"title\" title=\"You Can't Change Username\">Name</h4>-->\n          <!--<input type=\"text\" class=\"form-control\"name=\"username\" value=\"{{currentUser.first_name}}\"   placeholder=\"User Name\" disabled >-->\n        <!--</div>-->\n        <!-- <div class=\"form-group profile-group label-overlay\"> -->\n          <!-- <h5 ><i class=\"fas fa-user\"></i>User Name</h5> -->\n          <!-- <h5>{{currentUser.username}}</h5> -->\n          <!-- <input type=\"text\"  class=\"form-control\"   pattern=\"[A-Za-z]+ ?\" value=\"{{currentUser.username}}\" placeholder=\"First Name\" > -->\n                  <!-- </div> -->\n\n        <!-- <input type=\"submit\" [disabled]=\"!form.dirty\" value=\"Update Profile\" class=\"profile-form-btn\"  > -->\n      </div>\n    </form>\n  </div>\n</div>\n\n<div aria-hidden=\"true\" aria-labelledby=\"mySmallModalLabel\" class=\"modal fade bd-example-modal-lg3\" role=\"dialog\" tabindex=\"-1\">\n  <div  class=\"modal-dialog modal-lg\">\n    <div  class=\"modal-content\">\n      <img  class=\"img-responsive\" [src]=\"profile_image\">\n    </div>\n  </div>\n</div>\n\n<!--<img  src=\"../../assets/img/report/photo_1430169140972.jpg\" style=\"cursor: pointer\">-->\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(obj) {
        this.obj = obj;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log('Profile Picture is.....', this.currentUser.profile_image);
        this.loadprofilepic();
        window.scroll(0, 0);
    };
    ProfileComponent.prototype.onChange = function ($event) {
        var _this = this;
        this.image = $event.target.files[0];
        //
        // console.log('Event on OnChange',$event.target.files[0]);
        console.log('Event on OnChange', this.image);
        this.obj.onUpload(this.image).subscribe(function (response) {
            // console.log('set any success actions...');
            _this.loadprofilepic();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                type: 'success',
                title: 'Profile PIcture Updated.\n' +
                    '\n',
                // text: 'Please check your username or password',
                showConfirmButton: false,
                width: '512px',
                timer: 2000
            });
        }, function (error) {
            console.log('set any error actions...');
        });
    };
    ProfileComponent.prototype.loadprofilepic = function () {
        var _this = this;
        this.obj.get_profile_pic().subscribe(function (observer) {
            // this.profile_image= observer.Message.path;
            _this.profile_image = observer['message'];
            console.log('Result is ', _this.profile_image);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.routing */ "./src/app/profile/profile.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_profile_routing__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.routing.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.routing.ts ***!
  \********************************************/
/*! exports provided: ProfileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutes", function() { return ProfileRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");

var ProfileRoutes = [{
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map