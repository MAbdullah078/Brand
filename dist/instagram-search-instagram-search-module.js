(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instagram-search-instagram-search-module"],{

/***/ "./src/app/instagram-search/instagram-search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\"padding-right:15px;\">\r\n  <div class=\"row\">\r\n    <div class=\"container-fluid \">\r\n      <mat-tab-group   style=\"background: #000;  \">\r\n\r\n\r\n        <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n          <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\r\n                                    Category Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n          </ng-template>\r\n          <div class=\"body\">\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <h6 style=\"padding: 20px 20px 2px 20px; font-weight: bolder\"> Instagram Influencers</h6>\r\n              </div>\r\n              <div class=\"col-md-6 text-center p-auto\">\r\n\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"getYTChannels($event)\">\r\n                    <mat-option *ngFor=\"let option of filteredOptions | async\"  [value]=\"option\">\r\n                      {{ option }}\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n          <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\r\n                                    Advanced Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n          </ng-template>\r\n          <div class=\"body\">\r\n            <div class=\"container\">\r\n                <form (submit)=\"setPage(1)\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <mat-select  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\r\n                                        placeholder=\"Select Category\" style=\"width:75%\">\r\n                                <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\r\n                            </mat-select>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\"[(ngModel)]=\"name\" placeholder=\"Serch by Title/Name\" name=\"contact\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" [(ngModel)]=\"following\" placeholder=\"Serch by Subscribers\" name=\"social\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" [(ngModel)]=\"follower\" placeholder=\"Serch by Total Views\" name=\"seo\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" [(ngModel)]=\"account_rank\" placeholder=\"Serch by Rank\" name=\"loc\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"text\" [(ngModel)]=\"post\" placeholder=\"Serch by Today Upload Videos\" name=\"er\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"margin-bottom: 1%\">\r\n                        <div class=\"col-md-2 offset-md-4 text-right\">\r\n                            <button type=\"submit\"  class=\"btn btn-rounded\" >\r\n                                Search <i class=\"fa fa-sliders\"></i>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!loaded\" style=\"margin-top: 2%\">\r\n    <div class=\"col-md-12 text-left\">\r\n      <h4 style=\"font-weight: bolder\">Featured Instagram Influencers</h4>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\"  style=\"margin-top: 1%\">\r\n    <div class=\"col-md-12 text-center\" *ngIf=\"loaded&& influencers.totalItems!=0\">\r\n\r\n          <div class=\"\">\r\n          <nav>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n              <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n              <!--</li>-->\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n                  First\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n                  <span aria-hidden=\"true\">&laquo;</span>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n                  [ngClass]=\"{active:pager.currentPage === page}\"\r\n                  (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n              <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n              <!--</li>-->\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n                  <span aria-hidden=\"true\">&raquo;</span>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n                  Last\r\n                </a>\r\n              </li>\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n              <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n              <!--</li>-->\r\n            </ul>\r\n          </nav>\r\n          </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--<section class=\"box-typical\" *ngIf=\"!loaded\">-->\r\n\r\n\r\n    <!--<div class=\"box-typical-body\">-->\r\n      <!--<div class=\"table-responsive\">-->\r\n        <!--<div class=\"bootstrap-table\">-->\r\n          <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"default_influencers.results\"-->\r\n                       <!--class=\"table table-striped table-hover\" >-->\r\n\r\n            <!--<p-header class=\"box-typical-header\">-->\r\n              <!--<div class=\"fixed-table-toolbar\">-->\r\n                <!--<div class=\"bars pull-left\">-->\r\n                  <!--<div id=\"toolbar\">-->\r\n                    <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Add to list-->\r\n                    <!--</button>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"clear_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Clear selected-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                  <!--<div class=\"export btn-group\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n\r\n\r\n              <!--</div>-->\r\n            <!--</p-header>-->\r\n\r\n\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input type=\"checkbox\"  id=\"table-check-head\" name=\"main_checkbox\" [(ngModel)]=\"main_checkbox\" (change)=\"cheakalldef($event.target.checked)\">-->\r\n                    <!--<label for=\"table-check-head\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input type=\"checkbox\"  name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" (change)=\"chec()\" id=\"table-check-{{car['id']}}\">-->\r\n                    <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column >-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Name</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\" style=\"text-align: center\">-->\r\n\r\n\r\n                <!--<a (click)=\"goToInstagram(car['name'].replace('• Instagram photos and videos',''))\" style=\"text-align: left;\">-->\r\n                  <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                    <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                      <!--<div class=\"mail-box-item-photo\">-->\r\n                        <!--<img *ngIf=\"car['image_url']\"-->\r\n                             <!--src=\"{{car['image_url']}}\"-->\r\n                             <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                             <!--data-placement=\"bottom\">-->\r\n\r\n                      <!--</div>-->\r\n                      <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                        <!--<div class=\"tbl-row\">-->\r\n                          <!--<div class=\"tbl-cell\">-->\r\n                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                              <!--<div class=\"tbl-row\">-->\r\n                                <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                     <!--[innerHTML]=\"car['name'].replace('• Instagram photos and videos','')\"></div>-->\r\n                                <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                              <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                          <!--</div>-->\r\n                          <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                          <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                        <!--</div>-->\r\n                      <!--</div>-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"mail-box-item-content\">-->\r\n                      <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                      <!--<div *ngIf=\"car['description']\" class=\"txt\" title=\"{{car['description']}}\"-->\r\n                           <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                           <!--[innerHTML]=\"car['description']\"></div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</a>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Followers</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--{{car['follower']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Followings</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--{{car['following']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Rank</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n\r\n                <!--<round-progress [current]=\"car['account_rank']\"-->\r\n                                <!--[max]=\"max\"-->\r\n                                <!--[color]=\"'#ca260f'\"-->\r\n                                <!--[background]=\"'#eaeaea'\"-->\r\n                                <!--[radius]=\"100\"-->\r\n                                <!--[stroke]=\"20\"-->\r\n                                <!--[semicircle]=\"false\"-->\r\n                                <!--[rounded]=\"false\"-->\r\n                                <!--[clockwise]=\"true\"-->\r\n                                <!--[responsive]=\"false\"-->\r\n                                <!--[duration]=\"800\"-->\r\n                                <!--[animation]=\"'easeInOutQuart'\"-->\r\n                                <!--[animationDelay]=\"5\"-->\r\n                                <!--style=\"margin: auto; max-width:70px; max-height: 50px; overflow: unset\"   >-->\r\n\r\n                <!--</round-progress>-->\r\n                <!--<div style=\"position: relative; bottom: 28px;font-size:15px;\">{{car['account_rank']}}</div>-->\r\n                <!--&lt;!&ndash;<div class=\"chart\" style=\" width: 143px;\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;&lt;!&ndash;{{(row.ER.replace('%',''))|round}}&ndash;&gt;&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"bar bar-{{(car['account_rank'].replace('%',''))|round}} navy\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face top\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-0\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face floor\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-a\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-b\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"face side-1\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"growing-bar\">&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n\r\n\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">No of Posts-->\r\n                  <!--<div class=\"export btn-group\" style=\"float: right; background-color: black\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\"  style=\" background-color: black\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: 100%;-->\r\n    <!--font-size: 14px;-->\r\n    <!--text-align: -webkit-center;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a (click)=\"JSPDF_insta()\" id=\"clickMe\">PDF</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a  (click)=\"convert_to_csvInsta()\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--{{car['posts']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n\r\n          <!--</p-dataTable>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n  <div class=\"container-fluid\" *ngIf=\"!loaded\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n      <div class=\"col-md-12 list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n            <div id=\"ck-button\">\r\n              <label>\r\n\r\n                <input type=\"checkbox\"  (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\r\n              </label>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"profile-container\" *ngFor=\"let item of default_influencers.results\" >\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n          <label for=\"table-check-{{item['id']}}\"></label>\r\n        </div>\r\n        <div class=\"col-md-2 text-center\">\r\n          <img [src]=\"item['image_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n          <div class=\"row\">\r\n            <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <!--<label class=\"item-content\" style=\"overflow: hidden;-->\r\n    <!--text-overflow: ellipsis;-->\r\n    <!--display: -webkit-box;-->\r\n    <!-- -webkit-box-orient: vertical;-->\r\n    <!-- -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>-->\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <div class=\"col-md-3 text-left\">\r\n              <label class=\"item-loc\"> <i class=\"fa fa-clipboard\" style=\"font-size:16px;color:#c00\"></i> Posts: <span class=\"list-item1\"> {{item['posts']}}</span></label>\r\n\r\n            </div>\r\n            <div class=\"col-md-9 text-left\">\r\n\r\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile Url:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['account_link']}}</a></label>\r\n            </div>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Follower:</span> <span class=\"list-item1\">{{item['follower']}} |  </span> </li>\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['account_rank']}}</span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-user\" style=\"font-size:16px;color:#0a4069\"></i> Username:</span> <span class=\"list-item1\">{{item['username']}}</span></li>\r\n\r\n            </ul>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Today :</span> <span class=\"list-item1\">{{item['today_upload_videos']}} |  </span> </li>-->\r\n              <!--<li><span class=\"right-item\"> <i class=\"fa fa-file-video-o\" style=\"font-size:16px;color:#0a4069\"></i> Tomorrow :</span> <span class=\"list-item1\">{{item['tomorrow_upload_videos']}} |   </span></li>-->\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> Last Week: </span> <span class=\"list-item1\">{{item['last_week_upload_videos']}}</span></li>-->\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span></li>-->\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems==0\">\r\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\r\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\r\n        <div class=\"add-customers-screen-in\">\r\n          <div class=\"add-customers-screen-user\">\r\n            <i class=\"font-icon font-icon-user\"></i>\r\n          </div>\r\n          <h2>OOPS!</h2>\r\n          <p class=\"lead color-blue-grey-lighter\">No search results are found<br> try another category.</p>\r\n          <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\r\n        </div>\r\n      </div>\r\n    </div><!--.box-typical-->\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"loaded&& influencers.totalItems!=0\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n      <div class=\"col-md-12 list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n            <div id=\"ck-button\">\r\n              <label>\r\n\r\n                <input type=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\r\n              </label>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"profile-container\" *ngFor=\"let item of influencers.results\" >\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n          <label for=\"table-check-{{item['id']}}\"></label>\r\n        </div>\r\n        <div class=\"col-md-2 text-center\">\r\n          <img [src]=\"item['image_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n          <div class=\"row\">\r\n            <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <!--<label class=\"item-content\" style=\"overflow: hidden;-->\r\n            <!--text-overflow: ellipsis;-->\r\n            <!--display: -webkit-box;-->\r\n            <!-- -webkit-box-orient: vertical;-->\r\n            <!-- -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>-->\r\n          </div>\r\n          <div class=\"row\" style=\"padding-top: 8px\">\r\n            <div class=\"col-md-3 text-left\">\r\n              <label class=\"item-loc\"> <i class=\"fa fa-clipboard\" style=\"font-size:16px;color:#c00\"></i> Posts: <span class=\"list-item1\"> {{item['posts']}}</span></label>\r\n\r\n            </div>\r\n            <div class=\"col-md-9 text-left\">\r\n\r\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile Url:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['account_link']}}</a></label>\r\n            </div>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Follower:</span> <span class=\"list-item1\">{{item['follower']}} |  </span> </li>\r\n              <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}} |   </span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['account_rank']}}</span></li>\r\n              <li><span class=\"right-item\"><i class=\"fa fa-user\" style=\"font-size:16px;color:#0a4069\"></i> Username:</span> <span class=\"list-item1\">{{item['username']}}</span></li>\r\n\r\n            </ul>\r\n          </div>\r\n          <hr style=\"color: #555555\">\r\n          <div class=\"row\" >\r\n            <ul style=\"display: flex; padding-top: 5px\">\r\n              <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Today :</span> <span class=\"list-item1\">{{item['today_upload_videos']}} |  </span> </li>-->\r\n              <!--<li><span class=\"right-item\"> <i class=\"fa fa-file-video-o\" style=\"font-size:16px;color:#0a4069\"></i> Tomorrow :</span> <span class=\"list-item1\">{{item['tomorrow_upload_videos']}} |   </span></li>-->\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> Last Week: </span> <span class=\"list-item1\">{{item['last_week_upload_videos']}}</span></li>-->\r\n              <!--<li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span></li>-->\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!--<section class=\"box-typical\" *ngIf=\"loaded&& influencers.totalItems!=0\">-->\r\n\r\n\r\n    <!--<div class=\"box-typical-body\">-->\r\n      <!--<div class=\"table-responsive\">-->\r\n        <!--<div class=\"bootstrap-table\">-->\r\n          <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers.results\"-->\r\n                       <!--class=\"table table-striped table-hover\" >-->\r\n\r\n            <!--<p-header class=\"box-typical-header\">-->\r\n              <!--<div class=\"fixed-table-toolbar\">-->\r\n                <!--<div class=\"bars pull-left\">-->\r\n                  <!--<div id=\"toolbar\">-->\r\n                    <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Add to list-->\r\n                    <!--</button>-->\r\n                    <!--<button  class=\"btn btn-primary1\" (click)=\"clear_list()\">-->\r\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                      <!--Clear selected-->\r\n                    <!--</button>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                  <!--<div class=\"export btn-group\">-->\r\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\r\n                      <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                      <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                    <!--</ul>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n\r\n\r\n              <!--</div>-->\r\n            <!--</p-header>-->\r\n\r\n\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input type=\"checkbox\"  id=\"table-check-head\" name=\"main_checkbox\" [(ngModel)]=\"main_checkbox\" (change)=\"cheakall($event.target.checked)\">-->\r\n                    <!--<label for=\"table-check-head\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                <!--<div class=\"table-check\">-->\r\n                  <!--<div class=\"checkbox checkbox-only\">-->\r\n                    <!--<input type=\"checkbox\"  name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" (change)=\"chec()\" id=\"table-check-{{car['id']}}\">-->\r\n                    <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column >-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Name</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\" style=\"text-align: center\">-->\r\n\r\n\r\n                <!--<a (click)=\"goToInstagram(car['name'].replace('• Instagram photos and videos',''))\" style=\"text-align: left;\">-->\r\n                  <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                    <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                      <!--<div class=\"mail-box-item-photo\">-->\r\n                        <!--<img *ngIf=\"car['image_url']\"-->\r\n                             <!--src=\"{{car['image_url']}}\"-->\r\n                             <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                             <!--data-placement=\"bottom\">-->\r\n\r\n                      <!--</div>-->\r\n                      <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                        <!--<div class=\"tbl-row\">-->\r\n                          <!--<div class=\"tbl-cell\">-->\r\n                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                              <!--<div class=\"tbl-row\">-->\r\n                                <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                     <!--[innerHTML]=\"car['name'].replace('• Instagram photos and videos','')\"></div>-->\r\n                                <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                              <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                          <!--</div>-->\r\n                          <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                          <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                        <!--</div>-->\r\n                      <!--</div>-->\r\n\r\n                    <!--</div>-->\r\n                    <!--<div class=\"mail-box-item-content\">-->\r\n                      <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                      <!--<div *ngIf=\"car['description']\" class=\"txt\" title=\"{{car['description']}}\"-->\r\n                           <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                           <!--[innerHTML]=\"car['description']\"></div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</a>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Followers</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--{{car['follower']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Followings</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--{{car['following']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Rank</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n\r\n                <!--<round-progress [current]=\"car['account_rank']\"-->\r\n                                <!--[max]=\"max\"-->\r\n                                <!--[color]=\"'#ca260f'\"-->\r\n                                <!--[background]=\"'#eaeaea'\"-->\r\n                                <!--[radius]=\"100\"-->\r\n                                <!--[stroke]=\"20\"-->\r\n                                <!--[semicircle]=\"false\"-->\r\n                                <!--[rounded]=\"false\"-->\r\n                                <!--[clockwise]=\"true\"-->\r\n                                <!--[responsive]=\"false\"-->\r\n                                <!--[duration]=\"800\"-->\r\n                                <!--[animation]=\"'easeInOutQuart'\"-->\r\n                                <!--[animationDelay]=\"5\"-->\r\n                                <!--style=\"margin: auto; max-width:70px; max-height: 55px; overflow: unset\"  >-->\r\n\r\n                <!--</round-progress>-->\r\n                <!--<div style=\"position: relative; bottom: 32px;font-size:15px;\">{{car['account_rank']}}</div>-->\r\n                <!--&lt;!&ndash;<div class=\"chart\" style=\" width: 143px;\">&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;&lt;!&ndash;{{(row.ER.replace('%',''))|round}}&ndash;&gt;&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<div class=\"bar bar-{{(car['account_rank'].replace('%',''))|round}} navy\">&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"face top\">&ndash;&gt;-->\r\n                      <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"face side-0\">&ndash;&gt;-->\r\n                      <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"face floor\">&ndash;&gt;-->\r\n                      <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"face side-a\">&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"face side-b\">&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"face side-1\">&ndash;&gt;-->\r\n                      <!--&lt;!&ndash;<div class=\"growing-bar\">&ndash;&gt;-->\r\n                      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n\r\n\r\n\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n            <!--<p-column>-->\r\n              <!--<ng-template pTemplate=\"header\">-->\r\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">No of Posts</div>-->\r\n                <!--<div class=\"fht-cell\"></div>-->\r\n              <!--</ng-template>-->\r\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                <!--{{car['posts']}}-->\r\n              <!--</ng-template>-->\r\n            <!--</p-column>-->\r\n\r\n\r\n          <!--</p-dataTable>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"loaded\">\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/instagram-search/instagram-search.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\nsection {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.body {\n  background-color: #f9f9f9 !important; }\n\nmat-form-field {\n  width: 75%;\n  line-height: 0.95; }\n\n.col-md-6 {\n  margin-top: 0 !important; }\n\n.btn-rounded {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  margin-top: 3%;\n  border-color: black;\n  font-size: 17px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.profile-container {\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  border-radius: 5px;\n  background-color: #fff;\n  /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n  max-width: 1200px;\n  display: inline-block;\n  /*height: 165px;*/\n  margin-top: 18px; }\n\n.loaded-container {\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  border-radius: 5px;\n  background-color: #fff;\n  /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n  max-width: 1200px;\n  /*height: 300px;*/\n  /*display: inline-block;*/\n  margin-top: 18px; }\n\n.profile-checkbox {\n  display: flex;\n  flex: 0 0 auto;\n  width: 65px;\n  /* height: 100%; */\n  /* padding-left: 12px; */\n  padding-right: 12px;\n  border-right: 1px solid #ebecf3;\n  justify-content: center;\n  align-items: center;\n  /* background-color: #fff; */\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  cursor: pointer; }\n\ninput[type=checkbox] {\n  zoom: 1.5; }\n\n.tbl-cell {\n  font-weight: 600;\n  font-size: 19px; }\n\ni {\n  color: white; }\n\n.item-content {\n  color: #919fa9;\n  font-size: 14px; }\n\n.item-loc {\n  color: #919fa9;\n  font-size: 14px; }\n\nhr {\n  margin: 0 !important; }\n\n.list-item1 {\n  margin-right: 20px;\n  color: #000;\n  font-weight: 700;\n  font-size: 15px; }\n\n.right-item {\n  color: #919fa9;\n  font-size: 14px; }\n\n.btn-success {\n  background: black;\n  border-radius: 50px;\n  border-color: black;\n  padding: 8px 26px;\n  margin-top: 3px;\n  box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important; }\n"

/***/ }),

