(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["youtube-search-youtube-search-module"],{

/***/ "./src/app/youtube-search/youtube-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"d-flex\">\n<div class=\"facebook-sidebar\">\n        <form (submit)=\"setPage(1)\"  class=\"m-0 sidebar-forms\">\n                <div class=\"row m-0\">\n                    <div class=\"col-md-12\">\n                        <mat-select class=\"mt-5 mb-3\"  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\n                                    placeholder=\"Select Category\" style=\"width:100%!important\">\n                            <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\n                        </mat-select>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <mat-form-field>\n                            <input matInput type=\"text\"[(ngModel)]=\"name\" placeholder=\"Search by Profile Name\" name=\"contact\">\n                        </mat-form-field>\n                    </div>\n                </div>\n                    <div class=\"col-md-12 row\">\n                            <div class=\"col-md-12\"><h5 class=\"m-0\"><i class=\"fa fa-users\"></i> Subscribers</h5></div>\n                        <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <!-- <input matInput type=\"text\" [(ngModel)]=\"minsubscribers\" placeholder=\"Min Subscribers\" name=\"social\"> -->\n\n\n                            <input matInput placeholder=\"Min\" type=\"number\"  name=\"social\" [(ngModel)]=\"minsubscribers\" class=\"example-right-align\" >\n                        </mat-form-field>\n                    </div>\n                 \n               \n                            <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <!-- <input matInput type=\"text\" [(ngModel)]=\"maxsubscribers\" placeholder=\"Max Subscribers\" name=\"social2\"> -->\n                                <input matInput placeholder=\"Max\" type=\"number\"  name=\"social2\" [(ngModel)]=\"maxsubscribers\" class=\"example-right-align\" >\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\" >\n                            <!-- <mat-label>Search by Views</mat-label> -->\n                            <div class=\"col-md-12\"><h5 class=\"m-0\"><i class=\"fa fa-eye\"></i> Views</h5></div>\n                            <div class=\"col-md-6\">\n                        <mat-form-field>\n                            <input matInput type=\"text\" [(ngModel)]=\"minviews\" placeholder=\"Min \" name=\"seo\">\n                        </mat-form-field>\n                    </div>\n               \n                    <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"number\" [(ngModel)]=\"maxviews\" placeholder=\"Max \" name=\"seo2\" class=\"example-right-align\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                \n                    <div class=\"col-md-12 row\">\n                            <!-- <mat-label>Search by Rank</mat-label>\n                             -->\n                             <div class=\"col-md-12\"><h5 class=\"m-0\"><i class=\"fas fa-chart-bar\"></i> Rank</h5></div>\n                             <div class=\"col-md-6\">\n                        <mat-form-field>\n                            <input matInput type=\"number\" [(ngModel)]=\"minrank\" placeholder=\"Min \" name=\"loc\" class=\"example-right-align\">\n                        </mat-form-field>\n                    </div>\n                   \n                    <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"number\" [(ngModel)]=\"maxrank\" placeholder=\"Max \" name=\"loc2\"\n                                class=\"example-right-align\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12  text-center\">\n                        <button type=\"submit\"  class=\"btn btn-primary\" >\n                            Search <i class=\"fa fa-sliders\"></i>\n                        </button>\n                    </div>\n\n                \n            </form>\n</div>\n<div class=\"facebook-content p-3\">\n<div class=\"page-content\" style=\"padding-right:15px;\">\n\n    <div class=\"row m-0\">\n        <div class=\"col-md-12 \">\n            <!-- <mat-tab-group>\n\n\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\n                    <ng-template mat-tab-label style=\"background: white\">\n                          <span class=\"nav-link-in\">\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\n                                    Category Search\n\t\t\t\t\t\t\t\t\t</span>\n                    </ng-template>\n                    <div class=\"body\">\n\n\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <h6 class=\"influencer-hading\"> Youtube Influencers</h6>\n                            </div>\n                            <div class=\"col-md-6 text-center p-auto\">\n\n                                <mat-form-field>\n                                      <mat-select placeholder=\"Select Category\" [(ngModel)]=\"cat\">\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                        {{option}}\n                                      </mat-option>\n                                    </mat-select>\n                                  </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-12 text-center\">\n                                <button type=\"submit\"  class=\"btn btn-primary\" (click)=\"getYTChannels()\">\n                                    Search <i class=\"fa fa-sliders\"></i>\n                                </button>\n                            </div>\n\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\n                    <ng-template mat-tab-label style=\"background: white\">\n                          <span class=\"nav-link-in\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\n                                    Advanced Search\n\t\t\t\t\t\t\t\t\t</span>\n                    </ng-template>\n                    <div class=\"body\">\n                        <div class=\"container\">\n                            <form (submit)=\"setPage(1)\"  class=\"m-0 social-forms\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <mat-select class=\"mt-3\"  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\n                                                    placeholder=\"Select Category\" style=\"width:100%\">\n                                            <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\n                                        </mat-select>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field>\n                                            <input matInput type=\"text\"[(ngModel)]=\"name\" placeholder=\"Search by Title/Name\" name=\"contact\">\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <div class=\"row Advanced-Search\">\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field>\n                                            <input matInput type=\"text\" [(ngModel)]=\"subscribers\" placeholder=\"Search by Subscribers\" name=\"social\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field>\n                                            <input matInput type=\"text\" [(ngModel)]=\"t_views\" placeholder=\"Search by  Views\" name=\"seo\">\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <div class=\"row Advanced-Search\">\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field>\n                                            <input matInput type=\"text\" [(ngModel)]=\"rank\" placeholder=\"Search by Rank\" name=\"loc\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field>\n                                            <input matInput type=\"text\" [(ngModel)]=\"today_upload_video\" placeholder=\"Search by Today Upload Videos\" name=\"er\">\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n\n                                <div class=\"row Advanced-Search\" >\n                                    <div class=\"col-md-6\">\n                                        <mat-form-field>\n                                            <input matInput type=\"text\" [(ngModel)]=\"tomorrow_upload_video\" placeholder=\"Search by Tommorow Upload Videos\" name=\"er\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12  text-center\">\n                                        <button type=\"submit\"  class=\"btn btn-primary\" >\n                                            Search <i class=\"fa fa-sliders\"></i>\n                                        </button>\n                                    </div>\n\n                                </div>\n                            </form>\n\n                        </div>\n                    </div>\n\n                </mat-tab>\n            </mat-tab-group> -->\n        </div>\n    </div>\n\n\n    <div class=\"SickyPage\">\n\n  </div>\n\n  <div class=\"container-fluid\" *ngIf=\"loaded&& influencers.totalItems!=0\">\n\n    <div class=\"row p-2 mt-3\" style=\"margin-top: 1%\">\n        <div class=\"col-md-2 \">\n                <div id=\"ck-button\">\n                        <label>\n        \n                            <input type=\"checkbox\" class=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\n                        </label>\n                    </div>\n        \n        </div>\n        <div class=\"col-md-8  \">\n            \n            <nav class=\"text-center\">\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n    \n                        <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n                        <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n                        <!--</li>-->\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                            <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                                First\n                            </a>\n                        </li>\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                                <span aria-hidden=\"true\">&laquo;</span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n    \n                        <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                            [ngClass]=\"{active:pager.currentPage === page}\"\n                            (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n                        <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                        <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n                        <!--</li>-->\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                                <span aria-hidden=\"true\">&raquo;</span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                                Last\n                            </a>\n                        </li>\n                        <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                        <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n                        <!--</li>-->\n                    </ul>\n                </nav>\n        </div>\n\n\n        <div class=\"col-md-2 right-buttons\">\n         \n         \n\n            <button  class=\"btn add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\n\n        </div>\n<div class=\"col-md-12 text-center\">\n        <h5 >Displaying {{influencers.results.length}} of {{influencers.totalItems}} Results</h5>\n</div>\n\n\n\n\n\n\n\n    </div>\n\n<div class=\"container-fluid\" *ngIf=\"loaded\">\n\n</div>\n</div>\n</div>\n\n\n\n\n    <div class=\"row\" *ngIf=\"inCurrentpage\">\n        <div class=\"col-md-4\"style=\"text-align: left\"  >\n            <h6>List Name: <b>{{currentList.name}} </b> </h6>\n        </div>\n        <div class=\"col-md-4 offset-md-4 text-center\" *ngIf=\"inCurrentpage\">\n            <a (click)=\"go_to_list_yt(currentList.id, currentList.name)\" >View<b> List</b></a>\n\n        </div>\n    </div>\n\n    <div class=\"container-fluid\" *ngIf=\"!loaded\">\n\n        <div class=\"row m-0\" id=\"myHeader\">\n                    <div class=\"col-md-2\">\n                        <!--<button  class=\"btn btn-success\">Select All</button>-->\n                        <div id=\"ck-button\">\n                            <label>\n\n                                <input type=\"checkbox\" class=\"checkbox\" (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\n                            </label>\n                        </div>\n                        </div>\n                        <div class=\"col-md-8 text-center\">\n                            \n    <div  *ngIf=\"!loaded\" >\n                <h4 class=\"m-0\" >Featured Top Youtube Influencers</h4>\n       \n    \n        </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                        <button  class=\"btn btn-priamry add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\n                    </div>\n        \n            \n            </div>\n        </div>\n        <div class=\"row influcener-div\" *ngFor=\"let item of influencers_by_default.results\" >\n                    <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\n                            <div class=\"custom-control custom-checkbox mb-3\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\" name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n                                    <label class=\"custom-control-label\" for=\"table-check-{{item['id']}}\"></label>\n                                  </div>\n                        </div>\n                <div class=\"col-md-1 image-div \">\n                    <img [src]=\"item['thumbnail_url']\"  class=\"twitter-image\">\n                </div>\n                <div class=\"col-md-1 followers-profile\">\n                        <h6 class=\"m-0\">Subscribers</h6>\n                        <h4 class=\"Follwers-div\">{{item['subscribers'] |thousandSuff}}</h4>\n                    </div>\n                <div class=\"col-md-9 \">\n        \n                            <div class=\"d-flex\">\n                                <i class=\"fab fa-youtube\"></i>\n                                \n                    <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\n                    <label class=\"item-loc\"> <i class=\"fas fa-map-marker-alt\"></i> {{item['location']}}</label>\n                </div>\n                        <label class=\"item-content ml-4\" \n                        title=\"{{item['description']}}\">{{item['description']}}</label>\n                        <label class=\"item-loc ml-4 \" (click)=\"goToMedium(item['channel_link'])\"><i class=\"fab fa-youtube link\"></i>Youtube Channel Link: {{item['channel_link']}}</label>\n                     <div class=\"row\" >\n                        <div class=\"col-md-6 \">\n                            <div class=\"ml-3\">\n                            <div>\n                            <span class=\"right-item \"><i class=\"fa fa-users\" ></i>  Views:</span>\n                                <span class=\"list-item1\"> {{item['total_views'] | thousandSuff}}</span>\n                                </div>\n                                <div>\n                    <span class=\"right-item \"><i  class=\"fa fa-upload\"></i>Videos Uploaded Today:</span> <span class=\"list-item1\">{{item['today_upload_videos']}}</span>\n                </div>\n            </div>\n                    </div>\n                    <div class=\"col-md-6 \">\n                        <div>\n                            <span class=\"right-item\"><i class=\"fa fa-upload\"></i>Videos Uploaded Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span>\n                              <span class=\"right-item ml-5\"><i class=\"fas fa-chart-bar\"></i>Rank:</span> <span class=\"list-item1\">{{item['rank']}}</span> \n                        </div>\n                      \n                        <div>\n                          <span class=\"right-item\"><i class=\"fas fa-sign-in-alt\"></i>Joined Year:</span> <span class=\"list-item1\">{{item['date']}}</span>\n                        </div>\n                         </div>\n             \n                </div>\n            </div>\n    <div class=\"container-fluid\" *ngIf=\"loaded && influencers.Items==0\">\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\n        <div class=\"add-customers-screen-in\">\n          <div class=\"add-customers-screen-user\">\n            <i class=\"font-icon font-icon-user\"></i>\n          </div>\n          <h2>OOPS!</h2>\n          <p class=\"lead color-blue-grey-lighter\">No Search results are found<br> try another category.</p>\n          <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\n        </div>\n  \n    </div><!--.box-typical-->\n  </div>\n  <div class=\"profile-container\"  *ngFor=\"let item of influencers_by_default.results\" >\n    <div class=\"row p-0 m-0\">\n\n\n        <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\n                <div class=\"custom-control custom-checkbox mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\" name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n                        <label class=\"custom-control-label\" for=\"table-check-{{item['id']}}\"></label>\n                      </div>\n        </div>\n\n<div class=\"col-md-1 followers-division\">\n\n\n<img [src]=\"item['image_url']\"  class=\"twitter-image\">\n</div>\n        <div class=\"col-md-1 followers-division\">\n            <div>\n                    <h6 class=\"m-0\">Likes:</h6>\n                <h3 class=\"item-content\" >{{item['likes']| thousandSuff}}</h3>\n            </div>\n        </div>\n                <div class=\"col-md-9\">\n                    <div class=\"title-name\">\n                            <i class=\"fab fa-facebook\"></i>\n                    <label class=\"tbl-cell tbl-cell-name\">{{item['title']}}</label>\n                    <label class=\"item-loc\" *ngIf=\"item['category']['location']\"> <i class=\"fas fa-map-marker-alt\"></i> {{item['category']['location']}}</label>\n                    </div>\n                    <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"ml-4\">\n                                <span class=\"right-item\" *ngIf=\"item['web_link']\" ><i class=\"fa fa-globe\" ></i> Web:</span> <span class=\"list-item1\">{{item['web_link']}}</span>\n                            </div>\n                            <div class=\"ml-4\">\n                                <span class=\"right-item\"><i class=\"fa fa-barcode\" ></i> Performance:</span> <span class=\"list-item1\">{{item['PTAT']}}</span>\n                            </div>\n                </div>\n                <div class=\"col-md-6\"  *ngIf=\"item['phone']\">\n                    <div>\n                <span class=\"right-item\"> <i class=\"fas fa-phone-alt\"></i>Phone:</span> <span class=\"list-item1\">{{item['phone']}} </span>\n                <span class=\"right-item ml-5\"><i class=\"fas fa-chart-bar \"></i>Like Ranks:</span> <span class=\"list-item1\">{{item['LikeRank']}}</span>\n            </div>\n            <div>\n                <span class=\"right-item\"><i class=\"fas fa-sliders-h\"></i>\n                    Engagement Rate:</span>\n                     <span class=\"list-item1\">{{item['ER']}}</span>\n                     \n                    </div>\n                </div>\n            </div>\n                </div>\n        </div>\n    </div>\n\n    <div class=\"container-fluid\" *ngIf=\"loaded&& influencers.Items!=0\">\n\n        <div class=\"row\" id=\"myHeader\">\n            <div class=\"col-md-12 list-row\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <!--<button  class=\"btn btn-success\">Select All</button>-->\n                        <div id=\"ck-button\">\n                            <label>\n\n                                <input type=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\n                            </label>\n                        </div>\n\n                        <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n</div>\n</div>\n<div class=\"col-md-12 \">\n            \n        <nav class=\"text-center\">\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n                    <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n                    <!--</li>-->\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                            First\n                        </a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                            <span aria-hidden=\"true\">&laquo;</span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                    </li>\n\n                    <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                        [ngClass]=\"{active:pager.currentPage === page}\"\n                        (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                    <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n                    <!--</li>-->\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                            <span aria-hidden=\"true\">&raquo;</span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                            Last\n                        </a>\n                    </li>\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                    <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n                    <!--</li>-->\n                </ul>\n            </nav>\n    </div>\n"

/***/ }),

