(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instagram-search-instagram-list-inf-module"],{

/***/ "./src/app/instagram-search/instagram-list-inf.component.html":
/*!********************************************************************!*\
  !*** ./src/app/instagram-search/instagram-list-inf.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-overlayPanel #op>\n\n  <ul *ngFor=\"let row of blogdata\">\n    <li>{{row}}</li>\n  </ul>\n\n</p-overlayPanel>\n\n\n<div class=\"page-content\">\n\n  <div class=\"container-fluid\" *ngIf=\"loaded && blogs.totalItems==0\">\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\n        <div class=\"add-customers-screen-in\">\n          <div class=\"add-customers-screen-user\">\n            <i class=\"font-icon font-icon-user\"></i>\n          </div>\n          <h2>OOPS!</h2>\n          <p class=\"lead color-blue-grey-lighter\">Zero influencers in the list.<br> Add some influencers <strong></strong></p>\n          <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\n        </div>\n      </div>\n    </div><!--.box-typical-->\n  </div>\n<div class=\"row\" *ngIf=\"loaded&& blogs.totalItems!=0\">\n  <div class=\"col-md-12 text-center\">\n    <nav>\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n\n      <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n      <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n      <!--</li>-->\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n          First\n        </a>\n      </li>\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n\n      <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n          [ngClass]=\"{active:pager.currentPage === page}\"\n          (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a>\n      </li>\n      <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n      <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n      <!--</li>-->\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n          Last\n        </a>\n      </li>\n      <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n      <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n      <!--</li>-->\n    </ul>\n  </nav></div>\n\n</div>\n  <div class=\"container-fluid\" *ngIf=\"loaded&& blogs.totalItems!=0\">\n\n    <div class=\"row\" id=\"myHeader\">\n      <div class=\"col-md-12 list-row\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\n            <div id=\"toolbar\">\n\n              <!--<button  style=\"width:70%;font-size: x-large;font-weight: bold;\" class=\"btn btn-rounded\">Login</button>-->\n\n              <inline-editor [disabled]=\"loading\" class=\"bootstrap-table-header\" type=\"text\" [(ngModel)]=\"list_name\" min=\"1\"\n                             max=\"30\" [fnErrorLength]=\"myHandleError\" (onSave)=\"saveEditable($event)\" name=\"editableText1\" size=\"30\"></inline-editor>\n              <img *ngIf=\"loading\"\n                   src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n              <button  class=\"btn btn-success\" (click)=\"update_delete_list()\">\n                <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                Delete selected\n              </button>\n              <button  class=\"btn btn-success\" (click)=\"clear_list()\">\n                <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                Clear selected\n              </button>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"profile-container\" *ngFor=\"let item of blogs.results\" >\n      <div class=\"row\">\n\n\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n        </div>\n        <div class=\"col-md-2 text-center\">\n          <img [src]=\"item['image_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\n        </div>\n\n\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\n          <div class=\"row\">\n            <label class=\"tbl-cell tbl-cell-name\" style=\"padding: 0em\">{{item['name']}}</label>\n          </div>\n\n          <div class=\"row\" style=\"\">\n            <div class=\"col-md-3 text-left\">\n              <label class=\"item-loc\"> <i class=\"fa fa-clipboard\" style=\"font-size:16px;color:#c00\"></i> Posts: <span class=\"list-item1\"> {{item['posts']}}</span></label>\n\n            </div>\n            <div class=\"col-md-9 text-left\">\n\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile Url:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['account_link']}}</a></label>\n            </div>\n          </div>\n          <hr style=\"color: #555555\">\n          <div class=\"row\" >\n            <ul style=\"display: flex; \">\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" ></i> Follower:</span>\n\n                <span *ngIf=\"item['follower']<1000\" class=\"list-item1\"><span class=\"label label-danger\"><small>Poor</small> {{item['follower'] | thousandSuff}}</span></span>\n                <span *ngIf=\"item['follower']>1000 && item['follower']<10000\" class=\"list-item1\"><span class=\"label label-primary\"><small>Normal</small> {{item['follower'] | thousandSuff}}</span></span>\n                <span *ngIf=\"item['follower']>10000\" class=\"list-item1\"><span class=\"label label-success\"><small>Perfect</small> {{item['follower'] | thousandSuff}}</span></span>\n\n              </li>\n\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" ></i> Following:</span>\n\n                <span *ngIf=\"item['following']<100\" class=\"list-item1\"><span class=\"label label-danger\"><small>Poor</small> {{item['following']| thousandSuff}}</span></span>\n                <span *ngIf=\"item['following']>100 && item['following']<1000\" class=\"list-item1\"><span class=\"label label-primary\"><small>Normal</small> {{item['following']| thousandSuff}}</span></span>\n                <span *ngIf=\"item['following']>1000\" class=\"list-item1\"><span class=\"label label-success\"><small>Perfect</small> {{item['following']| thousandSuff}}</span></span>\n\n              </li>\n              <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['account_rank']}}</span></li>\n              <li><span class=\"right-item\"><i class=\"fa fa-user\" style=\"font-size:16px;color:#0a4069\"></i> Username:</span> <span class=\"list-item1\">{{item['username']}}</span></li>\n\n            </ul>\n          </div>\n          <hr style=\"color: #555555\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <p-dialog *ngIf=\"dialogVisible_features\" [(visible)]=\"dialogVisible_features\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"450\">\n    <p-header *ngIf=\"dialogVisible_features\">\n\n      Web features of <a href=\"{{feature_data.main_url}}\">{{feature_data.data.title}}</a>\n\n    </p-header>\n    <ul class=\"list-group\">\n\n      <li *ngIf=\"feature_data.data.domain_rank\" class=\"list-group-item\"><span>Domain Rank:</span>\n        <span style=\"float: right;\">{{feature_data.data.domain_rank}}</span></li>\n\n      <li class=\"list-group-item\"><span>Spam Score:</span>\n        <span style=\"float: right;\">{{feature_data.data.spam_score}}</span></li>\n      <li *ngIf=\"feature_data.data.performance_score\" class=\"list-group-item\"><span>Performance:</span>\n        <span style=\"float: right;\">{{feature_data.data.performance_score}}</span></li>\n      <li *ngIf=\"feature_data.data.site_categories[0]\" class=\"list-group-item\">Category:\n        <ul>\n          <li *ngFor=\"let c of feature_data.data.site_categories\" class=\"list-group-item\" style=\"text-align: right;\">{{c}}</li>\n        </ul>\n      </li>\n\n    </ul>\n  </p-dialog>\n\n\n  <p-dialog [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"933\" >\n    <p-header *ngIf=\"dialogVisible\">\n\n      SEO stats for <a href=\"{{seodata.main_url}}\">{{seodata.data.site_full}}</a>\n\n    </p-header>\n    <table id=\"table-xs\" *ngIf=\"dialogVisible\" class=\"table table-bordered table-hover table-xs\">\n\n      <tbody>\n      <tr>\n        <td title=\"Worth Of Web Traffic Rank\"><strong>WOWTR</strong></td>\n        <td title=\"Worth Of Web Traffic Rank\">{{seodata.seoData.WOWTR}}</td>\n      </tr>\n      <tr>\n        <td title=\"Estimated worth of website\"><strong>EWOW</strong></td>\n        <td title=\"Estimated worth of website\">{{seodata.seoData.EWOW}}</td>\n        <td title=\"Estimated revenue per day\"><strong>ERPD</strong></td>\n        <td title=\"Estimated revenue per day\">{{seodata.seoData.EREVD}}</td>\n        <td title=\"Estimated revenue per month\"><strong>ERPM</strong></td>\n        <td title=\"Estimated revenue per month\">{{seodata.seoData.EREVM}}</td>\n        <td title=\"Estimated revenue per year\"><strong>ERPY</strong></td>\n        <td title=\"Estimated revenue per year\">{{seodata.seoData.EREVY}}</td>\n      </tr>\n      <tr>\n        <td title=\"Estimated visits per day\"><strong>EVISD</strong></td>\n        <td title=\"Estimated visits per day\">{{seodata.seoData.EVISD}}</td>\n        <td title=\"Estimated visits per month\"><strong>EVISM</strong></td>\n        <td title=\"Estimated visits per month\">{{seodata.seoData.EVISM}}</td>\n        <td title=\"Estimated visits per year\"><strong>EVISY</strong></td>\n        <td title=\"Estimated visits per year\">{{seodata.seoData.EVISY}}</td>\n        <td title=\"Estimated pageviews per day\"><strong>EPVISD</strong></td>\n        <td title=\"Estimated pageviews per day\">{{seodata.seoData.EPVISD}}</td>\n      </tr>\n      <tr>\n        <td title=\"Estimated pageviews per month\"><strong>EPVISM</strong></td>\n        <td title=\"Estimated pageviews per month\">{{seodata.seoData.EPVISM}}</td>\n        <td title=\"Estimated pageviews per year\"><strong>EPVISY</strong></td>\n        <td title=\"Estimated pageviews per year\">{{seodata.seoData.EPVISY}}</td>\n        <td title=\"Alexa Rank\"><strong>ALEXA</strong></td>\n        <td title=\"Alexa Rank\">{{seodata.seoData.ALEXA}}</td>\n        <td title=\"Worth Of Web Traffic Score\"><strong>WOWTS</strong></td>\n        <td title=\"Worth Of Web Traffic Score\">{{seodata.seoData.WOWTS}}</td>\n      </tr>\n\n\n    </table>\n  </p-dialog>\n  <div class=\"container-fluid\" *ngIf=\"loaded\">\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/instagram-search/instagram-list-inf.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/instagram-search/instagram-list-inf.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".SickyPage{position:fixed;top:79px;background:#eceff4;z-index:9;width:86%}.btn-rounded{background:#000;color:#fff;text-align:center;margin-top:3%;border-color:black;font-size:17px;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important}.profile-container{width:100%;flex-direction:column;position:relative;border-radius:5px;background-color:#fff;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important;max-width:1200px;display:inline-block;margin-top:18px}.loaded-container{width:100%;flex-direction:column;position:relative;border-radius:5px;background-color:#fff;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important;max-width:1200px;margin-top:18px}.profile-checkbox{display:flex;flex:0 0 auto;width:65px;padding-right:12px;border-right:1px solid #ebecf3;justify-content:center;align-items:center;border-top-left-radius:5px;border-bottom-left-radius:5px;cursor:pointer}input[type=checkbox]{zoom:1.5}.tbl-cell{font-weight:600;font-size:19px}i{color:white}.item-content{color:#919fa9;font-size:14px}.item-loc{color:#919fa9;font-size:14px}hr{margin:0 !important}.list-item1{margin-right:20px;color:#000;font-weight:700;font-size:15px}.right-item{color:#919fa9;font-size:14px}.btn-success{background:black;border-radius:50px;border-color:black;padding:8px 26px;margin-top:3px;box-shadow:0 14px 26px -12px rgba(0,0,0,0.42),0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2) !important}\n"

/***/ }),

