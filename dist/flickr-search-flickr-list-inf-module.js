(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flickr-search-flickr-list-inf-module"],{

/***/ "./src/app/flickr-search/flickr-list-inf.component.css":
/*!*************************************************************!*\
  !*** ./src/app/flickr-search/flickr-list-inf.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-rounded {\n    background: #000;\n    color: #fff;\n    text-align: center;\n    margin-top: 3%;\n    border-color: black;\n    font-size: 17px;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n}\n.profile-container{\n    width: 100%;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    background-color: #fff;\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n    max-width: 1200px;\n    display: inline-block;\n    /*height: 165px;*/\n    margin-top: 18px;\n}\n.loaded-container{\n    width: 100%;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    background-color: #fff;\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n    max-width: 1200px;\n    /*height: 300px;*/\n    /*display: inline-block;*/\n    margin-top: 18px;\n}\n.profile-checkbox {\n    display: flex;\n    flex: 0 0 auto;\n    width: 65px;\n    /* height: 100%; */\n    /* padding-left: 12px; */\n    padding-right: 12px;\n    border-right: 1px solid #ebecf3;\n    justify-content: center;\n    align-items: center;\n    /* background-color: #fff; */\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    cursor: pointer;\n}\ninput[type=checkbox]{\n    zoom: 1.5;\n}\n.tbl-cell{\n    font-weight: 600;\n    font-size: 19px;\n}\ni{\n    color: white;\n}\n.item-content{\n\n    color: #919fa9;\n    font-size: 14px;\n\n}\n.item-loc{\n    color: #919fa9;\n    font-size: 14px;\n}\nhr{\n    margin: 0!important;\n}\n.list-item1{\n    margin-right: 20px;\n    color: #000;\n    font-weight: 700;\n    font-size: 15px;\n}\n.right-item{\n    color: #919fa9;\n    font-size: 14px;\n}\n.btn-success{\n    background: black;\n    border-radius: 50px;\n    border-color: black;\n    padding: 8px 26px;\n    margin-top: 3px;\n    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)!important;\n}"

/***/ }),

/***/ "./src/app/flickr-search/flickr-list-inf.component.html":
/*!**************************************************************!*\
  !*** ./src/app/flickr-search/flickr-list-inf.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"container-fluid\" *ngIf=\"loaded && fb_Influencers.totalItems==0\">\n    <div class=\"box-typical box-typical-full-height\">\n      <div class=\"add-customers-screen tbl\">\n        <div class=\"add-customers-screen-in\">\n          <div class=\"add-customers-screen-user\">\n            <i class=\"font-icon font-icon-user\"></i>\n          </div>\n          <h2>OOPS</h2>\n          <p class=\"lead color-blue-grey-lighter\">Zero influencers in the list.<br> Add some influencers <strong></strong></p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"SickyPage\">\n    <div id=\"wrapper\" *ngIf=\"loaded&& fb_Influencers.totalItems!=0\">\n      <div id=\"yourdiv\">\n        <nav>\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n\n            <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n            <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n            <!--</li>-->\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                First\n              </a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n\n            <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                [ngClass]=\"{active:pager.currentPage === page}\"\n                (click)=\"setPage(page)\"><a class=\"page-link\">{{page}}</a>\n            </li>\n            <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n            <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n            <!--</li>-->\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                Last\n              </a>\n            </li>\n            <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n            <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n            <!--</li>-->\n          </ul>\n        </nav>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\" *ngIf=\"loaded&& fb_Influencers.totalItems!=0\">\n\n    <div class=\"row\" id=\"myHeader\">\n      <div class=\"col-md-12 list-row\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\n            <div id=\"toolbar\">\n\n              <!--<button  style=\"width:70%;font-size: x-large;font-weight: bold;\" class=\"btn btn-rounded\">Login</button>-->\n\n              <inline-editor [disabled]=\"loading\" class=\"bootstrap-table-header\" type=\"text\" [(ngModel)]=\"list_name\" min=\"1\"\n                             max=\"30\" [fnErrorLength]=\"myHandleError\" (onSave)=\"saveEditable($event)\" name=\"editableText1\" size=\"30\"></inline-editor>\n              <img *ngIf=\"loading\"\n                   src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n              <button  class=\"btn btn-success\" (click)=\"deleteSelected()\">\n                <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                Delete selected\n              </button>\n              <button  class=\"btn btn-success\" (click)=\"clear_list()\">\n                <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                Clear selected\n              </button>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"profile-container\" *ngFor=\"let item of fb_Influencers.results\" >\n      <div class=\"row\">\n\n\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inf_list[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n        </div>\n        <div class=\"col-md-2 text-center\">\n          <img [src]=\"item['image_link']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\n        </div>\n\n\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\n          <div class=\"row\">\n            <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\n          </div>\n          <div class=\"row\" style=\"padding-top: 8px\">\n            <label class=\"item-content\" style=\"overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\n          </div>\n          <div class=\"row\" style=\"padding-top: 8px\">\n            <div class=\"col-md-3 text-left\">\n              <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> Category: <span class=\"list-item1\">Global</span> </label>\n\n            </div>\n            <div class=\"col-md-9 text-left\">\n\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_linked']}}</a></label>\n            </div>\n          </div>\n          <hr style=\"color: #555555\">\n          <div class=\"row\" >\n            <ul style=\"display: flex; padding-top: 5px\">\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" ></i> Followers:</span>\n              <!-- <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Followers:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li> -->\n              <span *ngIf=\"item['followers']<100\" class=\"list-item1\"><span class=\"label label-danger\"><small>Poor</small> {{item['followers'] | thousandSuff}}</span></span>\n                <span *ngIf=\"item['followers']>100 && item['total_claps']<500\" class=\"list-item1\"><span class=\"label label-primary\"><small>Normal</small> {{item['followers']| thousandSuff}}</span></span>\n                <span *ngIf=\"item['followers']>500\" class=\"list-item1\"><span class=\"label label-success\"><small>Perfect</small> {{item['followers']| thousandSuff}}</span></span>              </li>\n\n              <li><span class=\"right-item\"> <i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}} |   </span></li>\n              <li><span class=\"right-item\"><i class=\"fa fa-calendar\" style=\"font-size:16px;color:#0a4069\"></i> Joined Date:</span> <span class=\"list-item1\">{{item['joined_date']}}</span></li>\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Broadcast :</span> <span class=\"list-item1\">{{item['braodcasts']}} |  </span> </li>-->\n\n            </ul>\n          </div>\n          <hr style=\"color: #555555\">\n          <div class=\"row\" >\n            <ul style=\"display: flex; padding-top: 5px\">\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/flickr-search/flickr-list-inf.component.ts":
/*!************************************************************!*\
  !*** ./src/app/flickr-search/flickr-list-inf.component.ts ***!
  \************************************************************/
