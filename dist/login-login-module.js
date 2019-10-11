(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/angular2-jwt/angular2-jwt.js":
/*!***************************************************!*\
  !*** ./node_modules/angular2-jwt/angular2-jwt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
__webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs-compat/_esm5/add/observable/fromPromise.js");
__webpack_require__(/*! rxjs/add/observable/defer */ "./node_modules/rxjs-compat/_esm5/add/observable/defer.js");
__webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
var AuthConfigConsts = (function () {
    function AuthConfigConsts() {
    }
    return AuthConfigConsts;
}());
AuthConfigConsts.DEFAULT_TOKEN_NAME = 'token';
AuthConfigConsts.DEFAULT_HEADER_NAME = 'Authorization';
AuthConfigConsts.HEADER_PREFIX_BEARER = 'Bearer ';
exports.AuthConfigConsts = AuthConfigConsts;
var AuthConfigDefaults = {
    headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
    headerPrefix: null,
    tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
    tokenGetter: function () { return localStorage.getItem(AuthConfigDefaults.tokenName); },
    noJwtError: false,
    noClientCheck: false,
    globalHeaders: [],
    noTokenScheme: false
};
/**
 * Sets up the authentication configuration.
 */
var AuthConfig = (function () {
    function AuthConfig(config) {
        config = config || {};
        this._config = objectAssign({}, AuthConfigDefaults, config);
        if (this._config.headerPrefix) {
            this._config.headerPrefix += ' ';
        }
        else if (this._config.noTokenScheme) {
            this._config.headerPrefix = '';
        }
        else {
            this._config.headerPrefix = AuthConfigConsts.HEADER_PREFIX_BEARER;
        }
        if (config.tokenName && !config.tokenGetter) {
            this._config.tokenGetter = function () { return localStorage.getItem(config.tokenName); };
        }
    }
    AuthConfig.prototype.getConfig = function () {
        return this._config;
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
var AuthHttpError = (function (_super) {
    __extends(AuthHttpError, _super);
    function AuthHttpError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthHttpError;
}(Error));
exports.AuthHttpError = AuthHttpError;
/**
 * Allows for explicit authenticated HTTP requests.
 */
var AuthHttp = (function () {
    function AuthHttp(options, http, defOpts) {
        var _this = this;
        this.http = http;
        this.defOpts = defOpts;
        this.config = options.getConfig();
        this.tokenStream = new Observable_1.Observable(function (obs) {
            obs.next(_this.config.tokenGetter());
        });
    }
    AuthHttp.prototype.mergeOptions = function (providedOpts, defaultOpts) {
        var newOptions = defaultOpts || new http_1.RequestOptions();
        if (this.config.globalHeaders) {
            this.setGlobalHeaders(this.config.globalHeaders, providedOpts);
        }
        newOptions = newOptions.merge(new http_1.RequestOptions(providedOpts));
        return newOptions;
    };
    AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
        var options = new http_1.RequestOptions(requestArgs);
        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }
        return this.request(new http_1.Request(this.mergeOptions(options, this.defOpts)));
    };
    AuthHttp.prototype.requestWithToken = function (req, token) {
        if (!this.config.noClientCheck && !tokenNotExpired(undefined, token)) {
            if (!this.config.noJwtError) {
                return new Observable_1.Observable(function (obs) {
                    obs.error(new AuthHttpError('No JWT present or has expired'));
                });
            }
        }
        else {
            req.headers.set(this.config.headerName, this.config.headerPrefix + token);
        }
        return this.http.request(req);
    };
    AuthHttp.prototype.setGlobalHeaders = function (headers, request) {
        if (!request.headers) {
            request.headers = new http_1.Headers();
        }
        headers.forEach(function (header) {
            var key = Object.keys(header)[0];
            var headerValue = header[key];
            request.headers.set(key, headerValue);
        });
    };
    AuthHttp.prototype.request = function (url, options) {
        var _this = this;
        if (typeof url === 'string') {
            return this.get(url, options); // Recursion: transform url from String to Request
        }
        // else if ( ! url instanceof Request ) {
        //   throw new Error('First argument must be a url string or Request instance.');
        // }
        // from this point url is always an instance of Request;
        var req = url;
        // Create a cold observable and load the token just in time
        return Observable_1.Observable.defer(function () {
            var token = _this.config.tokenGetter();
            if (token instanceof Promise) {
                return Observable_1.Observable.fromPromise(token).mergeMap(function (jwtToken) { return _this.requestWithToken(req, jwtToken); });
            }
            else {
                return _this.requestWithToken(req, token);
            }
        });
    };
    AuthHttp.prototype.get = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Get, url: url }, options);
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Post, url: url }, options);
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Put, url: url }, options);
    };
    AuthHttp.prototype.delete = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Delete, url: url }, options);
    };
    AuthHttp.prototype.patch = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Patch, url: url }, options);
    };
    AuthHttp.prototype.head = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Head, url: url }, options);
    };
    AuthHttp.prototype.options = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Options, url: url }, options);
    };
    return AuthHttp;
}());
AuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [AuthConfig, http_1.Http, http_1.RequestOptions])
], AuthHttp);
exports.AuthHttp = AuthHttp;
/**
 * Helper class to decode and find JWT expiration.
 */