/***/ "./src/app/instagram-search/instagram-search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.component.ts ***!
  \****************************************************************/
/*! exports provided: InstagramSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramSearchComponent", function() { return InstagramSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { SweetAlertService } from 'angular-sweetalert-service';




var inst_patt = /^Un$/;
var InstagramSearchComponent = /** @class */ (function () {
    function InstagramSearchComponent(http, router, route, pagerService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.pagerService = pagerService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
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
    InstagramSearchComponent.prototype.ngAfterViewInit = function () {
    };
    InstagramSearchComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    InstagramSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentlist = JSON.parse(localStorage.getItem('selected_list_in'));
        this.route.queryParams.subscribe(function (params) {
            _this.qparamschecker = params['name'] || '0';
            if (_this.qparamschecker === 'instagram') {
                _this.inCurrentpage = true;
            }
        });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/instagram_categories', { headers: headers }, 'full')
            .subscribe(function (res) {
            _this.options = res.json();
            _this.filteredOptions = _this.myControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filterCategory(val) : _this.options.slice(); });
        });
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/get_iList_names_in/' + this.currentUser.username + '/-id/')
            .subscribe(function (res) {
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                _this.user_list[li['id']] = li['name'];
                _this.checklistname = true;
            }
        });
        this.get_default_insta_influencers(1);
    };
    InstagramSearchComponent.prototype.get_default_insta_influencers = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // this.http.get(Config.api+'/ml/get_instagram_influencers_list/' + '/?page=' + page )
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/get_instagram_influencers_list/')
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.default_influencers = res.json();
            _this.pdfArray = _this.default_influencers['results'];
            _this.pager = _this.pagerService.getPager(_this.default_influencers['totalItems'], page, 10);
            // this.loaded = true;
        });
    };
    InstagramSearchComponent.prototype.go_to_list_in = function (e, name) {
        this.router.navigate(['instagram/list/', e]);
    };
    InstagramSearchComponent.prototype.goToInstagram = function (s) {
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
    InstagramSearchComponent.prototype.getYTChannels = function (e) {
        this.selected_category = e['option']['value'];
        this.pager = {};
        this.setPage(1);
    };
    InstagramSearchComponent.prototype.filterCategory = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    InstagramSearchComponent.prototype.chec = function () {
        console.clear();
    };
    InstagramSearchComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    InstagramSearchComponent.prototype.cheakalldef = function (e) {
        for (var _i = 0, _a = this.default_influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    InstagramSearchComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = this.currentUser;
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        var user_list = this.user_list;
        var current_list = JSON.parse(localStorage.getItem('selected_list_in'));
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
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/create_add_ilist_in/', JSON.stringify({ id: current_list.id, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    localStorage.removeItem('selected_list_in');
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
                    localStorage.removeItem('selected_list_in');
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
                                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                                    headers.append('Content-Type', 'application/json');
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/check_ilist_in/', JSON.stringify({
                                        // name: result.value,
                                        name: result,
                                        username: currentUser.username
                                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                        resolve();
                                    }, function (error) {
                                        if (error.status === 406) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List already exist');
                                        }
                                        // reject('List named "' + result + '" already exists')
                                    });
                                }
                            }, 2);
                        });
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Create',
                    cancelButtonText: 'Cancel'
                }).then(function (result) {
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                    headers.append('Content-Type', 'application/json');
                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/create_add_ilist_in/', JSON.stringify({
                        name: result.value,
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
                                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                                headers.append('Content-Type', 'application/json');
                                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/create_add_ilist_in/', JSON.stringify({ id: result, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
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
    InstagramSearchComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    InstagramSearchComponent.prototype.getCatName = function (e) {
        this.selected_category = e.value;
    };
    InstagramSearchComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        // this.http.get(Config.api+'/ml/get_instagram_users/' + this.selected_category + '/?page=' + page + '', {headers:headers}, 'full')
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/get_instagram_users/' + this.selected_category + '/?page=' + page + '', {
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
    InstagramSearchComponent.prototype.setPageQuery = function (page, query) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/get_instagram_users/' + query + '/?page=' + page + '', { headers: headers }, 'full')
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.influencers = res.json();
            _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
            _this.loaded = true;
        });
    };
    InstagramSearchComponent.prototype.navSearch = function () {
    };
    InstagramSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instagram-search',
            template: __webpack_require__(/*! ./instagram-search.component.html */ "./src/app/instagram-search/instagram-search.component.html"),
            styles: [__webpack_require__(/*! ./instagram-search.component.scss */ "./src/app/instagram-search/instagram-search.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]])
    ], InstagramSearchComponent);
    return InstagramSearchComponent;
}());



