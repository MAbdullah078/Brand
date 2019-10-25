(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error400-error400-module"],{

/***/ "./src/app/error400/error400.component.css":
/*!*************************************************!*\
  !*** ./src/app/error400/error400.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html{height:100%}body{display:flex;align-items:center;justify-content:center}.page-error-box{background:#fff;border:1px solid #d8e2e7;border-radius:5px;padding:50px 30px 55px;text-align:center;margin:0 auto;width:100%;max-width:475px;color:#919fa9;line-height:1}.page-error-box .error-code{font-size:9.375rem;font-weight:600}.page-error-box .error-title{font-size:2.25rem;font-weight:600;margin:0 0 1.5rem}@media (max-width:767px){.page-error-box{padding:25px 15px}.page-error-box .error-code{font-size:5.5rem}.page-error-box .error-title{font-size:1.5rem}}"

/***/ }),

/***/ "./src/app/error400/error400.component.html":
/*!**************************************************!*\
  !*** ./src/app/error400/error400.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-error-box\">\r\n  <div class=\"error-code\">404</div>\r\n  <div class=\"error-title\">Page not found</div>\r\n  <a [routerLink]=\"['/dashboard']\" class=\"btn btn-rounded\">Main page</a>\r\n</div>"

/***/ }),

/***/ "./src/app/error400/error400.component.ts":
/*!************************************************!*\
  !*** ./src/app/error400/error400.component.ts ***!
  \************************************************/
/*! exports provided: Error400Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400Component", function() { return Error400Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error400Component = /** @class */ (function () {
    function Error400Component() {
    }
    Error400Component.prototype.ngOnInit = function () {
    };
    Error400Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error400',
            template: __webpack_require__(/*! ./error400.component.html */ "./src/app/error400/error400.component.html"),
            styles: [__webpack_require__(/*! ./error400.component.css */ "./src/app/error400/error400.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Error400Component);
    return Error400Component;
}());



/***/ }),

/***/ "./src/app/error400/error400.module.ts":
/*!*********************************************!*\
  !*** ./src/app/error400/error400.module.ts ***!
  \*********************************************/
/*! exports provided: Error400Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400Module", function() { return Error400Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error400_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error400.routing */ "./src/app/error400/error400.routing.ts");
/* harmony import */ var _error400_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error400.component */ "./src/app/error400/error400.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Error400Module = /** @class */ (function () {
    function Error400Module() {
    }
    Error400Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_error400_routing__WEBPACK_IMPORTED_MODULE_3__["Error400Routes"])],
            declarations: [_error400_component__WEBPACK_IMPORTED_MODULE_4__["Error400Component"]]
        })
    ], Error400Module);
    return Error400Module;
}());



/***/ }),

/***/ "./src/app/error400/error400.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/error400/error400.routing.ts ***!
  \**********************************************/
/*! exports provided: Error400Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400Routes", function() { return Error400Routes; });
/* harmony import */ var _error400_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error400.component */ "./src/app/error400/error400.component.ts");

var Error400Routes = [{
        path: '',
        component: _error400_component__WEBPACK_IMPORTED_MODULE_0__["Error400Component"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=error400-error400-module.js.map