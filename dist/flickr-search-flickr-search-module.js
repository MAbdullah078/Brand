(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flickr-search-flickr-search-module"],{

/***/ "./src/app/flickr-search/flickr-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group{\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n}\r\nsection{\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n}\r\n.body{\r\n    background-color: #f9f9f9!important;\r\n}\r\nmat-form-field{\r\n    width: 75%;\r\n    line-height: 0.95;\r\n}\r\n.col-md-6{\r\n    margin-top: 0!important;\r\n}\r\n.btn-rounded {\r\n    background: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top: 3%;\r\n    border-color: black;\r\n    font-size: 17px;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\r\n}\r\n.profile-container{\r\n    width: 100%;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    max-width: 1200px;\r\n    display: inline-block;\r\n    /*height: 165px;*/\r\n    margin-top: 18px;\r\n}\r\n.loaded-container{\r\n    width: 100%;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    max-width: 1200px;\r\n    /*height: 300px;*/\r\n    /*display: inline-block;*/\r\n    margin-top: 18px;\r\n}\r\n.profile-checkbox {\r\n    display: flex;\r\n    flex: 0 0 auto;\r\n    width: 65px;\r\n    /* height: 100%; */\r\n    /* padding-left: 12px; */\r\n    padding-right: 12px;\r\n    border-right: 1px solid #ebecf3;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* background-color: #fff; */\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    cursor: pointer;\r\n}\r\ninput[type=checkbox]{\r\n    zoom: 1.5;\r\n}\r\n.tbl-cell{\r\n    font-weight: 600;\r\n    font-size: 19px;\r\n}\r\ni{\r\n    color: white;\r\n}\r\n.item-content{\r\n\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n\r\n}\r\n.item-loc{\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n}\r\nhr{\r\n    margin: 0!important;\r\n}\r\n.list-item1{\r\n    margin-right: 20px;\r\n    color: #000;\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n}\r\n.right-item{\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n}\r\n.btn-success{\r\n    background: black;\r\n    border-radius: 50px;\r\n    border-color: black;\r\n    padding: 8px 26px;\r\n    margin-top: 3px;\r\n    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)!important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/flickr-search/flickr-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"container-fluid \">\r\n      <mat-tab-group   style=\"background: #000;  \">\r\n\r\n\r\n        <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n          <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\r\n                                    Category Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n          </ng-template>\r\n          <div class=\"body\">\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <h6 style=\"padding: 20px 20px 2px 20px; font-weight: bolder\"> Flickr Influencers</h6>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 text-center p-auto\">\r\n\r\n                <mat-form-field class=\"example-full-width \" style=\"width:60%\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"getFlickrData($event)\">\r\n                    <mat-option *ngFor=\"let option of filteredOptions | async\"  [value]=\"option\">\r\n                      {{ option }}\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n          <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\r\n                                    Advanced Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n          </ng-template>\r\n          <div class=\"body\">\r\n            <div class=\"container\">\r\n              <form (submit)=\"setPage(1)\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <mat-select  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\r\n                                placeholder=\"Select Category\" style=\"width:75%\">\r\n                      <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\r\n                    </mat-select>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\"[(ngModel)]=\"title\" placeholder=\"Serch by Title/Name\" name=\"contact\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [(ngModel)]=\"likes\" placeholder=\"Serch by Likes\" name=\"social\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [(ngModel)]=\"perfomance\" placeholder=\"Serch by Perfomance\" name=\"seo\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [(ngModel)]=\"location\" placeholder=\"Serch by Location\" name=\"loc\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" [(ngModel)]=\"ER\" placeholder=\"Serch by Engagement Range\" name=\"er\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1%\">\r\n                  <div class=\"col-md-2 offset-md-4 text-right\">\r\n                    <button type=\"submit\"  class=\"btn btn-rounded\" >\r\n                      Search <i class=\"fa fa-sliders\"></i>\r\n                    </button>\r\n                  </div>\r\n\r\n                </div>\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!loaded\" style=\"margin-top: 3%\">\r\n    <div class=\"col-md-12 text-left\">\r\n      <h4 style=\"font-weight: bolder\">Featured Flicker Influencers</h4>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"loaded && fbinfluencers.totalItems===0\">\r\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 115px\">\r\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px\">\r\n        <div class=\"box-typical-full-height\">\r\n          <div class=\"add-customers-screen-user\">\r\n            <i class=\"font-icon font-icon-user\"></i>\r\n          </div>\r\n          <h2>OOPS!</h2>\r\n          <p class=\"lead color-blue-grey-lighter\">No search results are found<br> try another category.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<div *ngIf=\"!loaded\" class=\"not-loaded\">-->\r\n  <!--<h4>-->\r\n  <!--Select category From Search bar to influence with Roar!-->\r\n  <!--</h4>-->\r\n  <!--</div>-->\r\n  <!--<br>-->\r\n  <div>\r\n    <div *ngIf=\"loaded&& fbinfluencers.totalItems!=0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <nav style=\"margin-top:2%\">\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n              <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n              <!--</li>-->\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n                  First\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n                  <span aria-hidden=\"true\">&laquo;</span>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n                  [ngClass]=\"{active:pager.currentPage === page}\"\r\n                  (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n              <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n              <!--</li>-->\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n                  <span aria-hidden=\"true\">&raquo;</span>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n                  Last\r\n                </a>\r\n              </li>\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n              <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n              <!--</li>-->\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--<section class=\"box-typical\" *ngIf=\"!loaded\">-->\r\n    <!--<div class=\"box-typical-body\">-->\r\n      <!--<div class=\"table-responsive\">-->\r\n        <!--<div class=\"bootstrap-table\">-->\r\n          <!--<p-dataTable exportFilename=\"Influencers\" [value]=\"influencers_by_default_FB.results\"  class=\"table table-striped table-hover\">-->\r\n\r\n            <!--<p-header class=\"box-typical-header\">-->\r\n              <!--<div class=\"fixed-table-toolbar\">-->\r\n                <!--<div class=\"bars pull-left\">-->\r\n                  <!--<div id=\"toolbar\">-->\r\n                    <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Add to list-->\r\n                    <!--</button>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"uncheckAll()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Clear selected-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                  <!--<div class=\"export btn-group\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n\r\n\r\n              <!--</div>-->\r\n            <!--</p-header>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input type=\"checkbox\" id=\"table-check-head\" [(ngModel)]=\"main_checkbox\"  (click)=\"checkedAllDef($event.target.checked)\">-->\r\n                    <!--<label for=\"table-check-head\"></label>-->\r\n\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-car=\"rowData\">-->\r\n                <!--<div class=\"checkbox checkbox-only\">-->\r\n                  <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" id=\"table-check-{{car['id']}}\">-->\r\n                  <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Title</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n                <!--<div class=\"mail-box-item selected-line red\" (click)=\"goToLink(car['profile_linked'])\" style=\" max-width: 250px; cursor: pointer\">-->\r\n\r\n                      <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                          <!--<div class=\"mail-box-item-photo\">-->\r\n                              <!--<img *ngIf=\"car['image_link']\"-->\r\n                                   <!--src=\"{{car['image_link']}}\"-->\r\n                                   <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                                   <!--data-placement=\"bottom\">-->\r\n\r\n                          <!--</div>-->\r\n                          <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                              <!--<div class=\"tbl-row\">-->\r\n                                  <!--<div class=\"tbl-cell\">-->\r\n                                      <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                                          <!--<div class=\"tbl-row\">-->\r\n                                              <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                                   <!--[innerHTML]=\"car['profile_name']\"></div>-->\r\n                                              <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                                          <!--</div>-->\r\n                                      <!--</div>-->\r\n\r\n                                  <!--</div>-->\r\n                                  <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                                  <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                              <!--</div>-->\r\n                          <!--</div>-->\r\n                      <!--</div>-->\r\n\r\n                  <!--</div>-->\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--&lt;!&ndash;<p-column>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<ng-template pTemplate=\"header\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<div class=\"th-inner\" style=\"text-align: center\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;Category&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<div class=\"fht-cell\"></div>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;{{car['category']['name']}}&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</p-column>&ndash;&gt;-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Followers</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n                <!--{{car['followers']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Joined Flickr</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n                <!--{{car['joined_date'] }}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n            <!--<ng-template pTemplate=\"header\">-->\r\n              <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                <!--<label style=\"\" >Profile</label>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"fht-cell\"></div>-->\r\n            <!--</ng-template>-->\r\n            <!--<ng-template pTemplate=\"body\" let-car=\"rowData\">-->\r\n              <!--{{car['profile_linked']}}                        </ng-template>-->\r\n          <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Rank</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: left\">Perfomance-->\r\n                    <!--<div class=\"export btn-group\" style=\"float: right; background-color: black\">-->\r\n                        <!--<button class=\"btn btn-default dropdown-toggle\"  style=\" background-color: black\" data-toggle=\"dropdown\"-->\r\n                                <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                                <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                        <!--</button>-->\r\n                        <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: 100%;-->\r\n    <!--font-size: 14px;-->\r\n    <!--text-align: -webkit-center;left: auto\">-->\r\n                            <!--<li data-type=\"json\"><a (click)=\"JSPDF()\" id=\"clickMe\">PDF</a></li>-->\r\n                            <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                            <!--<li data-type=\"csv\"><a  (click)=\"convert_to_csv()\">CSV</a></li>-->\r\n                            <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                            <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                            <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                        <!--</ul>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n              <!--<ng-template pTemplate=\"body\" let-car=\"rowData\" >-->\r\n                <!--<round-progress [current]=\"car['profile_rank']\"-->\r\n                                <!--[max]=\"max\"-->\r\n                                <!--[color]=\"'#ca260f'\"-->\r\n                                <!--[background]=\"'#eaeaea'\"-->\r\n                                <!--[radius]=\"100\"-->\r\n                                <!--[stroke]=\"20\"-->\r\n                                <!--[semicircle]=\"false\"-->\r\n                                <!--[rounded]=\"false\"-->\r\n                                <!--[clockwise]=\"true\"-->\r\n                                <!--[responsive]=\"false\"-->\r\n                                <!--[duration]=\"800\"-->\r\n                                <!--[animation]=\"'easeInOutQuart'\"-->\r\n                                <!--[animationDelay]=\"5\"-->\r\n                                <!--style=\"margin: auto; max-width:70px; max-height: 46px; overflow: unset\"   >-->\r\n\r\n                <!--</round-progress>-->\r\n                <!--<div style=\"position: relative; bottom: 22px;font-size:16px; font-weight: bold\">{{car['profile_rank']}}</div>-->\r\n\r\n\r\n\r\n                <!--&lt;!&ndash;<div class=\"chart chart-table\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;&lt;!&ndash;{{(row.ER.replace('%',''))|round}}&ndash;&gt;&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"bar bar-{{(car['ER'].replace('%',''))|round}} navy\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face top\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-0\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face floor\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-a\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-b\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-1\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--&lt;!&ndash;<p-column >&ndash;&gt;-->\r\n              <!--&lt;!&ndash;<ng-template pTemplate=\"header\">&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"fht-cell\"></div>&ndash;&gt;-->\r\n              <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n              <!--&lt;!&ndash;<ng-template pTemplate=\"body\" let-car=\"rowData\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;{{car['PTAT']}}&ndash;&gt;-->\r\n              <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</p-column>&ndash;&gt;-->\r\n\r\n          <!--</p-dataTable>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"!loaded\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n      <div class=\"col-md-12 list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n            <div id=\"ck-button\">\r\n              <label>\r\n\r\n                <input type=\"checkbox\"  (change)=\"checkedAllDef($event.target.checked)\" ><span>Select All</span>\r\n              </label>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"profile-container\" *ngFor=\"let item of influencers_by_default_FB.results\" >\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n          <label for=\"table-check-{{item['id']}}\"></label>\r\n        </div>\r\n        <div class=\"col-md-2 text-center\">\r\n          <img [src]=\"item['image_link']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n          <div class=\"row\">\r\n            <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <label class=\"item-content\" style=\"overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <div class=\"col-md-3 text-left\">\r\n              <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> Category: <span class=\"list-item1\">Global</span> </label>\r\n\r\n            </div>\r\n            <div class=\"col-md-9 text-left\">\r\n\r\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_linked']}}</a></label>\r\n            </div>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Followers:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li>\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-calendar\" style=\"font-size:16px;color:#0a4069\"></i> Joined Date:</span> <span class=\"list-item1\">{{item['joined_date']}}</span></li>\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Broadcast :</span> <span class=\"list-item1\">{{item['braodcasts']}} |  </span> </li>-->\r\n\r\n            </ul>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n              <!--<li><span class=\"right-item\"> <i class=\"fa fa-sticky-note-o\" style=\"font-size:16px;color:#0a4069\"></i> Posts :</span> <span class=\"list-item1\">{{item['posts']}} |   </span></li>-->\r\n              <!--<li *ngIf=\"item['twitter_profile']\"><span class=\"right-item\"><i class=\"fa fa-twitter\" style=\"font-size:16px;color:#0a4069\"></i> Twitter: </span> <span class=\"list-item1\">{{item['twitter_profile']}}</span></li>-->\r\n              <!--<li *ngIf=\"!item['twitter_profile']\"><span class=\"right-item\"><i class=\"fa fa-twitter\" style=\"font-size:16px;color:#0a4069\"></i> Twitter: </span> <span class=\"list-item1\">N/A</span></li>-->\r\n\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"loaded && fbinfluencers.totalItems!=0\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n      <div class=\"col-md-12 list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n            <div id=\"ck-button\">\r\n              <label>\r\n\r\n                <input type=\"checkbox\"  (change)=\"checkedAll($event.target.checked)\" ><span>Select All</span>\r\n              </label>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"profile-container\" *ngFor=\"let item of fbinfluencers.results\" >\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n          <label for=\"table-check-{{item['id']}}\"></label>\r\n        </div>\r\n        <div class=\"col-md-2 text-center\">\r\n          <img [src]=\"item['image_link']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n          <div class=\"row\">\r\n            <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <label class=\"item-content\" style=\"overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <div class=\"col-md-3 text-left\">\r\n              <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> Category: <span class=\"list-item1\">Global</span> </label>\r\n\r\n            </div>\r\n            <div class=\"col-md-9 text-left\">\r\n\r\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_linked']}}</a></label>\r\n            </div>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Followers:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li>\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-calendar\" style=\"font-size:16px;color:#0a4069\"></i> Joined Date:</span> <span class=\"list-item1\">{{item['joined_date']}}</span></li>\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Broadcast :</span> <span class=\"list-item1\">{{item['braodcasts']}} |  </span> </li>-->\r\n\r\n            </ul>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n              <!--<li><span class=\"right-item\"> <i class=\"fa fa-sticky-note-o\" style=\"font-size:16px;color:#0a4069\"></i> Posts :</span> <span class=\"list-item1\">{{item['posts']}} |   </span></li>-->\r\n              <!--<li *ngIf=\"item['twitter_profile']\"><span class=\"right-item\"><i class=\"fa fa-twitter\" style=\"font-size:16px;color:#0a4069\"></i> Twitter: </span> <span class=\"list-item1\">{{item['twitter_profile']}}</span></li>-->\r\n              <!--<li *ngIf=\"!item['twitter_profile']\"><span class=\"right-item\"><i class=\"fa fa-twitter\" style=\"font-size:16px;color:#0a4069\"></i> Twitter: </span> <span class=\"list-item1\">N/A</span></li>-->\r\n\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<section class=\"box-typical\" *ngIf=\"loaded && fbinfluencers.totalItems!=0\">-->\r\n    <!--<div class=\"box-typical-body\">-->\r\n      <!--<div class=\"table-responsive\">-->\r\n        <!--<div class=\"bootstrap-table\">-->\r\n          <!--<p-dataTable exportFilename=\"Influencers\" [value]=\"fbinfluencers.results\"  class=\"table table-striped table-hover\">-->\r\n\r\n            <!--<p-header class=\"box-typical-header\">-->\r\n              <!--<div class=\"fixed-table-toolbar\">-->\r\n                <!--<div class=\"bars pull-left\">-->\r\n                  <!--<div id=\"toolbar\">-->\r\n                    <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Add to list-->\r\n                    <!--</button>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"uncheckAll()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Clear selected-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                  <!--<div class=\"export btn-group\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n\r\n\r\n              <!--</div>-->\r\n            <!--</p-header>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input type=\"checkbox\" id=\"table-check-head\" [(ngModel)]=\"main_checkbox\"  (click)=\"checkedAll($event.target.checked)\">-->\r\n                    <!--<label for=\"table-check-head\"></label>-->\r\n\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-car=\"rowData\">-->\r\n                <!--<div class=\"checkbox checkbox-only\">-->\r\n                  <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" id=\"table-check-{{car['id']}}\">-->\r\n                  <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Title</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n                <!--<div class=\"mail-box-item selected-line red\" (click)=\"goToLink(car['profile_linked'])\" style=\" max-width: 250px; cursor: pointer\">-->\r\n\r\n                  <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                    <!--<div class=\"mail-box-item-photo\">-->\r\n                      <!--<img *ngIf=\"car['image_link']\"-->\r\n                           <!--src=\"{{car['image_link']}}\"-->\r\n                           <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                           <!--data-placement=\"bottom\">-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                      <!--<div class=\"tbl-row\">-->\r\n                        <!--<div class=\"tbl-cell\">-->\r\n                          <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                            <!--<div class=\"tbl-row\">-->\r\n                              <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                   <!--[innerHTML]=\"car['profile_name']\"></div>-->\r\n                              <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                            <!--</div>-->\r\n                          <!--</div>-->\r\n\r\n                        <!--</div>-->\r\n                        <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n\r\n                <!--</div>-->\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--&lt;!&ndash;<p-column>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<ng-template pTemplate=\"header\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<div class=\"th-inner\" style=\"text-align: center\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;Category&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<div class=\"fht-cell\"></div>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">&ndash;&gt;-->\r\n            <!--&lt;!&ndash;{{car['category']['name']}}&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;</p-column>&ndash;&gt;-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Followers</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n                <!--{{car['followers']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Joined Flickr</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n                <!--{{car['joined_date'] }}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Profile</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-car=\"rowData\">-->\r\n                <!--{{car['profile_linked']}}                        </ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"th-inner\" style=\"text-align: center\">-->\r\n                  <!--<label style=\"\" >Rank</label>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<div class=\"th-inner\" style=\"text-align: left\">Perfomance-->\r\n                <!--<div class=\"export btn-group\" style=\"float: right; background-color: black\">-->\r\n                  <!--<button class=\"btn btn-default dropdown-toggle\"  style=\" background-color: black\" data-toggle=\"dropdown\"-->\r\n                          <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                          <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                  <!--</button>-->\r\n                  <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: 100%;-->\r\n    <!--font-size: 14px;-->\r\n    <!--text-align: -webkit-center;left: auto\">-->\r\n                    <!--<li data-type=\"json\"><a (click)=\"JSPDF()\" id=\"clickMe\">PDF</a></li>-->\r\n                    <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                    <!--<li data-type=\"csv\"><a  (click)=\"convert_to_csv()\">CSV</a></li>-->\r\n                    <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                    <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                    <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                  <!--</ul>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<ng-template pTemplate=\"body\" let-car=\"rowData\" >-->\r\n                <!--<round-progress [current]=\"car['profile_rank']\"-->\r\n                                <!--[max]=\"max\"-->\r\n                                <!--[color]=\"'#ca260f'\"-->\r\n                                <!--[background]=\"'#eaeaea'\"-->\r\n                                <!--[radius]=\"100\"-->\r\n                                <!--[stroke]=\"20\"-->\r\n                                <!--[semicircle]=\"false\"-->\r\n                                <!--[rounded]=\"false\"-->\r\n                                <!--[clockwise]=\"true\"-->\r\n                                <!--[responsive]=\"false\"-->\r\n                                <!--[duration]=\"800\"-->\r\n                                <!--[animation]=\"'easeInOutQuart'\"-->\r\n                                <!--[animationDelay]=\"5\"-->\r\n                                <!--style=\"margin: auto; max-width:70px; max-height: 46px; overflow: unset\"   >-->\r\n\r\n                <!--</round-progress>-->\r\n                <!--<div style=\"position: relative; bottom: 22px;font-size:16px; font-weight: bold\">{{car['profile_rank']}}</div>-->\r\n\r\n\r\n\r\n                <!--&lt;!&ndash;<div class=\"chart chart-table\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;&lt;!&ndash;{{(row.ER.replace('%',''))|round}}&ndash;&gt;&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"bar bar-{{(car['ER'].replace('%',''))|round}} navy\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face top\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-0\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face floor\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-a\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-b\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-1\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n          <!--</p-dataTable>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/flickr-search/flickr-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.component.ts ***!
  \**********************************************************/
/*! exports provided: FlickrSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrSearchComponent", function() { return FlickrSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var FlickrSearchComponent = /** @class */ (function () {
    function FlickrSearchComponent(http, route, pagerService) {
        this.http = http;
        this.route = route;
        this.pagerService = pagerService;
        this.influencers_by_default_FB = [];
        this.items = {};
        this.column = {};
        this.model = {};
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.locationArray = [];
        this.max = 100;
        this.location_value = "";
        this.inCurrentpage = false;
        this.checklistname = false;
        this.inflist = {};
        this.loaded = false;
        this.pager = {};
        this.pdfArray = [];
        this.inf_list = 'Influencers List';
        this.pageSize = '15';
        this.user_list = {};
    }
    FlickrSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_default_Flickr_Users(1);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/ml/get_flickr_categories')
            .subscribe(function (res) {
            _this.options = res.json();
            console.log('optionsssss', _this.options);
            _this.filteredOptions = _this.myControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filterCategory(val) : _this.options.slice(); });
        });
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/get_iList_names_fl/' + this.currentUser.username + '/-id/')
            .subscribe(function (res) {
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                _this.user_list[li['id']] = li['name'];
                _this.checklistname = true;
            }
        });
    };
    FlickrSearchComponent.prototype.getCatName = function (e) {
        // console.log('EEEEEEEVVVVVVEEENNNTTTT',e)
        this.selected_category = e.value;
        console.log('This Slected Categry', this.selected_category);
    };
    FlickrSearchComponent.prototype.filterCategory = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    FlickrSearchComponent.prototype.getFlickrData = function (e) {
        this.selected_category = e['option']['value'];
        this.pager = {};
        this.setPage(1);
    };
    FlickrSearchComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/ml/get_flickr_users/' + this.selected_category + '/?page=' + page + '', {
            title: this.title,
            location: this.location,
            like: this.likes,
            performance: this.perfomance,
            ER: this.ER
        }, { headers: headers })
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.fbinfluencers = res.json();
            console.log('FB Influencers are...', _this.fbinfluencers);
            _this.pager = _this.pagerService.getPager(_this.fbinfluencers['totalItems'], page, 10);
            _this.loaded = true;
        });
    };
    FlickrSearchComponent.prototype.checkedAll = function (e) {
        for (var _i = 0, _a = this.fbinfluencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
            console.log('Selected Lists Event is', e);
        }
    };
    FlickrSearchComponent.prototype.checkedAllDef = function (e) {
        for (var _i = 0, _a = this.influencers_by_default_FB['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
            console.log('Selected Lists Event is', e);
        }
    };
    FlickrSearchComponent.prototype.goToLink = function (url) {
        //let url = 'https://twitter.com/' + influencer.screen_name.replace("('", '').replace("',)", '');
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'You&#39;re Leaving This Site!',
            text: 'This is a link to an external site. Click OK to continue to the content (' + url + ').',
            // html: true,
            confirmButtonColor: '#2ecc71',
            showCancelButton: true,
        }).then(function () {
            window.open(url);
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                // localStorage.removeItem('selected_list_twitter');
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'success');
            }
        });
    };
    FlickrSearchComponent.prototype.get_default_Flickr_Users = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/ml/get_flickr_influencers_list')
            .subscribe(function (res) {
            // this.main_checkbox = false;
            _this.influencers_by_default_FB = res.json();
            _this.pdfArray = _this.influencers_by_default_FB['results'];
            for (var _i = 0, _a = _this.pdfArray; _i < _a.length; _i++) {
                var obj = _a[_i];
                _this.locationArray = obj['category']['location'];
                console.log('Array after loop', _this.locationArray);
            }
            _this.pager = _this.pagerService.getPager(_this.influencers_by_default_FB['totalItems'], page, 10);
        });
    };
    FlickrSearchComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = this.currentUser;
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        var user_list = this.user_list;
        var current_list = JSON.parse(localStorage.getItem('selected_list_fl'));
        for (var i in list) {
            if (list[i]) {
                ilist = true;
                break;
            }
        }
        if (current_list) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'Add influencers to the list"' + current_list.name + '" or cancel and add to other list?',
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
                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/create_add_ilist_fl/', JSON.stringify({ id: current_list.id, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    localStorage.removeItem('selected_list_fl');
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
                    localStorage.removeItem('selected_list_fl');
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
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/check_ilist_fl/', JSON.stringify({
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
                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/create_add_ilist_fl/', JSON.stringify({
                        name: result.value,
                        // name: result,
                        list: list,
                        username: currentUser.username
                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        for (var i in _this.inflist) {
                            // this.inflist[i['id']] = e;
                            _this.inflist[i] = false;
                        }
                        _this.main_checkbox = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List created and influencers added!', result.value(), 'success');
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
                                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].api + '/create_add_ilist_fl/', JSON.stringify({ id: result, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                    console.log({ name: result.value, list: list, username: currentUser.username });
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
    FlickrSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flickr-search',
            template: __webpack_require__(/*! ./flickr-search.component.html */ "./src/app/flickr-search/flickr-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-search.component.css */ "./src/app/flickr-search/flickr-search.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]])
    ], FlickrSearchComponent);
    return FlickrSearchComponent;
}());