/***/ "./src/app/instagram-search/instagram-list-inf.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/instagram-search/instagram-list-inf.component.ts ***!
  \******************************************************************/
/*! exports provided: InstagramListInfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramListInfComponent", function() { return InstagramListInfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InstagramListInfComponent = /** @class */ (function () {
    function InstagramListInfComponent(http, router, httpNoPreloader, route, pagerService) {
        this.http = http;
        this.router = router;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.pagerService = pagerService;
        this.inflist = {};
        this.max = 100000;
        this.loaded = false;
        this.pager = {};
        this.loading = false;
    }
    InstagramListInfComponent.prototype.ngAfterViewInit = function () {
    };
    InstagramListInfComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    InstagramListInfComponent.prototype.saveEditable = function (t) {
        var _this = this;
        this.loading = true;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/update_name_ilist_in/', JSON.stringify({ id: this.searchQuery, name: t }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
            localStorage.removeItem('selected_list_in');
            localStorage.setItem('selected_list_in', JSON.stringify({ id: _this.searchQuery, name: t }));
            _this.list_name = t;
            _this.loading = false;
        });
    };
    InstagramListInfComponent.prototype.myHandleError = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List name length should be between 1 and 30!', '', 'error');
    };
    InstagramListInfComponent.prototype.chec = function () {
        console.clear();
        console.log(this.inflist);
    };
    InstagramListInfComponent.prototype.cheakall = function (e) {
        // console.log(e)
        for (var _i = 0, _a = this.blogs['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
        console.log(this.inflist);
    };
    InstagramListInfComponent.prototype.update_delete_list = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        for (var i in list) {
            if (list[i]) {
                ilist = true;
                // alert('jsdkada');
                break;
            }
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.list_name,
            text: 'Selected influencers in this list will be deleted!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Update',
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (ilist) {
                            resolve();
                        }
                        else {
                            reject('No influencers selected');
                        }
                        // else if(result.length>30) {
                        //     reject('Length of list name cannot be greater than 30')
                        // }
                        // resolve()
                    }, 1);
                });
            },
            cancelButtonText: 'Cancel'
        }).then(function () {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/update_delete_ilist_in/', JSON.stringify({ id: _this.searchQuery, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.setPage(1);
                for (var i in _this.inflist) {
                    // this.inflist[i['id']] = e;
                    _this.inflist[i] = false;
                }
                _this.main_checkbox = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List updated!', '', 'success');
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'error');
            }
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        });
    };
    InstagramListInfComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    InstagramListInfComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loaded = false;
        this.sub = this.route.params.subscribe(function (params) {
            if (Number(params['query'])) {
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/get_list_inf_in/' + params['query'] + '/?page=' + page, { headers: headers }, 'full')
                    .subscribe(function (res) {
                    console.log(params['query']);
                    _this.searchQuery = params['query'];
                    _this.list_name = res.json().name;
                    _this.blogs = res.json();
                    _this.loaded = true;
                    _this.pager = _this.pagerService.getPager(_this.blogs['totalItems'], page, 20);
                    // this.setPage(1);
                    // Swal('Hello world!')
                }, function (error) {
                    // alert('error')
                    _this.router.navigate(['page-not-found']);
                });
            }
            else {
                _this.router.navigate(['page-not-found']);
            }
        });
    };
    InstagramListInfComponent.prototype.navSearch = function () {
    };
    InstagramListInfComponent.prototype.filldata = function (b) {
        var arr = [];
        console.log(b);
        for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
            var obj = b_1[_i];
            // console.log(email); // 0,1,2
            for (var key in obj) {
                arr.push(obj[key]);
            }
        }
        this.blogdata = arr;
    };
    InstagramListInfComponent.prototype.fillseodata = function (b) {
        console.log(b);
        this.seodata = b;
        this.dialogVisible = true;
    };
    InstagramListInfComponent.prototype.fillfeaturedata = function (b) {
        console.log(b);
        this.feature_data = b;
        this.dialogVisible_features = true;
    };
    InstagramListInfComponent.prototype.ngOnDestroy = function () {
        // localStorage.removeItem('navigated_list');
        this.sub.unsubscribe();
    };
    InstagramListInfComponent.prototype.goToInstagram = function (s) {
        var arr;
        arr = s.indexOf('(@');
        if (arr != -1) {
            // alert(s.slice(arr+1,-10))
            // window.open('https://www.instagram.com/'+s.slice(arr+2,-10))
            var url_1 = 'https://www.instagram.com/' + s.slice(arr + 2, -10);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content (' + url_1 + ').',
                // html: true,
                confirmButtonColor: '#2ecc71',
                showCancelButton: true,
            }).then(function () {
                window.open(url_1);
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    // localStorage.removeItem('selected_list_twitter');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'success');
                }
            });
        }
        else {
            // window.open('https://www.instagram.com/'+s)
            var url_2 = 'https://www.instagram.com/' + s;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content (' + url_2 + ').',
                // html: true,
                confirmButtonColor: '#2ecc71',
                showCancelButton: true,
            }).then(function () {
                window.open(url_2);
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    // localStorage.removeItem('selected_list_twitter');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'success');
                }
            });
        }
    };
    InstagramListInfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instagram-list-inf',
            template: __webpack_require__(/*! ./instagram-list-inf.component.html */ "./src/app/instagram-search/instagram-list-inf.component.html"),
            styles: [__webpack_require__(/*! ./instagram-list-inf.component.scss */ "./src/app/instagram-search/instagram-list-inf.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]])
    ], InstagramListInfComponent);
    return InstagramListInfComponent;
}());