/***/ "./src/app/youtube-search/youtube-search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important}.body{background-color:#f9f9f9 !important}mat-form-field{width:100%;color:#343739 !important;line-height:0.95}.col-md-6{margin-top:0 !important}.btn-rounded{background:#000;color:#fff;text-align:center;margin-top:3%;border-color:black;font-size:17px;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important}.list-row{margin-left:15px;border-radius:3px;height:45px}.loaded-container{width:100%;flex-direction:column;position:relative;border-radius:5px;background-color:#fff;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important;max-width:1200px;margin-top:18px}input[type=checkbox]{zoom:1.5}i{color:#000}.search-button{background:#82d0dc;color:#fff}.link{font-size:15px !important;width:20px;height:20px}.fa-youtube{color:#c00;font-size:23px;margin:8px 0 0 -8px}.fa-map-marker-alt{margin-top:11px;font-size:15px;color:#b74545}.btn-success{background:black;border-radius:50px;border-color:black;font-weight:bold;padding:8px 26px;margin-top:3px;box-shadow:0 14px 26px -12px rgba(0,0,0,0.42),0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2) !important}mat-form-field-header{background-color:black}\n"

/***/ }),

/***/ "./src/app/youtube-search/youtube-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.component.ts ***!
  \************************************************************/
/*! exports provided: YoutubeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchComponent", function() { return YoutubeSearchComponent; });
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










var YoutubeSearchComponent = /** @class */ (function () {
    function YoutubeSearchComponent(http, route, pagerService, router) {
        this.http = http;
        this.route = route;
        this.pagerService = pagerService;
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.max = 100;
        this.inflist = {};
        this.inf_list = 'Influencers List';
        this.pdfArray = [];
        this.influencers_by_default = [];
        this.loaded = false;
        this.inf_name = [];
        this.inf_channel_link = [];
        this.inf_subscribers = [];
        this.inf_total_views = [];
        this.inf_thismonthviews = [];
        this.inf_date = [];
        this.inf_rank = [];
        this.inf_todayupload = [];
        this.listnamecheck = false;
        this.pager = {};
        this.user_list = {};
        this.inCurrentpage = false;
        this.options = ["Abortion Service", "Academic Camp", "Accessories", "Accessories Store", "Accountant", "Actor", "Actor/director", "Acupuncturist", "Addiction Resources Center", "Addiction Service", "Addiction Treatment Center", "Adoption Service", "Adult Entertainment Service", "Advertising Agency", "Advertising/Marketing", "Advertising/Marketing Service", "Aerospace Company", "Aerospace/defense", "Afghani Restaurant", "African Restaurant", "Agricultural Cooperative", "Agricultural Service", "Agriculture", "Agriculture Company", "AIDS Resource Center", "Aircraft Dealership", "Airline Company", "Airline Industry Service", "Airport", "Airport Lounge", "Airport Shuttle Service", "Airport Terminal", "Album", "Alcohol Addiction Treatment Center", "Allergist", "Alternative & Holistic Health Service", "Amateur sports team", "Amateur Sport Team", "American Restaurant", "Amusement Center", "Amusement & Theme Park", "Andhra Restaurant", "Anesthesiologists", "Anglican Church", "Animal", "Animal breed", "Animal Shelter", "Antique Store", "Apartment & Condo Building", "Apostolic Church", "Apparel", "Apparel & Clothing", "Apparel Company", "Apparel Distributor", "Appliance Manufacturer", "Appliance Repair Service", "Appliances", "App page", "Aquarium", "Aquatic Pet Store", "Arabian Restaurant", "Arcade", "Archaeological Service", "Archery Range", "Archery Shop", "Architect", "Architectural Designer", "Architectural Engineer", "Argentinian Restaurant", "Armed Forces", "Armenian Restaurant", "Aromatherapy Service", "Art", "Art Gallery", "Artist", "Art Museum", "Art Restoration Service", "Art School", "Arts & Crafts Store", "Arts & Entertainment", "Arts/entertainment/nightlife", "Arts/humanities website", "Arts & Humanities Website", "Art Tour Agency", "Asian Fusion Restaurant", "Asian Restaurant", "Astrologist", "Astrologist & Psychic", "Athlete", "Attractions/things to do", "ATV Dealership", "ATV Recreation Park", "ATV Rental", "ATV Rental Shop", "Auction House", "Audiologist", "Audio Visual Equipment Store", "Auditorium", "Australian Restaurant", "Austrian Restaurant", "Author", "Auto Detailing Service", "Automation Service", "Automobiles and parts", "Automotive", "Automotive, Aircraft & Boat", "Automotive, Aircraft, Boat", "Automotive Body Shop", "Automotive Company", "Automotive Consultant", "Automotive Customization Shop", "Automotive Dealership", "Automotive Glass Service", "Automotive Leasing Service", "Automotive Manufacturer", "Automotive Parts Store", "Automotive Repair Shop", "Automotive Restoration Service", "Automotive Service", "Automotive Shipping Service", "Automotive Storage Facility", "Automotive Store", "Automotive Wholesaler", "Automotive Window Tinting Service", "Aviation", "Aviation School", "Awning Supplier", "Baby & Children's Clothing Store", "Baby Goods/Kids Goods", "Babysitter", "Bags/luggage", "Bags & Luggage Company", "Bags & Luggage Store", "Bail Bondsmen", "Bakery", "Ballroom", "Band", "Bank", "Bank Equipment & Service", "Bank/financial institution", "Bank/Financial Service", "Bank/financial services", "Bankruptcy Lawyer", "Baptist Church", "Bar", "Barbecue Restaurant", "Barber Shop", "Bar & Grill", "Bartending School", "Bartending Service", "Baseball Field", "Basketball Court", "Basque Restaurant", "Batting Cage", "Bavarian Restaurant", "Beach", "Beach Resort", "Beauty", "Beauty, Cosmetic & Personal Care", "Beauty/Cosmetics Company", "Beauty Salon", "Beauty Service", "Beauty Store", "Beauty Supplier", "Beauty Supply Store", "Bed and Breakfast", "Beer Bar", "Beer Garden", "Belgian Restaurant", "Bengali/Bangladeshi Restaurant", "Betting Shop", "Bicycle Rental Shop", "Bicycle Repair Service", "Bicycle Shop", "Big Box Retailer", "Bike Rental", "Bike Trail", "Bingo Hall", "Biotechnology", "Biotechnology Company", "Blacksmith", "Blinds & Curtains Store", "Blogger", "Blood Bank", "Board game", "Boat Dealership", "Boat/Ferry Company", "Boat Rental", "Boat / Sailing Instructor", "Boat Service", "Boat Tour Agency", "Book", "Book & Magazine Distributor", "Book series", "Books & Magazines", "Bookstore", "Book Store", "Borough", "Botanical Garden", "Bottled Water Company", "Bottled Water Supplier", "Boutique Store", "Bowling Alley", "Brand", "Brand Agency", "Brand/Company Type", "Brazilian Restaurant", "Breakfast & Brunch Restaurant", "Brewery", "Bridal Shop", "Bridge", "British Restaurant", "Broadcasting & Media Production Company", "Brokerage", "Brokerage Firm", "Bubble Tea Shop", "Buddhist Temple", "Buffet Restaurant", "Building Materials", "Building Material Store", "Burger Restaurant", "Burmese Restaurant", "Business", "Business Center", "Business Consultant", "Business/economy website", "Business & Economy Website", "Business person", "Business Service", "Business services", "Business Supply Service", "Bus Line", "Bus Station", "Bus Tour Agency", "Butcher Shop", "Cabin", "Cabinet & Countertop Store", "Cable & Satellite Company", "Cafe", "Cafeteria", "Cajun & Creole Restaurant", "Calabrian Restaurant", "Cambodian Restaurant", "Camera/photo", "Camera Store", "Campground", "Campus Building", "Canadian Restaurant", "Canal", "Candy Store", "Canoe & Kayak Rental", "Canoe & Kayak Rental Shop", "Cantonese Restaurant", "Car Dealership", "Cardiologist", "Career Counselor", "Cargo & Freight Company", "Caribbean Restaurant", "Car Rental", "Car Stereo Store", "Car Wash"];
    }
    YoutubeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.route.queryParams.subscribe(function (params) {
            _this.qparamschecker = params['name'] || '0';
            if (_this.qparamschecker === 'youtube') {
                _this.inCurrentpage = true;
            }
        });
        this.currentList = JSON.parse(localStorage.getItem('selected_list_yt'));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/youtube_categories', { headers: headers }, 'full')
            .subscribe(function (res) {
            _this.options = res.json();
            _this.filteredOptions = _this.myControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filterCategory(val) : _this.options.slice(); });
        });
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/get_iList_names_yt/' + this.currentUser.username + '/-id/')
            .subscribe(function (res) {
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                _this.user_list[li['id']] = li['name'];
                _this.listnamecheck = true;
            }
        });
        this.get_default_Youtube_data(1);
    };
    YoutubeSearchComponent.prototype.goToMedium = function (s) {
        var arr;
        arr = s.indexOf('(@');
        if (arr != -1) {
            // alert(s.slice(arr+1,-10))
            // window.open('https://www.instagram.com/'+s.slice(arr+2,-10))
            var url_1 = s.slice(arr + 2, -10);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content',
                // html: true,
                confirmButtonColor: '#2ecc71',
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
            var url_2 = s;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content',
                // html: true,
                confirmButtonColor: '#2ecc71',
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
    YoutubeSearchComponent.prototype.get_default_Youtube_data = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
        // this.loaded = false;
        // headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/get_youtube_influencers_list/')
            .subscribe(function (res) {
            // this.main_checkbox = false;
            _this.influencers_by_default = res.json();
            _this.pdfArray = _this.influencers_by_default['results'];
            for (var _i = 0, _a = _this.influencers_by_default.results; _i < _a.length; _i++) {
                var item = _a[_i];
                item['rank'] = parseFloat(item['rank']).toFixed(0);
            }
            for (var _b = 0, _c = _this.influencers_by_default.results; _b < _c.length; _b++) {
                var item = _c[_b];
                item['contact'] = (item['contact']).slice(8);
            }
            _this.pager = _this.pagerService.getPager(_this.influencers_by_default['totalItems'], page, 10);
        });
    };
    YoutubeSearchComponent.prototype.go_to_list_yt = function (e, name) {
        this.router.navigate(['youtube/list/', e]);
    };
    YoutubeSearchComponent.prototype.getYTChannels = function () {
        //   alert ( this.cat)
        this.selected_category = this.cat;
        this.pager = {};
        this.setPage(1);
    };
    YoutubeSearchComponent.prototype.filterCategory = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    YoutubeSearchComponent.prototype.chec = function () {
    };
    YoutubeSearchComponent.prototype.goToLink = function (url) {
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
    YoutubeSearchComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    YoutubeSearchComponent.prototype.cheakalldef = function (e) {
        for (var _i = 0, _a = this.influencers_by_default['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    YoutubeSearchComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = this.currentUser;
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        var user_list = this.user_list;
        var current_list = JSON.parse(localStorage.getItem('selected_list_yt'));
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
                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/create_add_ilist_yt/', JSON.stringify({ id: current_list.id, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    localStorage.removeItem('selected_list_yt');
                    for (var i in _this.inflist) {
                        // this.inflist[i['id']] = e;
                        _this.inflist[i] = false;
                    }
                    _this.main_checkbox = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List updated!', current_list.name, 'success');
                }, function (error) {
                    // alert('error')
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Try again after some time!', 
                    // error.toString(),
                    'error');
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    localStorage.removeItem('selected_list_yt');
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
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/check_ilist_yt/', JSON.stringify({
                                        name: result,
                                        // name: result.value,
                                        username: currentUser.username
                                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                        resolve();
                                    }, function (error) {
                                        if (error.status === 406) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List Already Exist');
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
                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/create_add_ilist_yt/', JSON.stringify({
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
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Try again after some time!', 
                        // error.toString(),
                        'error');
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
                        if (_this.listnamecheck) {
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
                                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/create_add_ilist_yt/', JSON.stringify({
                                    id: result,
                                    list: list
                                }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                    for (var i in _this.inflist) {
                                        // this.inflist[i['id']] = e;
                                        _this.inflist[i] = false;
                                    }
                                    _this.main_checkbox = false;
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List updated!', '', 'success');
                                }, function (error) {
                                    // alert('error')
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Try again after some time!', 
                                    // error.toString(),
                                    'error');
                                });
                            }, function (dismiss) {
                                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                                if (dismiss === 'cancel') {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', 'No list Updated :)', 'success');
                                }
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('No Lists are created yet!', '', 'warning');
                        }
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('No Influencers selected', '', 'warning');
                    }
                }
            });
        }
    };
    YoutubeSearchComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    YoutubeSearchComponent.prototype.getCatName = function (e) {
        this.selected_category = e.value;
    };
    YoutubeSearchComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        // this.http.post(Config.api+'/ml/get_youtube_channels/' + this.selected_category + '/?page=' + page + '', {headers:headers}, 'full')
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/get_youtube_channels/' + this.selected_category + '/?page=' + page + '', {
            name: this.name,
            // subscribers: this.subscribers,
            subscribersmin: this.minsubscribers,
            subscribersmax: this.maxsubscribers,
            // total_views:this.t_views,
            // rank:this.rank,
            rankmin: this.minrank,
            rankmax: this.maxrank,
            total_viewsmin: this.minviews,
            total_viewsmax: this.maxviews
        }, { headers: headers })
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.influencers = res.json();
            for (var _i = 0, _a = _this.influencers.results; _i < _a.length; _i++) {
                var item = _a[_i];
                item['rank'] = parseFloat(item['rank']).toFixed(0);
            }
            _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
            _this.loaded = true;
        });
    };
    YoutubeSearchComponent.prototype.setPageQuery = function (page, query) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/ml/get_youtube_channels/' + query + '/?page=' + page + '', { headers: headers }, 'full')
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.influencers = res.json();
            _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
            _this.loaded = true;
        });
    };
    YoutubeSearchComponent.prototype.navSearch = function () {
    };
    YoutubeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube-search',
            template: __webpack_require__(/*! ./youtube-search.component.html */ "./src/app/youtube-search/youtube-search.component.html"),
            styles: [__webpack_require__(/*! ./youtube-search.component.scss */ "./src/app/youtube-search/youtube-search.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], YoutubeSearchComponent);
    return YoutubeSearchComponent;
}());