/***/ }),

/***/ "./src/app/flickr-search/flickr-search.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.module.ts ***!
  \*******************************************************/
/*! exports provided: FlickrSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrSearchModule", function() { return FlickrSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flickr_search_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flickr-search.routing */ "./src/app/flickr-search/flickr-search.routing.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _flickr_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flickr-search.component */ "./src/app/flickr-search/flickr-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_preloader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/preloader.module */ "./src/app/components/preloader.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import {RoundProgressModule} from 'angular-svg-round-progressbar';
var FlickrSearchModule = /** @class */ (function () {
    function FlickrSearchModule() {
    }
    FlickrSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_flickr_search_routing__WEBPACK_IMPORTED_MODULE_3__["FlickrSearchRoutes"]),
                _components_preloader_module__WEBPACK_IMPORTED_MODULE_11__["PreloaderModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["OverlayPanelModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__["RoundpipeModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
            ],
            declarations: [_flickr_search_component__WEBPACK_IMPORTED_MODULE_5__["FlickrSearchComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_8__["PagerService"]]
        })
    ], FlickrSearchModule);
    return FlickrSearchModule;
}());



/***/ }),

/***/ "./src/app/flickr-search/flickr-search.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.routing.ts ***!
  \********************************************************/
/*! exports provided: FlickrSearchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrSearchRoutes", function() { return FlickrSearchRoutes; });
/* harmony import */ var _flickr_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flickr-search.component */ "./src/app/flickr-search/flickr-search.component.ts");

var FlickrSearchRoutes = [{
        path: '',
        component: _flickr_search_component__WEBPACK_IMPORTED_MODULE_0__["FlickrSearchComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=flickr-search-flickr-search-module.js.map