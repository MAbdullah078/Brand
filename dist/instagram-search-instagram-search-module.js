(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instagram-search-instagram-search-module"],{

/***/ "./src/app/instagram-search/instagram-search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"d-flex\">\n<div class=\"facebook-sidebar\">\n    <form (submit)=\"setPage(1)\" class=\"m-0 sidebar-forms\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <mat-select class=\"mt-5 mb-3\"  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\n                            placeholder=\"Select Category\" style=\"widows: 100% !important;\">\n                    <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\n                </mat-select>\n            </div>\n            <div class=\"col-md-12\">\n                <mat-form-field>\n                    <input matInput type=\"text\"[(ngModel)]=\"name\" placeholder=\"Serch by Profile Name\" name=\"contact\">\n                </mat-form-field>\n            </div>\n        \n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-12\"><h5 class=\"m-0\"><i class=\"fa fa-eye\"></i> Following</h5></div>\n              <div class=\"col-md-6\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Min\" type=\"number\"  name=\"social\" [(ngModel)]=\"minfollowing\" class=\"example-right-align\" >\n                  \n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-6\">\n             \n                  <mat-form-field>\n                      <input matInput placeholder=\"Max \" type=\"number\" [(ngModel)]=\"maxfollowing\" name=\"social2\"  class=\"example-right-align\">\n               \n                    </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-12\">\n                  <h5 class=\"m-0\"><i class=\"fas fa-users\"></i> Follower</h5>\n              </div>\n            <div class=\"col-md-6\">\n                <mat-form-field>\n     \n         \n                <input matInput placeholder=\"Min\" type=\"number\" [(ngModel)]=\"minfollower\"  name=\"seo\"  class=\"example-right-align\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-6\">\n                <mat-form-field>\n                 \n                    <input matInput placeholder=\"Max\" type=\"number\"  [(ngModel)]=\"maxfollower\" name=\"seo2\" class=\"example-right-align\">\n                </mat-form-field>\n            </div>\n          </div>\n   \n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-12 \"><h5 class=\"m-0\"><i class=\"fas fa-chart-bar\"></i> Rank</h5></div>\n              <div class=\"col-md-6\">\n                <mat-form-field>\n                    <!-- <input matInput type=\"text\" [(ngModel)]=\"minaccount_rank\" placeholder=\"Mimimum Rank\" name=\"loc\"> \n                    -->\n                    <input matInput placeholder=\"Min \" type=\"number\"  [(ngModel)]=\"minaccount_rank\" name=\"loc\" class=\"example-right-align\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6\">\n                  <mat-form-field>\n                      <!-- <input matInput type=\"text\" [(ngModel)]=\"maxaccount_rank\" placeholder=\"Maximum Rank\" name=\"loc2\"> -->\n                      <input matInput placeholder=\"Max\" type=\"number\"  [(ngModel)]=\"maxaccount_rank\" name=\"loc\" class=\"example-right-align\">\n                  </mat-form-field>\n              </div>\n            </div>\n           <div class=\"col-md-12 row\">\n              <div class=\"col-md-12\"><h5 class=\"m-0\"><i class=\"fas fa-random\"></i> Posts</h5></div>\n            <div class=\"col-md-6\">\n                <mat-form-field>\n                    <!-- <input matInput type=\"text\" [(ngModel)]=\"minpost\" placeholder=\"Minimum Posts\" name=\"er\"> -->\n                    <input matInput placeholder=\"Min \" type=\"number\"  [(ngModel)]=\"minpost\" name=\"er\" class=\"example-right-align\">\n                </mat-form-field>\n              </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <!-- <input matInput type=\"text\" [(ngModel)]=\"maxpost\" placeholder=\"Maximum Posts\" name=\"er2\"> -->\n\n                        <input matInput placeholder=\"Max \" type=\"number\"  [(ngModel)]=\"maxpost\" name=\"er2\" class=\"example-right-align\">\n                    </mat-form-field>\n                </div>\n              \n            </div>\n          \n      \n\n            <div class=\"col-md-12  text-center\">\n                <button type=\"submit\"  class=\"btn btn-primary\" >\n                    Search <i class=\"fa fa-sliders\"></i>\n                </button>\n            </div>\n\n      \n      </div>\n    </form>\n</div>\n<div class=\"facebook-content\">\n<div class=\"page-content\" style=\"padding-right:15px;\">\n  <div class=\"row\">\n    <div class=\"container-fluid \">\n      <!-- <mat-tab-group>\n\n\n        <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\n          <ng-template mat-tab-label style=\"background: white\">\n                          <span class=\"nav-link-in\">\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\n                                    Category Search\n\t\t\t\t\t\t\t\t\t</span>\n          </ng-template>\n          <div class=\"body\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <h6 class=\"influencer-hading\"> Instagram Influencers</h6>\n              </div>\n              <div class=\"col-md-6 text-center p-auto\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Select Category\" [(ngModel)]=\"cat\">\n                      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                      {{option}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n              </div>\n              <div class=\"col-md-12 text-center\">\n                <button type=\"submit\"  class=\"btn btn-primary\" (click)=\"getYTChannels()\">\n                    Search <i class=\"fa fa-sliders\"></i>\n                </button>\n            </div>\n            </div>\n\n          </div>\n        </mat-tab>\n        <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\n          <ng-template mat-tab-label style=\"background: white\">\n                          <span class=\"nav-link-in\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\n                                    Advanced Search\n\t\t\t\t\t\t\t\t\t</span>\n          </ng-template>\n          <div class=\"body\">\n            <div class=\"container\">\n                <form (submit)=\"setPage(1)\" class=\"m-0 social-forms\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <mat-select class=\"mt-3\"  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\n                                        placeholder=\"Select Category\" style=\"width:100%\">\n                                <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\n                            </mat-select>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"text\"[(ngModel)]=\"name\" placeholder=\"Serch by Title/Name\" name=\"contact\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row Advanced-search\">\n                        <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" [(ngModel)]=\"following\" placeholder=\"Serch by Subscribers\" name=\"social\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" [(ngModel)]=\"follower\" placeholder=\"Serch by Total Views\" name=\"seo\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row Advanced-search\">\n                        <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" [(ngModel)]=\"account_rank\" placeholder=\"Serch by Rank\" name=\"loc\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" [(ngModel)]=\"post\" placeholder=\"Serch by Today Upload Videos\" name=\"er\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-2 offset-md-4 text-right\">\n                            <button type=\"submit\"  class=\"btn btn-primary\" >\n                                Search <i class=\"fa fa-sliders\"></i>\n                            </button>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n          </div>\n\n        </mat-tab>\n      </mat-tab-group> -->\n    </div>\n  </div>\n\n\n \n\n\n  <div class=\"container-fluid\" *ngIf=\"!loaded\">\n\n\n\n    <div class=\"row mt-3\" id=\"myHeader\">\n        <div class=\"col-md-2\">\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\n            <div id=\"ck-button\">\n                <label>\n\n                    <input type=\"checkbox\" class=\"checkbox\" (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\n                </label>\n            </div>\n            </div>\n            <div class=\"col-md-8 text-center\">\n                \n<div  *ngIf=\"!loaded\" >\n    <h4 class=\"m-0\" >Featured Instagram Influencers</h4>\n\n\n</div>\n            </div>\n            <div class=\"col-md-2\">\n            <button  class=\"btn btn-priamry add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\n        </div>\n\n\n</div> \n<div class=\"profile-container\" *ngFor=\"let item of default_influencers.results\" >\n      <div class=\"row p-0 m-0 p-2\">\n\n\n          <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\n              <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\" name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n                  <label class=\"custom-control-label\" for=\"table-check-{{item['id']}}\"></label>\n                </div>\n          </div>\n\n<div class=\"col-md-1 followers-division\">\n\n<img [src]=\"item['image_url']\"  class=\"twitter-image\">\n</div>\n          <div class=\"col-md-1 followers-division\">\n      \n              \n                      <h6 class=\"m-1\">Follower</h6>\n                  <h3 class=\"Follwers-div\" >{{item['follower']| thousandSuff}}</h3>\n              \n          </div>\n                  <div class=\"col-md-9\">\n                      <div class=\"title-name\">\n                        <div class=\"d-flex\">\n                          <img class=\"social-icon2\" src=\"../../assets/header-images/Insta@1x-.png\">\n                          <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\n                      <label class=\"tbl-cell tbl-cell-name\">{{item['user_name']}}</label>\n                      </div>\n                      <div class=\"ml-4\">\n                      <label class=\"item-content\" *ngIf=\"item.description.length>0\"  title=\"{{item['description']}}\">{{item['description']}}</label>\n                   <div>   \n              <label class=\"item-loc\"><i class=\"fab fa-instagram\" ></i>Profile Link:<a (click)=\"goToMedium(item['account_link'])\">{{item['account_link']}}</a></label>\n              </div>\n              <!-- <div>\n              <label class=\"item-loc\"><i class=\"fa fa-map-marker marker-icon\" ></i>External url<span class=\"list-item1\" (click)=\"goToMedium(item['external_url'])\"> {{item['external_url']}}</span></label>\n            </div> -->\n              </div>\n                      </div>\n                      <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"ml-4\">\n                          <span class=\"right-item\"><i class=\"fa fa-user\" ></i>Username:</span> <span class=\"list-item1\">{{item['username']}}</span>\n                              </div>\n                              <div class=\"ml-4\">\n                                <span class=\"right-item\"> <i class=\"fa fa-eye\" ></i>Following:</span> <span class=\"list-item1\">{{item['following']}}</span>\n                              </div>\n                  </div>\n          \n                  <div class=\"col-md-6\"  >\n                      <div>\n                        <span class=\"right-item\"><i class=\"fas fa-chart-bar\"></i>Rank:</span> <span class=\"list-item1\">{{item['account_rank']}}</span>\n              \n              </div>\n              <div>\n             \n                  <span class=\"right-item\"><i class=\"fas fa-random\"></i>posts</span> <span class=\"list-item1\">{{item['posts']}}</span>   \n                      </div>\n                  </div>\n              </div>\n                  </div>\n          </div>\n      </div> \n  </div>\n\n  <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems==0\">\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\n        <div class=\"add-customers-screen-in\">\n          <div class=\"add-customers-screen-user\">\n            <i class=\"font-icon font-icon-user\"></i>\n          </div>\n          <h2>OOPS!</h2>\n          <p class=\"lead color-blue-grey-lighter\">No search results are found<br> try another category.</p>\n          <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\n        </div>\n      </div>\n    </div><!--.box-typical-->\n  </div>\n\n\n\n  <div class=\"container-fluid\" *ngIf=\"loaded&& influencers.totalItems!=0\">\n\n    <div class=\"row\" id=\"myHeader\">\n      <div class=\"col-md-12 list-row p-2\" >\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\n            <div id=\"ck-button\">\n              <label>\n\n                <input type=\"checkbox\" class=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-8 \"  *ngIf=\"loaded&& influencers.totalItems!=0\">\n              <nav class=\"text-center\">\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n    \n                  <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n                  <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n                  <!--</li>-->\n                  <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                    <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                      First\n                    </a>\n                  </li>\n                  <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                    <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                      <span aria-hidden=\"true\">&laquo;</span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                  </li>\n    \n                  <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                      [ngClass]=\"{active:pager.currentPage === page}\"\n                      (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n                  <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                  <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n                  <!--</li>-->\n                  <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                    <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                      <span aria-hidden=\"true\">&raquo;</span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                  </li>\n                  <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                    <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                      Last\n                    </a>\n                  </li>\n                  <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                  <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n                  <!--</li>-->\n                </ul>\n              </nav>\n       \n    \n\n      </div>\n\n\n\n\n\n\n\n          <div class=\"col-md-2\">\n            <button  class=\"btn add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\n          </div>\n          </div>\n        </div>\n      </div>\n\n\n \n    <div class=\"profile-container\" *ngFor=\"let item of influencers.results\" >\n      <div class=\"row m-0 p-0 p-2\">\n\n\n          <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\n              <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\" name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n                  <label class=\"custom-control-label\" for=\"table-check-{{item['id']}}\"></label>\n                </div>\n          </div>\n\n<div class=\"col-md-1 followers-division\">\n\n<img [src]=\"item['image_url']\"  class=\"twitter-image\">\n</div>\n          <div class=\"col-md-1 followers-division\">\n      \n              <div>\n                      <h6 class=\"m-1\">Follower</h6>\n                  <h3 class=\"Follwers-div\" >{{item['follower']| thousandSuff}}</h3>\n              </div>\n          </div>\n                  <div class=\"col-md-9\">\n                      <div class=\"title-name\">\n                        <div class=\"d-flex\">\n                          <img class=\"social-icon2\" src=\"../../assets/header-images/Insta@1x-.png\">\n                          <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\n                      <label class=\"tbl-cell tbl-cell-name\">{{item['user_name']}}</label>\n                      </div>\n                      <div class=\"ml-4\">\n                      <label class=\"item-content\"  title=\"{{item['description']}}\">{{item['description']}}</label>\n                   <div>   \n              <label class=\"item-loc\"><i class=\"fas fa-globe\"></i>Profile Link:  <a (click)=\"goToMedium(item['account_link'])\">{{item['account_link']}}</a></label>\n              </div>\n              <!-- <div >\n              <label class=\"item-loc\"><i class=\"fa fa-map-marker marker-icon\" ></i>External url<span class=\"list-item1\" (click)=\"goToMedium(item['external_url'])\" > {{item['external_url']}}</span></label>\n            </div> -->\n              </div>\n                      </div>\n                      <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"ml-4\">\n                          <span class=\"right-item\"><i class=\"fa fa-user\" ></i>Username:</span> <span class=\"list-item1\">{{item['name']}}</span>\n                              </div>\n                              <div class=\"ml-4\">\n                                <span class=\"right-item\"> <i class=\"fa fa-eye\" ></i>Following:</span> <span class=\"list-item1\">{{item['following']}}</span>\n                              </div>\n                  </div>\n          \n                  <div class=\"col-md-6\"  >\n                      <div>\n                        <span class=\"right-item\"><i class=\"fas fa-chart-bar\"></i>Rank:</span> <span class=\"list-item1\">{{item['account_rank']}}</span>\n              \n              </div>\n              <div>\n             \n                  <span class=\"right-item\"><i class=\"fas fa-random\"></i>Posts</span> <span class=\"list-item1\">{{item['posts']}}</span>   \n                      </div>\n                  </div>\n              </div>\n                  </div>\n          </div>\n      </div> \n      <div class=\"col-md-12 p-2 \"  *ngIf=\"loaded&& influencers.totalItems!=0\">\n          <nav class=\"text-center\">\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n              <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n              <!--</li>-->\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                  First\n                </a>\n              </li>\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">&laquo;</span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                  [ngClass]=\"{active:pager.currentPage === page}\"\n                  (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n              <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n              <!--</li>-->\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                  <span aria-hidden=\"true\">&raquo;</span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                  Last\n                </a>\n              </li>\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n              <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n              <!--</li>-->\n            </ul>\n          </nav>\n   \n\n\n  </div>\n\n\n\n\n  </div>\n\n\n\n  <div class=\"container-fluid\" *ngIf=\"loaded\">\n\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/instagram-search/instagram-search.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/instagram-search/instagram-search.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important}.body{background-color:#f9f9f9 !important}mat-form-field{width:100%}.col-md-6{margin-top:0 !important}.btn-rounded{background:#000;color:#fff;text-align:center;margin-top:3%;border-color:black;font-size:17px;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important}.loaded-container{width:100%;flex-direction:column;position:relative;border-radius:5px;background-color:#fff;box-shadow:0 3px 5px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.19) !important;max-width:1200px;margin-top:18px}input[type=checkbox]{zoom:1.5}.tbl-cell{font-weight:600;font-size:19px;font-family:'Open Sans', sans-serif}i{color:#000}.item-content{color:#919fa9;font-size:14px}.item-loc{color:#0a6aa1;font-weight:700;font-size:12px;margin:0;font-family:'Open Sans', sans-serif}hr{margin:0 !important}.list-item1{color:#0a6aa1;font-weight:700;font-size:12px}.right-item{color:#919fa9;font-size:14px}.btn-success{background:black;border-radius:50px;border-color:black;padding:8px 26px;margin-top:3px;box-shadow:0 14px 26px -12px rgba(0,0,0,0.42),0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2) !important}.twitter-image{width:60px;height:60px;border-radius:50%}.item-content{color:#6a6794;font-size:12px;font-family:'Open Sans', sans-serif}.fa-globe{color:#1691ef;font-size:16px;margin-right:5px}.Follwers-div{margin:2px;font-family:'Merriweather', serif;color:darkcyan}.fa-instagram{color:#a82f82;width:20px;height:20px;font-size:15px}.fa-users{color:#4169e1;width:20px;height:20px;font-size:15px}.fa-eye{color:#a0522d;width:20px;height:20px;font-size:15px}.fa-random{color:#fa8072;width:20px;height:20px;font-size:15px}.fa-user,.fa-chart-bar{color:#ed143d;width:20px;height:20px;font-size:15px}\n"

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
        window.scroll(0, 0);
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
            // window.open('https://www.instagram.com/'+s)
            var url_2 = 'https://www.instagram.com/' + s;
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
    InstagramSearchComponent.prototype.goToMedium = function (s) {
        var arr;
        arr = s.indexOf('(@');
        if (arr != -1) {
            // alert(s.slice(arr+1,-10))
            // window.open('https://www.instagram.com/'+s.slice(arr+2,-10))
            var url_3 = s.slice(arr + 2, -10);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content',
                // html: true,
                confirmButtonColor: '#2ecc71',
            }).then(function () {
                window.open(url_3);
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    // localStorage.removeItem('selected_list_twitter');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'success');
                }
            });
        }
        else {
            var url_4 = s;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content',
                // html: true,
                confirmButtonColor: '#2ecc71',
            }).then(function () {
                window.open(url_4);
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    // localStorage.removeItem('selected_list_twitter');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'success');
                }
            });
        }
    };
    InstagramSearchComponent.prototype.getYTChannels = function () {
        //   alert ( this.cat)
        this.selected_category = this.cat;
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
            followingmin: this.minfollowing,
            followingmax: this.maxfollowing,
            follower: this.follower,
            followermin: this.minfollower,
            followermax: this.maxfollower,
            account_rank: this.account_rank,
            account_rankmin: this.minaccount_rank,
            account_rankmax: this.maxaccount_rank,
            posts: this.post,
            postsmin: this.minpost,
            postsmax: this.maxpost,
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
/* harmony import */ var _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../periscope-search/CustomPipe.module */ "./src/app/periscope-search/CustomPipe.module.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_9__["CustomPipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_instagram_search_routing__WEBPACK_IMPORTED_MODULE_4__["InstagramSearchRoutes"]), primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_10__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"]],
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