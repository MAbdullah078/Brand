(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["twitter-list-twitter-list-module"],{

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



/***/ }),

/***/ "./src/app/twitter-list/twitter-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems==0\">\n      <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\n        <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\n          <div class=\"add-customers-screen-in\">\n            <div class=\"add-customers-screen-user\">\n              <i class=\"font-icon font-icon-user\"></i>\n            </div>\n            <h2>OOPS!</h2>\n            <p class=\"lead color-blue-grey-lighter\">Zero influencers in the list.<br> Add some influencers <strong></strong></p>\n            <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\n          </div>\n        </div>\n      </div><!--.box-typical-->\n    </div>\n\n      <div class=\"row\" style=\"margin-top: 2%\">\n        <div class=\"col-md-12 text-center\">\n          <nav>\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n              <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n              <!--</li>-->\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                  First\n                </a>\n              </li>\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">&laquo;</span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                  [ngClass]=\"{active:pager.currentPage === page}\"\n                  (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n              <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n              <!--</li>-->\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                  <span aria-hidden=\"true\">&raquo;</span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                  Last\n                </a>\n              </li>\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n              <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n              <!--</li>-->\n            </ul>\n          </nav>\n        </div>\n\n      </div>\n\n\n\n        <section class=\"box-typical\"  *ngIf=\"loaded && influencers.totalItems!=0\">\n\n\n      <div class=\"box-typical-body\">\n        <div class=\"table-responsive\">\n          <div class=\"bootstrap-table\">\n            <p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers.results\"\n                         class=\"table table-striped table-hover\">\n\n              <p-header class=\"box-typical-header\">\n                <div class=\"fixed-table-toolbar\">\n\n                  <div class=\"bars pull-left\">\n                    <div id=\"toolbar\">\n\n                      <!--<button  style=\"width:70%;font-size: x-large;font-weight: bold;\" class=\"btn btn-rounded\">Login</button>-->\n\n                      <inline-editor [disabled]=\"loading\" class=\"bootstrap-table-header\" type=\"text\" [(ngModel)]=\"list_name\" min=\"1\"\n                                     max=\"30\" [fnErrorLength]=\"myHandleError\" (onSave)=\"saveEditable($event)\" name=\"editableText1\" size=\"30\"></inline-editor>\n                      <img *ngIf=\"loading\"\n                           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n                      <button  class=\"btn btn-primary\" (click)=\"update_delete_list()\">\n                        <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                        Delete selected\n                      </button>\n                      <button  class=\"btn btn-primary\" (click)=\"clear_list()\">\n                        <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                        Clear selected\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"columns columns-right btn-group pull-right\">\n\n                    <div class=\"export btn-group\">\n                      <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                              type=\"button\" aria-expanded=\"false\"><i\n                              class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>\n                      </button>\n                      <ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">\n                        <li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>\n                        <li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>\n                        <li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>\n                        <li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>\n                        <li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>\n                        <li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>\n                      </ul>\n                    </div>\n                  </div>\n\n                </div>\n              </p-header>\n              <p-column>\n                <ng-template pTemplate=\"header\">\n                  <div class=\"table-check\">\n                    <div class=\"checkbox checkbox-only\">\n                      <input type=\"checkbox\"  id=\"table-check-head\" name=\"main_checkbox\" [(ngModel)]=\"main_checkbox\" (change)=\"cheakall($event.target.checked)\">\n                      <label for=\"table-check-head\"></label>\n                    </div>\n                  </div>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-col let-car=\"rowData\">\n\n                  <div class=\"table-check\">\n                    <div class=\"checkbox checkbox-only\">\n                      <input type=\"checkbox\"  name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" (change)=\"chec()\" id=\"table-check-{{car['id']}}\">\n                      <label for=\"table-check-{{car['id']}}\"></label>\n                    </div>\n                  </div>\n                </ng-template>\n              </p-column>\n\n              <p-column>\n\n                <ng-template pTemplate=\"header\">\n                  <div style=\"text-align: center; \" class=\"th-inner\">Influencer</div>\n                  <div class=\"fht-cell\"></div>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-col let-car=\"rowData\">\n\n\n                  <a (click)=\"goTwitterProfile(car)\"\n                     title=\"{{car['name']}}\" style=\"text-align: left;\">\n                    <div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">\n                      <div class=\"mail-box-item-header\">\n\n                        <div class=\"mail-box-item-photo\">\n                          <img *ngIf=\"car['image_url']\"\n                               src=\"{{car['image_url']}}\"\n                               style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"\n                               data-placement=\"bottom\">\n\n                        </div>\n                        <div class=\"tbl mail-box-item-head-tbl\">\n                          <div class=\"tbl-row\">\n                            <div class=\"tbl-cell\">\n                              <div class=\"tbl mail-box-item-user-tbl\">\n                                <div class=\"tbl-row\">\n                                  <div class=\"tbl-cell tbl-cell-name\"\n                                       [innerHTML]=\"car['name']\"></div>\n                                  <!--<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>-->\n                                </div>\n                              </div>\n\n                            </div>\n                            <!--<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']-->\n                            <!--| uppercase}}</strong></div>-->\n                          </div>\n                        </div>\n\n                      </div>\n                      <div class=\"mail-box-item-content\">\n                        <!--<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>-->\n                        <div *ngIf=\"car['description']\" class=\"txt\" title=\"{{car['description']}}\"\n                             style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"\n                             [innerHTML]=\"car['description']\"></div>\n                      </div>\n                    </div>\n                  </a>\n                </ng-template>\n              </p-column>\n              <p-column>\n                <ng-template pTemplate=\"header\">\n                  <div style=\"text-align: center; \" class=\"th-inner\">Contact</div>\n                  <div class=\"fht-cell\"></div>\n                </ng-template>\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n                  <div class=\"col-item col-contact tooltips\">\n                    <ul>\n                      <li *ngIf=\"car['location']\">\n                        <div>\n                          <i class=\"fa fa-map-marker\"></i><!--ko text:AlexaCountry-->\n                          {{car['location']}}<!--/ko-->\n                        </div>\n                      </li>\n                      <li>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n\n                </ng-template>\n              </p-column>\n              <p-column [sortable]=\"true\" field=\"infscore.score\">\n                <ng-template pTemplate=\"header\">\n                  <div style=\"text-align: center; \" class=\"th-inner\">Influence</div>\n                  <div class=\"fht-cell\"></div>\n                </ng-template>\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\n                  <div class=\"col-lg-1\"></div>\n                  <div style=\"position: relative; bottom: 70px;font-size:22px;\">  {{car['infscore']['score'] | round}} %</div>\n\n\n\n                </ng-template>\n              </p-column>\n\n              <!--<p-column field=\"location\" header=\"Location\"></p-column>-->\n              <p-column>\n                <ng-template pTemplate=\"header\">\n                  <div style=\"text-align: center; \" class=\"th-inner\">Interests</div>\n                  <div class=\"fht-cell\"></div>\n\n                </ng-template>\n\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n\n                  <div class=\"col-lg-1\"></div>\n                  <button type=\"text\" (click)=\"fillinterests(car)\" pButton\n                          class=\"btn btn-rounded btn-inline btn-info\">Show Interests\n                  </button>\n                </ng-template>\n\n              </p-column>\n              <p-column>\n                <ng-template pTemplate=\"header\">\n                  <div style=\"text-align: center; \" class=\"th-inner\">Twitter Stats</div>\n                  <div class=\"fht-cell\"></div>\n\n                </ng-template>\n\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                  <button type=\"text\" (click)=\"filltwitterdata(car)\" pButton\n                          class=\"btn btn-rounded btn-inline btn-info\">Show\n                  </button>\n\n\n                </ng-template>\n\n              </p-column>\n\n\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </section>\n    <p-dialog *ngIf=\"dialogVisible_features\" [(visible)]=\"dialogVisible_features\" [responsive]=\"true\" showEffect=\"fade\"\n              [modal]=\"true\" width=\"450\">\n      <p-header *ngIf=\"dialogVisible_features\">\n\n        Interests of {{interests.name}}\n\n      </p-header>\n      <ul class=\"list-group\">\n        <li *ngIf=\"interests.infscore.interests\" class=\"list-group-item\">Interests:\n          <ul>\n            <li *ngFor=\"let c of interests.infscore.interests\" class=\"list-group-item\"\n                style=\"text-align: right;\">{{c}}\n            </li>\n          </ul>\n        </li>\n        <li *ngIf=\"interests.trend \" class=\"list-group-item\">Category:\n          <ul>\n            <li>\n              <ul *ngFor=\"let c of interests.trend \" class=\"list-group-item\" style=\"text-align: right;\">\n                <li *ngFor=\"let cat of c.category | unique: 'name'\">\n                  {{cat.name}}\n\n                </li>\n                <li *ngIf=\"!c.location\">\n                {{c.name}}\n              </li>\n\n                <!--<li *ngFor=\"let c of interests.trend\" class=\"list-group-item\" style=\"text-align: right;\"> <span *ngIf=\"c.category[1].name\">{{c.category[1].name}}</span></li>-->\n              </ul>\n\n            </li>\n            <li>\n              <!--<ul *ngFor=\"let c of interests.trend \" class=\"list-group-item\" style=\"text-align: right;\">-->\n               <!---->\n                <!--&lt;!&ndash;<li *ngFor=\"let c of interests.trend\" class=\"list-group-item\" style=\"text-align: right;\"> <span *ngIf=\"c.category[1].name\">{{c.category[1].name}}</span></li>&ndash;&gt;-->\n              <!--</ul>-->\n\n            </li>\n            <!--<li *ngIf=\"interests.infscore.interests\" class=\"list-group-item\">Interests:-->\n            <!--<ul>-->\n            <!--<li *ngFor=\"let c of interests.infscore.interests\" class=\"list-group-item\" style=\"text-align: right;\">{{c}}</li>-->\n            <!--</ul>-->\n            <!--</li>-->\n          </ul>\n      </ul>\n    </p-dialog>\n\n    <p-dialog *ngIf=\"dialogVisible\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n              width=\"450\">\n      <p-header *ngIf=\"dialogVisible\">\n\n        Stats of {{twitterdata.name}}\n\n      </p-header>\n      <ul class=\"list-group\">\n        <li *ngIf=\"twitterdata.followers_count\" class=\"list-group-item\"><span>Followers:</span>\n          <span style=\"float: right;\">{{twitterdata.followers_count}}</span></li>\n\n        <li *ngIf=\"twitterdata.favourites_count\" class=\"list-group-item\"><span>Favourites:</span>\n          <span style=\"float: right;\">{{twitterdata.favourites_count}}</span></li>\n        <li *ngIf=\"twitterdata.friends_count\" class=\"list-group-item\"><span>Friends:</span>\n          <span style=\"float: right;\">{{twitterdata.friends_count}}</span></li>\n\n\n      </ul>\n    </p-dialog>\n\n    <div class=\"container-fluid\" *ngIf=\"loaded\">\n\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/twitter-list/twitter-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);\nh3{font-family:Ubuntu;font-size:14px;font-style:normal;font-variant:normal;font-weight:500;line-height:15.4px}\n#wrapper{text-align:center}\n#yourdiv{display:inline-block}\nbody{font-family:'Open Sans', sans-serif;font-size:16px;font-weight:300;line-height:1em;text-align:center;color:#444;background:#d0d0d0}\nh1{font-size:2.5em;margin:2em 0 .5em}\nh2{margin-bottom:3em}\nem,strong{font-weight:700}\ninput{display:none}\nheader p{margin-bottom:0}\nsection{display:flex;justify-content:center;flex-direction:column;margin-bottom:2em;padding:0}\nsection:last-of-type{margin-bottom:0}\nsection article{-ms-grid-row-align:center;align-self:center;width:20em;margin-bottom:2em}\nsection article p,section article:last-of-type{margin-bottom:0}\np{line-height:1.5em;max-width:20em;margin:1.5em auto 2em;padding-bottom:1.5em}\np span{display:block}\n.container{z-index:1;display:flex;overflow:hidden;flex-direction:column;justify-content:center;margin-bottom:4em}\n.chart{font-size:1em;-webkit-perspective:1000px;perspective:1000px;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;-webkit-backface-visibility:visible;backface-visibility:visible}\n.bar{font-size:1em;position:relative;height:10em;transition:all .3s ease-in-out;-webkit-transform:rotateX(60deg) rotateY(0deg);transform:rotateX(60deg) rotateY(0deg);-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.bar .face{font-size:2em;position:relative;width:100%;height:2em;background-color:rgba(254,254,254,0.3)}\n.bar .face.side-a,.bar .face.side-b{width:2em}\n.bar .side-a{-webkit-transform:rotateX(90deg) rotateY(-90deg) translateX(2em) translateY(1em) translateZ(1em);transform:rotateX(90deg) rotateY(-90deg) translateX(2em) translateY(1em) translateZ(1em)}\n.bar .side-b{-webkit-transform:rotateX(90deg) rotateY(-90deg) translateX(4em) translateY(1em) translateZ(-1em);transform:rotateX(90deg) rotateY(-90deg) translateX(4em) translateY(1em) translateZ(-1em);position:absolute;right:0}\n.bar .side-0{-webkit-transform:rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(-1em);transform:rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(-1em)}\n.bar .side-1{-webkit-transform:rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(3em);transform:rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(3em)}\n.bar .top{-webkit-transform:rotateX(0deg) rotateY(0) translateX(0em) translateY(4em) translateZ(2em);transform:rotateX(0deg) rotateY(0) translateX(0em) translateY(4em) translateZ(2em)}\n.bar .floor{box-shadow:0 0.1em 0.6em rgba(0,0,0,0.3),0.6em -0.5em 3em rgba(0,0,0,0.3),1em -1em 8em #fefefe}\n.growing-bar{transition:all .3s ease-in-out;background-color:rgba(236,0,140,0.6);width:100%;height:2em}\n.bar.yellow .side-a,.bar.yellow .growing-bar{background-color:rgba(241,196,15,0.6)}\n.bar.yellow .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em rgba(241,196,15,0.8)}\n.bar.yellow .floor .growing-bar{box-shadow:0em 0em 2em rgba(241,196,15,0.8)}\n.bar.red .side-a,input[id='red']:checked ~ .chart .side-a,.bar.red .growing-bar,input[id='red']:checked ~ .chart .growing-bar{background-color:rgba(236,0,140,0.6)}\n.bar.red .side-0 .growing-bar,input[id='red']:checked ~ .chart .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em rgba(236,0,140,0.8)}\n.bar.red .floor .growing-bar,input[id='red']:checked ~ .chart .floor .growing-bar{box-shadow:0em 0em 2em rgba(236,0,140,0.8)}\n.bar.cyan .side-a,input[id='cyan']:checked ~ .chart .side-a,.bar.cyan .growing-bar,input[id='cyan']:checked ~ .chart .growing-bar{background-color:rgba(87,202,244,0.6)}\n.bar.cyan .side-0 .growing-bar,input[id='cyan']:checked ~ .chart .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em #57caf4}\n.bar.cyan .floor .growing-bar,input[id='cyan']:checked ~ .chart .floor .growing-bar{box-shadow:0em 0em 2em #57caf4}\n.bar.navy .side-a,.bar.navy .growing-bar{background-color:rgba(10,64,105,0.6)}\n.bar.navy .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em rgba(10,64,105,0.8)}\n.bar.navy .floor .growing-bar{box-shadow:0em 0em 2em rgba(10,64,105,0.8)}\n.bar.lime .side-a,input[id='lime']:checked ~ .chart .side-a,.bar.lime .growing-bar,input[id='lime']:checked ~ .chart .growing-bar{background-color:rgba(118,201,0,0.6)}\n.bar.lime .side-0 .growing-bar,input[id='lime']:checked ~ .chart .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em #76c900}\n.bar.lime .floor .growing-bar,input[id='lime']:checked ~ .chart .floor .growing-bar{box-shadow:0em 0em 2em #76c900}\n.bar.white .side-a,.bar.white .growing-bar{background-color:rgba(254,254,254,0.6)}\n.bar.white .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em #fefefe}\n.bar.white .floor .growing-bar{box-shadow:0em 0em 2em #fefefe}\n.bar.gray .side-a,.bar.gray .growing-bar{background-color:rgba(68,68,68,0.6)}\n.bar.gray .side-0 .growing-bar{box-shadow:-0.5em -1.5em 4em #444}\n.bar.gray .floor .growing-bar{box-shadow:0em 0em 2em #444}\n.chart .bar.yellow-face .face{background-color:rgba(241,196,15,0.2)}\n.chart .bar.lime-face .face{background-color:rgba(118,201,0,0.2)}\n.chart .bar.red-face .face{background-color:rgba(236,0,140,0.2)}\n.chart .bar.navy-face .face{background-color:rgba(10,64,105,0.2)}\n.chart .bar.cyan-face .face{background-color:rgba(87,202,244,0.2)}\n.chart .bar.gray-face .face{background-color:rgba(68,68,68,0.2)}\n.chart .bar.lightGray-face .face{background-color:rgba(145,144,144,0.2)}\n.bar-0 .growing-bar{width:0%}\n.bar-1 .growing-bar{width:1%}\n.bar-2 .growing-bar{width:2%}\n.bar-3 .growing-bar{width:3%}\n.bar-4 .growing-bar{width:4%}\n.bar-5 .growing-bar{width:5%}\n.bar-6 .growing-bar{width:6%}\n.bar-7 .growing-bar{width:7%}\n.bar-8 .growing-bar{width:8%}\n.bar-9 .growing-bar{width:9%}\n.bar-10 .growing-bar{width:10%}\n.bar-11 .growing-bar{width:11%}\n.bar-12 .growing-bar{width:12%}\n.bar-13 .growing-bar{width:13%}\n.bar-14 .growing-bar{width:14%}\n.bar-15 .growing-bar{width:15%}\n.bar-16 .growing-bar{width:16%}\n.bar-17 .growing-bar{width:17%}\n.bar-18 .growing-bar{width:18%}\n.bar-19 .growing-bar{width:19%}\n.bar-20 .growing-bar,input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar{width:20%}\n.bar-21 .growing-bar{width:21%}\n.bar-22 .growing-bar{width:22%}\n.bar-23 .growing-bar{width:23%}\n.bar-24 .growing-bar{width:24%}\n.bar-25 .growing-bar,input[id='pos-0']:checked ~ .chart .growing-bar{width:25%}\n.bar-26 .growing-bar{width:26%}\n.bar-27 .growing-bar{width:27%}\n.bar-28 .growing-bar{width:28%}\n.bar-29 .growing-bar{width:29%}\n.bar-30 .growing-bar{width:30%}\n.bar-31 .growing-bar{width:31%}\n.bar-32 .growing-bar{width:32%}\n.bar-33 .growing-bar{width:33%}\n.bar-34 .growing-bar{width:34%}\n.bar-35 .growing-bar{width:35%}\n.bar-36 .growing-bar{width:36%}\n.bar-37 .growing-bar{width:37%}\n.bar-38 .growing-bar{width:38%}\n.bar-39 .growing-bar{width:39%}\n.bar-40 .growing-bar{width:40%}\n.bar-41 .growing-bar{width:41%}\n.bar-42 .growing-bar{width:42%}\n.bar-43 .growing-bar{width:43%}\n.bar-44 .growing-bar{width:44%}\n.bar-45 .growing-bar{width:45%}\n.bar-46 .growing-bar{width:46%}\n.bar-47 .growing-bar{width:47%}\n.bar-48 .growing-bar{width:48%}\n.bar-49 .growing-bar{width:49%}\n.bar-50 .growing-bar,input[id='pos-1']:checked ~ .chart .growing-bar,input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar,input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar,input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar{width:50%}\n.bar-51 .growing-bar{width:51%}\n.bar-52 .growing-bar{width:52%}\n.bar-53 .growing-bar{width:53%}\n.bar-54 .growing-bar{width:54%}\n.bar-55 .growing-bar{width:55%}\n.bar-56 .growing-bar{width:56%}\n.bar-57 .growing-bar{width:57%}\n.bar-58 .growing-bar{width:58%}\n.bar-59 .growing-bar{width:59%}\n.bar-60 .growing-bar{width:60%}\n.bar-61 .growing-bar{width:61%}\n.bar-62 .growing-bar{width:62%}\n.bar-63 .growing-bar{width:63%}\n.bar-64 .growing-bar{width:64%}\n.bar-65 .growing-bar{width:65%}\n.bar-66 .growing-bar{width:66%}\n.bar-67 .growing-bar{width:67%}\n.bar-68 .growing-bar{width:68%}\n.bar-69 .growing-bar{width:69%}\n.bar-70 .growing-bar,input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar,input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar,input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar{width:70%}\n.bar-71 .growing-bar{width:71%}\n.bar-72 .growing-bar{width:72%}\n.bar-73 .growing-bar{width:73%}\n.bar-74 .growing-bar{width:74%}\n.bar-75 .growing-bar,input[id='pos-2']:checked ~ .chart .growing-bar{width:75%}\n.bar-76 .growing-bar{width:76%}\n.bar-77 .growing-bar{width:77%}\n.bar-78 .growing-bar{width:78%}\n.bar-79 .growing-bar{width:79%}\n.bar-80 .growing-bar,input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar{width:80%}\n.bar-81 .growing-bar{width:81%}\n.bar-82 .growing-bar{width:82%}\n.bar-83 .growing-bar{width:83%}\n.bar-84 .growing-bar{width:84%}\n.bar-85 .growing-bar{width:85%}\n.bar-86 .growing-bar{width:86%}\n.bar-87 .growing-bar{width:87%}\n.bar-88 .growing-bar{width:88%}\n.bar-89 .growing-bar{width:89%}\n.bar-90 .growing-bar{width:90%}\n.bar-91 .growing-bar{width:91%}\n.bar-92 .growing-bar{width:92%}\n.bar-93 .growing-bar{width:93%}\n.bar-94 .growing-bar{width:94%}\n.bar-95 .growing-bar{width:95%}\n.bar-96 .growing-bar{width:96%}\n.bar-97 .growing-bar{width:97%}\n.bar-98 .growing-bar{width:98%}\n.bar-99 .growing-bar{width:99%}\n.bar-100 .growing-bar,input[id='pos-3']:checked ~ .chart .growing-bar,input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar{width:100%}\n.chart.grid{display:flex;flex-direction:row}\n.chart.grid .exercise{flex:0 0 100%;display:flex}\n.chart.grid .exercise .bar{flex:1;margin:0 .5em}\n.chart.grid .exercise .bar:nth-child(2){z-index:8;flex:1 0 40%}\n.chart.grid .exercise .bar:first-child{z-index:10;margin-left:0}\n.chart.grid .exercise .bar:last-child{margin-right:0}\n.actions{display:flex;justify-content:center;margin-bottom:0;padding-bottom:2em;border-bottom:1px dotted rgba(68,68,68,0.4)}\nlabel{box-sizing:border-box;padding:1em;margin:0 .2em;cursor:pointer;transition:all .15s ease-in-out;color:#0a4069;border:1px solid rgba(254,254,254,0.6);border-radius:0;flex:1}\nlabel:first-child{margin-left:0;border-radius:.2em 0 0 .2em}\nlabel:last-child{margin-right:0;border-radius:0 .2em .2em 0}\ninput[id='exercise-1']:checked ~ .actions label[for='exercise-1'],input[id='exercise-2']:checked ~ .actions label[for='exercise-2'],input[id='exercise-3']:checked ~ .actions label[for='exercise-3'],input[id='exercise-4']:checked ~ .actions label[for='exercise-4'],input[id='pos-0']:checked ~ .actions label[for='pos-0'],input[id='pos-1']:checked ~ .actions label[for='pos-1'],input[id='pos-2']:checked ~ .actions label[for='pos-2'],input[id='pos-3']:checked ~ .actions label[for='pos-3'],input[id='red']:checked ~ .actions label[for='red'],input[id='cyan']:checked ~ .actions label[for='cyan'],input[id='lime']:checked ~ .actions label[for='lime']{color:#76c900;border:1px solid #031523;background-color:#0a4069}\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(1){flex:1 0 0%}\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(2){flex:1}\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(3){flex:1 0 30%}\ninput[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(1),input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(2),input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(3){flex:1}\ninput[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(1),input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(2){flex:1 0 30%}\ninput[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(3){flex:1}\n.SickyPage{position:fixed;top:79px;background:#eceff4;z-index:9;width:86%}\n"