/***/ }),

/***/ "./src/app/instagram-search/instagram-search.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.module.ts ***!
  \*************************************************************/
/*! exports provided: InstagramSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramSearchModule", function() { return InstagramSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _instagram_search_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instagram-search.routing */ "./src/app/instagram-search/instagram-search.routing.ts");
/* harmony import */ var _instagram_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instagram-search.component */ "./src/app/instagram-search/instagram-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var InstagramSearchModule = /** @class */ (function () {
    function InstagramSearchModule() {
    }
    InstagramSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_instagram_search_routing__WEBPACK_IMPORTED_MODULE_4__["InstagramSearchRoutes"]), primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"]],
            declarations: [_instagram_search_component__WEBPACK_IMPORTED_MODULE_5__["InstagramSearchComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_8__["PagerService"]]
        })
    ], InstagramSearchModule);
    return InstagramSearchModule;
}());



/***/ }),

/***/ "./src/app/instagram-search/instagram-search.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.routing.ts ***!
  \**************************************************************/
/*! exports provided: InstagramSearchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramSearchRoutes", function() { return InstagramSearchRoutes; });
/* harmony import */ var _instagram_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram-search.component */ "./src/app/instagram-search/instagram-search.component.ts");

var InstagramSearchRoutes = [{
        path: '',
        component: _instagram_search_component__WEBPACK_IMPORTED_MODULE_0__["InstagramSearchComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=instagram-search-instagram-search-module.js.map