/***/ }),

/***/ "./src/app/instagram-search/instagram-list-inf.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/instagram-search/instagram-list-inf.module.ts ***!
  \***************************************************************/
/*! exports provided: InstagramListInfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramListInfModule", function() { return InstagramListInfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _instagram_list_inf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instagram-list-inf.component */ "./src/app/instagram-search/instagram-list-inf.component.ts");
/* harmony import */ var _instagram_list_inf_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instagram-list-inf.routing */ "./src/app/instagram-search/instagram-list-inf.routing.ts");
/* harmony import */ var ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-inline-editor */ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js");
/* harmony import */ var _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../periscope-search/CustomPipe.module */ "./src/app/periscope-search/CustomPipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var InstagramListInfModule = /** @class */ (function () {
    function InstagramListInfModule() {
    }
    InstagramListInfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_instagram_list_inf_routing__WEBPACK_IMPORTED_MODULE_9__["InstagramListInfRoutes"]), _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_11__["CustomPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__["InlineEditorModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"]],
            declarations: [_instagram_list_inf_component__WEBPACK_IMPORTED_MODULE_8__["InstagramListInfComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]]
        })
    ], InstagramListInfModule);
    return InstagramListInfModule;
}());



/***/ }),

/***/ "./src/app/instagram-search/instagram-list-inf.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/instagram-search/instagram-list-inf.routing.ts ***!
  \****************************************************************/