/***/ }),

/***/ "./src/app/twitter-list/twitter-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.component.ts ***!
  \********************************************************/
/*! exports provided: TwitterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterListComponent", function() { return TwitterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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







var TwitterListComponent = /** @class */ (function () {
    function TwitterListComponent(http, httpNoPreloader, route, router, pagerService) {
        this.http = http;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.router = router;
        this.pagerService = pagerService;
        this.inflist = {};
        this.max = 100;
        this.user_list = {};
        this.loaded = false;
        this.loading = false;
        this.pager = {};
    }
    TwitterListComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    TwitterListComponent.prototype.saveEditable = function (t) {
        var _this = this;
        this.loading = true;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/update_name_ilist_twitter/', JSON.stringify({
            id: this.searchQuery,
            name: t
        }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
            localStorage.removeItem('selected_list_twitter');
            localStorage.setItem('selected_list_twitter', JSON.stringify({ id: _this.searchQuery, name: t }));
            _this.list_name = t;
            _this.loading = false;
        });
    };
    TwitterListComponent.prototype.fillinterests = function (data) {
        this.interests = data;
        this.dialogVisible_features = true;
    };
    TwitterListComponent.prototype.update_delete_list = function () {
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.list_name,
            text: 'Selected influencers will be deleted!',
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/update_delete_ilist_twitter/', JSON.stringify({
                id: _this.searchQuery,
                list: list
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.setPage(1);
                for (var i in _this.inflist) {
                    // this.inflist[i['id']] = e;
                    _this.inflist[i] = false;
                }
                _this.main_checkbox = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', '', 'success');
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', '', 'success');
            }
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        });
    };
    TwitterListComponent.prototype.filltwitterdata = function (data) {
        // data
        this.twitterdata = data;
        this.dialogVisible = true;
    };
    TwitterListComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.loaded = false;
        this.sub = this.route.params.subscribe(function (params) {
            if (Number(params['query'])) {
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/get_list_inf_twitter/' + params['query'] + '/?page=' + page, { headers: headers }, 'full')
                    .subscribe(function (res) {
                    _this.main_checkbox = false;
                    _this.influencers = res.json();
                    _this.list_name = res.json().name;
                    _this.searchQuery = params['query'];
                    _this.loaded = true;
                    _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 20);
                }, function (error) {
                    _this.router.navigate(['page-not-found']);
                });
            }
            else {
                _this.router.navigate(['page-not-found']);
            }
        });
    };
    // goTwitterProfile(influencer) {
    //     let url = 'https://twitter.com/' + influencer.screen_name.replace("('", '').replace("',)", '');
    //     Swal({
    //         title: 'You&#39;re Leaving This Site!',
    //         text: 'This is a link to an external site. Click OK to continue to the content (' + url + ').',
    //         // html: true,
    //         confirmButtonColor: '#2ecc71',
    //         showCancelButton: true,
    //
    //     }).then(() => {
    //
    //         window.open(url);
    //
    //
    //     }, (dismiss) => {
    //         // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
    //         if (dismiss === 'cancel') {
    //             // localStorage.removeItem('selected_list_twitter');
    //
    //             Swal(
    //                 'Cancelled',
    //                 '',
    //                 'success'
    //             )
    //         }
    //     });
    // }
    TwitterListComponent.prototype.chec = function () {
        console.clear();
        console.log(this.inflist);
    };
    TwitterListComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/get_iList_names_twitter/' + currentUser.username + '/-id/', { headers: headers })
            .subscribe(function (res) {
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                _this.user_list[li['id']] = li['name'];
            }
        });
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        var user_list = this.user_list;
        var current_list = JSON.parse(localStorage.getItem('selected_list_twitter'));
        for (var i in list) {
            if (list[i]) {
                ilist = true;
                break;
            }
        }
        if (current_list) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Add influencers to the list"' + current_list.name + '" or cancel and add to other list?',
                // text: "List",
                type: "question",
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
                // input: "text",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: 'Add to list"' + current_list.name + '"',
            }).then(function () {
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/create_add_ilist_twitter/', JSON.stringify({
                    id: current_list.id,
                    list: list
                }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    localStorage.removeItem('selected_list_twitter');
                    for (var i in _this.inflist) {
                        // this.inflist[i['id']] = e;
                        _this.inflist[i] = false;
                    }
                    _this.main_checkbox = false;
                    // console.log({name: result.value, list: list, username: currentUser.username});
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', current_list.name, 'success');
                }, function (error) {
                    // alert('error')
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    localStorage.removeItem('selected_list_twitter');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'No influencers added :)', 'success');
                }
            });
        }
        else {
            // let currentUser =JSON.parse(localStorage.getItem('currentUser'));
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: "Create new or add existing list of influencers?",
                // text: "List",
                type: "question",
                // input: "text",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: 'Create new list',
                cancelButtonText: 'Add to existing list',
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
                confirmButtonColor: '#00a8ff',
                cancelButtonColor: '#00a8ff',
            }).then(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Enter the name of list',
                    text: 'New list will be created',
                    type: 'question',
                    input: 'text',
                    preConfirm: function (result) {
                        return new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                if (result === '') {
                                    reject('List name cannot be empty');
                                }
                                else if (result.length > 30) {
                                    reject('Length of list name cannot be greater than 30');
                                }
                                else {
                                    var headers_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                                    headers_1.append('Content-Type', 'application/json');
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '' + '/check_ilist_twitter/', JSON.stringify({
                                        name: result.value,
                                        username: currentUser.username
                                    }), { headers: headers_1 }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                        resolve();
                                    }, function (error) {
                                        reject('List named "' + result + '" already exists');
                                    });
                                }
                            }, 2);
                        });
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Create',
                    cancelButtonText: 'Cancel'
                }).then(function (result) {
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                    headers.append('Content-Type', 'application/json');
                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/create_add_ilist_twitter/', JSON.stringify({
                        name: result.value,
                        list: list,
                        username: currentUser.username
                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        for (var i in _this.inflist) {
                            // this.inflist[i['id']] = e;
                            _this.inflist[i] = false;
                        }
                        _this.main_checkbox = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List created and influencers added!', result.value(), 'success');
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
                    });
                }, function (dismiss) {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss === 'cancel') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'No list created :)', 'success');
                    }
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    if (ilist) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            input: 'select',
                            confirmButtonText: 'Add',
                            showCancelButton: true,
                            confirmButtonColor: '#00a8ff',
                            cancelButtonColor: '#00a8ff',
                            inputOptions: user_list,
                            inputClass: 'form-control'
                        }).then(function (result) {
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                            headers.append('Content-Type', 'application/json');
                            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/create_add_ilist_twitter/', JSON.stringify({
                                id: result,
                                list: list
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                console.log({ name: result.value, list: list, username: currentUser.username });
                                for (var i in _this.inflist) {
                                    // this.inflist[i['id']] = e;
                                    _this.inflist[i] = false;
                                }
                                _this.main_checkbox = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', '', 'success');
                            }, function (error) {
                                // alert('error')
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
                            });
                        }, function (dismiss) {
                            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                            if (dismiss === 'cancel') {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'No list Updated :)', 'success');
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('No Influencers selected', '', 'warning');
                    }
                }
            });
        }
    };
    TwitterListComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    TwitterListComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
        console.log(this.inflist);
    };
    TwitterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-list',
            template: __webpack_require__(/*! ./twitter-list.component.html */ "./src/app/twitter-list/twitter-list.component.html"),
            styles: [__webpack_require__(/*! ./twitter-list.component.scss */ "./src/app/twitter-list/twitter-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"]])
    ], TwitterListComponent);
    return TwitterListComponent;
}());



