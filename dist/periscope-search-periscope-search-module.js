(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["periscope-search-periscope-search-module"],{

/***/ "./src/app/periscope-search/periscope-search.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/periscope-search/periscope-search.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content{\r\n    width: 55%!important;\r\n}\r\n.modal-header{\r\n    background-color: black;\r\n    color: white;\r\n    font-size: 18px;\r\n}\r\n.modal-header .close{\r\n    color: white;\r\n    font-weight: bolder;\r\n}\r\nmat-placeholder{\r\n    margin: 7%!important;\r\n    font-size: 23px!important;\r\n\r\n}\r\n.modal-content {\r\n    margin-top: 40% !important;\r\n}\r\n.btn-rounded{\r\n    font-size: 17px!important;\r\n}\r\n.popup-close-button{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 38px;\r\n    background: #000000;\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -10px;\r\n    cursor: pointer;\r\n    transition: all .1s ease-in-out;\r\n    color: #fff;\r\n    font-size: 26px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    z-index: 1;\r\n}\r\n.card-header{\r\n    width: 82%;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    background: #000000;\r\n    position: absolute;\r\n    top: -25px;\r\n    right: 70px;\r\n    padding: 1px;\r\n    cursor: pointer;\r\n    transition: all .1s ease-in-out;\r\n    color: #fff;\r\n    font-size: 26px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    z-index: 1;\r\n}\r\n.modal-content{\r\n    width: 115%!important;\r\n}\r\nmat-tab-group{\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n}\r\nsection{\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n}\r\n.body{\r\n    background-color: #f9f9f9!important;\r\n}\r\nmat-form-field{\r\n    width: 75%;\r\n    line-height: 0.95;\r\n}\r\n.col-md-6{\r\n    margin-top: 0!important;\r\n}\r\n.btn-rounded {\r\n    background: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top: 3%;\r\n    border-color: black;\r\n    font-size: 17px;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\r\n}\r\n.profile-container{\r\n    width: 100%;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    max-width: 1200px;\r\n    display: inline-block;\r\n    /*height: 165px;*/\r\n    margin-top: 18px;\r\n}\r\n.loaded-container{\r\n    width: 100%;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    max-width: 1200px;\r\n    /*height: 300px;*/\r\n    /*display: inline-block;*/\r\n    margin-top: 18px;\r\n}\r\n.profile-checkbox {\r\n    display: flex;\r\n    flex: 0 0 auto;\r\n    width: 65px;\r\n    /* height: 100%; */\r\n    /* padding-left: 12px; */\r\n    padding-right: 12px;\r\n    border-right: 1px solid #ebecf3;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* background-color: #fff; */\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    cursor: pointer;\r\n}\r\ninput[type=checkbox]{\r\n    zoom: 1.5;\r\n}\r\n.tbl-cell{\r\n    font-weight: 600;\r\n    font-size: 19px;\r\n}\r\ni{\r\n    color: white;\r\n}\r\n.item-content{\r\n\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n\r\n}\r\n.item-loc{\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n}\r\nhr{\r\n    margin: 0!important;\r\n}\r\n.list-item1{\r\n    margin-right: 20px;\r\n    color: #000;\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n}\r\n.right-item{\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n}\r\n.btn-success{\r\n    background: black;\r\n    border-radius: 50px;\r\n    border-color: black;\r\n    padding: 8px 26px;\r\n    margin-top: 3px;\r\n    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)!important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/periscope-search/periscope-search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/periscope-search/periscope-search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid \">\r\n            <mat-tab-group   style=\"background: #000;  \">\r\n\r\n\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\r\n                                    Category Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <h6 style=\"padding: 20px 20px 2px 20px; font-weight: bolder\"> Periscope Influencers</h6>\r\n                            </div>\r\n                            <div class=\"col-md-6 text-center p-auto\">\r\n\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"getperipages($event)\">\r\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\"  [value]=\"option\">\r\n                                            {{ option }}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\r\n                                    Advanced Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field >\r\n                                        <input matInput type=\"text\" placeholder=\"Search by Username\"  tabindex=1 required>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field>\r\n                                        <input matInput type=\"text\" placeholder=\"Serch by Email\" name=\"contact\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field>\r\n                                        <input matInput type=\"text\" placeholder=\"Serch by Followers\" name=\"social\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field>\r\n                                        <input matInput type=\"text\" placeholder=\"Serch by Followings\" name=\"seo\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field>\r\n                                        <input matInput type=\"text\" placeholder=\"Search by Tweets\" name=\"title\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field>\r\n                                        <input matInput type=\"text\" placeholder=\"Serch by Likes\" name=\"title\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" style=\"margin-bottom: 1%\">\r\n                                <div class=\"col-md-2 offset-md-4 text-right\">\r\n                                    <button type=\"button\"  class=\"btn btn-rounded\" >\r\n                                        Search <i class=\"fa fa-sliders\"></i>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!loaded\" style=\"margin-top: 2%\">\r\n        <div class=\"col-md-12 text-left\">\r\n            <h4 style=\"font-weight: bolder\">Featured Periscope Influencers</h4>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n  <div class=\"row\" *ngIf=\"loaded\" style=\"margin-top: 2%\">\r\n    <div class=\"col-md-12 text-center\">\r\n    <nav>\r\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n        <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n        <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n        <!--</li>-->\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n          <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n            First\r\n          </a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n          <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n            <span aria-hidden=\"true\">&laquo;</span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n            [ngClass]=\"{active:pager.currentPage === page}\"\r\n            (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n        <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n        <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n        <!--</li>-->\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n          <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n            <span aria-hidden=\"true\">&raquo;</span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n          <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n            Last\r\n          </a>\r\n        </li>\r\n        <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n        <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n        <!--</li>-->\r\n      </ul>\r\n    </nav>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!--<section class=\"box-typical\" *ngIf=\"!loaded \">-->\r\n\r\n\r\n    <!--<div class=\"box-typical-body\">-->\r\n      <!--<div class=\"table-responsive\">-->\r\n        <!--<div class=\"bootstrap-table\">-->\r\n          <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"default_influencers.results\"-->\r\n                       <!--class=\"table table-striped table-hover\">-->\r\n\r\n            <!--<p-header class=\"box-typical-header\">-->\r\n              <!--<div class=\"fixed-table-toolbar\">-->\r\n                <!--<div class=\"bars pull-left\">-->\r\n                  <!--<div id=\"toolbar\">-->\r\n                    <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                    <!--<button class=\"btn btn-primary1\" (click)=\"add_create_list()\" >-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Add to list-->\r\n                    <!--</button>-->\r\n                    <!--<button class=\"btn btn-primary1\" (click)=\"clear_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Clear selected-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                  <!--<div class=\"export btn-group\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--&lt;!&ndash;&ndash;&gt;-->\r\n                <!--&lt;!&ndash;&ndash;&gt;-->\r\n              <!--</div>-->\r\n            <!--</p-header>-->\r\n\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input (change)=\"checkAllperid($event.target.checked)\" type=\"checkbox\" id=\"table-check-head\" name=\"main_checkbox\">-->\r\n                    <!--<label for=\"table-check-head\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input [(ngModel)]=\"inflist[car['id']]\" type=\"checkbox\" name=\"{{car['id']}}\"-->\r\n                            <!--id=\"table-check-{{car['id']}}\">-->\r\n                    <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Title</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                <!--<a (click)=\"goTwitterProfile_by_default(car)\"-->\r\n                   <!--title=\"{{car['name']}}\" style=\"text-align: left;\">-->\r\n                  <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                    <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                      <!--<div class=\"mail-box-item-photo\">-->\r\n                        <!--<img *ngIf=\"car['image_url']\"-->\r\n                             <!--src=\"{{car['image_url']}}\"-->\r\n                             <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                             <!--data-placement=\"bottom\">-->\r\n\r\n                      <!--</div>-->\r\n                      <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                        <!--<div class=\"tbl-row\">-->\r\n                          <!--<div class=\"tbl-cell\">-->\r\n                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                              <!--<div class=\"tbl-row\">-->\r\n                                <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                     <!--[innerHTML]=\"car['profile_name']\"></div>-->\r\n                                <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                              <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                          <!--</div>-->\r\n                          <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                          <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                        <!--</div>-->\r\n                      <!--</div>-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"mail-box-item-content\">-->\r\n                      <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                      <!--<div *ngIf=\"car['description']\" class=\"txt\"-->\r\n                           <!--title=\"{{car['description']}}\"-->\r\n                           <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                           <!--[innerHTML]=\"car['description']\"></div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</a>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Contact</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--<div class=\"col-item col-contact tooltips\">-->\r\n                  <!--<ul>-->\r\n                    <!--<li *ngIf=\"car['twitter_name']\">-->\r\n                      <!--<div>-->\r\n                        <!--<img src=\"../../assets/header-images/Twitter@1x-.png\">&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                        <!--{{car['twitter_name']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                      <!--</div>-->\r\n                    <!--</li>-->\r\n\r\n                  <!--</ul>-->\r\n                <!--</div>-->\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n\r\n\r\n            <!--&lt;!&ndash;<p-column field=\"location\" header=\"Location\"></p-column>&ndash;&gt;-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Profile Stats</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n\r\n              <!--</ng-template>-->\r\n\r\n              <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n                <!--<div class=\"col-item col-contact tooltips\">-->\r\n\r\n                  <!--<button type=\"button\" class=\"btn btn-rounded btn-info\" data-toggle=\"modal\" data-target=\"#exampleModal\">-->\r\n                    <!--Show Stats-->\r\n                  <!--</button>-->\r\n                  <!--<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">-->\r\n                    <!--<div class=\"modal-dialog\" role=\"document\">-->\r\n                      <!--<div class=\"modal-content\">-->\r\n                        <!--<div class=\"modal-header\">-->\r\n                          <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">-->\r\n                              <!--<h5 class=\"modal-title\" id=\"exampleModalLabel\">Stats</h5>-->\r\n\r\n                            <!--</div>-->\r\n                            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                              <!--<i class=\"fa fa-close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\" font-size: 19px; cursor: pointer; font-weight: bolder\"></i>-->\r\n\r\n                            <!--</div>-->\r\n                          <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"modal-body\">-->\r\n                          <!--<div class=\"col-item col-contact tooltips\">-->\r\n                            <!--<ul style=\"border: 1px solid #ababab;\">-->\r\n                              <!--<li *ngIf=\"car['followers']\" style=\"border-bottom: 1px solid #ababab; height: 45px\">-->\r\n                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                  <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                    <!--Followers:-->\r\n                                  <!--</div>-->\r\n                                  <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                    <!--{{car['followers']}}-->\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                <!--</div>-->\r\n                              <!--</li>-->\r\n                              <!--<li *ngIf=\"car['following']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                  <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                    <!--Following:-->\r\n                                  <!--</div>-->\r\n                                  <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                    <!--{{car['following']}}-->\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                <!--</div>-->\r\n                              <!--</li>-->\r\n                              <!--<li *ngIf=\"car['hearts']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                  <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                    <!--Hearts:-->\r\n                                  <!--</div>-->\r\n                                  <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                    <!--{{car['hearts']}}-->\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                <!--</div>-->\r\n                              <!--</li>-->\r\n\r\n                            <!--</ul>-->\r\n\r\n                          <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"modal-footer\">-->\r\n                          <!--<button type=\"button\" class=\"btn btn-secondary\" style=\"background-color: black\" data-dismiss=\"modal\">Close</button>-->\r\n                        <!--</div>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n\r\n                                 <!--</div>-->\r\n\r\n              <!--</ng-template>-->\r\n\r\n            <!--</p-column>-->\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Url</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--<div class=\"col-item col-contact tooltips\">-->\r\n                  <!--<ul>-->\r\n                    <!--<li *ngIf=\"car['profile_link']\">-->\r\n                      <!--<div>-->\r\n                        <!--<i class=\"fa fa-user-o\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                        <!--{{car['profile_link']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                      <!--</div>-->\r\n                    <!--</li>-->\r\n\r\n                  <!--</ul>-->\r\n                <!--</div>-->\r\n                <!--&lt;!&ndash;<td class=\"table-date\">{{car['email']}} <i&ndash;&gt;-->\r\n                <!--&lt;!&ndash;class=\"font-icon font-icon-clock\"></i></td>&ndash;&gt;-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n          <!--</p-dataTable>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n  <div class=\"container-fluid\" *ngIf=\"!loaded\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n      <div class=\"col-md-12 list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n            <div id=\"ck-button\">\r\n              <label>\r\n\r\n                <input type=\"checkbox\"  (change)=\"checkAllperid($event.target.checked)\" ><span>Select All</span>\r\n              </label>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"profile-container\" *ngFor=\"let item of default_influencers.results\" >\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n          <label for=\"table-check-{{item['id']}}\"></label>\r\n        </div>\r\n        <div class=\"col-md-2 text-center\">\r\n          <img [src]=\"item['image_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n          <div class=\"row\">\r\n            <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <label class=\"item-content\" style=\"overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <div class=\"col-md-3 text-left\">\r\n              <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> Category: <span class=\"list-item1\">Global</span> </label>\r\n\r\n            </div>\r\n            <div class=\"col-md-9 text-left\">\r\n\r\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_link']}}</a></label>\r\n            </div>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Followers:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li>\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}}</span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Broadcast :</span> <span class=\"list-item1\">{{item['braodcasts']}} |  </span> </li>\r\n\r\n            </ul>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-heart-o\" style=\"font-size:16px;color:#0a4069\"></i> Hearts :</span> <span class=\"list-item1\">{{item['hearts']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-twitter\" style=\"font-size:16px;color:#0a4069\"></i> Twitter: </span> <span class=\"list-item1\">{{item['twitter_name']}}</span></li>\r\n\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<section class=\"box-typical\" *ngIf=\"loaded&& influencers.totalItems!=0\">-->\r\n\r\n\r\n    <!--<div class=\"box-typical-body\">-->\r\n      <!--<div class=\"table-responsive\">-->\r\n        <!--<div class=\"bootstrap-table\">-->\r\n          <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers.results\"-->\r\n                       <!--class=\"table table-striped table-hover\">-->\r\n\r\n            <!--<p-header class=\"box-typical-header\">-->\r\n              <!--<div class=\"fixed-table-toolbar\">-->\r\n                <!--<div class=\"bars pull-left\">-->\r\n                  <!--<div id=\"toolbar\">-->\r\n                    <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                    <!--<button class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Add to list-->\r\n                    <!--</button>-->\r\n                    <!--<button class=\"btn btn-primary1\" (click)=\"clear_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Clear selected-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                  <!--<div class=\"export btn-group\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--&lt;!&ndash;&ndash;&gt;-->\r\n                <!--&lt;!&ndash;&ndash;&gt;-->\r\n              <!--</div>-->\r\n            <!--</p-header>-->\r\n\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input (change)=\"checkAllperi($event.target.checked)\" type=\"checkbox\" id=\"table-check-head\" name=\"main_checkbox\">-->\r\n                    <!--<label for=\"table-check-head\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input [(ngModel)]=\"inflist[car['id']]\" type=\"checkbox\" name=\"{{car['id']}}\"-->\r\n                            <!--id=\"table-check-{{car['id']}}\">-->\r\n                    <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Title</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                <!--<a (click)=\"goTwitterProfile_by_default(car)\"-->\r\n                   <!--title=\"{{car['name']}}\" style=\"text-align: left;\">-->\r\n                  <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                    <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                      <!--<div class=\"mail-box-item-photo\">-->\r\n                        <!--<img *ngIf=\"car['image_url']\"-->\r\n                             <!--src=\"{{car['image_url']}}\"-->\r\n                             <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                             <!--data-placement=\"bottom\">-->\r\n\r\n                      <!--</div>-->\r\n                      <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                        <!--<div class=\"tbl-row\">-->\r\n                          <!--<div class=\"tbl-cell\">-->\r\n                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                              <!--<div class=\"tbl-row\">-->\r\n                                <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                     <!--[innerHTML]=\"car['profile_name']\"></div>-->\r\n                                <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                              <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                          <!--</div>-->\r\n                          <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                          <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                        <!--</div>-->\r\n                      <!--</div>-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"mail-box-item-content\">-->\r\n                      <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                      <!--<div *ngIf=\"car['description']\" class=\"txt\"-->\r\n                           <!--title=\"{{car['description']}}\"-->\r\n                           <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                           <!--[innerHTML]=\"car['description']\"></div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</a>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Contact</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--<div class=\"col-item col-contact tooltips\">-->\r\n                  <!--<ul>-->\r\n                    <!--<li *ngIf=\"car['twitter_name']\">-->\r\n                      <!--<div>-->\r\n                        <!--<img src=\"../../assets/header-images/Twitter@1x-.png\">&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                        <!--{{car['twitter_name']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                      <!--</div>-->\r\n                    <!--</li>-->\r\n\r\n                  <!--</ul>-->\r\n                <!--</div>-->\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n\r\n\r\n            <!--&lt;!&ndash;<p-column field=\"location\" header=\"Location\"></p-column>&ndash;&gt;-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Profile Stats</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n\r\n              <!--</ng-template>-->\r\n\r\n              <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n                <!--<div class=\"col-item col-contact tooltips\">-->\r\n\r\n                  <!--<button type=\"button\" class=\"btn btn-rounded btn-info\" data-toggle=\"modal\" data-target=\"#exampleModal\">-->\r\n                    <!--Show Stats-->\r\n                  <!--</button>-->\r\n                  <!--<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">-->\r\n                    <!--<div class=\"modal-dialog\" role=\"document\">-->\r\n                      <!--<div class=\"modal-content\">-->\r\n                        <!--<div class=\"modal-header\">-->\r\n                          <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">-->\r\n                              <!--<h5 class=\"modal-title\" id=\"exampleModalLabel\">Stats</h5>-->\r\n\r\n                            <!--</div>-->\r\n                            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                              <!--<i class=\"fa fa-close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\" font-size: 19px; cursor: pointer; font-weight: bolder\"></i>-->\r\n\r\n                            <!--</div>-->\r\n                          <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"modal-body\">-->\r\n                          <!--<div class=\"col-item col-contact tooltips\">-->\r\n                            <!--<ul style=\"border: 1px solid #ababab;\">-->\r\n                              <!--<li *ngIf=\"car['followers']\" style=\"border-bottom: 1px solid #ababab; height: 45px\">-->\r\n                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                  <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                    <!--Followers:-->\r\n                                  <!--</div>-->\r\n                                  <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                    <!--{{car['followers']}}-->\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                <!--</div>-->\r\n                              <!--</li>-->\r\n                              <!--<li *ngIf=\"car['following']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                  <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                    <!--Following:-->\r\n                                  <!--</div>-->\r\n                                  <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                    <!--{{car['following']}}-->\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                <!--</div>-->\r\n                              <!--</li>-->\r\n                              <!--<li *ngIf=\"car['hearts']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                  <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                    <!--Hearts:-->\r\n                                  <!--</div>-->\r\n                                  <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                    <!--{{car['hearts']}}-->\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                <!--</div>-->\r\n                              <!--</li>-->\r\n\r\n                            <!--</ul>-->\r\n\r\n                          <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"modal-footer\">-->\r\n                          <!--<button type=\"button\" class=\"btn btn-secondary\" style=\"background-color: black\" data-dismiss=\"modal\">Close</button>-->\r\n                        <!--</div>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n\r\n\r\n                                 <!--</div>-->\r\n\r\n              <!--</ng-template>-->\r\n\r\n            <!--</p-column>-->\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Url</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--<div class=\"col-item col-contact tooltips\">-->\r\n                  <!--<ul>-->\r\n                    <!--<li *ngIf=\"car['profile_link']\">-->\r\n                      <!--<div>-->\r\n                        <!--<i class=\"fa fa-user-o\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                        <!--{{car['profile_link']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                      <!--</div>-->\r\n                    <!--</li>-->\r\n\r\n                  <!--</ul>-->\r\n                <!--</div>-->\r\n                <!--&lt;!&ndash;<td class=\"table-date\">{{car['email']}} <i&ndash;&gt;-->\r\n                <!--&lt;!&ndash;class=\"font-icon font-icon-clock\"></i></td>&ndash;&gt;-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n          <!--</p-dataTable>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n  <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems!==0\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n      <div class=\"col-md-12 list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n            <div id=\"ck-button\">\r\n              <label>\r\n\r\n                <input type=\"checkbox\"  (change)=\"checkAllperi($event.target.checked)\" ><span>Select All</span>\r\n              </label>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"profile-container\" *ngFor=\"let item of influencers.results\" >\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n          <label for=\"table-check-{{item['id']}}\"></label>\r\n        </div>\r\n        <div class=\"col-md-2 text-center\">\r\n          <img [src]=\"item['image_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n          <div class=\"row\">\r\n            <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <label class=\"item-content\" style=\"overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <div class=\"col-md-5 text-left\">\r\n              <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> Category: <span class=\"list-item1\">{{selected_category}}</span> </label>\r\n\r\n            </div>\r\n            <div class=\"col-md-7 text-left\">\r\n\r\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_link']}}</a></label>\r\n            </div>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Followers:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li>\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}}</span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Broadcast :</span> <span class=\"list-item1\">{{item['braodcasts']}} |  </span> </li>\r\n\r\n            </ul>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-heart-o\" style=\"font-size:16px;color:#0a4069\"></i> Hearts :</span> <span class=\"list-item1\">{{item['hearts']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-twitter\" style=\"font-size:16px;color:#0a4069\"></i> Twitter: </span> <span class=\"list-item1\">{{item['twitter_name']}}</span></li>\r\n\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/periscope-search/periscope-search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/periscope-search/periscope-search.component.ts ***!
  \****************************************************************/
/*! exports provided: PeriscopeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriscopeSearchComponent", function() { return PeriscopeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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








var PeriscopeSearchComponent = /** @class */ (function () {
    function PeriscopeSearchComponent(http, router, route, pagerService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.pagerService = pagerService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.max = 1000000;
        this.inflist = {};
        this.default_influencers = [];
        this.loaded = false;
        this.checklistname = false;
        this.pager = {};
        this.pdfArray = [];
        this.user_list = {};
        this.inf_list = 'Insta Influencers List';
        this.options = ["Abortion Service", "Academic Camp", "Accessories", "Accessories Store", "Accountant", "Actor", "Actor/director", "Acupuncturist", "Addiction Resources Center", "Addiction Service", "Addiction Treatment Center", "Adoption Service", "Adult Entertainment Service", "Advertising Agency", "Advertising/Marketing", "Advertising/Marketing Service", "Aerospace Company", "Aerospace/defense", "Afghani Restaurant", "African Restaurant", "Agricultural Cooperative", "Agricultural Service", "Agriculture", "Agriculture Company", "AIDS Resource Center", "Aircraft Dealership", "Airline Company", "Airline Industry Service", "Airport", "Airport Lounge", "Airport Shuttle Service", "Airport Terminal", "Album", "Alcohol Addiction Treatment Center", "Allergist", "Alternative & Holistic Health Service", "Amateur sports team", "Amateur Sport Team", "American Restaurant", "Amusement Center", "Amusement & Theme Park", "Andhra Restaurant", "Anesthesiologists", "Anglican Church", "Animal", "Animal breed", "Animal Shelter", "Antique Store", "Apartment & Condo Building", "Apostolic Church", "Apparel", "Apparel & Clothing", "Apparel Company", "Apparel Distributor", "Appliance Manufacturer", "Appliance Repair Service", "Appliances", "App page", "Aquarium", "Aquatic Pet Store", "Arabian Restaurant", "Arcade", "Archaeological Service", "Archery Range", "Archery Shop", "Architect", "Architectural Designer", "Architectural Engineer", "Argentinian Restaurant", "Armed Forces", "Armenian Restaurant", "Aromatherapy Service", "Art", "Art Gallery", "Artist", "Art Museum", "Art Restoration Service", "Art School", "Arts & Crafts Store", "Arts & Entertainment", "Arts/entertainment/nightlife", "Arts/humanities website", "Arts & Humanities Website", "Art Tour Agency", "Asian Fusion Restaurant", "Asian Restaurant", "Astrologist", "Astrologist & Psychic", "Athlete", "Attractions/things to do", "ATV Dealership", "ATV Recreation Park", "ATV Rental", "ATV Rental Shop", "Auction House", "Audiologist", "Audio Visual Equipment Store", "Auditorium", "Australian Restaurant", "Austrian Restaurant", "Author", "Auto Detailing Service", "Automation Service", "Automobiles and parts", "Automotive", "Automotive, Aircraft & Boat", "Automotive, Aircraft, Boat", "Automotive Body Shop", "Automotive Company", "Automotive Consultant", "Automotive Customization Shop", "Automotive Dealership", "Automotive Glass Service", "Automotive Leasing Service", "Automotive Manufacturer", "Automotive Parts Store", "Automotive Repair Shop", "Automotive Restoration Service", "Automotive Service", "Automotive Shipping Service", "Automotive Storage Facility", "Automotive Store", "Automotive Wholesaler", "Automotive Window Tinting Service", "Aviation", "Aviation School", "Awning Supplier", "Baby & Children's Clothing Store", "Baby Goods/Kids Goods", "Babysitter", "Bags/luggage", "Bags & Luggage Company", "Bags & Luggage Store", "Bail Bondsmen", "Bakery", "Ballroom", "Band", "Bank", "Bank Equipment & Service", "Bank/financial institution", "Bank/Financial Service", "Bank/financial services", "Bankruptcy Lawyer", "Baptist Church", "Bar", "Barbecue Restaurant", "Barber Shop", "Bar & Grill", "Bartending School", "Bartending Service", "Baseball Field", "Basketball Court", "Basque Restaurant", "Batting Cage", "Bavarian Restaurant", "Beach", "Beach Resort", "Beauty", "Beauty, Cosmetic & Personal Care", "Beauty/Cosmetics Company", "Beauty Salon", "Beauty Service", "Beauty Store", "Beauty Supplier", "Beauty Supply Store", "Bed and Breakfast", "Beer Bar", "Beer Garden", "Belgian Restaurant", "Bengali/Bangladeshi Restaurant", "Betting Shop", "Bicycle Rental Shop", "Bicycle Repair Service", "Bicycle Shop", "Big Box Retailer", "Bike Rental", "Bike Trail", "Bingo Hall", "Biotechnology", "Biotechnology Company", "Blacksmith", "Blinds & Curtains Store", "Blogger", "Blood Bank", "Board game", "Boat Dealership", "Boat/Ferry Company", "Boat Rental", "Boat / Sailing Instructor", "Boat Service", "Boat Tour Agency", "Book", "Book & Magazine Distributor", "Book series", "Books & Magazines", "Bookstore", "Book Store", "Borough", "Botanical Garden", "Bottled Water Company", "Bottled Water Supplier", "Boutique Store", "Bowling Alley", "Brand", "Brand Agency", "Brand/Company Type", "Brazilian Restaurant", "Breakfast & Brunch Restaurant", "Brewery", "Bridal Shop", "Bridge", "British Restaurant", "Broadcasting & Media Production Company", "Brokerage", "Brokerage Firm", "Bubble Tea Shop", "Buddhist Temple", "Buffet Restaurant", "Building Materials", "Building Material Store", "Burger Restaurant", "Burmese Restaurant", "Business", "Business Center", "Business Consultant", "Business/economy website", "Business & Economy Website", "Business person", "Business Service", "Business services", "Business Supply Service", "Bus Line", "Bus Station", "Bus Tour Agency", "Butcher Shop", "Cabin", "Cabinet & Countertop Store", "Cable & Satellite Company", "Cafe", "Cafeteria", "Cajun & Creole Restaurant", "Calabrian Restaurant", "Cambodian Restaurant", "Camera/photo", "Camera Store", "Campground", "Campus Building", "Canadian Restaurant", "Canal", "Candy Store", "Canoe & Kayak Rental", "Canoe & Kayak Rental Shop", "Cantonese Restaurant", "Car Dealership", "Cardiologist", "Career Counselor", "Cargo & Freight Company", "Caribbean Restaurant", "Car Rental", "Car Stereo Store", "Car Wash"];
    }
    PeriscopeSearchComponent.prototype.ngAfterViewInit = function () {
    };
    PeriscopeSearchComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    PeriscopeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentlist = JSON.parse(localStorage.getItem('selected_list_peri'));
        this.route.queryParams.subscribe(function (params) {
            _this.qparamschecker = params['name'] || '0';
            if (_this.qparamschecker === 'instagram') {
                _this.inCurrentpage = true;
            }
        });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/ml/periscope_categories', { headers: headers }, 'full')
            .subscribe(function (res) {
            _this.options = res.json();
            _this.filteredOptions = _this.myControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filterCategory(val) : _this.options.slice(); });
        });
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/get_iList_names_periscope/' + this.currentUser.username + '/-id/')
            .subscribe(function (res) {
            // user_list = res.json();
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                // let d= li['id']
                //  li['name']
                _this.user_list[li['id']] = li['name'];
                _this.checklistname = true;
                // user_list.push({})
            }
        });
        this.get_default_peri_influencers(1);
    };
    PeriscopeSearchComponent.prototype.get_default_peri_influencers = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // this.http.get(Config.api+'/ml/get_periscope_influencers_list/' + '/?page=' + page )
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/ml/get_periscope_influencers_list/')
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.default_influencers = res.json();
            _this.pdfArray = _this.default_influencers['results'];
            _this.pager = _this.pagerService.getPager(_this.default_influencers['totalItems'], page, 10);
            // this.loaded = true;
        });
    };
    PeriscopeSearchComponent.prototype.go_to_list_in = function (e, name) {
        this.router.navigate(['instagram/list/', e]);
    };
    PeriscopeSearchComponent.prototype.goToInstagram = function (s) {
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
    PeriscopeSearchComponent.prototype.getperipages = function (e) {
        this.selected_category = e['option']['value'];
        this.pager = {};
        this.setPage(1);
    };
    PeriscopeSearchComponent.prototype.filterCategory = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    PeriscopeSearchComponent.prototype.chec = function () {
        console.clear();
    };
    PeriscopeSearchComponent.prototype.checkAllperi = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
    };
    PeriscopeSearchComponent.prototype.checkAllperid = function (e) {
        for (var _i = 0, _a = this.default_influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
    };
    PeriscopeSearchComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = this.currentUser;
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        var user_list = this.user_list;
        var current_list = JSON.parse(localStorage.getItem('selected_list_peri'));
        for (var i in list) {
            if (list[i]) {
                ilist = true;
                // alert('jsdkada');
                break;
            }
        }
        if (current_list) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
                        }, 1);
                    });
                },
                // input: "text",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: 'Add to list"' + current_list.name + '"',
            }).then(function () {
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/create_add_ilist_periscope/', JSON.stringify({ id: current_list.id, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    localStorage.removeItem('selected_list_peri');
                    for (var i in _this.inflist) {
                        // this.inflist[i['id']] = e;
                        _this.inflist[i] = false;
                    }
                    _this.main_checkbox = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List updated!', current_list.name, 'success');
                }, function (error) {
                    // alert('error')
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Try again after some time!', error.toString(), 'error');
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    localStorage.removeItem('selected_list_peri');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', 'No influencers added :)', 'success');
                }
            });
        }
        else {
            // let currentUser =JSON.parse(localStorage.getItem('currentUser'));
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
                                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                                    headers.append('Content-Type', 'application/json');
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/check_ilist_periscope/', JSON.stringify({
                                        name: result,
                                        // name: result.value,
                                        username: currentUser.username
                                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
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
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                    headers.append('Content-Type', 'application/json');
                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/create_add_ilist_periscope/', JSON.stringify({
                        name: result.value,
                        list: list,
                        username: currentUser.username
                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        for (var i in _this.inflist) {
                            // this.inflist[i['id']] = e;
                            _this.inflist[i] = false;
                        }
                        _this.main_checkbox = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List created and influencers added!', result.value, 'success');
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Try again after some time!', error.toString(), 'error');
                    });
                }, function (dismiss) {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss === 'cancel') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', 'No list created :)', 'success');
                    }
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    if (ilist) {
                        if (_this.checklistname) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                                input: 'select',
                                confirmButtonText: 'Add',
                                showCancelButton: true,
                                confirmButtonColor: '#00a8ff',
                                cancelButtonColor: '#00a8ff',
                                inputOptions: user_list,
                                inputClass: 'form-control'
                            }).then(function (result) {
                                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                                headers.append('Content-Type', 'application/json');
                                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/create_add_ilist_periscope/', JSON.stringify({ id: result, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
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
                                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                                if (dismiss === 'cancel') {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', 'No list Updated :)', 'success');
                                }
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('No List created yet!', '', 'warning');
                        }
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('No Influencers selected', '', 'warning');
                    }
                }
            });
        }
    };
    PeriscopeSearchComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    PeriscopeSearchComponent.prototype.getCatName = function (e) {
        this.selected_category = e.value;
    };
    PeriscopeSearchComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        // this.http.get(Config.api+'/ml/get_instagram_users/' + this.selected_category + '/?page=' + page + '', {headers:headers}, 'full')
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/ml/get_periscope_pages/' + this.selected_category + '/?page=' + page + '', {
            name: this.name,
            following: this.following,
            follower: this.follower,
            account_rank: this.account_rank,
            posts: this.post,
        }, { headers: headers })
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.influencers = res.json();
            _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
            _this.loaded = true;
        });
    };
    PeriscopeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-periscope-search',
            template: __webpack_require__(/*! ./periscope-search.component.html */ "./src/app/periscope-search/periscope-search.component.html"),
            styles: [__webpack_require__(/*! ./periscope-search.component.css */ "./src/app/periscope-search/periscope-search.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], PeriscopeSearchComponent);
    return PeriscopeSearchComponent;
}());