/*! exports provided: InstagramListInfRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramListInfRoutes", function() { return InstagramListInfRoutes; });
/* harmony import */ var _instagram_list_inf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram-list-inf.component */ "./src/app/instagram-search/instagram-list-inf.component.ts");

var InstagramListInfRoutes = [{
        path: '',
        component: _instagram_list_inf_component__WEBPACK_IMPORTED_MODULE_0__["InstagramListInfComponent"],
        data: {
            heading: '',
        }
    }];


/***/ }),

/***/ "./src/app/periscope-search/CustomPipe.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/periscope-search/CustomPipe.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipeModule", function() { return CustomPipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _CustomPipe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomPipe.pipe */ "./src/app/periscope-search/CustomPipe.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomPipeModule = /** @class */ (function () {
    function CustomPipeModule() {
    }
    CustomPipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_CustomPipe_pipe__WEBPACK_IMPORTED_MODULE_2__["CustomPipePipe"]],
            exports: [_CustomPipe_pipe__WEBPACK_IMPORTED_MODULE_2__["CustomPipePipe"]]
        })
    ], CustomPipeModule);
    return CustomPipeModule;
}());



/***/ }),

/***/ "./src/app/periscope-search/CustomPipe.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/periscope-search/CustomPipe.pipe.ts ***!
  \*****************************************************/