/*! exports provided: FlickrListInfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrListInfComponent", function() { return FlickrListInfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlickrListInfComponent = /** @class */ (function () {
    function FlickrListInfComponent(http, router, httpNoPreloader, route, pagerService) {
        this.http = http;
        this.router = router;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.pagerService = pagerService;
        this.inf_list = {};
        this.loaded = false;
        this.pager = {};
        this.loading = false;
    }
    FlickrListInfComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loaded = false;
        this.sub = this.route.params.subscribe(function (params) {
            if (Number(params['query'])) {
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_list_inf_fl/' + params['query'] + '/?page=' + page, { headers: headers }, 'full')
                    .subscribe(function (res) {
                    _this.searchQuery = params['query'];
                    _this.list_name = res.json().name;
                    _this.fb_Influencers = res.json();
                    _this.loaded = true;
                    _this.pager = _this.pagerService.getPager(_this.fb_Influencers['totalItems'], page, 20);
                }, function (error) {
                    _this.router.navigate(['page-not-found']);
                });
            }
            else {
                _this.router.navigate(['page-not-found']);
            }
        });
    };
    FlickrListInfComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    FlickrListInfComponent.prototype.deleteSelected = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var mysvc = this.http;
        var list = this.inf_list;
        var ilist = false;
        for (var i in list) {
            if (list[i]) {
                ilist = true;
            }
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.list_name,
            type: 'question',
            text: 'Selected Influencers will be deleted',
            showCancelButton: true,
            confirmButtonText: 'Update',
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (list) {
                            resolve();
                        }
                        else {
                            reject('No Influencer Selected');
                        }
                    }, 1);
                });
            },
            cancelButtonText: 'Cancel'
        }).then(function () {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/update_delete_ilist_fl/', JSON.stringify({ id: _this.searchQuery, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.setPage(1);
                for (var i in _this.inf_list) {
                    // this.inflist[i['id']] = e;
                    _this.inf_list[i] = false;
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', '', 'success');
            }, function (error1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error1.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', '', 'error');
            }
        });
    }; //deleteSelected() End
    FlickrListInfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flickr-list-inf',
            template: __webpack_require__(/*! ./flickr-list-inf.component.html */ "./src/app/flickr-search/flickr-list-inf.component.html"),
            styles: [__webpack_require__(/*! ./flickr-list-inf.component.css */ "./src/app/flickr-search/flickr-list-inf.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], FlickrListInfComponent);
    return FlickrListInfComponent;
}());



/***/ }),

/***/ "./src/app/flickr-search/flickr-list-inf.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/flickr-search/flickr-list-inf.module.ts ***!
  \*********************************************************/
/*! exports provided: FlickrListInfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrListInfModule", function() { return FlickrListInfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flickr_list_inf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flickr-list-inf.component */ "./src/app/flickr-search/flickr-list-inf.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _flickr_list_inf_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flickr-list-inf.routing */ "./src/app/flickr-search/flickr-list-inf.routing.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_inline_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-inline-editor */ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js");
/* harmony import */ var _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../periscope-search/CustomPipe.module */ "./src/app/periscope-search/CustomPipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {FacebookSearchComponent} from './facebook-search.component';












var FlickrListInfModule = /** @class */ (function () {
    function FlickrListInfModule() {
    }
    FlickrListInfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_flickr_list_inf_routing__WEBPACK_IMPORTED_MODULE_3__["FlickrListInfRoutes"]), _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_10__["CustomPipeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_inline_editor__WEBPACK_IMPORTED_MODULE_9__["InlineEditorModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["DataTableModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["SliderModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["DialogModule"]],
            declarations: [_flickr_list_inf_component__WEBPACK_IMPORTED_MODULE_1__["FlickrListInfComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_7__["PagerService"]]
        })
    ], FlickrListInfModule);
    return FlickrListInfModule;
}());



/***/ }),

/***/ "./src/app/flickr-search/flickr-list-inf.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/flickr-search/flickr-list-inf.routing.ts ***!
  \**********************************************************/
/*! exports provided: FlickrListInfRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrListInfRoutes", function() { return FlickrListInfRoutes; });
/* harmony import */ var _flickr_list_inf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flickr-list-inf.component */ "./src/app/flickr-search/flickr-list-inf.component.ts");

var FlickrListInfRoutes = [{
        path: '',
        component: _flickr_list_inf_component__WEBPACK_IMPORTED_MODULE_0__["FlickrListInfComponent"]
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
//# sourceMappingURL=flickr-search-flickr-list-inf-module.js.map