var JwtHelper = (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());
exports.JwtHelper = JwtHelper;
/**
 * Checks for presence of token and that token hasn't expired.
 * For use with the @CanActivate router decorator and NgIf
 */
function tokenNotExpired(tokenName, jwt) {
    if (tokenName === void 0) { tokenName = AuthConfigConsts.DEFAULT_TOKEN_NAME; }
    var token = jwt || localStorage.getItem(tokenName);
    var jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token);
}
exports.tokenNotExpired = tokenNotExpired;
exports.AUTH_PROVIDERS = [
    {
        provide: AuthHttp,
        deps: [http_1.Http, http_1.RequestOptions],
        useFactory: function (http, options) {
            return new AuthHttp(new AuthConfig(), http, options);
        }
    }
];
function provideAuth(config) {
    return [
        {
            provide: AuthHttp,
            deps: [http_1.Http, http_1.RequestOptions],
            useFactory: function (http, options) {
                return new AuthHttp(new AuthConfig(config), http, options);
            }
        }
    ];
}
exports.provideAuth = provideAuth;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
/**
 * Module for angular2-jwt
 * @experimental
 */
var AuthModule = AuthModule_1 = (function () {
    function AuthModule(parentModule) {
        if (parentModule) {
            throw new Error('AuthModule is already loaded. Import it in the AppModule only');
        }
    }
    AuthModule.forRoot = function (config) {
        return {
            ngModule: AuthModule_1,
            providers: [
                { provide: AuthConfig, useValue: config }
            ]
        };
    };
    return AuthModule;
}());
AuthModule = AuthModule_1 = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        providers: [AuthHttp, JwtHelper]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [AuthModule])
], AuthModule);
exports.AuthModule = AuthModule;
var AuthModule_1;
//# sourceMappingURL=angular2-jwt.js.map

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader></app-loader> -->\r\n  <div class=\"flexy signin-signup\">\r\n      <form class=\"form-content\"(ngSubmit)=\"!userFormControl.hasError('required') && !userFormControl.hasError('pattern') && !passwordFormControl.hasError('required')\r\n      && login()\" #f=\"ngForm\" novalidate>\r\n          <div class=\"text-center\">\r\n              <img class=\"w-50\" src=\"../../assets/img/Logo.png\" alt=\"image\">\r\n          </div>\r\n          <ul>\r\n            <li class=\"mr-2\">\r\n            <br> <a (click)=\" facebooklogin()\"> <img src=\"../../assets/img/icon-facebook.png\"> </a>\r\n            </li>\r\n            <li class=\"ml-2\">\r\n               <br> <a (click)=\"googlelogin()\"> <img src=\"../../assets/img/icon-Google.png\"> </a>\r\n            </li>\r\n          </ul>\r\n            <mat-form-field class=\"w-100 mb-3\">\r\n              <input matInput type=\"text\" placeholder=\"Username\"  tabindex=1 [formControl]=\"userFormControl\" [(ngModel)]=\"model.username\" required>\r\n              <span class=\"pointer\" *ngIf=\"model.username\"  matSuffix md-list-icon aria-label=\"Clear\" (click)=\"model.username=''\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                </span>\r\n              <mat-error *ngIf=\"userFormControl.hasError('pattern')\">\r\n                Please enter a valid username\r\n              </mat-error>\r\n              <mat-error *ngIf=\"userFormControl.hasError('required')\">\r\n                Username is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100\">\r\n              <input [type]=\"hide ? 'password' : 'text'\"  matInput placeholder=\"Password\" tabindex=2 [formControl]=\"passwordFormControl\" [(ngModel)]=\"model.password\" required>\r\n              <i *ngIf= \"hide\" class=\"fa fa-eye eye-icon\" title=\"Show Password\" (click)=\"hide = !hide\"></i>\r\n              <i *ngIf= \"!hide\" class=\"fa fa-eye-slash eye-icon\" title=\"Hide Password\" (click)=\"hide = !hide\"></i>\r\n  \r\n              <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                Password is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <div class=\"row \">\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"text-left\">\r\n                      <mat-slide-toggle id=\"slid\"  type=\"checkbox\" checked data-toggle=\"toggle\">  Stay Signed In</mat-slide-toggle>\r\n                      <!-- <mat-slide-toggle [(checked)]=\"model\" style=\"font-size: 14px; color: #aaaaaa;\"> -->\r\n                      <!-- <mat-slide-toggle name=\"stay\"\r\n                    [(ngModel)]=\"model\">Stay signed in</mat-slide-toggle><br> -->\r\n    \r\n                    <!-- <a class=\"forgot-pass\" [routerLink]=\"['/reset-password']\">Forgot Password? </a> -->\r\n                    </div>\r\n                    <a class=\"forgot-pass\" [routerLink]=\"['/reset-password']\">Forgot Password? </a>\r\n              </div>\r\n              <div class=\"col-md-6 text-right\">\r\n                  <div [ngClass]=\"{ 'has-error':!recaptcha}\">\r\n                      <app-recapcha></app-recapcha>\r\n                      <div  style=\"font-size: 16px;font-weight: bold;color: red; margin: 3%;\"  *ngIf=\"!recaptcha\" >Recaptcha is require</div>\r\n\r\n                              </div>\r\n              </div>\r\n              <div class=\"col-md-12 text-center mt-3\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\r\n                  <label class=\"signup-label\"> Don’t have an account?\r\n                    <a  routerlink=\"/register\" href=\"/register\"><b>Sign Up</b></a></label>\r\n                    <div class=\"text-center privacy\">\r\n                      <a href=\"https://www.influexpai.com/Terms-and-Conditions\" target=\"_blank\">\r\n                        Terms of Use           &nbsp;&nbsp;&nbsp;\r\n                      </a><a href=\"https://www.influexpai.com/privacy_policy\" target=\"_blank\"> Privacy Policy</a>\r\n                    </div>\r\n              </div>\r\n          </div>\r\n        </form>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<preloader-full></preloader-full>-->\r\n<!--<app-loader></app-loader>-->\r\n<!-- <div class=\"\">\r\n    <div class=\"\">\r\n<div class=\"login-page\">\r\n    <div class=\"col-lg-4 col-md-8 col-sm-10 col-xs-10 login-wrap\">\r\n        <form class=\"ng-untouched ng-pristine ng-valid\"\r\n              (ngSubmit)=\"!userFormControl.hasError('required') && !userFormControl.hasError('pattern') && !passwordFormControl.hasError('required')\r\n               && login()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"card custom-width\">\r\n                <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                    <h4 class=\"card-title\">\r\n                        <label class=\"signin-heading\"> Sign in to Your Account</label></h4>\r\n                        <ul class=\"form-1-sl\">\r\n                            <li>\r\n                                <a (click)=\" facebooklogin()\"> <img src=\"../../assets/img/icon-facebook.png\"> </a>\r\n                            </li>\r\n                            <li>\r\n                                <a (click)=\"googlelogin()\"> <img src=\"../../assets/img/icon-Google.png\"> </a>\r\n                            </li>\r\n                        </ul>\r\n                </div>\r\n\r\n                <div class=\"card-content\">\r\n                    <mat-form-field class=\"loginfrom md-size\">\r\n                        <input matInput type=\"text\" placeholder=\"Username\"  tabindex=1 [formControl]=\"userFormControl\" [(ngModel)]=\"model.username\" required>\r\n                        <span class=\"pointer\" *ngIf=\"model.username\"  matSuffix mat-list-icon aria-label=\"Clear\" (click)=\"model.username=''\">\r\n                            <i class=\"fa fa-close\" style=\"font-size: 23px\"></i>\r\n                        </span>\r\n                        <mat-error *ngIf=\"userFormControl.hasError('pattern')\">\r\n                            Please enter a valid username\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"userFormControl.hasError('required')\">\r\n                            Username is <strong>required</strong>\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"loginfrom md-size\" >\r\n                        <input [type]=\"hide ? 'password' : 'text'\"  matInput placeholder=\"Password\" tabindex=2 [formControl]=\"passwordFormControl\" [(ngModel)]=\"model.password\" required>\r\n                        <mat-icon class=\"pointer\" data-toggle=\"tooltip\" title=\"{{hide? 'Show' : 'Hide'}}Password\" matSuffix (click)=\"hide=!hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon> -->\r\n\r\n<!--                         \r\n                        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                            Password is <strong>required</strong>\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div class=\"\">\r\n                    <div class=\"checkpad text-left\">\r\n                        <mat-slide-toggle name=\"stay\"\r\n                                        [(ngModel)]=\"model\">Stay signed in</mat-slide-toggle><br>\r\n                        <a class=\"forgot-pass\" [routerLink]=\"['/reset-password']\">Forgot Password? </a>\r\n                    </div>\r\n                    <div class=\"text-center recaptcha-box\" [ngClass]=\"{ 'has-error':!recaptcha}\">\r\n                        <app-recapcha></app-recapcha>\r\n                        <div  style=\"font-size: 16px;font-weight: bold;color: red; margin: 3%;\"  *ngIf=\"!recaptcha\" >Recaptcha is require</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer text-center\">\r\n                    <button type=\"submit\" class=\"btn-login\" tabindex=3> Sign in</button> -->\r\n                   \r\n<!--                    \r\n                </div>\r\n                <div  class=\"have-account\">No Account Yet? <a  routerlink=\"/register\" href=\"/register\"><b>Sign Up</b></a></div> -->\r\n                \r\n                <!-- <div  class=\"have-account\" ><a  href=\"https://www.influexpai.com/Terms-and-Conditions\" target=\"blank\">\r\n                    Terms of use </a>&nbsp;&nbsp;&nbsp;<a  href=\"https://www.influexpai.com/privacy_policy\" target=\"blank\"> Privacy Policy</a></div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-3\"></div> \r\n</div>\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recapcha_recapcha_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recapcha/recapcha.service */ "./src/app/recapcha/recapcha.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService, http, https, usersvc, recptha, authService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.http = http;
        this.https = https;
        this.usersvc = usersvc;
        this.recptha = recptha;
        this.authService = authService;
        this.model = {};
        this.user = {};
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtHelper"]();
        this.class1 = 'fa fa-eye';
        this.class2 = 'fa fa-eye-splash';
        this.hide = true;
        this.recaptcha = true;
        this.userFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.socialCallBack = function (user) {
            _this.user = user;
            console.log(_this.user);
            var headers = { 'Content-Type': 'application/json' };
            if (user) {
                var createUser = _this.https.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/sociallogin/', JSON.stringify({
                    user: user
                }), { headers: headers });
                createUser.subscribe(function (data) {
                    var user = {
                        user_id: _this.jwtHelper.decodeToken(data['token']).user_id,
                        username: _this.jwtHelper.decodeToken(data['token']).username,
                        token: data['token']
                    };
                    if (user && user.token) {
                        localStorage.setItem('loged_in', '1');
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        localStorage.setItem('profilePhoto', _this.pic);
                        // this.router.navigate(['/dashboard'+ this.username]);
                        _this.router.navigate(['/dashboard']);
                        _this.showSuccess();
                    }
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        window.scroll(0, 0);
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    LoginComponent.prototype.getuser = function () {
        var cu = JSON.parse(localStorage.getItem('currentUser'));
        this.usersvc.getByUsername(cu.username).subscribe(function (name) {
            // alert(name.first_name);
            cu.first_name = name['first_name'];
            localStorage.setItem('currentUser', JSON.stringify(cu));
        });
    };
    LoginComponent.prototype.showSuccess = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            type: 'success',
            title: 'You have successfully logged in to influexpert.\n' +
                '\n',
            showConfirmButton: false,
            width: '512px',
            timer: 4000
        });
    };
    LoginComponent.prototype.facebooklogin = function () {
        this.authService.signIn(angular5_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID).then(this.socialCallBack).catch(function (user) { return console.log(user); });
    };
    LoginComponent.prototype.googlelogin = function () {
        this.authService.signIn(angular5_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID).then(this.socialCallBack).catch(function (message) { return console.log(message); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.recaptcha = this.recptha.check();
        // alert('Recaptcha Status is ' + this.recapcha);
        if (this.recaptcha == true) {
            this.authenticationService.login(this.model.username, this.model.password)
                .subscribe(function (data) {
                // this.getuser();
                //   if(data.'Response')
                // if(data['Response'] === 'Account is not activated'){
                //     swal.fire({
                //         type: 'error',
                //         title: 'Account is not activated"',
                //         text: 'please varify',
                //         showConfirmButton: false,
                //         width: '512px',
                //         timer: 2000
                //       });
                // }
                // else{
                // if(data['Response'] !== 'Account is not activated'){
                _this.router.navigate([_this.returnUrl]);
                localStorage.setItem('currentPassword', _this.model.password);
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'You have successfully logged in to influexpai.\n' +
                        '\n',
                    // text: 'Please check your username or password',
                    showConfirmButton: false,
                    width: '512px',
                    timer: 2000
                });
                // }
            }, function (error) {
                if (error.status == 403) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        type: 'error',
                        title: 'Account is not activated"',
                        text: '',
                        showConfirmButton: false,
                        width: '512px',
                        timer: 2000
                    });
                    _this.recptha.resetImg();
                }
                // swal('Invalid username or password', 'error');
                if (error.status == 400) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        type: 'error',
                        title: 'Wrong Credantials',
                        text: 'Please check your username or password',
                        showConfirmButton: false,
                        width: '512px',
                        timer: 2000
                    });
                    _this.recptha.resetImg();
                }
                //    this.recptha.capchaText = "";
                // error => {
                //     this.alertService.error('Invalid username or password.');
            });
        }
    };
    LoginComponent.prototype.doThis = function () {
        window.location.href = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/tweeter_login/';
    };
    LoginComponent.prototype.doThisFB = function () {
        window.location.href = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/oauth/login/facebook/';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/login/login.scss")],
            providers: [_recapcha_recapcha_service__WEBPACK_IMPORTED_MODULE_6__["RecapchaService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _recapcha_recapcha_service__WEBPACK_IMPORTED_MODULE_6__["RecapchaService"], angular5_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_preloader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/preloader.module */ "./src/app/components/preloader.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _recapcha_recapcha_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recapcha/recapcha.module */ "./src/app/recapcha/recapcha.module.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.routing */ "./src/app/login/login.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import {LoaderModule} from '../loader/loader.module';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _recapcha_recapcha_module__WEBPACK_IMPORTED_MODULE_7__["RecapchaModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                // LoaderModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _components_preloader_module__WEBPACK_IMPORTED_MODULE_4__["PreloaderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_login_routing__WEBPACK_IMPORTED_MODULE_8__["LoginRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.routing.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.routing.ts ***!
  \****************************************/
/*! exports provided: LoginRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutes", function() { return LoginRoutes; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");

var LoginRoutes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
        data: {
            heading: '',
        }
    }];


/***/ }),

/***/ "./src/app/login/login.scss":
/*!**********************************!*\
  !*** ./src/app/login/login.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexy {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background: url('LoginInflu.png') center/100% no-repeat;\n  padding: 68px 0; }\n\n.flexy ul {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.flexy ul li a img {\n  transition: all .4s ease-in-out; }\n\n.flexy ul li a img:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.form-content {\n  width: 400px;\n  background: url('backkk.png');\n  padding: 10px 20px 20px;\n  opacity: 0.8;\n  border-radius: 20px; }\n\n.fa-eye,\n.fa-eye-slash,\n.fa-close {\n  position: absolute;\n  right: 0;\n  top: 6px;\n  font-size: 20px;\n  cursor: pointer; }\n\n.forgot,\n.privacy {\n  font-size: 12px;\n  color: #304ffe;\n  font-weight: 600;\n  display: inline-block; }\n\n.forgot,\n.privacy a {\n  color: #304ffe; }\n\n.signup-label {\n  margin: 0;\n  color: #304ffe;\n  font-size: 16px;\n  display: block;\n  font-weight: 600; }\n"

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map