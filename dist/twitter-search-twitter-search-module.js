(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["twitter-search-twitter-search-module"],{

/***/ "./src/app/twitter-search/twitter-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/twitter-search/twitter-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\"padding-right:15px;\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid \">\r\n            <mat-tab-group  >\r\n\r\n\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\r\n                                    Category Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <h6 class=\"influencer-hading\" > Twitter Influencers</h6>\r\n                            </div>\r\n                            <div class=\"col-md-6 text-center p-auto\">\r\n\r\n                                <mat-form-field class=\"example-full-width\" style=\"width: 50%;\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Select Category\" aria-label=\"Number\" matInput\r\n                                           [formControl]=\"myControl\" (keypress)=\"getTWInfluencersPress($event)\"\r\n                                           [(ngModel)]=\"selected_category\" name=\"selected_category_\" [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"getTWInfluencers($event)\">\r\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                            {{ option }}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\r\n                                    Advanced Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n                        <div class=\"container\">\r\n                            <form (submit)=\"setPage(1)\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-select  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\r\n                                                    placeholder=\"Select Category\" style=\"width:75%\">\r\n                                            <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\r\n                                        </mat-select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\"[(ngModel)]=\"user_name\" placeholder=\"Serch by Title/Name\" name=\"contact\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"tw_name\" placeholder=\"Serch by Twitter name\" name=\"social\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"location\" placeholder=\"Serch by Location\" name=\"seo\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"followers\" placeholder=\"Serch by Followers\" name=\"loc\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"following\" placeholder=\"Serch by Followers\" name=\"er\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"margin-bottom: 1%\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"likes\" placeholder=\"Serch by Likes\" name=\"er\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-2 offset-md-4 text-right\">\r\n                                        <button type=\"submit\"  class=\"btn btn-priamry\" >\r\n                                            Search <i class=\"fa fa-sliders\"></i>\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!loaded\" style=\"margin-top: 3%\">\r\n        <div class=\"col-md-12 text-left\">\r\n            <h4 class=\"text-center\">Featured Twitter Influencers</h4>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"row \" style=\"margin-top: 2%\"  *ngIf=\"loaded\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <nav>\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n                        <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                        <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n                        <!--</li>-->\r\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                            <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n                                First\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n                                <span aria-hidden=\"true\">&laquo;</span>\r\n                                <span class=\"sr-only\">Previous</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n                            [ngClass]=\"{active:pager.currentPage === page}\"\r\n                            (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n                        <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                        <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n                        <!--</li>-->\r\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n                                <span aria-hidden=\"true\">&raquo;</span>\r\n                                <span class=\"sr-only\">Next</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n                                Last\r\n                            </a>\r\n                        </li>\r\n                        <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                        <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n                        <!--</li>-->\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    <div class=\"container-fluid\">\r\n        <!--<p-slider [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"></p-slider>-->\r\n\r\n\r\n        <div *ngIf=\"inCurrentpage && loaded\" class=\"row\" style=\"text-align: left\">\r\n            <div class=\"col-sm-6\">\r\n                <h6>Current list is <b style=\"font-size: 24px\">{{currentlist.name}} </b> </h6>\r\n\r\n            </div>\r\n            <div class=\"col-sm-6\" style=\"text-align: -webkit-right\">\r\n            <a style=\"font-size: 24px; \"  (click)=\"go_to_twitter_list(currentlist.id, currentlist.name)\" >Show all influencers in this <b> List</b></a>\r\n            </div>\r\n            </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!--<section class=\"box-typical\" *ngIf=\"!loaded && influencers_by_defalut.totalItems!=0\">-->\r\n\r\n\r\n            <!--<div class=\"box-typical-body\">-->\r\n                <!--<div class=\"table-responsive\">-->\r\n                    <!--<div class=\"bootstrap-table\">-->\r\n                        <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers_by_defalut.results\"-->\r\n                                     <!--class=\"table table-striped table-hover\">-->\r\n\r\n                            <!--<p-header class=\"box-typical-header\">-->\r\n                                <!--<div class=\"fixed-table-toolbar\">-->\r\n\r\n                                    <!--<div class=\"bars pull-left\">-->\r\n                                        <!--<div id=\"toolbar\">-->\r\n                                            <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                                            <!--<button class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                                                <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                                                <!--Add to list-->\r\n                                            <!--</button>-->\r\n                                            <!--<button class=\"btn btn-primary1\" (click)=\"clear_list()\">-->\r\n                                                <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                                                <!--Clear selected-->\r\n                                            <!--</button>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                                        <!--<div class=\"export btn-group\">-->\r\n                                            <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                                                    <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                                                    <!--class=\"font-icon font-icon-download\"></i> <span-->\r\n                                                    <!--class=\"caret\"></span>-->\r\n                                            <!--</button>-->\r\n                                            <!--<ul class=\"dropdown-menu\" role=\"menu\"-->\r\n                                                <!--style=\"min-width: fit-content;left: auto\">-->\r\n                                                <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                                                <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                                                <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                                                <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                                                <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                                                <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                                            <!--</ul>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--&lt;!&ndash;<div class=\"pull-right search\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<input class=\"form-control\" type=\"text\" [(ngModel)]=\"locEm\" name=\"loc_em\"&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;(keypress)=\"searchByLocEm($event)\"&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;placeholder=\"Specify by location/email\">&ndash;&gt;-->\r\n\r\n                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                                <!--</div>-->\r\n\r\n                            <!--</p-header>-->\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div class=\"table-check\">-->\r\n                                        <!--<div class=\"checkbox checkbox-only\">-->\r\n                                            <!--<input type=\"checkbox\" id=\"table-check-head\" name=\"main_checkbox\"-->\r\n                                                   <!--[(ngModel)]=\"main_checkbox\"-->\r\n                                                   <!--(change)=\"cheakalldef($event.target.checked)\">-->\r\n                                            <!--<label for=\"table-check-head\"></label>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                                    <!--<div class=\"table-check\">-->\r\n                                        <!--<div class=\"checkbox checkbox-only\">-->\r\n                                            <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\"-->\r\n                                                   <!--(change)=\"chec()\" id=\"table-check-{{car['id']}}\">-->\r\n                                            <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Name</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n\r\n                                    <!--<a (click)=\"goTwitterProfile_by_default(car)\"-->\r\n                                       <!--title=\"{{car['name']}}\" style=\"text-align: left;\">-->\r\n                                        <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                                            <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                                                <!--<div class=\"mail-box-item-photo\">-->\r\n                                                    <!--<img *ngIf=\"car['image_url']\"-->\r\n                                                         <!--src=\"{{car['image_url']}}\"-->\r\n                                                         <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                                                         <!--data-placement=\"bottom\">-->\r\n\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                                                    <!--<div class=\"tbl-row\">-->\r\n                                                        <!--<div class=\"tbl-cell\">-->\r\n                                                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                                                                <!--<div class=\"tbl-row\">-->\r\n                                                                    <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                                                         <!--[innerHTML]=\"car['twitter_name']\"></div>-->\r\n                                                                    <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</div>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                        <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                                                        <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"mail-box-item-content\">-->\r\n                                                <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                                                <!--<div *ngIf=\"car['description']\" class=\"txt\"-->\r\n                                                     <!--title=\"{{car['description']}}\"-->\r\n                                                     <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                                                     <!--[innerHTML]=\"car['description']\"></div>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</a>-->\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Username</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                                    <!--<div class=\"col-item col-contact tooltips\">-->\r\n                                        <!--<ul>-->\r\n                                            <!--<li *ngIf=\"car['user_name']\">-->\r\n                                                <!--<div>-->\r\n                                                    <!--{{car['user_name']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                <!--</div>-->\r\n                                            <!--</li>-->\r\n                                        <!--</ul>-->\r\n\r\n                                    <!--</div>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Location/Contact</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                                    <!--<div class=\"col-item col-contact tooltips\">-->\r\n                                        <!--<ul>-->\r\n                                            <!--<li *ngIf=\"car['location']\">-->\r\n                                                <!--<div>-->\r\n                                                    <!--<i class=\"fa fa-map-marker\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                    <!--{{car['location']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                <!--</div>-->\r\n                                            <!--</li>-->\r\n                                        <!--</ul>-->\r\n\r\n                                    <!--</div>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n\r\n                            <!--<p-column >-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Twitter Stats</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n\r\n                                <!--</ng-template>-->\r\n                                <!--&lt;!&ndash;<ng-template pTemplate=\"filter\" let-col>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<input [(ngModel)]=\"interest_value\" class=\"form-control\" style=\"width:73%; margin: 0 auto;\" placeholder=\"Interests\"&ndash;&gt;-->\r\n                                           <!--&lt;!&ndash;(keydown)=\"interest_filter($event)\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n\r\n                                    <!--<div class=\"col-lg-1\"></div>-->\r\n                                    <!--&lt;!&ndash;<button type=\"text\" (click)=\"fillinterests(car)\" pButton&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;class=\"btn btn-rounded btn-info\">Show Interests&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;</button>&ndash;&gt;-->\r\n\r\n\r\n\r\n                                    <!--<button type=\"button\" class=\"btn btn-rounded btn-info\" data-toggle=\"modal\" data-target=\"#exampleModal\">-->\r\n                                        <!--Show Stats-->\r\n                                    <!--</button>-->\r\n\r\n                                    <!--&lt;!&ndash; Modal &ndash;&gt;-->\r\n                                    <!--<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">-->\r\n                                        <!--<div class=\"modal-dialog\" role=\"document\">-->\r\n                                            <!--<div class=\"modal-content\">-->\r\n                                                <!--<div class=\"modal-header\">-->\r\n                                                    <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                        <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">-->\r\n                                                            <!--<h5 class=\"modal-title\" id=\"exampleModalLabel\">Interests</h5>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                        <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                            <!--<i class=\"fa fa-close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\" font-size: 19px; cursor: pointer; font-weight: bolder\"></i>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"modal-body\">-->\r\n                                                    <!--<div class=\"col-item col-contact tooltips\">-->\r\n                                                        <!--<ul style=\"border: 1px solid #ababab;\">-->\r\n                                                            <!--<li *ngIf=\"car['followers']\" style=\"border-bottom: 1px solid #ababab; height: 45px\">-->\r\n                                                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                                    <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                                                        <!--Followers:-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                                        <!--{{car['followers']}}-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                                     <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</li>-->\r\n                                                            <!--<li *ngIf=\"car['following']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                                    <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                                                        <!--Following:-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                                        <!--{{car['following']}}-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                                    <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</li>-->\r\n                                                            <!--<li *ngIf=\"car['likes']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                                    <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                                                        <!--Likes:-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                                        <!--{{car['likes']}}-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                                    <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</li>-->\r\n\r\n                                                        <!--</ul>-->\r\n\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"modal-footer\">-->\r\n                                                    <!--<button type=\"button\" class=\"btn btn-secondary\" style=\"background-color: black\" data-dismiss=\"modal\">Close</button>-->\r\n                                                <!--</div>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n\r\n\r\n\r\n\r\n                                <!--</ng-template>-->\r\n\r\n                            <!--</p-column>-->\r\n\r\n\r\n                            <!--<p-column >-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Interests-->\r\n                                        <!--<div class=\"export btn-group\" style=\"float: right; background-color: black\">-->\r\n                                            <!--<button class=\"btn btn-default dropdown-toggle\"  style=\" background-color: black\" data-toggle=\"dropdown\"-->\r\n                                                    <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                                                    <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\r\n                                            <!--</button>-->\r\n                                            <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: 100%;-->\r\n    <!--font-size: 14px;-->\r\n    <!--text-align: -webkit-center;left: auto\">-->\r\n                                                <!--<li data-type=\"json\"><a (click)=\"JSPDF_Twitter()\" id=\"clickMe\">PDF</a></li>-->\r\n                                                <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                                                <!--<li data-type=\"csv\"><a  (click)=\"convert_to_csvTwit()\">CSV</a></li>-->\r\n                                                <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                                                <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                                                <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                                            <!--</ul>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n\r\n                                <!--</ng-template>-->\r\n\r\n\r\n                                <!--&lt;!&ndash;<ng-template pTemplate=\"filter\" let-col>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<input [(ngModel)]=\"tweets_value\" class=\"form-control\" placeholder=\"Tweets prospecting\" style=\"width:73%; margin: 0 auto;\"&ndash;&gt;-->\r\n                                           <!--&lt;!&ndash;(keydown)=\"filter_tweets($event)\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n\r\n\r\n\r\n\r\n                                <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n                                    <!--<button type=\"button\" class=\"btn btn-rounded btn-info\" data-toggle=\"modal\" data-target=\"#example-Modal\">-->\r\n                                        <!--Show Interests-->\r\n                                    <!--</button>-->\r\n                                    <!--<div class=\"modal fade\" id=\"example-Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"example-ModalLabel\" aria-hidden=\"true\">-->\r\n                                        <!--<div class=\"modal-dialog\" role=\"document\">-->\r\n                                            <!--<div class=\"modal-content\">-->\r\n                                                <!--<div class=\"modal-header\">-->\r\n                                                    <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                        <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">-->\r\n                                                            <!--<h5 class=\"modal-title\" id=\"example-ModalLabel\">Interests</h5>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                        <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                            <!--<i class=\"fa fa-close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\" font-size: 19px; cursor: pointer; font-weight: bolder\"></i>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"modal-body\">-->\r\n                                                    <!--<div class=\"col-item col-contact tooltips\">-->\r\n                                                        <!--<ul style=\"border: 1px solid #ababab;\">-->\r\n                                                            <!--<li *ngIf=\"car['followers']\" style=\"border-bottom: 1px solid #ababab; height: 45px\">-->\r\n                                                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                                    <!--<div class=\"col-md-6 left_side\"  style=\"text-align: -webkit-left\">-->\r\n                                                                        <!--Username:-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                                        <!--{{car['user_name']}}-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                                    <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</li>-->\r\n                                                            <!--<li *ngIf=\"car['following']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                                    <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                                                        <!--Date:-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                                        <!--{{car['joined_date']}}-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                                    <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</li>-->\r\n                                                            <!--<li *ngIf=\"car['likes']\" style=\"border-bottom: 1px solid #ababab;  height: 45px\">-->\r\n                                                                <!--<div class=\"row\" style=\"width: 100%\">-->\r\n                                                                    <!--<div class=\"col-md-6 left_side\" style=\"text-align: -webkit-left\">-->\r\n                                                                        <!--Tweets:-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--<div class=\"col-md-6\" style=\"text-align: -webkit-right\">-->\r\n                                                                        <!--{{car['tweets_count']}}-->\r\n                                                                    <!--</div>-->\r\n                                                                    <!--&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                                    <!--&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</li>-->\r\n\r\n                                                        <!--</ul>-->\r\n\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"modal-footer\">-->\r\n                                                    <!--<button type=\"button\" class=\"btn btn-secondary\" style=\"background-color: black\" data-dismiss=\"modal\">Close</button>-->\r\n                                                <!--</div>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n\r\n                            <!--</p-column>-->\r\n\r\n\r\n                        <!--</p-dataTable>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</section>-->\r\n\r\n        <div class=\"container-fluid\" *ngIf=\"!loaded && influencers_by_defalut.totalItems!=0\">\r\n\r\n            <div class=\"row\" id=\"myHeader\">\r\n                <div class=\"col-md-12 list-row\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n                            <div id=\"ck-button\">\r\n                                <label>\r\n\r\n                                    <input type=\"checkbox\" class=\"checkbox\"  (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\r\n                                </label>\r\n                            </div>\r\n                            <!-- <div id=\"ck-button\">\r\n                                    <label>\r\n        \r\n                                        <input type=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\r\n                                    </label>\r\n                                </div> -->\r\n                            <button  class=\"btn btn-priamry add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"profile-container\" *ngFor=\"let item of influencers_by_defalut.results\" >\r\n                <div class=\"row\">\r\n\r\n\r\n                   \r\n                    <div class=\"col-md-2 text-center p-0 over\">\r\n                        <img [src]=\"item['image_url']\"  class=\"twitter-image\">\r\n                        <div id=\"hover-div\" >\r\n                        <input class=\"input-check\" type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                        <label for=\"table-check-{{item['id']}}\"></label>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n                            <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                            <label for=\"table-check-{{item['id']}}\"></label>\r\n                        </div>\r\n\r\n                    <div class=\"col-md-8\" style=\"margin-left: 3%\">\r\n                        <div class=\"row\">\r\n                            <label class=\"tbl-cell tbl-cell-name\">{{item['user_name']}}</label>\r\n                        </div>\r\n                  \r\n                        <div class=\"row\" style=\"padding-top: 8px\">\r\n                            <div class=\"col-md-3 text-left\">\r\n                                <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i>  <span class=\"list-item1\"> {{item['location']}}</span></label>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-6 text-left\">\r\n\r\n                                <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile Url:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_url']}}</a></label>\r\n                            </div>\r\n                            <div class      <div class=\"row\" style=\"padding-top: 8px\">\r\n                            <label class=\"item-content\" style=\"overflow: hidden;\r\n                            text-overflow: ellipsis;\r\n                            display: -webkit-box;\r\n                            -webkit-box-orient: vertical;\r\n                            -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n                        </div>=\"col-md-3 text-left\">\r\n\r\n                                <label class=\"item-loc\"> <i class=\"fa fa-random\" style=\"font-size:16px;color:#c00; \"></i> Tweets:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['tweets_count']}}</a></label>\r\n                            </div>\r\n                        </div>\r\n                        <hr style=\"color: #555555\">\r\n                        <div class=\"row\" >\r\n                            <ul style=\"display: flex; padding-top: 5px\">\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Follower:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li>\r\n                                <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}} |   </span></li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Likes:</span> <span class=\"list-item1\">{{item['likes']}}</span></li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-user\" style=\"font-size:16px;color:#0a4069\"></i> Twitter name:</span> <span class=\"list-item1\">{{item['twitter_name']}}</span></li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                        <hr style=\"color: #555555\">\r\n                        <div class=\"row\" >\r\n                            <ul style=\"display: flex; padding-top: 5px\">\r\n                                <li style=\"font-weight: bolder\"> Videos Uploads | </li>\r\n                                <li><span class=\"right-item\"> <i class=\"fa fa-file-video-o\" style=\"font-size:16px;color:#0a4069\"></i> Tweets :</span> <span class=\"list-item1\">{{item['tweets_count']}} |   </span></li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Joined Date :</span> <span class=\"list-item1\">{{item['joined_date']}} |  </span> </li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i>  Web: </span> <span class=\"list-item1\">{{item['website']}}</span></li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span></li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        <div class=\"row influcener-div\" *ngFor=\"let item of influencers_by_defalut.results\">\r\n            <div class=\"col-md-6\">\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\r\n                            <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                            <label for=\"table-check-{{item['id']}}\"></label>\r\n                        </div>\r\n                <div class=\"col-md-5  \">\r\n                    <img [src]=\"item['image_url']\"  class=\"twitter-image\">\r\n                </div>\r\n                <div class=\"col-md-6 description-divison\">\r\n                    <label class=\"tbl-cell tbl-cell-name\">{{item['user_name']}}</label>\r\n                    <label class=\"item-loc\"> <i class=\"fa fa-map-marker marker-icon\" style=\"font-size:16px;color:#c00\"></i>  <span class=\"list-item1\"> {{item['location']}}</span></label>\r\n                        <label class=\"item-content\"\r\n                     title=\"{{item['description']}}\">{{item['description']}}</label>\r\n                     <div class=\"row\" >\r\n                        <ul class=\"profile-url\">\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Follower:</span> <span class=\"list-item1\">{{item['followers']}}   </span> </li>\r\n                            <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}}    </span></li>\r\n                        </ul>\r\n                        <ul class=\"profile-url\">\r\n                            <li><span class=\"right-item\"><i class=\"far fa-thumbs-up\" style=\"font-size:16px;color:#0a4069\"></i> Likes:</span> <span class=\"list-item1\">{{item['likes']}}</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-user\" style=\"font-size:16px;color:#0a4069\"></i> Twitter name:</span> <span class=\"list-item1\">{{item['twitter_name']}}</span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n             \r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n            <div class=\"col-md-1 followers-profile\">\r\n                <h4 class=\"real-heading\">99%</h4>\r\n                <h5>Real</h5>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <ul class=\"progress-url\">\r\n                        <li>\r\n                            <span class=\"followers-percen\">25-30</span>\r\n                            <div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>  <span class=\"followers-percen1\">56%</span></li>\r\n                          <li>   <span  class=\"followers-percen\">30-35</span><div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 29%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div><span  class=\"followers-percen1\">29%</span></li>\r\n                          <li><span class=\"followers-percen\" >35-40</span><div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 45%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div><span class=\"followers-percen1\">45%</span></li>\r\n                          <li><span class=\"followers-percen\">40-45</span><div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width:35%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div><span class=\"followers-percen1\">35%</span></li>\r\n                          <li>        <h5 class=\"text-center\">Age</h5></li>\r\n                    </ul>\r\n\r\n        </div>\r\n        <div class=\"col-md-1 male-follwers\">\r\n            <div>\r\n                <i class=\"fas fa-venus\"></i><span>83%</span>\r\n                <h5>Female</h5>\r\n            </div>\r\n            <div>\r\n                    <i class=\"fas fa-venus\"></i><span>33%</span>\r\n                    <h5>Male</h5>\r\n                </div>\r\n        </div>\r\n        </div>\r\n        \r\n        \r\n        </div>\r\n        <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems!=0\">\r\n\r\n            <div class=\"row\" id=\"myHeader\">\r\n                <div class=\"col-md-12 list-row\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n                            <div id=\"ck-button\">\r\n                                <label>\r\n\r\n                                    <input type=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\r\n                                </label>\r\n                            </div>\r\n\r\n                            <button  class=\"btn btn-success \" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"profile-container\" *ngFor=\"let item of influencers.results\" >\r\n                <div class=\"row\">\r\n\r\n\r\n                    \r\n                    <div class=\"col-md-2 text-center\">\r\n                        <img [src]=\"item['image_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n                    </div>\r\n                    <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n                            <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                            <label for=\"table-check-{{item['id']}}\"></label>\r\n                        </div>\r\n\r\n                    <div class=\"col-md-8\" style=\"margin-left: 3%\">\r\n                        <div class=\"row\">\r\n                            <label class=\"tbl-cell tbl-cell-name\">{{item['user_name']}}</label>\r\n                        </div>\r\n                        <div class=\"row\" style=\"padding-top: 8px\">\r\n                            <!--<label class=\"item-content\" style=\"overflow: hidden;-->\r\n                            <!--text-overflow: ellipsis;-->\r\n                            <!--display: -webkit-box;-->\r\n                            <!-- -webkit-box-orient: vertical;-->\r\n                            <!-- -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>-->\r\n                        </div>\r\n                        <div class=\"row\" style=\"padding-top: 8px\">\r\n                            <div class=\"col-md-3 text-left\">\r\n                                <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i>  <span class=\"list-item1\"> {{item['location']}}</span></label>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-6 text-left\">\r\n\r\n                                <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Profile Url:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['profile_url']}}</a></label>\r\n                            </div>\r\n                            <div class=\"col-md-3 text-left\">\r\n\r\n                                <label class=\"item-loc\"> <i class=\"fa fa-random\" style=\"font-size:16px;color:#c00; \"></i> Tweets:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['tweets_count']}}</a></label>\r\n                            </div>\r\n                        </div>\r\n                        <hr style=\"color: #555555\">\r\n                        <div class=\"row\" >\r\n                            <ul style=\"display: flex; padding-top: 5px\">\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> Follower:</span> <span class=\"list-item1\">{{item['followers']}} |  </span> </li>\r\n                                <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Following:</span> <span class=\"list-item1\">{{item['following']}} |   </span></li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Likes:</span> <span class=\"list-item1\">{{item['likes']}}</span></li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-user\" style=\"font-size:16px;color:#0a4069\"></i> Twitter name:</span> <span class=\"list-item1\">{{item['twitter_name']}}</span></li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                        <hr style=\"color: #555555\">\r\n                        <div class=\"row\" >\r\n                            <ul style=\"display: flex; padding-top: 5px\">\r\n                                <!--<li style=\"font-weight: bolder\"> Videos Uploads | </li>-->\r\n                                <!--<li><span class=\"right-item\"> <i class=\"fa fa-file-video-o\" style=\"font-size:16px;color:#0a4069\"></i> Tweets :</span> <span class=\"list-item1\">{{item['tweets_count']}} |   </span></li>-->\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Joined Date :</span> <span class=\"list-item1\">{{item['joined_date']}} |  </span> </li>\r\n                                <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i>  Web: </span> <span class=\"list-item1\">{{item['website']}}</span></li>\r\n                                <!--<li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span></li>-->\r\n\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--<section class=\"box-typical\" *ngIf=\"loaded && influencers.totalItems!=0\">-->\r\n\r\n\r\n            <!--<div class=\"box-typical-body\">-->\r\n                <!--<div class=\"table-responsive\">-->\r\n                    <!--<div class=\"bootstrap-table\">-->\r\n                        <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers.results\"-->\r\n                                     <!--class=\"table table-striped table-hover\">-->\r\n\r\n                            <!--<p-header class=\"box-typical-header\">-->\r\n                                <!--<div class=\"fixed-table-toolbar\">-->\r\n\r\n                                    <!--<div class=\"bars pull-left\">-->\r\n                                        <!--<div id=\"toolbar\">-->\r\n                                            <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                                            <!--<button class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\r\n                                                <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                                                <!--Add to list-->\r\n                                            <!--</button>-->\r\n                                            <!--<button class=\"btn btn-primary1\" (click)=\"clear_list()\">-->\r\n                                                <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                                                <!--Clear selected-->\r\n                                            <!--</button>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                                        <!--<div class=\"export btn-group\">-->\r\n                                            <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                                                    <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                                                    <!--class=\"font-icon font-icon-download\"></i> <span-->\r\n                                                    <!--class=\"caret\"></span>-->\r\n                                            <!--</button>-->\r\n                                            <!--<ul class=\"dropdown-menu\" role=\"menu\"-->\r\n                                                <!--style=\"min-width: fit-content;left: auto\">-->\r\n                                                <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                                                <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                                                <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                                                <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                                                <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                                                <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                                            <!--</ul>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--&lt;!&ndash;<div class=\"pull-right search\">&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;<input class=\"form-control\" type=\"text\" [(ngModel)]=\"locEm\" name=\"loc_em\"&ndash;&gt;-->\r\n                                               <!--&lt;!&ndash;(keypress)=\"searchByLocEm($event)\"&ndash;&gt;-->\r\n                                               <!--&lt;!&ndash;placeholder=\"Specify by location/email\">&ndash;&gt;-->\r\n\r\n                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                                <!--</div>-->\r\n\r\n                            <!--</p-header>-->\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div class=\"table-check\">-->\r\n                                        <!--<div class=\"checkbox checkbox-only\">-->\r\n                                            <!--<input type=\"checkbox\" id=\"table-check-head\" name=\"main_checkbox\"-->\r\n                                                   <!--[(ngModel)]=\"main_checkbox\"-->\r\n                                                   <!--(change)=\"cheakall($event.target.checked)\">-->\r\n                                            <!--<label for=\"table-check-head\"></label>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                                    <!--<div class=\"table-check\">-->\r\n                                        <!--<div class=\"checkbox checkbox-only\">-->\r\n                                            <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\"-->\r\n                                                   <!--(change)=\"chec()\" id=\"table-check-{{car['id']}}\">-->\r\n                                            <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n\r\n                            <!--<p-column >-->\r\n                            <!--&lt;!&ndash;<p-column (sortFunction)=\"sortByName($event)\" sortable=\"custom\" field=\"name\" [filter]=\"true\">&ndash;&gt;-->\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--&lt;!&ndash;<input class=\"form-control\" style=\"width:73%; margin: 0 auto;\" placeholder=\"Name/Screen name\"&ndash;&gt;-->\r\n                                           <!--&lt;!&ndash;[(ngModel)]=\"name_value\" (keydown)=\"custom_filter($event)\">&ndash;&gt;-->\r\n                                    <!--<br>-->\r\n\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Influencer</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n\r\n                                    <!--<a (click)=\"goTwitterProfile(car)\"-->\r\n                                       <!--title=\"{{car['twitter_name']}}\" style=\"text-align: left;\">-->\r\n                                        <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                                            <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                                                <!--<div class=\"mail-box-item-photo\">-->\r\n                                                    <!--<img *ngIf=\"car['image_url']\"-->\r\n                                                         <!--src=\"{{car['image_url']}}\"-->\r\n                                                         <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                                                         <!--data-placement=\"bottom\">-->\r\n\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                                                    <!--<div class=\"tbl-row\">-->\r\n                                                        <!--<div class=\"tbl-cell\">-->\r\n                                                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                                                                <!--<div class=\"tbl-row\">-->\r\n                                                                    <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                                                         <!--[innerHTML]=\"car['twitter_name']\"></div>-->\r\n                                                                    <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</div>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                        <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                                                        <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"mail-box-item-content\">-->\r\n                                                <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                                                <!--<div *ngIf=\"car['description']\" class=\"txt\"-->\r\n                                                     <!--title=\"{{car['description']}}\"-->\r\n                                                     <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                                                     <!--[innerHTML]=\"car['description']\"></div>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</a>-->\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n                            <!--&lt;!&ndash;<p-column [filter]=\"true\" (sortFunction)=\"sortByLoc($event)\" sortable=\"custom\" field=\"location\">&ndash;&gt;-->\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--&lt;!&ndash;<input [(ngModel)]=\"loc\" class=\"form-control\" placeholder=\"Search\" style=\"width:73%; margin: 0 auto;\"&ndash;&gt;-->\r\n                                           <!--&lt;!&ndash;(keydown)=\"filter_loc_email($event)\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Location/Contact</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                                    <!--<div class=\"col-item col-contact tooltips\">-->\r\n                                        <!--<ul>-->\r\n                                            <!--<li *ngIf=\"car['location']\">-->\r\n                                                <!--<div>-->\r\n                                                    <!--<i class=\"fa fa-map-marker\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                    <!--{{car['location']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                <!--</div>-->\r\n                                            <!--</li>-->\r\n                                            <!--<li *ngIf=\"car['email']\">-->\r\n                                                <!--<div>-->\r\n                                                    <!--<i class=\"font-icon-mail\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                    <!--{{car['email']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                <!--</div>-->\r\n                                            <!--</li>-->\r\n                                            <!--<li>-->\r\n\r\n                                            <!--</li>-->\r\n\r\n                                        <!--</ul>-->\r\n\r\n                                    <!--</div>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n                            <!--&lt;!&ndash;<p-column >&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;&lt;!&ndash;<p-column (sortFunction)=\"sortByInfluence($event)\" [filter]=\"true\" sortable=\"custom\" field=\"infscore.score\" >&ndash;&gt;&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;<ng-template pTemplate=\"filter\" let-col>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<div style=\"text-align: center;\">&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;&lt;!&ndash;<h3>Range: {{scoreValues[0] + ' - ' + scoreValues[1]}}</h3>&ndash;&gt;&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;&lt;!&ndash;<p-slider [(ngModel)]=\"scoreValues\" [min]=\"influencers['min']\" [max]=\"influencers['max']\"&ndash;&gt;&ndash;&gt;-->\r\n                                                  <!--&lt;!&ndash;&lt;!&ndash;[style]=\"{'width':'200px'}\" style=\"display: inline-block;\" [range]=\"true\" (onSlideEnd)=\"filter_score($event)\"></p-slider>&ndash;&gt;&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;&lt;!&ndash;<md-slider min=\"1\" max=\"5\" step=\"0.5\" value=\"1.5\"></md-slider>&ndash;&gt;&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;&lt;!&ndash;<button md-mini-fab color=\"accent\">Go</button>&ndash;&gt;&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;<ng-template pTemplate=\"header\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<div style=\"text-align: center; \" class=\"th-inner\">Influence</div>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<div class=\"fht-cell\"></div>&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;<div class=\"col-lg-1\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;&lt;!&ndash;{{car['infscore']['score']}}&ndash;&gt;&ndash;&gt;&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;<div class=\"chart\" style=\" width: 172px;\">&ndash;&gt;&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;&lt;!&ndash;<div class=\"bar bar-{{car['infscore']['score'] | round}} cyan\">&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;<div class=\"face top\">&ndash;&gt;&ndash;&gt;-->\r\n                                                <!--&lt;!&ndash;&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;<div class=\"face side-0\">&ndash;&gt;&ndash;&gt;-->\r\n                                                <!--&lt;!&ndash;&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;<div class=\"face floor\">&ndash;&gt;&ndash;&gt;-->\r\n                                                <!--&lt;!&ndash;&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;<div class=\"face side-a\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;<div class=\"face side-b\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;<div class=\"face side-1\">&ndash;&gt;&ndash;&gt;-->\r\n                                                <!--&lt;!&ndash;&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;&ndash;&gt;-->\r\n                                            <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n\r\n                                    <!--&lt;!&ndash;<round-progress [current]=\"car['infscore']['score'] | round\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[max]=\"max\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[color]=\"'#ca260f'\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[background]=\"'#eaeaea'\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[radius]=\"100\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[stroke]=\"20\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[semicircle]=\"false\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[rounded]=\"false\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[clockwise]=\"true\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[responsive]=\"false\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[duration]=\"800\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[animation]=\"'easeInOutQuart'\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;[animationDelay]=\"5\"&ndash;&gt;-->\r\n                                                    <!--&lt;!&ndash;style=\"margin: auto; max-width:100px; max-height: 100px;\"   >&ndash;&gt;-->\r\n\r\n                                    <!--&lt;!&ndash;</round-progress>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<div style=\"position: relative; bottom: 70px;font-size:22px;\">  {{car['infscore']['score'] | round}} %</div>&ndash;&gt;-->\r\n\r\n\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;</p-column>&ndash;&gt;-->\r\n\r\n                            <!--&lt;!&ndash;<p-column field=\"location\" header=\"Location\"></p-column>&ndash;&gt;-->\r\n                            <!--<p-column >-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Interests</div>-->\r\n                                    <!--&lt;!&ndash;<div class=\"fht-cell\"></div>&ndash;&gt;-->\r\n\r\n                                <!--</ng-template>-->\r\n                                <!--&lt;!&ndash;<ng-template pTemplate=\"filter\" let-col>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<input [(ngModel)]=\"interest_value\" class=\"form-control\" style=\"width:73%; margin: 0 auto;\" placeholder=\"Interests\"&ndash;&gt;-->\r\n                                           <!--&lt;!&ndash;(keydown)=\"interest_filter($event)\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n\r\n                                    <!--<div class=\"col-lg-1\"></div>-->\r\n                                    <!--<button type=\"text\" (click)=\"fillinterests(car)\" pButton-->\r\n                                            <!--class=\"btn btn-rounded btn-info\">Show Interests-->\r\n                                    <!--</button>-->\r\n                                <!--</ng-template>-->\r\n\r\n                            <!--</p-column>-->\r\n                            <!--<p-column >-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Twitter Stats</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n\r\n                                <!--</ng-template>-->\r\n\r\n\r\n                                <!--&lt;!&ndash;<ng-template pTemplate=\"filter\" let-col>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<input [(ngModel)]=\"tweets_value\" class=\"form-control\" placeholder=\"Tweets prospecting\" style=\"width:73%; margin: 0 auto;\"&ndash;&gt;-->\r\n                                           <!--&lt;!&ndash;(keydown)=\"filter_tweets($event)\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n\r\n\r\n\r\n\r\n                                <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n                                    <!--<button type=\"text\" (click)=\"filltwitterdata(car)\" pButton-->\r\n                                            <!--class=\"btn btn-rounded btn-info\">Show-->\r\n                                    <!--</button>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n\r\n                            <!--</p-column>-->\r\n\r\n\r\n                        <!--</p-dataTable>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</section>-->\r\n\r\n        <p-dialog *ngIf=\"dialogVisible_features\" [(visible)]=\"dialogVisible_features\" [responsive]=\"true\"\r\n                  showEffect=\"fade\"\r\n                  [modal]=\"true\" width=\"450\">\r\n            <p-header *ngIf=\"dialogVisible_features\">\r\n\r\n                Interests of {{interests.name}}\r\n\r\n            </p-header>\r\n            <ul class=\"list-group\">\r\n                <li *ngIf=\"interests.infscore.interests\" class=\"list-group-item\">Interests:\r\n                    <ul>\r\n                        <li *ngFor=\"let c of interests.infscore.interests\" class=\"list-group-item\"\r\n                            style=\"text-align: right;\">{{c}}\r\n                        </li>\r\n\r\n                    </ul>\r\n                </li>\r\n                <li *ngIf=\"interests.trend \" class=\"list-group-item\">Category:\r\n                    <ul>\r\n\r\n                        <li>\r\n                            <ul *ngFor=\"let c of interests.trend \" class=\"list-group-item\" style=\"text-align: right;\">\r\n                                <li *ngFor=\"let cat of c.category | unique: 'name'\">\r\n                                    {{cat.name}}\r\n\r\n                                </li>\r\n                                <li *ngIf=\"!c.location\">\r\n                                    {{c.name}}\r\n                                </li>\r\n                                <!--<li *ngFor=\"let c of interests.trend\" class=\"list-group-item\" style=\"text-align: right;\"> <span *ngIf=\"c.category[1].name\">{{c.category[1].name}}</span></li>-->\r\n                            </ul>\r\n\r\n                        </li>\r\n\r\n\r\n                    </ul>\r\n            </ul>\r\n        </p-dialog>\r\n\r\n        <p-dialog *ngIf=\"dialogVisible\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\r\n                  width=\"450\">\r\n            <p-header *ngIf=\"dialogVisible\">\r\n\r\n                Stats of {{twitterdata.name}}\r\n\r\n            </p-header>\r\n            <ul class=\"list-group\">\r\n                <li *ngIf=\"twitterdata.followers_count\" class=\"list-group-item\"><span>Followers:</span>\r\n                    <span style=\"float: right;\">{{twitterdata.followers_count}}</span></li>\r\n\r\n                <li *ngIf=\"twitterdata.favourites_count\" class=\"list-group-item\"><span>Favourites:</span>\r\n                    <span style=\"float: right;\">{{twitterdata.favourites_count}}</span></li>\r\n                <li *ngIf=\"twitterdata.friends_count\" class=\"list-group-item\"><span>Friends:</span>\r\n                    <span style=\"float: right;\">{{twitterdata.friends_count}}</span></li>\r\n\r\n\r\n            </ul>\r\n        </p-dialog>\r\n\r\n        <div class=\"container-fluid\" *ngIf=\"loaded\">\r\n\r\n        </div>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/twitter-search/twitter-search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/twitter-search/twitter-search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#checkbox-click1,\n#checkbox-click2 {\n  position: absolute;\n  left: 4px;\n  top: 3px; }\n\n#checkbox-click2 {\n  display: none; }\n\n.twitter-image {\n  max-height: 100%;\n  max-width: 100%; }\n\n#hover-div {\n  position: absolute;\n  height: 100%;\n  width: 50%;\n  background: #cdcde694;\n  top: 0;\n  right: -50%;\n  transition: all .4s ease-in-out; }\n\n.input-check {\n  top: 70px;\n  position: absolute;\n  right: 23px; }\n\n.over {\n  overflow: hidden; }\n\n.btn-rounded {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  margin-top: 3%;\n  border-color: black;\n  font-size: 17px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.btn.btn-info:hover {\n  background-color: black !important;\n  border-color: black !important; }\n\n.left_side {\n  padding: 10px 0 0  20px; }\n\n.modal-content {\n  width: 55% !important; }\n\n.modal-header {\n  background-color: black;\n  color: white;\n  font-size: 18px; }\n\n.modal-header .close {\n  color: white;\n  font-weight: bolder; }\n\nmat-placeholder {\n  margin: 7% !important;\n  font-size: 23px !important; }\n\n.modal-content {\n  margin-top: 40% !important; }\n\n.btn-rounded {\n  font-size: 17px !important; }\n\n.popup-close-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 38px;\n  background: #000000;\n  position: absolute;\n  top: -20px;\n  right: -10px;\n  cursor: pointer;\n  transition: all .1s ease-in-out;\n  color: #fff;\n  font-size: 26px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1; }\n\n.card-header {\n  width: 82%;\n  height: 50px;\n  border-radius: 5px;\n  background: #000000;\n  position: absolute;\n  top: -25px;\n  right: 70px;\n  padding: 1px;\n  cursor: pointer;\n  transition: all .1s ease-in-out;\n  color: #fff;\n  font-size: 26px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1; }\n\n.modal-content {\n  width: 115% !important; }\n\n[placeholder], input[placeholder] {\n  color: #0A0A0A !important; }\n\n.example-full-width input {\n  width: 100%;\n  border-radius: 5px; }\n\n.mat-form-field-placeholder-wrapper {\n  margin: 1% !important;\n  font-size: 23px !important; }\n\n.popup-close-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 38px;\n  background: #000000;\n  position: absolute;\n  top: -20px;\n  right: -10px;\n  cursor: pointer;\n  transition: all .1s ease-in-out;\n  color: #fff;\n  font-size: 26px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1; }\n\n.card-header {\n  width: 82%;\n  height: 50px;\n  border-radius: 5px;\n  background: #000000;\n  position: absolute;\n  top: -25px;\n  right: 70px;\n  padding: 1px;\n  cursor: pointer;\n  transition: all .1s ease-in-out;\n  color: #fff;\n  font-size: 26px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1; }\n\n.modal-content {\n  width: 115% !important; }\n\n[placeholder], input[placeholder] {\n  color: #0A0A0A !important; }\n\nsection {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.body {\n  background-color: #f9f9f9 !important; }\n\nmat-form-field {\n  width: 75%; }\n\n.col-md-6 {\n  margin-top: 0 !important; }\n\n.btn-rounded {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  margin-top: 3%;\n  border-color: black;\n  font-size: 17px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.profile-container {\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  border-radius: 5px;\n  background-color: #fff;\n  /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n  max-width: 1200px;\n  display: inline-block;\n  /*height: 165px;*/\n  margin-top: 18px; }\n\n.loaded-container {\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  border-radius: 5px;\n  background-color: #fff;\n  /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n  max-width: 1200px;\n  /*height: 300px;*/\n  /*display: inline-block;*/\n  margin-top: 18px; }\n\n.profile-checkbox {\n  display: flex;\n  flex: 0 0 auto;\n  width: 65px;\n  /* height: 100%; */\n  /* padding-left: 12px; */\n  padding-right: 12px;\n  border-right: 1px solid #ebecf3;\n  justify-content: center;\n  align-items: center;\n  /* background-color: #fff; */\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  cursor: pointer; }\n\ninput[type=checkbox] {\n  zoom: 1.5; }\n\n.tbl-cell {\n  font-weight: 600;\n  font-size: 14px;\n  padding-top: 12px; }\n\ni {\n  color: #000; }\n\n.item-content {\n  color: #4e5f6b;\n  font-size: 12px;\n  font-weight: 500 !important;\n  margin: 0; }\n\n.profile-url {\n  display: flex;\n  flex-direction: column;\n  margin: 0; }\n\n.influcener-div {\n  box-shadow: 0 0 12px #ccc;\n  margin: 14px;\n  padding: 0;\n  border-radius: 15px; }\n\n.item-loc {\n  color: #919fa9;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  margin: 0 !important; }\n\n.followers-profile {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 168px; }\n\n.progress-url {\n  margin: 0;\n  list-style: none;\n  padding: 20px; }\n\n.progress-url li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 6px; }\n\n.progress {\n  height: 4px;\n  min-width: 72%;\n  margin-bottom: 0; }\n\n.followers-percen {\n  margin-right: 10px;\n  text-align: right;\n  min-width: 64px;\n  font-size: 11px; }\n\n.followers-percen1 {\n  margin-left: 10px;\n  text-align: right;\n  font-size: 11px; }\n\n.male-follwers {\n  padding: 18px; }\n\n.fa-venus {\n  color: #d83838;\n  margin: 3px; }\n\n.real-heading {\n  margin: 0;\n  color: #C42A72;\n  font-size: 28px; }\n\n.marker-icon {\n  font-size: 16px;\n  color: #6248b1;\n  margin: 9px; }\n\nhr {\n  margin: 0 !important; }\n\n.list-item1 {\n  color: #382222;\n  font-weight: 700;\n  font-size: 11px; }\n\n.right-item {\n  color: #919fa9;\n  font-size: 14px; }\n\n.btn-success {\n  background: black;\n  border-radius: 50px;\n  border-color: black;\n  padding: 8px 26px;\n  margin-top: 3px;\n  box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important; }\n\nmat-tab-header {\n  background-color: black; }\n"

/***/ }),

