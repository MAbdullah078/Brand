(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<preloader-full></preloader-full>\r\n<app-loader></app-loader>\r\n<div class=\"page-center\">\r\n  <div class=\"reset-pass\">\r\n    <div class=\"container-fluid\">\r\n      <form class=\"sign-box reset-password-box\">\r\n        <!--<div class=\"sign-avatar\">\r\n            <img src=\"img/avatar-sign.png\" alt=\"\">\r\n        </div>-->\r\n        <!-- <header class=\"sign-title\">Reset Password</header>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"E-Mail or Phone\" name = \"email_phone\" [(ngModel)]=\"email\"/>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-rounded\" >Reset</button>\r\n        or<a [routerLink]=\"['/confirm-password']\">Sign in</a> -->\r\n        <div class=\"card custom-width\">\r\n            <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                <h4 class=\"card-title\">\r\n                    <label class=\"signin-heading\">Reset Password</label></h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"E-Mail or Phone\" name = \"email_phone\" [(ngModel)]=\"email\"/>\r\n              \r\n              <button type=\"submit\" class=\"btn-login\" (click)=\"reset_password()\">Reset</button>\r\n              <label>Or</label>\r\n              <a class=\"btn-login\" [routerLink]=\"['/confirm-password']\">Sign in</a>\r\n            </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div><!--.page-center-->\r\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {HttpService} from '../serv/http-service';




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        // this.sub = this.route.params.subscribe(params => {
        //     this.code = params['code'];
        //   });
        window.scroll(0, 0);
    };
    ResetPasswordComponent.prototype.reset_password = function () {
        // alert('code')
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["Config"].api + '/forget_password/', JSON.stringify({
            email: this.email
        }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Reset password email sent', '', 'success');
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Wrong email/username', '', 'error');
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.module */ "./src/app/loader/loader.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _reset_password_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.routing */ "./src/app/reset-password/reset-password.routing.ts");
/* harmony import */ var _components_preloader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/preloader.module */ "./src/app/components/preloader.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_reset_password_routing__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _components_preloader_module__WEBPACK_IMPORTED_MODULE_7__["PreloaderModule"]],
            declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/reset-password/reset-password.routing.ts ***!
  \**********************************************************/
/*! exports provided: ResetPasswordRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutes", function() { return ResetPasswordRoutes; });
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/reset-password/reset-password.component.ts");

var ResetPasswordRoutes = [{
        path: '',
        component: _reset_password_component__WEBPACK_IMPORTED_MODULE_0__["ResetPasswordComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module.js.map