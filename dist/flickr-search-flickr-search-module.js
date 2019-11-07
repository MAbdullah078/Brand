(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flickr-search-flickr-search-module"],{

/***/ "./src/app/flickr-search/flickr-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nsection{\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n}\n.body{\n    background-color: #f9f9f9!important;\n}\nmat-form-field{\n    width: 100%;\n}\n.col-md-6{\n    margin-top: 0!important;\n}\n.btn-rounded {\n    background: #000;\n    color: #fff;\n    text-align: center;\n    margin-top: 3%;\n    border-color: black;\n    font-size: 17px;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n}\n.profile-container{\n    width: 100%;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    background-color: #fff;\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n    max-width: 1200px;\n    display: inline-block;\n    /*height: 165px;*/\n    margin-top: 18px;\n}\n.loaded-container{\n    width: 100%;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    background-color: #fff;\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n    max-width: 1200px;\n    /*height: 300px;*/\n    /*display: inline-block;*/\n    margin-top: 18px;\n}\ninput[type=checkbox]{\n    zoom: 1.5;\n}\n.tbl-cell{\n    font-weight: 600;\n    font-size: 19px;\n}\ni{\n    color: #000;\n}\n.fa-home{\n    color: #008080;\n    width: 20px;\n    height: 20px;\n    font-size: 15px;\n}\n.btn-success{\n    background: black;\n    border-radius: 50px;\n    border-color: black;\n    padding: 8px 26px;\n    margin-top: 3px;\n    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)!important;\n}\n"

/***/ }),