/***/ }),

/***/ "./src/app/youtube-search/youtube-search.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.module.ts ***!
  \*********************************************************/
/*! exports provided: YoutubeSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchModule", function() { return YoutubeSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _youtube_search_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube-search.routing */ "./src/app/youtube-search/youtube-search.routing.ts");
/* harmony import */ var _youtube_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube-search.component */ "./src/app/youtube-search/youtube-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../periscope-search/CustomPipe.module */ "./src/app/periscope-search/CustomPipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var YoutubeSearchModule = /** @class */ (function () {
    function YoutubeSearchModule() {
    }
    YoutubeSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_11__["CustomPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_youtube_search_routing__WEBPACK_IMPORTED_MODULE_4__["YoutubeSearchRoutes"]), primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_9__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"]],
            declarations: [_youtube_search_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeSearchComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_8__["PagerService"]]
        })
    ], YoutubeSearchModule);
    return YoutubeSearchModule;
}());



/***/ }),

/***/ "./src/app/youtube-search/youtube-search.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.routing.ts ***!
  \**********************************************************/
/*! exports provided: YoutubeSearchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchRoutes", function() { return YoutubeSearchRoutes; });
/* harmony import */ var _youtube_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-search.component */ "./src/app/youtube-search/youtube-search.component.ts");

var YoutubeSearchRoutes = [{
        path: '',
        component: _youtube_search_component__WEBPACK_IMPORTED_MODULE_0__["YoutubeSearchComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=youtube-search-youtube-search-module.js.map