/***/ "./src/app/twitter-search/twitter-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/twitter-search/twitter-search.component.ts ***!
  \************************************************************/
/*! exports provided: TwitterSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterSearchComponent", function() { return TwitterSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TwitterSearchComponent = /** @class */ (function () {
    function TwitterSearchComponent(http, router, httpNoPreloader, route, pagerService) {
        this.http = http;
        this.router = router;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.pagerService = pagerService;
        // scoreValues;
        this.scoreValues = [1, 100];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        // search:string;
        this.column = {};
        this.max = 100;
        this.inflist = {};
        this.influencers = { totalItems: 0 };
        this.influencers_by_defalut = [];
        this.interest_value = "";
        this.loc = "";
        this.name_value = "";
        this.user_list = {};
        this.pdfArray = [];
        this.inCurrentpage = false;
        this.loaded = false;
        this.pager = {};
        this.options = ["Abortion Service", "Academic Camp", "Accessories", "Accessories Store", "Accountant", "Actor", "Actor/director", "Acupuncturist", "Addiction Resources Center", "Addiction Service", "Addiction Treatment Center", "Adoption Service", "Adult Entertainment Service", "Advertising Agency", "Advertising/Marketing", "Advertising/Marketing Service", "Aerospace Company", "Aerospace/defense", "Afghani Restaurant", "African Restaurant", "Agricultural Cooperative", "Agricultural Service", "Agriculture", "Agriculture Company", "AIDS Resource Center", "Aircraft Dealership", "Airline Company", "Airline Industry Service", "Airport", "Airport Lounge", "Airport Shuttle Service", "Airport Terminal", "Album", "Alcohol Addiction Treatment Center", "Allergist", "Alternative & Holistic Health Service", "Amateur sports team", "Amateur Sport Team", "American Restaurant", "Amusement Center", "Amusement & Theme Park", "Andhra Restaurant", "Anesthesiologists", "Anglican Church", "Animal", "Animal breed", "Animal Shelter", "Antique Store", "Apartment & Condo Building", "Apostolic Church", "Apparel", "Apparel & Clothing", "Apparel Company", "Apparel Distributor", "Appliance Manufacturer", "Appliance Repair Service", "Appliances", "App page", "Aquarium", "Aquatic Pet Store", "Arabian Restaurant", "Arcade", "Archaeological Service", "Archery Range", "Archery Shop", "Architect", "Architectural Designer", "Architectural Engineer", "Argentinian Restaurant", "Armed Forces", "Armenian Restaurant", "Aromatherapy Service", "Art", "Art Gallery", "Artist", "Art Museum", "Art Restoration Service", "Art School", "Arts & Crafts Store", "Arts & Entertainment", "Arts/entertainment/nightlife", "Arts/humanities website", "Arts & Humanities Website", "Art Tour Agency", "Asian Fusion Restaurant", "Asian Restaurant", "Astrologist", "Astrologist & Psychic", "Athlete", "Attractions/things to do", "ATV Dealership", "ATV Recreation Park", "ATV Rental", "ATV Rental Shop", "Auction House", "Audiologist", "Audio Visual Equipment Store", "Auditorium", "Australian Restaurant", "Austrian Restaurant", "Author", "Auto Detailing Service", "Automation Service", "Automobiles and parts", "Automotive", "Automotive, Aircraft & Boat", "Automotive, Aircraft, Boat", "Automotive Body Shop", "Automotive Company", "Automotive Consultant", "Automotive Customization Shop", "Automotive Dealership", "Automotive Glass Service", "Automotive Leasing Service", "Automotive Manufacturer", "Automotive Parts Store", "Automotive Repair Shop", "Automotive Restoration Service", "Automotive Service", "Automotive Shipping Service", "Automotive Storage Facility", "Automotive Store", "Automotive Wholesaler", "Automotive Window Tinting Service", "Aviation", "Aviation School", "Awning Supplier", "Baby & Children's Clothing Store", "Baby Goods/Kids Goods", "Babysitter", "Bags/luggage", "Bags & Luggage Company", "Bags & Luggage Store", "Bail Bondsmen", "Bakery", "Ballroom", "Band", "Bank", "Bank Equipment & Service", "Bank/financial institution", "Bank/Financial Service", "Bank/financial services", "Bankruptcy Lawyer", "Baptist Church", "Bar", "Barbecue Restaurant", "Barber Shop", "Bar & Grill", "Bartending School", "Bartending Service", "Baseball Field", "Basketball Court", "Basque Restaurant", "Batting Cage", "Bavarian Restaurant", "Beach", "Beach Resort", "Beauty", "Beauty, Cosmetic & Personal Care", "Beauty/Cosmetics Company", "Beauty Salon", "Beauty Service", "Beauty Store", "Beauty Supplier", "Beauty Supply Store", "Bed and Breakfast", "Beer Bar", "Beer Garden", "Belgian Restaurant", "Bengali/Bangladeshi Restaurant", "Betting Shop", "Bicycle Rental Shop", "Bicycle Repair Service", "Bicycle Shop", "Big Box Retailer", "Bike Rental", "Bike Trail", "Bingo Hall", "Biotechnology", "Biotechnology Company", "Blacksmith", "Blinds & Curtains Store", "Blogger", "Blood Bank", "Board game", "Boat Dealership", "Boat/Ferry Company", "Boat Rental", "Boat / Sailing Instructor", "Boat Service", "Boat Tour Agency", "Book", "Book & Magazine Distributor", "Book series", "Books & Magazines", "Bookstore", "Book Store", "Borough", "Botanical Garden", "Bottled Water Company", "Bottled Water Supplier", "Boutique Store", "Bowling Alley", "Brand", "Brand Agency", "Brand/Company Type", "Brazilian Restaurant", "Breakfast & Brunch Restaurant", "Brewery", "Bridal Shop", "Bridge", "British Restaurant", "Broadcasting & Media Production Company", "Brokerage", "Brokerage Firm", "Bubble Tea Shop", "Buddhist Temple", "Buffet Restaurant", "Building Materials", "Building Material Store", "Burger Restaurant", "Burmese Restaurant", "Business", "Business Center", "Business Consultant", "Business/economy website", "Business & Economy Website", "Business person", "Business Service", "Business services", "Business Supply Service", "Bus Line", "Bus Station", "Bus Tour Agency", "Butcher Shop", "Cabin", "Cabinet & Countertop Store", "Cable & Satellite Company", "Cafe", "Cafeteria", "Cajun & Creole Restaurant", "Calabrian Restaurant", "Cambodian Restaurant", "Camera/photo", "Camera Store", "Campground", "Campus Building", "Canadian Restaurant", "Canal", "Candy Store", "Canoe & Kayak Rental", "Canoe & Kayak Rental Shop", "Cantonese Restaurant", "Car Dealership", "Cardiologist", "Career Counselor", "Cargo & Freight Company", "Caribbean Restaurant", "Car Rental", "Car Stereo Store", "Car Wash"];
        this.sort_by = '-score';
    }
    TwitterSearchComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    TwitterSearchComponent.prototype.sb1 = function () {
        document.getElementById("select-all-button2").style.display = "inline";
        document.getElementById("select-all-button1").style.display = "none";
        document.getElementById("checkbox-click2").style.display = "block";
        document.getElementById("checkbox-click1").style.display = "none";
        document.getElementById("hover-div").style.right = "0";
    };
    TwitterSearchComponent.prototype.sb2 = function () {
        document.getElementById("select-all-button1").style.display = "inline";
        document.getElementById("select-all-button2").style.display = "none";
        document.getElementById("checkbox-click1").style.display = "block";
        document.getElementById("checkbox-click2").style.display = "none";
        document.getElementById("hover-div").style.right = "-50%";
    };
    TwitterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentlist = JSON.parse(localStorage.getItem('selected_list_twitter'));
        this.route.queryParams.subscribe(function (data) {
            _this.qparamschecker = data['name'];
            if (_this.qparamschecker === 'twitter') {
                _this.inCurrentpage = true;
            }
        });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/twitter_categories', { headers: headers }, 'full')
            .subscribe(function (res) {
            _this.options = res.json();
            _this.filteredOptions = _this.myControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filterCategory(val) : _this.options.slice(); });
        });
        this.get_default_Twitter_influencers(1);
    };
    TwitterSearchComponent.prototype.get_default_Twitter_influencers = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            // alert('called')
            return;
        }
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/get_twitter_influencers_list/' + '?page=' + page)
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.influencers_by_defalut = res.json();
            _this.pdfArray = _this.influencers_by_defalut['results'];
            _this.pager = _this.pagerService.getPager(_this.influencers_by_defalut['totalItems'], page, 10);
        });
    };
    TwitterSearchComponent.prototype.go_to_twitter_list = function (e) {
        this.router.navigate(['twitter/list/', e]);
    };
    TwitterSearchComponent.prototype.filterCategory = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    TwitterSearchComponent.prototype.getTWInfluencersPress = function (e) {
        if (e.keyCode == 13) {
            this.pager = {};
            this.interest_value = "";
            this.loc = "";
            this.name_value = "";
            this.column = {};
            this.setPage(1);
        }
    };
    TwitterSearchComponent.prototype.getCatName = function (e) {
        this.selected_category = e.value;
    };
    TwitterSearchComponent.prototype.getTWInfluencers = function (e) {
        this.pager = {};
        this.interest_value = "";
        this.loc = "";
        this.name_value = "";
        // this.search = "all";
        this.column = {};
        this.setPage(1, true);
    };
    TwitterSearchComponent.prototype.fillinterests = function (data) {
        this.interests = data;
        // if(!this.interests['infscore']['interests']) {
        //     this.interests['infscore']['interests'][0] = this.selected_category;
        // }
        this.dialogVisible_features = true;
    };
    TwitterSearchComponent.prototype.searchByLocEm = function (e) {
        if (e.keyCode == 13 && this.locEm) {
            this.setPage(1);
        }
    };
    TwitterSearchComponent.prototype.filltwitterdata = function (data) {
        // data
        this.twitterdata = data;
        this.dialogVisible = true;
    };
    TwitterSearchComponent.prototype.setPage = function (page, doornot) {
        var _this = this;
        if (doornot === void 0) { doornot = false; }
        if (page < 1 || page > this.pager.totalPages) {
            // alert('called')
            return;
        }
        if (this.locEm) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
            this.loaded = false;
            headers.append('Content-Type', 'application/json');
            this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/get_twitter_users_locem/' + this.selected_category + '/' + this.locEm + '/?page=' + page + '', { headers: headers }, 'full')
                .subscribe(function (res) {
                _this.main_checkbox = false;
                _this.influencers = res.json();
                _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
                _this.loaded = true;
                _this.locEm = '';
            });
        }
        // else if (!this.locEm) {
        else {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
            // this.loaded = false;
            headers.append('Content-Type', 'application/json');
            // this.http.post(Config.api + '/ml/get_twitter_users/' + this.selected_category + '/' + this.sort_by + '/?page=' + page + '', JSON.stringify(this.column), {headers: headers})
            // this.http.post(Config.api + '/ml/get_twitter_users/' + this.selected_category + '/?page=' + page + '', JSON.stringify(this.column), {headers: headers})
            this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/get_twitter_users/' + this.selected_category + '/?page=' + page + '', {
                user_name: this.user_name,
                twitter_name: this.tw_name,
                location: this.location,
                following: this.following,
                followers: this.followers,
                likes: this.likes
            }, { headers: headers })
                .subscribe(function (res) {
                _this.main_checkbox = false;
                if (res.json().totalItems === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: 'No influencers found',
                        text: 'Try another search',
                        // html: true,
                        confirmButtonColor: '#2ecc71',
                        showCancelButton: true,
                    }).then(function () {
                    }, function (dismiss) {
                        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                        if (dismiss === 'cancel') {
                            // localStorage.removeItem('selected_list_twitter');
                        }
                    });
                }
                else {
                    _this.influencers = res.json();
                    if (doornot) {
                        _this.scoreValues = [_this.influencers['min'], _this.influencers['max']];
                    }
                    _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
                    _this.loaded = true;
                    _this.locEm = '';
                }
            });
        }
    };
    TwitterSearchComponent.prototype.custom_filter = function (v) {
        console.clear();
        if (v.keyCode == 13 && this.name_value !== "") {
            // this.column = "name";
            this.column["name"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    TwitterSearchComponent.prototype.filter_tweets = function (v) {
        console.clear();
        if (v.keyCode == 13 && this.tweets_value !== "") {
            // this.column = "name";
            this.column["tweets_value"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    TwitterSearchComponent.prototype.interest_filter = function (v) {
        console.clear();
        if (v.keyCode == 13 && this.interest_value !== "") {
            // this.column = "name";
            this.column["interest"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    TwitterSearchComponent.prototype.filter_loc_email = function (v) {
        if (v.keyCode == 13 && this.loc !== "") {
            // this.column = "name";
            this.column["location"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    TwitterSearchComponent.prototype.filter_score = function (v) {
        console.clear();
        this.column["score"] = this.scoreValues;
        // this.column["name"] = v.target.value;
        this.setPage(1);
        // if (v.keyCode == 13) {
        //     // this.column = "name";
        //     this.column["location"] = v.target.value;
        //     // this.column["name"] = v.target.value;
        //     this.setPage(1);
        //
        // }
    };
    TwitterSearchComponent.prototype.sortByInfluence = function (e) {
        console.clear();
        if (e['order'] === 1) {
            if (this.sort_by === 'score') {
                return;
            }
            this.sort_by = 'score';
            this.setPage(this.pager.currentPage);
        }
        else {
            if (this.sort_by === '-score') {
                return;
            }
            this.sort_by = '-score';
            this.setPage(this.pager.currentPage);
        }
    };
    TwitterSearchComponent.prototype.sortByName = function (e) {
        if (e['order'] === 1) {
            if (this.sort_by === 'name') {
                return;
            }
            this.sort_by = 'name';
            this.setPage(this.pager.currentPage);
        }
        else {
            if (this.sort_by === '-name') {
                return;
            }
            this.sort_by = '-name';
            this.setPage(this.pager.currentPage);
        }
    };
    TwitterSearchComponent.prototype.sortByLoc = function (e) {
        if (e['order'] === 1) {
            if (this.sort_by === 'location') {
                return;
            }
            this.sort_by = 'location';
            this.setPage(this.pager.currentPage);
        }
        else {
            if (this.sort_by === '-location') {
                return;
            }
            this.sort_by = '-location';
            this.setPage(this.pager.currentPage);
        }
    };
    TwitterSearchComponent.prototype.goTwitterProfile = function (influencer) {
        var url = 'https://twitter.com/' + influencer.screen_name.replace("('", '').replace("',)", '');
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', '', 'success');
            }
        });
    };
    TwitterSearchComponent.prototype.goTwitterProfile_by_default = function (influencer) {
        var url = 'https://twitter.com/' + influencer.twitter_name;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', '', 'success');
            }
        });
    };
    TwitterSearchComponent.prototype.chec = function () {
        console.clear();
    };
    TwitterSearchComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/get_iList_names_twitter/' + currentUser.username + '/-id/', { headers: headers })
            .subscribe(function (res) {
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                // let d= li['id']
                //  li['name']
                _this.user_list[li['id']] = li['name'];
                // user_list.push({})
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
                // alert('jsdkada');
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
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/check_ilist_twitter/', JSON.stringify({
                                        // name: result.value,
                                        name: result,
                                        username: currentUser.username
                                    }), { headers: headers_1 }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                        resolve();
                                    }, function (error) {
                                        if (error.satus === 406) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List Already Exist');
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
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', 
                        // error.toString(),
                        'error');
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
                                for (var i in _this.inflist) {
                                    // this.inflist[i['id']] = e;
                                    _this.inflist[i] = false;
                                }
                                _this.main_checkbox = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', '', 'success');
                            }, function (error) {
                                // alert('error')
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', 
                                // error.toString(),
                                'error');
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
    TwitterSearchComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    TwitterSearchComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
    };
    TwitterSearchComponent.prototype.cheakalldef = function (e) {
        for (var _i = 0, _a = this.influencers_by_defalut['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    TwitterSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-search',
            template: __webpack_require__(/*! ./twitter-search.component.html */ "./src/app/twitter-search/twitter-search.component.html"),
            styles: [__webpack_require__(/*! ./twitter-search.component.scss */ "./src/app/twitter-search/twitter-search.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"]])
    ], TwitterSearchComponent);
    return TwitterSearchComponent;
}());



/***/ }),