/***/ }),

/***/ "./src/app/twitter-list/twitter-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.module.ts ***!
  \*****************************************************/
/*! exports provided: TwitterListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterListModule", function() { return TwitterListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _twitter_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./twitter-list.component */ "./src/app/twitter-list/twitter-list.component.ts");
/* harmony import */ var _twitter_list_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twitter-list.routing */ "./src/app/twitter-list/twitter-list.routing.ts");
/* harmony import */ var ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-inline-editor */ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js");
/* harmony import */ var _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../periscope-search/CustomPipe.module */ "./src/app/periscope-search/CustomPipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TwitterListModule = /** @class */ (function () {
    function TwitterListModule() {
    }
    TwitterListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_11__["CustomPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_twitter_list_routing__WEBPACK_IMPORTED_MODULE_9__["TwitterListRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__["InlineEditorModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"]],
            declarations: [_twitter_list_component__WEBPACK_IMPORTED_MODULE_8__["TwitterListComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]]
        })
    ], TwitterListModule);
    return TwitterListModule;
}());



/***/ }),

/***/ "./src/app/twitter-list/twitter-list.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.routing.ts ***!
  \******************************************************/
/*! exports provided: TwitterListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterListRoutes", function() { return TwitterListRoutes; });
/* harmony import */ var _twitter_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twitter-list.component */ "./src/app/twitter-list/twitter-list.component.ts");

var TwitterListRoutes = [{
        path: '',
        component: _twitter_list_component__WEBPACK_IMPORTED_MODULE_0__["TwitterListComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=twitter-list-twitter-list-module.js.map