/***/ }),

/***/ "./src/app/periscope-search/periscope-search.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/periscope-search/periscope-search.module.ts ***!
  \*************************************************************/
/*! exports provided: PeriscopeSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriscopeSearchModule", function() { return PeriscopeSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _periscope_search_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./periscope-search.routing */ "./src/app/periscope-search/periscope-search.routing.ts");
/* harmony import */ var _periscope_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./periscope-search.component */ "./src/app/periscope-search/periscope-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_inline_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-inline-editor */ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var PeriscopeSearchModule = /** @class */ (function () {
    function PeriscopeSearchModule() {
    }
    PeriscopeSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_periscope_search_routing__WEBPACK_IMPORTED_MODULE_4__["PeriscopeSearchRoutes"]), primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], ng2_inline_editor__WEBPACK_IMPORTED_MODULE_7__["InlineEditorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_10__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"]],
            declarations: [_periscope_search_component__WEBPACK_IMPORTED_MODULE_5__["PeriscopeSearchComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_9__["PagerService"]]
        })
    ], PeriscopeSearchModule);
    return PeriscopeSearchModule;
}());



/***/ }),

/***/ "./src/app/periscope-search/periscope-search.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/periscope-search/periscope-search.routing.ts ***!
  \**************************************************************/
/*! exports provided: PeriscopeSearchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriscopeSearchRoutes", function() { return PeriscopeSearchRoutes; });
/* harmony import */ var _periscope_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./periscope-search.component */ "./src/app/periscope-search/periscope-search.component.ts");

var PeriscopeSearchRoutes = [{
        path: '',
        component: _periscope_search_component__WEBPACK_IMPORTED_MODULE_0__["PeriscopeSearchComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=periscope-search-periscope-search-module.js.map