/***/ "./src/app/twitter-search/twitter-search.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/twitter-search/twitter-search.module.ts ***!
  \*********************************************************/
/*! exports provided: TwitterSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterSearchModule", function() { return TwitterSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _twitter_search_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./twitter-search.routing */ "./src/app/twitter-search/twitter-search.routing.ts");
/* harmony import */ var _twitter_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./twitter-search.component */ "./src/app/twitter-search/twitter-search.component.ts");
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













var TwitterSearchModule = /** @class */ (function () {
    function TwitterSearchModule() {
    }
    TwitterSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_twitter_search_routing__WEBPACK_IMPORTED_MODULE_4__["TwitterSearchRoutes"]),
                primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"]],
            declarations: [_twitter_search_component__WEBPACK_IMPORTED_MODULE_5__["TwitterSearchComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_8__["PagerService"]]
        })
    ], TwitterSearchModule);
    return TwitterSearchModule;
}());



/***/ }),

/***/ "./src/app/twitter-search/twitter-search.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/twitter-search/twitter-search.routing.ts ***!
  \**********************************************************/
/*! exports provided: TwitterSearchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterSearchRoutes", function() { return TwitterSearchRoutes; });
/* harmony import */ var _twitter_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twitter-search.component */ "./src/app/twitter-search/twitter-search.component.ts");

var TwitterSearchRoutes = [{
        path: '',
        component: _twitter_search_component__WEBPACK_IMPORTED_MODULE_0__["TwitterSearchComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=twitter-search-twitter-search-module.js.map