/***/ "./src/app/flickr-search/flickr-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/flickr-search/flickr-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"d-flex\">\n<div class=\"facebook-sidebar\">\n    <form (submit)=\"setPage(1)\" class=\"sidebar-forms  m-0\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <mat-select class=\"mt-5 mb-3\"  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\n                        placeholder=\"Select Category\" style=\"width: 100%!important;\">\n              <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\n            </mat-select>\n          </div>\n          <div class=\"col-md-12\">\n            <mat-form-field>\n              <input matInput type=\"text\"[(ngModel)]=\"title\" placeholder=\"Serch by Profile Name\" name=\"contact\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-12 row\">\n              <div class=\"col-md-12 text-center\"><h5 class=\"m-0\"><i class=\"fas fa-users\"></i> Following</h5></div>\n          <div class=\"col-md-6\">\n              <mat-form-field>\n\n                <input matInput placeholder=\"Min \" type=\"number\"  [(ngModel)]=\"minfollowers\" name=\"social\" class=\"example-right-align\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-6\">\n                <mat-form-field>\n                 \n                  <input matInput placeholder=\"Max \" type=\"number\"  [(ngModel)]=\"maxfollowers\" name=\"social2\" class=\"example-right-align\">\n                </mat-form-field>\n              </div>\n            </div>\n          <div class=\"col-md-12 row\">\n              <div class=\"col-md-12 text-center\"><h5 class=\"m-0\"><i class=\"fas fa-eye\"></i> Views</h5></div>\n          <div class=\"col-md-6\">\n              <mat-form-field>\n                <input matInput placeholder=\"Min \" type=\"number\"  [(ngModel)]=\"minviews\" name=\"seo\" class=\"example-right-align\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-6\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Max \" type=\"number\"  [(ngModel)]=\"maxviews\" name=\"seo2\" class=\"example-right-align\">\n                </mat-form-field>\n              </div>\n            </div>\n    \n\n          <div class=\"col-md-12\">\n            <mat-form-field>\n              <input matInput type=\"text\" [(ngModel)]=\"location\" placeholder=\"Serch by Location\" name=\"loc\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-12 row\">\n              <div class=\"col-md-12 text-center\"><h5 class=\"m-0\"><i class=\"fas fa-chart-bar\"></i> Rank</h5></div>\n          <div class=\"col-md-6\">\n\n            <mat-form-field>\n                <input matInput placeholder=\"Min \" type=\"number\"  [(ngModel)]=\"minrank\" name=\"rank\" class=\"example-right-align\">\n              </mat-form-field>\n          </div>\n              <div class=\"col-md-6\">\n              <mat-form-field>\n                  <input matInput type=\"text\" [(ngModel)]=\"maxrank\" placeholder=\"Max\" name=\"rank2\">\n                </mat-form-field>\n              </div>\n            </div>\n          <div class=\"col-md-12 text-center\">\n            <button type=\"submit\"  class=\"btn btn-primary search-button\" >\n              Search <i class=\"fa fa-sliders\"></i>\n            </button>\n          </div>\n\n     \n      </div>\n      </form>\n\n</div>\n<div class=\"facebook-content\">\n<div class=\"page-content\">\n\n    <div class=\"row m-0\">\n      <div class=\"col-md-12 \">\n        <!-- <mat-tab-group>\n  \n  \n          <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\n            <ng-template mat-tab-label style=\"background: white\">\n                            <span class=\"nav-link-in\">\n                      <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\n                                      Category Search\n                    </span>\n            </ng-template>\n            <div class=\"body\">\n  \n  \n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <h6 class=\"influencer-hading\"> Flickr Influencers</h6>\n                </div>\n  \n                <div class=\"col-md-6 text-center p-auto\">\n                  <mat-form-field>\n                      <mat-select placeholder=\"Select Category\" [(ngModel)]=\"cat\">\n                        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                        {{option}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n  \n                </div>\n            <div class=\"col-md-12 text-center\">\n                                <button type=\"submit\"  class=\"btn btn-primary\" (click)=\"getFlickrData()\">\n                                    Search <i class=\"fa fa-sliders\"></i>\n                                </button>\n                            </div>\n              </div>\n            </div>\n          </mat-tab>\n          <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\n            <ng-template mat-tab-label style=\"background: white\">\n                            <span class=\"nav-link-in\">\n                      <i class=\"fa fa-fire\"></i>\n                                      Advanced Search\n                    </span>\n            </ng-template>\n            <div class=\"body\">\n              <div class=\"container\">\n                <form (submit)=\"setPage(1)\" class=\"social-forms  m-0\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <mat-select class=\"mt-3\"  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\n                                  placeholder=\"Select Category\" style=\"width:100%\">\n                        <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\n                      </mat-select>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <mat-form-field>\n                        <input matInput type=\"text\"[(ngModel)]=\"title\" placeholder=\"Serch by Title/Name\" name=\"contact\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <mat-form-field>\n                        <input matInput type=\"text\" [(ngModel)]=\"minfollowers\" placeholder=\"Minimum Followers\" name=\"social\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n                          <input matInput type=\"text\" [(ngModel)]=\"maxfollowers\" placeholder=\"Maximum Followers\" name=\"social2\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <mat-form-field>\n                            <input matInput type=\"text\" [(ngModel)]=\"minviews\" placeholder=\"Minimum Views\" name=\"seo\">\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <mat-form-field>\n                              <input matInput type=\"text\" [(ngModel)]=\"maxviews\" placeholder=\"Maximum Views\" name=\"seo2\">\n                            </mat-form-field>\n                          </div>\n                          <div class=\"col-md-6\">\n                          <mat-form-field>\n                              <input matInput type=\"text\" [(ngModel)]=\"minrank\" placeholder=\"Minimum Rank\" name=\"rank\">\n                            </mat-form-field>\n                          </div>\n                            <div class=\"col-md-6\">\n                            <mat-form-field>\n                                <input matInput type=\"text\" [(ngModel)]=\"maxrank\" placeholder=\"Maximum Rank\" name=\"rank2\">\n                              </mat-form-field>\n                            </div>\n                  <div class=\"row Advanced-search\" >\n                    <div class=\"col-md-12 text-center\">\n                      <button type=\"submit\"  class=\"btn btn-primary search-button\" >\n                        Search <i class=\"fa fa-sliders\"></i>\n                      </button>\n                    </div>\n  \n                  </div>\n                </form>\n              </div>\n  \n            </div>\n  \n          </mat-tab>\n        </mat-tab-group> -->\n      </div>\n    </div>\n\n  \n    <div class=\"container-fluid\" *ngIf=\"loaded && fbinfluencers.totalItems===0\">\n      <div class=\"box-typical box-typical-full-height\" style=\"min-height: 115px\">\n        <div class=\"add-customers-screen tbl\" style=\"height: 119px\">\n          <div class=\"box-typical-full-height\">\n            <div class=\"add-customers-screen-user\">\n              <i class=\"font-icon font-icon-user\"></i>\n            </div>\n            <h2>OOPS!</h2>\n            <p class=\"lead color-blue-grey-lighter\">No search results are found<br> try another category.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"container-fluid\" *ngIf=\"loaded && fbinfluencers.totalItems!=0\">\n  \n        <div class=\"row\" style=\"margin-top: 1%\">\n    \n          <div class=\"col-md-5\">\n            <nav >\n              <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n    \n                <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n                <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n                <!--</li>-->\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                    First\n                  </a>\n                </li>\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                    <span aria-hidden=\"true\">&laquo;</span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                </li>\n    \n                <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                    [ngClass]=\"{active:pager.currentPage === page}\"\n                    (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n                <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n                <!--</li>-->\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </li>\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                    Last\n                  </a>\n                </li>\n                <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n                <!--</li>-->\n              </ul>\n            </nav>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-4 center-showing\">\n            <h5 style=\"margin: 10px\">Displaying {{fbinfluencers.results.length}} of {{fbinfluencers.totalItems}} Results</h5>\n          </div>\n              <!-- <div class=\"col-md-3\">\n                <button class=\"btn btn-success\">Select All</button>\n                <div id=\"ck-button\">\n                  <label>\n    \n                    <input type=\"checkbox\" (change)=\"checkedAll($event.target.checked)\" ><span>Select All</span>\n                  </label>\n                </div>\n    \n                <button class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\n    \n              </div> -->\n      <div *ngIf=\"loaded&& fbinfluencers.totalItems!=0\">\n        <div class=\"row\">\n     \n  \n        </div>\n      </div>\n  \n    </div>\n  \n  \n    <div class=\"container-fluid\" *ngIf=\"!loaded\">\n  \n  \n     \n  \n  \n      <div class=\"row mt-3\" id=\"myHeader\">\n          <div class=\"col-md-2\">\n              <!--<button  class=\"btn btn-success\">Select All</button>-->\n              <div id=\"ck-button\">\n                  <label>\n\n                      <input type=\"checkbox\" class=\"checkbox\" (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\n                  </label>\n              </div>\n              </div>\n              <div class=\"col-md-8 text-center\">\n                  \n<div  *ngIf=\"!loaded\" >\n      <h4 class=\"m-0\" >Featured Flicker Influencers</h4>\n\n\n</div>\n              </div>\n              <div class=\"col-md-2\">\n              <button  class=\"btn btn-priamry add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\n          </div>\n\n  \n  </div>\n  <div class=\"profile-container\" *ngFor=\"let item of influencers_by_default_FB.results\"  >\n          <div class=\"row p-0 m-0\">\n      \n      \n              <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\n         \n\n\n\n                  <div class=\"custom-control custom-checkbox mb-3\">\n                      <input type=\"checkbox\" class=\"custom-control-input\"  name=\"example1\"name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n                      <label class=\"custom-control-label\" for=\"table-check-{{item['id']}}\"></label>\n                    </div>\n              </div>\n      \n      <div class=\"col-md-1 followers-division\">\n      \n      \n          <img [src]=\"item['image_link']\" class=\"twitter-image\">\n      </div>\n              <div class=\"col-md-1 followers-division\">\n                  <div>\n                          <h6 class=\"m-0\">Followers:</h6>\n                      <h3 class=\"Follwers-div\" >{{item['followers']| thousandSuff}}</h3>\n                  </div>\n              </div>\n                      <div class=\"col-md-9\">\n                          <div class=\"title-name\">\n                            <div class=\"d-flex\">\n                               <img class=\"social-icon2\" src=\"../../assets/header-images/flickr_32.png\">\n                          <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\n                        </div>\n                          <label class=\"item-content ml-4\"  title=\"{{item['description']}}\">{{item['description']}}</label>\n                          </div>\n                          <div>\n                          <label class=\"item-loc ml-4\"> <i class=\"fas fa-user-alt\"></i>Profile url:  <a (click)=\"goToLink(item['profile_linked'])\" >{{item['profile_linked']}}</a></label>\n                        </div>\n                        <div></div>\n                              <label class=\"item-loc ml-4\"> <i class=\"fas fa-globe\" ></i> Website:  <a (click)=\"goToLink(item['website'])\">{{item['website']}}</a></label>\n                            \n  \n                          <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"ml-4\">\n                            <div>\n                              <span class=\"right-item\"><i class=\"fa fa-users\" ></i> Followers:</span> <span class=\"list-item1\">{{item['followers'] | thousandSuff}}</span>\n                            </div>\n                            <div>\n                              <span class=\"right-item\"><i class=\"fas fa-eye\"></i> Total Views:</span> <span class=\"list-item1\">{{item['views_total'] | thousandSuff}}</span>\n                            </div>\n                                 \n                      </div>\n              \n           \n                  </div>\n                  <div class=\"col-md-6\">\n                      <div>\n                          <span class=\"right-item\"><i class=\"fas fa-home\"></i>Home town:</span> <span class=\"list-item1\">{{item['hometown']}}</span> \n                        \n              </div>\n              <div>\n                   <span class=\"right-item\"> <i class=\"fas fa-chart-bar\" ></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}}</span>\n                       \n                      </div>\n                  </div>\n                </div>\n              </div>\n                      </div>\n      \n              </div>\n      \n    </div>\n  \n    <div class=\"container-fluid\" *ngIf=\"loaded && fbinfluencers.totalItems!=0\">\n  \n      <div class=\"row mt-2 p-3\" id=\"myHeader\">\n       \n            <div class=\"col-md-2\">\n              <!--<button  class=\"btn btn-success\">Select All</button>-->\n              <div id=\"ck-button\">\n                <label>\n  \n                  <input type=\"checkbox\" class=\"checkbox\"   (change)=\"checkedAll($event.target.checked)\" ><span>Select All</span>\n                </label>\n              </div>\n              </div>\n              <div class=\"col-md-8 text-center\" *ngIf=\"loaded&& fbinfluencers.totalItems!=0\" >\n                  <nav style=\"margin-top:2%\">\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n        \n                      <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n                      <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n                      <!--</li>-->\n                      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                          First\n                        </a>\n                      </li>\n                      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                          <span aria-hidden=\"true\">&laquo;</span>\n                          <span class=\"sr-only\">Previous</span>\n                        </a>\n                      </li>\n        \n                      <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                          [ngClass]=\"{active:pager.currentPage === page}\"\n                          (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n                      <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                      <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n                      <!--</li>-->\n                      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                          <span aria-hidden=\"true\">&raquo;</span>\n                          <span class=\"sr-only\">Next</span>\n                        </a>\n                      </li>\n                      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                          Last\n                        </a>\n                      </li>\n                      <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                      <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n                      <!--</li>-->\n                    </ul>\n                  </nav>\n                </div>\n  \n  \n  \n  \n  \n              <div class=\"col-md-2\">\n              <button  class=\"btn add-to-list \" (click)=\"add_create_list()\"> Add to list</button>\n            </div>\n           \n          \n        \n      </div>\n      <div class=\"profile-container\" *ngFor=\"let item of fbinfluencers.results\"  >\n        <div class=\"row p-0 m-0\">\n    \n    \n            <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\n                <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n                <label for=\"table-check-{{item['id']}}\"></label>\n            </div>\n    \n    <div class=\"col-md-1 followers-division\">\n    \n    \n        <img [src]=\"item['image_link']\" class=\"twitter-image\">\n    </div>\n            <div class=\"col-md-1 followers-division\">\n                <div>\n                        <h6 class=\"m-0\">Followers:</h6>\n                    <h3 class=\"item-content\" >{{item['followers']| thousandSuff}}</h3>\n                </div>\n            </div>\n                    <div class=\"col-md-9\">\n                        <div class=\"title-name\">\n                          <div class=\"d-flex\">\n                             <img class=\"social-icon2\" src=\"../../assets/header-images/flickr_32.png\">\n                        <label class=\"tbl-cell tbl-cell-name\">{{item['profile_name']}}</label>\n                      </div>\n                        <label class=\"item-content ml-4\"  title=\"{{item['description']}}\">{{item['description']}}</label>\n                        </div>\n                        <div>\n                        <label class=\"item-loc ml-4\"> <i class=\"fas fa-user-alt\"></i>Profile url  <a (click)=\"goToLink(item['profile_linked'])\" >{{item['profile_linked']}}</a></label>\n                      </div>\n                      <div></div>\n                            <label class=\"item-loc ml-4\"> <i class=\"fas fa-globe\" ></i> Website:  <a (click)=\"goToLink(item['website'])\">{{item['website']}}</a></label>\n                          \n  \n                        <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"ml-4\">\n                          <div>\n                            <span class=\"right-item\"><i class=\"fa fa-users\" ></i> Followers:</span> <span class=\"list-item1\">{{item['followers'] | thousandSuff}}</span>\n                          </div>\n                          <div>\n                            <span class=\"right-item\"><i class=\"fas fa-eye\"></i> Total Views:</span> <span class=\"list-item1\">{{item['views_total'] | thousandSuff}}</span>\n                          </div>\n                               \n                    </div>\n            \n         \n                </div>\n                <div class=\"col-md-6\">\n                    <div>\n                        <span class=\"right-item\"><i class=\"fas fa-home\"></i>Home town:</span> <span class=\"list-item1\">{{item['hometown']}}</span> \n                      \n            </div>\n            <div>\n                 <span class=\"right-item\"> <i class=\"fas fa-chart-bar\" ></i> Rank:</span> <span class=\"list-item1\">{{item['profile_rank']}}</span>\n                     \n                    </div>\n                </div>\n              </div>\n            </div>\n                    </div>\n    \n            </div>\n            <div class=\"col-md-12 p-3 mt-2 text-center\" *ngIf=\"loaded&& fbinfluencers.totalItems!=0\" >\n                <nav style=\"margin-top:2%\">\n                  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n      \n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n                    <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n                    <!--</li>-->\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                      <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n                        First\n                      </a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                      <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                        <span class=\"sr-only\">Previous</span>\n                      </a>\n                    </li>\n      \n                    <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n                        [ngClass]=\"{active:pager.currentPage === page}\"\n                        (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                    <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n                    <!--</li>-->\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                      <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                        <span class=\"sr-only\">Next</span>\n                      </a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                      <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n                        Last\n                      </a>\n                    </li>\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n                    <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n                    <!--</li>-->\n                  </ul>\n                </nav>\n              </div>\n    </div>\n  \n    <!--<section class=\"box-typical\" *ngIf=\"loaded && fbinfluencers.totalItems!=0\">-->\n      <!--<div class=\"box-typical-body\">-->\n        <!--<div class=\"table-responsive\">-->\n          <!--<div class=\"bootstrap-table\">-->\n            <!--<p-dataTable exportFilename=\"Influencers\" [value]=\"fbinfluencers.results\"  class=\"table table-striped table-hover\">-->\n  \n              <!--<p-header class=\"box-typical-header\">-->\n                <!--<div class=\"fixed-table-toolbar\">-->\n                  <!--<div class=\"bars pull-left\">-->\n                    <!--<div id=\"toolbar\">-->\n                      <!--<div class=\"bootstrap-table-header\">Search results</div>-->\n                      <!--<button  class=\"btn btn-primary1\" (click)=\"add_create_list()\">-->\n                        <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\n                        <!--Add to list-->\n                      <!--</button>-->\n                      <!--<button  class=\"btn btn-primary1\" (click)=\"uncheckAll()\">-->\n                        <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\n                        <!--Clear selected-->\n                      <!--</button>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                  <!--<div class=\"columns columns-right btn-group pull-right\">-->\n  \n                    <!--<div class=\"export btn-group\">-->\n                      <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\n                              <!--type=\"button\" aria-expanded=\"false\"><i-->\n                              <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\n                      <!--</button>-->\n                      <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\n                        <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\n                        <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\n                        <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\n                        <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\n                        <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\n                        <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\n                      <!--</ul>-->\n                    <!--</div>-->\n                  <!--</div>-->\n  \n  \n                <!--</div>-->\n              <!--</p-header>-->\n              <!--<p-column>-->\n                <!--<ng-template pTemplate=\"header\">-->\n                  <!--<div class=\"table-check\">-->\n                    <!--<div class=\"checkbox checkbox-only\">-->\n                      <!--<input type=\"checkbox\" id=\"table-check-head\" [(ngModel)]=\"main_checkbox\"  (click)=\"checkedAll($event.target.checked)\">-->\n                      <!--<label for=\"table-check-head\"></label>-->\n  \n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</ng-template>-->\n                <!--<ng-template pTemplate=\"body\" let-car=\"rowData\">-->\n                  <!--<div class=\"checkbox checkbox-only\">-->\n                    <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" id=\"table-check-{{car['id']}}\">-->\n                    <!--<label for=\"table-check-{{car['id']}}\"></label>-->\n                  <!--</div>-->\n                <!--</ng-template>-->\n              <!--</p-column>-->\n  \n              <!--<p-column>-->\n                <!--<ng-template pTemplate=\"header\">-->\n                  <!--<div class=\"th-inner\" style=\"text-align: center\">-->\n                    <!--<label style=\"\" >Title</label>-->\n                  <!--</div>-->\n                  <!--<div class=\"fht-cell\"></div>-->\n                <!--</ng-template>-->\n                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\n                  <!--<div class=\"mail-box-item selected-line red\" (click)=\"goToLink(car['profile_linked'])\" style=\" max-width: 250px; cursor: pointer\">-->\n  \n                    <!--<div class=\"mail-box-item-header\">-->\n  \n                      <!--<div class=\"mail-box-item-photo\">-->\n                        <!--<img *ngIf=\"car['image_link']\"-->\n                             <!--src=\"{{car['image_link']}}\"-->\n                             <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\n                             <!--data-placement=\"bottom\">-->\n  \n                      <!--</div>-->\n                      <!--<div class=\"tbl mail-box-item-head-tbl\">-->\n                        <!--<div class=\"tbl-row\">-->\n                          <!--<div class=\"tbl-cell\">-->\n                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\n                              <!--<div class=\"tbl-row\">-->\n                                <!--<div class=\"tbl-cell tbl-cell-name\"-->\n                                     <!--[innerHTML]=\"car['profile_name']\"></div>-->\n                                <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\n                              <!--</div>-->\n                            <!--</div>-->\n  \n                          <!--</div>-->\n                          <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\n                          <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\n                        <!--</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n  \n                  <!--</div>-->\n  \n                <!--</ng-template>-->\n              <!--</p-column>-->\n              <!--&lt;!&ndash;<p-column>&ndash;&gt;-->\n              <!--&lt;!&ndash;<ng-template pTemplate=\"header\">&ndash;&gt;-->\n              <!--&lt;!&ndash;<div class=\"th-inner\" style=\"text-align: center\">&ndash;&gt;-->\n              <!--&lt;!&ndash;Category&ndash;&gt;-->\n              <!--&lt;!&ndash;</div>&ndash;&gt;-->\n              <!--&lt;!&ndash;<div class=\"fht-cell\"></div>&ndash;&gt;-->\n              <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\n              <!--&lt;!&ndash;<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">&ndash;&gt;-->\n              <!--&lt;!&ndash;{{car['category']['name']}}&ndash;&gt;-->\n              <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\n              <!--&lt;!&ndash;</p-column>&ndash;&gt;-->\n              <!--<p-column>-->\n                <!--<ng-template pTemplate=\"header\">-->\n                  <!--<div class=\"th-inner\" style=\"text-align: center\">-->\n                    <!--<label style=\"\" >Followers</label>-->\n                  <!--</div>-->\n                  <!--<div class=\"fht-cell\"></div>-->\n                <!--</ng-template>-->\n                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\n                  <!--{{car['followers']}}-->\n                <!--</ng-template>-->\n              <!--</p-column>-->\n              <!--<p-column>-->\n                <!--<ng-template pTemplate=\"header\">-->\n                  <!--<div class=\"th-inner\" style=\"text-align: center\">-->\n                    <!--<label style=\"\" >Joined Flickr</label>-->\n                  <!--</div>-->\n                  <!--<div class=\"fht-cell\"></div>-->\n                <!--</ng-template>-->\n                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\n                  <!--{{car['joined_date'] }}-->\n                <!--</ng-template>-->\n              <!--</p-column>-->\n              <!--<p-column>-->\n                <!--<ng-template pTemplate=\"header\">-->\n                  <!--<div class=\"th-inner\" style=\"text-align: center\">-->\n                    <!--<label style=\"\" >Profile</label>-->\n                  <!--</div>-->\n                  <!--<div class=\"fht-cell\"></div>-->\n                <!--</ng-template>-->\n                <!--<ng-template pTemplate=\"body\" let-car=\"rowData\">-->\n                  <!--{{car['profile_linked']}}                        </ng-template>-->\n              <!--</p-column>-->\n              <!--<p-column>-->\n                <!--<ng-template pTemplate=\"header\">-->\n                  <!--<div class=\"th-inner\" style=\"text-align: center\">-->\n                    <!--<label style=\"\" >Rank</label>-->\n                  <!--</div>-->\n                  <!--<div class=\"fht-cell\"></div>-->\n                <!--</ng-template>-->\n                <!--<div class=\"th-inner\" style=\"text-align: left\">Perfomance-->\n                  <!--<div class=\"export btn-group\" style=\"float: right; background-color: black\">-->\n                    <!--<button class=\"btn btn-default dropdown-toggle\"  style=\" background-color: black\" data-toggle=\"dropdown\"-->\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\n                    <!--</button>-->\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: 100%;-->\n      <!--font-size: 14px;-->\n      <!--text-align: -webkit-center;left: auto\">-->\n                      <!--<li data-type=\"json\"><a (click)=\"JSPDF()\" id=\"clickMe\">PDF</a></li>-->\n                      <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\n                      <!--<li data-type=\"csv\"><a  (click)=\"convert_to_csv()\">CSV</a></li>-->\n                      <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\n                      <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\n                      <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\n                    <!--</ul>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<ng-template pTemplate=\"body\" let-car=\"rowData\" >-->\n                  <!--<round-progress [current]=\"car['profile_rank']\"-->\n                                  <!--[max]=\"max\"-->\n                                  <!--[color]=\"'#ca260f'\"-->\n                                  <!--[background]=\"'#eaeaea'\"-->\n                                  <!--[radius]=\"100\"-->\n                                  <!--[stroke]=\"20\"-->\n                                  <!--[semicircle]=\"false\"-->\n                                  <!--[rounded]=\"false\"-->\n                                  <!--[clockwise]=\"true\"-->\n                                  <!--[responsive]=\"false\"-->\n                                  <!--[duration]=\"800\"-->\n                                  <!--[animation]=\"'easeInOutQuart'\"-->\n                                  <!--[animationDelay]=\"5\"-->\n                                  <!--style=\"margin: auto; max-width:70px; max-height: 46px; overflow: unset\"   >-->\n  \n                  <!--</round-progress>-->\n                  <!--<div style=\"position: relative; bottom: 22px;font-size:16px; font-weight: bold\">{{car['profile_rank']}}</div>-->\n  \n  \n  \n                  <!--&lt;!&ndash;<div class=\"chart chart-table\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;&lt;!&ndash;{{(row.ER.replace('%',''))|round}}&ndash;&gt;&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"bar bar-{{(car['ER'].replace('%',''))|round}} navy\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"face top\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"face side-0\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"face floor\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"growing-bar\"></div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"face side-a\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"face side-b\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"face side-1\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"growing-bar\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--</ng-template>-->\n              <!--</p-column>-->\n  \n            <!--</p-dataTable>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</section>-->\n  </div>\n</div>\n"

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
        window.scroll(0, 0);
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
    FlickrSearchComponent.prototype.getFlickrData = function () {
        //   alert ( this.cat)
        this.selected_category = this.cat;
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
            profile_name: this.title,
            followersmin: this.minfollowers,
            followersmax: this.maxfollowers,
            performance: this.perfomance,
            // ER:this.ER,
            viewsmin: this.minviews,
            viewsmax: this.maxviews,
            profile_rankmin: this.minrank,
            profile_rankmax: this.maxrank
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
            text: 'This is a link to an external site. Click OK to continue to the content',
            // html: true,
            confirmButtonColor: '#2ecc71',
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
/* harmony import */ var _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../periscope-search/CustomPipe.module */ "./src/app/periscope-search/CustomPipe.module.ts");
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
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _periscope_search_CustomPipe_module__WEBPACK_IMPORTED_MODULE_12__["CustomPipeModule"],
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
//# sourceMappingURL=flickr-search-flickr-search-module.js.map