/*! exports provided: CustomPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipePipe", function() { return CustomPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomPipePipe = /** @class */ (function () {
    function CustomPipePipe() {
    }
    // transform(input: any, args?: any): any {
    //     var exp, rounded,
    //         suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
    //     if (Number.isNaN(input)) {
    //         return null;
    //     }
    //     if (input < 1000) {
    //         return input;
    //     }
    //     exp = Math.floor(Math.log(input) / Math.log(1000));
    //     return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
    // }
    CustomPipePipe.prototype.transform = function (number, args) {
        if (isNaN(number))
            return null; // will only work value is a number
        if (number === null)
            return null;
        if (number === 0)
            return null;
        var abs = Math.abs(number);
        var rounder = Math.pow(10, 1);
        var isNegative = number < 0; // will also work for Negetive numbers
        var key = '';
        var powers = [
            { key: 'Q', value: Math.pow(10, 15) },
            { key: 'T', value: Math.pow(10, 12) },
            { key: 'B', value: Math.pow(10, 9) },
            { key: 'M', value: Math.pow(10, 6) },
            { key: 'K', value: 1000 }
        ];
        for (var i = 0; i < powers.length; i++) {
            var reduced = abs / powers[i].value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
            }
        }
        return (isNegative ? '-' : '') + abs + key;
    };
    CustomPipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'thousandSuff'
        })
    ], CustomPipePipe);
    return CustomPipePipe;
}());



/***/ })

}]);
//# sourceMappingURL=instagram-search-instagram-list-inf-module.js.map