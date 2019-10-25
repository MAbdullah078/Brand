(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-change-password-module"],{

/***/ "./src/app/reset-password/change-password.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/change-password.component.ts ***!
  \*************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.loaded = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.token = params['token']; // (+) converts string 'id' to a number
            // alert(params['query']);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/api-token-verify/', JSON.stringify({
                "token": _this.token
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.loaded = true;
            }, function (error) {
                _this.router.navigate(['/page-not-found']);
            });
            // In a real app: dispatch action to load the details here.
        });
    };
    ChangePasswordComponent.prototype.ngOnDestroy = function () {
        // localStorage.removeItem('navigated_list');
        this.sub.unsubscribe();
    };
    ChangePasswordComponent.prototype.reset_pass = function () {
        var _this = this;
        if (!this.pass1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Password is required', '', 'error');
        }
        else if (this.pass1 !== this.pass2) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Password not same', '', 'error');
        }
        else {
            // alert(params['query']);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Authorization': 'JWT ' + this.token });
            headers.append('Content-Type', 'application/json');
            this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/new_password/', JSON.stringify({
                "password": this.pass1
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Password changed successfully', '', 'success').then(function () { _this.router.navigate(['/login']); });
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Server error', '', 'error');
            });
        }
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: "\n      <preloader-full></preloader-full>\n\n      <div class=\"page-center\">\n          <div class=\"page-center-in\">\n              <div class=\"container-fluid\">\n                  <form class=\"sign-box reset-password-box\">\n                      <!--<div class=\"sign-avatar\">\n                          <img src=\"img/avatar-sign.png\" alt=\"\">\n                      </div>-->\n                      <header class=\"sign-title\">New Password</header>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" name = \"pass1\" placeholder=\"New Password\" [(ngModel)] = \"pass1\"/>\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" name = \"pass2\" placeholder=\"Confirm New Password\" [(ngModel)] = \"pass2\"/>\n                      </div>\n                      <button type=\"submit\" class=\"btn btn-rounded btn-block\" (click)=\"reset_pass()\">Submit</button>\n                  </form>\n              </div>\n          </div>\n      </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/change-password.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/reset-password/change-password.module.ts ***!
  \**********************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password.component */ "./src/app/reset-password/change-password.component.ts");
/* harmony import */ var _change_password_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password.routing */ "./src/app/reset-password/change-password.routing.ts");
/* harmony import */ var _components_preloader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/preloader.module */ "./src/app/components/preloader.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_change_password_routing__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_preloader_module__WEBPACK_IMPORTED_MODULE_6__["PreloaderModule"]],
            declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ }),

/***/ "./src/app/reset-password/change-password.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/reset-password/change-password.routing.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRoutes", function() { return ChangePasswordRoutes; });
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component */ "./src/app/reset-password/change-password.component.ts");

var ChangePasswordRoutes = [{
        path: '',
        component: _change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=reset-password-change-password-module.js.map