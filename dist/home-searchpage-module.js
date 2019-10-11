(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-searchpage-module"],{

/***/ "./src/app/home/searchpage.component.css":
/*!***********************************************!*\
  !*** ./src/app/home/searchpage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*html, body { width: 100%; height: 100%;}*/\r\n/*body { background: radial-gradient(ellipse at center, rgba(194,234,219,1) 0%,rgba(227,215,242,1) 74%,rgba(227,215,242,1) 74%); background-size: 300%; padding: 3em; color: #333; font-family: 'Source Sans Pro'; font-size: 20px; font-weight: 300; }*/\r\n/*#searchform { display: block; margin: 0 auto; width: 100%; max-width: 500px; transform: translateY(10%); }*/\r\n/*span { font-size: 1.5em; }*/\r\n/*#search-bar { display: block; margin: .25em 0 0; width: 100%; padding: .25em .5em; font-size: 1.2em; }*/\r\n.output {\r\n    list-style: none;\r\n    width: 100%;\r\n    min-height: 0px;\r\n    border-top: 0 !important;\r\n    color: #767676;\r\n    font-size: .75em;\r\n    transition: min-height 0.2s;\r\n    position: absolute;\r\n    z-index: 5;\r\n}\r\n.output, #search-bar {\r\n    background: #fff;\r\n    border: 1px solid #767676;\r\n}\r\n.prediction-item {\r\n    padding: .5em .75em;\r\n    transition: color 0.2s, background 0.2s;\r\n}\r\n.output:hover .focus {\r\n    background: #fff;\r\n    color: #767676;\r\n}\r\n.prediction-item:hover, .focus,\r\n.output:hover .focus:hover {\r\n    background: #ddd;\r\n    color: #333;\r\n}\r\n.prediction-item:hover {\r\n    cursor: pointer;\r\n}\r\n.prediction-item strong {\r\n    color: #333;\r\n}\r\n.prediction-item:hover strong {\r\n    color: #000;\r\n}\r\n.ui-widget .ui-autocomplete {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    height: 51px;\r\n    border-radius: 25px;\r\n    font-size: 26px;\r\n    box-shadow: 0px 0px 5px 3px #e2e0e0;\r\n}\r\n.ui-widget {\r\n    height: 50px;\r\n}\r\n.btn-rounded{\r\n    background: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top: 3%;\r\n    border-color: black;\r\n    font-size: 17px;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\r\n}\r\n.btn.btn-info:hover{\r\n    background-color: black!important;\r\n    border-color: black!important;\r\n}\r\nmat-tab-group{\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n}\r\nsection{\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n}\r\n.body{\r\n    background-color: #f9f9f9!important;\r\n}\r\nmat-form-field{\r\n    width: 75%;\r\n    line-height: 0.95;\r\n}\r\n.col-md-6{\r\n    margin-top: 0!important;\r\n}\r\n.mat-form-field-infix{\r\n    padding: 0!important;\r\n}\r\n.list-row{\r\n    margin-left: 15px;\r\n    border-radius: 3px;\r\n    height: 45px;\r\n    /*-webkit-box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;*/\r\n    /*box-shadow: 0 0px 0px 0 rgba(0,0,0,.5),0 0px 2px 0 rgba(0,0,0,.19)!important;*/\r\n}\r\n.profile-container{\r\n    width: 100%;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    max-width: 1200px;\r\n    display: inline-block;\r\n    /*height: 165px;*/\r\n    margin-top: 18px;\r\n}\r\n.row{\r\n  margin-bottom: 1%;\r\n}\r\n.loaded-container{\r\n    width: 100%;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    max-width: 1200px;\r\n    /*height: 300px;*/\r\n    /*display: inline-block;*/\r\n    margin-top: 18px;\r\n}\r\n.profile-checkbox {\r\n    display: flex;\r\n    flex: 0 0 auto;\r\n    width: 65px;\r\n    /* height: 100%; */\r\n    /* padding-left: 12px; */\r\n    padding-right: 12px;\r\n    border-right: 1px solid #ebecf3;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* background-color: #fff; */\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    cursor: pointer;\r\n}\r\ninput[type=checkbox]{\r\n    zoom: 1.5;\r\n}\r\n.tbl-cell{\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\ni{\r\n    color: #000;\r\n}\r\n.item-content{\r\n\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n\r\n}\r\n.item-loc{\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n}\r\nhr{\r\n    margin: 0!important;\r\n}\r\n.list-item1{\r\n    margin-right: 20px;\r\n    color: #000;\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n}\r\n.right-item{\r\n    color: #919fa9;\r\n    font-size: 14px;\r\n}\r\n.btn-success{\r\n    background: black;\r\n    border-radius: 50px;\r\n    border-color: black;\r\n    padding: 8px 26px;\r\n    margin-top: 3px;\r\n    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)!important;\r\n}\r\nmat-tab-header{\r\n    background-color: black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/searchpage.component.html":
/*!************************************************!*\
  !*** ./src/app/home/searchpage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-content\">\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid \">\r\n            <mat-tab-group>\r\n\r\n\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\r\n                                    Category Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <h6 class=\"influencer-hading\"> Web Blogs Influencers</h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-center p-auto\">\r\n\r\n                            <!--<p-autoComplete  id=\"main-input\" [(ngModel)]=\"b2QueryStatic\" [suggestions]=\"filteredsearchwords\" class=\"ui-autocomplete ui-widget\"-->\r\n                            <!--(onSelect)=\"searchB2Static($event)\" (completeMethod)=\"filterSearchSingle($event)\"-->\r\n                            <!--field=\"name\" [size]=\"30\"-->\r\n                            <!--[minLength]=\"1\">-->\r\n                            <!--<ng-template let-country pTemplate=\"b2QueryStatic\">-->\r\n\r\n                            <!--<div class=\"prediction-item\">{{country.name}}</div>-->\r\n\r\n\r\n                            <!--</ng-template>-->\r\n                            <!--</p-autoComplete>-->\r\n\r\n\r\n\r\n\r\n                            <mat-form-field class=\"example-full-width \" style=\"width:60%\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"searchB2Static($event)\">\r\n                                    <mat-option *ngFor=\"let option of searchSuggestions \"  [value]=\"option.name\">\r\n                                        {{ option.name }}\r\n                                    </mat-option>\r\n                                </mat-autocomplete>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\r\n                                    Advanced Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n                        <div class=\"container\">\r\n                            <form (submit)=\"setPage(1)\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-select  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatNameWeb($event)\"\r\n                                                    placeholder=\"Select Category\" style=\"width:75%\">\r\n                                            <mat-option *ngFor=\"let choice of searchSuggestions\" [value]=\"choice\">{{ choice }}</mat-option>\r\n                                        </mat-select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\"[(ngModel)]=\"title\" placeholder=\"Serch by Title/Name\" name=\"contact\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"row\" style=\"margin-bottom: 1%\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"moz\" placeholder=\"Search by Moz Rank\" name=\"er\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"seo\" placeholder=\"Serch by Alexa Rank\" name=\"er\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n\r\n                                    <div class=\"col-md-2 offset-md-4 text-right\">\r\n                                        <button type=\"submit\"  class=\"btn btn-priamry\" >\r\n                                            Search <i class=\"fa fa-sliders\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n    </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\"  *ngIf=\"!loaded\" style=\"margin-top: 1%\">\r\n        <div class=\"col-md-12 text-left\">\r\n            <h4 style=\"font-weight: bolder\">Featured Web Influencers</h4>\r\n        </div>\r\n\r\n</div>\r\n    <div class=\"container-fluid\" *ngIf=\"loaded && webInfluencers.totalItems===0\" style=\"margin-top: 1%\">\r\n        <div class=\"box-typical box-typical-full-height\" style=\"min-height: 115px\">\r\n            <div class=\"add-customers-screen tbl\" style=\"height: 119px\">\r\n                <div class=\"box-typical-full-height\">\r\n                    <div class=\"add-customers-screen-user\">\r\n                        <i class=\"font-icon font-icon-user\"></i>\r\n                    </div>\r\n                    <h2>OOPS!</h2>\r\n                    <p class=\"lead color-blue-grey-lighter\">No search results are found<br> try another category.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row \" *ngIf=\"loaded&& webInfluencers.totalItems!=0\" >\r\n        <div class=\"col-md-12 text-center\">\r\n            <nav>\r\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                    <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n                    <!--</li>-->\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n                            First\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n                            <span aria-hidden=\"true\">&laquo;</span>\r\n                            <span class=\"sr-only\">Previous</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n                        [ngClass]=\"{active:pager.currentPage === page}\"\r\n                        (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                    <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n                    <!--</li>-->\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n                            <span aria-hidden=\"true\">&raquo;</span>\r\n                            <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n                            Last\r\n                        </a>\r\n                    </li>\r\n                    <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                    <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n                    <!--</li>-->\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n        </div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"!loaded\">\r\n\r\n    <div class=\"row\" id=\"myHeader\">\r\n        <div class=\"col-md-12 list-row\">\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                              <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n                            <div id=\"ck-button\">\r\n                                <label>\r\n\r\n                                    <input type=\"checkbox\" class=\"checkbox\"  (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\r\n                                </label>\r\n                            </div>\r\n\r\n                            <button  class=\"btn add-to-list pull-right\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n                        </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n\r\n        <!-- <div class=\"profile-container\" *ngFor=\"let item of results\" >\r\n            <div class=\"row\">\r\n\r\n\r\n            <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n                <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                <label for=\"table-check-{{item['id']}}\"></label>\r\n            </div>\r\n\r\n            <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n                <div class=\"row\">\r\n                    <label class=\"tbl-cell tbl-cell-name\">{{item['title']}}</label>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top: 8px\">\r\n                    <label class=\"item-content\">{{item['description']}}</label>\r\n                </div>\r\n                <div class=\"row\" style=\"padding-top: 8px\">\r\n                    <div class=\"col-md-3 text-left\">\r\n                        <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> {{item['location']}}</label>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-9 text-left\">\r\n\r\n                        <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['main_url']}}</a></label>\r\n                    </div>\r\n                </div>\r\n                <hr style=\"color: #555555\">\r\n                <div class=\"row\" >\r\n                    <ul style=\"display: flex; padding-top: 5px\">\r\n                        <li><span class=\"right-item\" *ngIf=\"item['seoData']['alexa']\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Alexa:</span> <span class=\"list-item1\">{{item['seoData']['ALEXA']}} |  </span> </li>\r\n                        <li><span class=\"right-item\" *ngIf=\"!item['seoData']['alexa']\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Alexa:</span> <span class=\"list-item1\">N/A |  </span> </li>\r\n\r\n                        <li><span class=\"right-item\" *ngIf=\"item['moz_rank']\"> <i class=\"fa fa-link\" style=\"font-size:16px;color:#0a4069\"></i> Moz Rank:</span> <span class=\"list-item1\">{{item['moz_rank']}} |   </span></li>\r\n                        <li><span class=\"right-item\" *ngIf=\"!item['moz_rank']\"> <i class=\"fa fa-link\" style=\"font-size:16px;color:#0a4069\"></i> Moz Rank:</span> <span class=\"list-item1\">N/A |   </span></li>\r\n\r\n                        <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> Blogs:</span> <span class=\"list-item1\">{{item['blogs']}}</span></li>\r\n                        <li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Wowtr:</span> <span class=\"list-item1\">{{item['seoData']['WOWTR']}}</span></li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div> -->\r\n\r\n        <div class=\"row influcener-div\" *ngFor=\"let item of results\">\r\n            <div class=\"col-md-6\">\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-1 profile-checkbox\" type=\"checkbox\">\r\n                            <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                            <label for=\"table-check-{{item['id']}}\"></label>\r\n                        </div>\r\n                <!-- <div class=\"col-md-5  \">\r\n                    <img [src]=\"item['image_url']\"  class=\"twitter-image\">\r\n                </div> -->\r\n                <div class=\"col-md-6 description-divison\">\r\n                    <label class=\"tbl-cell tbl-cell-name\">{{item['title']}}</label>\r\n                    <label class=\"item-loc\"> <i class=\"fa fa-map-marker marker-icon\" style=\"font-size:16px;color:#c00\"></i>  <span class=\"list-item1\"> {{item['location']}}</span></label>\r\n                        <label class=\"item-content\"\r\n                     title=\"{{item['description']}}\">{{item['description']}}</label>\r\n                     <div class=\"row\" >\r\n                        <ul class=\"profile-url\">\r\n                            <li><span class=\"right-item\" *ngIf=\"item['seoData']['alexa']\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Alexa:</span> <span class=\"list-item1\">{{item['seoData']['ALEXA']}}   </span> </li>\r\n                            <li><span class=\"right-item\" *ngIf=\"!item['seoData']['alexa']\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Alexa:</span> <span class=\"list-item1\">N/A   </span> </li>\r\n                        </ul>\r\n                        <ul class=\"profile-url\">\r\n                            <li><span class=\"right-item\" *ngIf=\"item['moz_rank']\"> <i class=\"fa fa-link\" style=\"font-size:16px;color:#0a4069\"></i> Moz Rank:</span> <span class=\"list-item1\">{{item['moz_rank']}}   </span></li>\r\n                            <li><span class=\"right-item\" *ngIf=\"!item['moz_rank']\"> <i class=\"fa fa-link\" style=\"font-size:16px;color:#0a4069\"></i> Moz Rank:</span> <span class=\"list-item1\">N/A    </span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n             \r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n            <div class=\"col-md-1 followers-profile\">\r\n                <h4 class=\"real-heading\">99%</h4>\r\n                <h5>Real</h5>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <ul class=\"progress-url\">\r\n                        <li>\r\n                            <span class=\"followers-percen\">25-30</span>\r\n                            <div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>  <span class=\"followers-percen1\">56%</span></li>\r\n                          <li>   <span  class=\"followers-percen\">30-35</span><div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 29%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div><span  class=\"followers-percen1\">29%</span></li>\r\n                          <li><span class=\"followers-percen\" >35-40</span><div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 45%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div><span class=\"followers-percen1\">45%</span></li>\r\n                          <li><span class=\"followers-percen\">40-45</span><div class=\"progress\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width:35%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div><span class=\"followers-percen1\">35%</span></li>\r\n                          <li>        <h5 class=\"text-center\">Age</h5></li>\r\n                    </ul>\r\n\r\n        </div>\r\n        <div class=\"col-md-1 male-follwers\">\r\n            <div>\r\n                <i class=\"fas fa-venus\"></i><span>83%</span>\r\n                <h5>Female</h5>\r\n            </div>\r\n            <div>\r\n                    <i class=\"fas fa-venus\"></i><span>33%</span>\r\n                    <h5>Male</h5>\r\n                </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div  class=\"\" *ngIf=\"loaded&& webInfluencers.totalItems!=0\">\r\n\r\n        <div class=\"row\" id=\"myHeader\">\r\n            <div class=\"col-md-12 list-row\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n                        <div id=\"ck-button\">\r\n                            <label>\r\n\r\n                                <input type=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" container-fluid\">\r\n            <div class=\"row\">\r\n            <div class=\"loaded-container\" *ngFor=\"let item of webInfluencers.results\" >\r\n\r\n                <div class=\"col-md-1 checkbox-loaded\" type=\"checkbox\">\r\n                    <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\"  id=\"table-check-{{item['id']}}\">\r\n                    <!--<label for=\"table-check-{{item['id']}}\"></label>-->\r\n                </div>\r\n                <div class=\"col-md-2 text-center\">\r\n                    <img [src]=\"item['data']['main_image']\"  style=\"height: 125px;  width: 125px; margin-top: 50px; border-radius: 100%\">\r\n                </div>\r\n\r\n                <div class=\"col-md-9\">\r\n                    <div class=\"row\">\r\n                        <label class=\"tbl-cell tbl-cell-name\">{{item['title']}}</label>\r\n                    </div>\r\n                    <div class=\"row txt\" style=\"padding-top: 8px; \">\r\n                        <label class=\"item-content\" style=\"    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['highlightText']}}\">{{item['highlightText']}}</label>\r\n\r\n                    </div>\r\n                    <div class=\"row\" style=\"margin-top: 15px\">\r\n                        <div class=\"col-md-2 text-left\">\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> {{item['data']['country']}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-10 text-left\">\r\n\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['main_url']}}</a></label>\r\n                        </div>\r\n                    </div>\r\n                    <hr style=\"color: #555555\">\r\n                    <div class=\"row\" style=\"margin-top: 10px\">\r\n                        <ul style=\"display: flex; padding-top: 5px\">\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Alexa:</span> <span class=\"list-item1\">{{ item['seoData']['ALEXA']}} |  </span> </li>\r\n                            <li><span class=\"right-item\"> <i class=\"fa fa-link\" style=\"font-size:16px;color:#0a4069\"></i> Type:</span> <span class=\"list-item1\">{{item['data']['site_type']}} |   </span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> EWOW:</span> <span class=\"list-item1\">{{item['seoData']['EWOW']}}</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Wowtr:</span> <span class=\"list-item1\">{{item['seoData']['WOWTR']}}</span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <hr style=\"color: #555555\">\r\n                    <div class=\"row\" style=\"margin-top: 10px\">\r\n                        <ul style=\"display: flex; padding-top: 5px\">\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-user-circle-o\" style=\"font-size:16px;color:#0a4069\"></i> Author:</span> <span class=\"list-item1\">{{item['author']}} |</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-list-alt\" style=\"font-size:16px;color:#0a4069\"></i> EVISD: </span> <span class=\"list-item1\">{{item['seoData']['EVISD']}} |  </span> </li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-bar-chart-o\" style=\"font-size:16px;color:#0a4069\"></i> Domain Rank: </span> <span class=\"list-item1\">{{item['data']['domain_rank']}}  </span> </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n</div>\r\n</div>\r\n<script>\r\n    window.onscroll = function() {myFunction()};\r\n\r\n    var header = document.getElementById(\"myHeader\");\r\n    var sticky = header.offsetTop;\r\n\r\n    function myFunction() {\r\n        if (window.pageYOffset > sticky) {\r\n            header.classList.add(\"sticky\");\r\n        } else {\r\n            header.classList.remove(\"sticky\");\r\n        }\r\n    }\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/home/searchpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/home/searchpage.component.ts ***!
  \**********************************************/
/*! exports provided: SearchpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchpageComponent", function() { return SearchpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchpageComponent = /** @class */ (function () {
    function SearchpageComponent(router, httpNoPreloader, pagerService, http, http1) {
        this.router = router;
        this.httpNoPreloader = httpNoPreloader;
        this.pagerService = pagerService;
        this.http = http;
        this.http1 = http1;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.inflist = {};
        this.items = [
            {
                'name': 'airport - station'
            },
            {
                "name": "ancient - band names"
            },
            {
                "name": "applied science - chemistry"
            },
            {
                "name": "applied science - particle physics"
            },
            {
                "name": 'applied science - physics'
            },
            {
                "name": 'arts, culture and entertainment - animation'
            },
            {
                "name": "arts, culture and entertainment - archaeology"
            },
            {
                "name": "arts, culture and entertainment - architecture"
            },
            {
                "name": "arts, culture and entertainment - arts (general)"
            },
            {
                "name": "arts, culture and entertainment - bullfighting"
            },
            {
                "name": "arts, culture and entertainment - cinema"
            },
            {
                "name": "arts, culture and entertainment - culture (general)"
            },
            {
                "name": "arts, culture and entertainment - dance"
            },
            {
                "name": "arts, culture and entertainment - entertainment (general)"
            },
            {
                "name": "arts, culture and entertainment - fashion"
            },
            {
                "name": "arts, culture and entertainment - festive event"
            },
            {
                "name": "arts, culture and entertainment - festive event (including carnival)"
            },
            {
                "name": "arts, culture and entertainment - gaming"
            },
            {
                "name": "arts, culture and entertainment - history"
            },
            {
                "name": "arts, culture and entertainment - language"
            },
            {
                "name": "arts, culture and entertainment - library and museum"
            },
            {
                "name": "arts, culture and entertainment - literature"
            },
            {
                "name": "arts, culture and entertainment - mass media"
            },
            {
                "name": "arts, culture and entertainment - monument and heritage site"
            },
            {
                "name": "arts, culture and entertainment - music"
            },
            {
                "name": "arts, culture and entertainment - nightclub"
            },
            {
                "name": "arts, culture and entertainment - painting"
            },
            {
                "name": "arts, culture and entertainment - photography"
            },
            {
                "name": "arts, culture and entertainment - radio"
            },
            {
                "name": "arts, culture and entertainment - sculpture"
            },
            {
                "name": "arts, culture and entertainment - television"
            },
            {
                "name": "arts, culture and entertainment - theatre"
            },
            {
                "name": "belief (faith) - scientology"
            },
            {
                "name": "city news - general"
            },
            {
                "name": "company information - marketing"
            },
            {
                "name": "company information - recalls (products)"
            },
            {
                "name": "company information - research and development"
            },
            {
                "name": "computing and information technology - satellite technology"
            },
            {
                "name": "computing and information technology - software"
            },
            {
                "name": "computing and information technology - telecommunication service"
            },
            {
                "name": "crime, law and justice - crime"
            },
            {
                "name": "crime, law and justice - judiciary (system of justice)"
            },
            {
                "name": "crime, law and justice - justice and rights"
            },
            {
                "name": "crime, law and justice - organized crime"
            },
            {
                "name": "crime, law and justice - police"
            },
            {
                "name": "crime, law and justice - punishment"
            },
            {
                "name": "crime, law and justice - trials"
            },
            {
                "name": "crime, law and justice - war crime"
            },
            {
                "name": "defence - armed Forces"
            },
            {
                "name": "defence - biological and chemical weapons"
            },
            {
                "name": "defence - military equipment"
            },
            {
                "name": "defence - national security"
            },
            {
                "name": "defence - nuclear weapons"
            },
            {
                "name": "demographics - population and census"
            },
            {
                "name": "diplomacy - peace negotiations"
            },
            {
                "name": "diplomacy - summit"
            },
            {
                "name": "disaster and accident - crashed"
            },
            {
                "name": "disaster and accident - disaster (general)"
            },
            {
                "name": "disaster and accident - earthquake"
            },
            {
                "name": "disaster and accident - emergency incident"
            },
            {
                "name": "disaster and accident - famine"
            },
            {
                "name": "disaster and accident - fire"
            },
            {
                "name": "disaster and accident - flood"
            },
            {
                "name": "disaster and accident - nuclear accident"
            },
            {
                "name": "disaster and accident - relief and aid organisation"
            },
            {
                "name": "disaster and accident - rescue"
            },
            {
                "name": "disaster and accident - transport accident"
            },
            {
                "name": "disaster (general) - avalanche/landslide"
            },
            {
                "name": "disaster (general) - natural disasters"
            },
            {
                "name": "disease - AIDS"
            },
            {
                "name": "disease - alzheimer's disease"
            },
            {
                "name": "disease - animal diseases"
            },
            {
                "name": "disease - cancer"
            },
            {
                "name": "disease - heart disease"
            },
            {
                "name": "economy, business and finance - agriculture"
            },
            {
                "name": "economy, business and finance - business (general)"
            },
            {
                "name": "economy, business and finance - chemicals"
            },
            {
                "name": "economy, business and finance - computing and information technology"
            },
            {
                "name": "economy, business and finance - economy (general)"
            },
            {
                "name": "economy, business and finance - energy and resource"
            },
            {
                "name": "economy, business and finance - finance (general)"
            },
            {
                "name": "economy, business and finance - financial and business service"
            },
            {
                "name": "economy, business and finance - gaming"
            },
            {
                "name": "economy, business and finance - macro economics"
            },
            {
                "name": "economy, business and finance - manufacturing and engineering"
            },
            {
                "name": "economy, business and finance - market and exchange"
            },
            {
                "name": "economy, business and finance - media"
            },
            {
                "name": "economy, business and finance - metal and mineral"
            },
            {
                "name": "economy, business and finance - real estate"
            },
            {
                "name": "economy, business and finance - tourism and leisure"
            },
            {
                "name": "economy, business and finance - transport"
            },
            {
                "name": "education - adult education"
            },
            {
                "name": "education - entrance examination"
            },
            {
                "name": "education - further"
            },
            {
                "name": "education - further education"
            },
            {
                "name": "education - parent organisation"
            },
            {
                "name": "education - religious education"
            },
            {
                "name": "education - school"
            },
            {
                "name": "education - teaching and learning"
            },
            {
                "name": "election - nation"
            },
            {
                "name": "election - national elections"
            },
            {
                "name": "election - political campaigns"
            },
            {
                "name": "election - poll"
            },
            {
                "name": "election - regional elections"
            },
            {
                "name": "election - voting"
            },
            {
                "name": "employment - child labor"
            },
            {
                "name": "engineering - material science"
            },
            {
                "name": "environmental issue - conservation"
            },
            {
                "name": "environmental issue - energy saving"
            },
            {
                "name": "environmental issue - hazardous materials"
            },
            {
                "name": "environmental issue - natural resources"
            },
            {
                "name": "environmental issue - population"
            },
            {
                "name": "environmental issue - renewable energy"
            },
            {
                "name": "environmental issue - waste"
            },
            {
                "name": "environmental issue - water"
            },
            {
                "name": "euthanasia (also includes assisted suicide) - suicide"
            },
            {
                "name": "family - adoption"
            },
            {
                "name": "family - divorce"
            },
            {
                "name": "family - marriage"
            },
            {
                "name": "family - parent and child"
            },
            {
                "name": "family - sex"
            },
            {
                "name": "fun, music, animation - technology"
            },
            {
                "name": "game - chess"
            },
            {
                "name": "gaming - competition"
            },
            {
                "name": "gastronomy - organic foods"
            },
            {
                "name": "general - question"
            },
            {
                "name": "guerrilla activity - bombings"
            },
            {
                "name": "health - disease"
            },
            {
                "name": "health - epidemic and plague"
            },
            {
                "name": "health - government health care"
            },
            {
                "name": "health - healthcare policy"
            },
            {
                "name": "health - health organisations"
            },
            {
                "name": "health - hospital and clinic"
            },
            {
                "name": "health - illness"
            },
            {
                "name": "health - injury"
            },
            {
                "name": "health - medical research"
            },
            {
                "name": "health - medical service"
            },
            {
                "name": "health - medical staff"
            },
            {
                "name": "health - medicine"
            },
            {
                "name": "health - patient"
            },
            {
                "name": "health - physical fitness"
            },
            {
                "name": "health - preventative medicine"
            },
            {
                "name": "health - private health care"
            },
            {
                "name": "health treatment - diet"
            },
            {
                "name": "health treatment - prescription drugs"
            },
            {
                "name": "hobby - DIY"
            },
            {
                "name": "hobby - gardening"
            },
            {
                "name": "hobby - shopping"
            },
            {
                "name": "hollywood - actor"
            },
            {
                "name": "hollywood - actress"
            },
            {
                "name": "hollywood - movies"
            },
            {
                "name": "hollywood - season"
            },
            {
                "name": "hollywood - singer"
            },
            {
                "name": "human interest - animal"
            },
            {
                "name": "human interest - award and prize"
            },
            {
                "name": "human interest - disease"
            },
            {
                "name": "human interest - epidemic and plague"
            },
            {
                "name": "human interest - government health care"
            },
            {
                "name": "human interest - healthcare policy"
            },
            {
                "name": "human interest - health organisations"
            },
            {
                "name": "human interest - hospital and clinic"
            },
            {
                "name": "human interest - illness"
            },
            {
                "name": "human interest - imperial and royal matters"
            },
            {
                "name": "human interest - injury"
            },
            {
                "name": "human interest - medical research"
            },
            {
                "name": "human interest - medical service"
            },
            {
                "name": "human interest - medical staff"
            },
            {
                "name": "human interest - medicine"
            },
            {
                "name": "human interest - patient"
            },
            {
                "name": "human interest - people"
            },
            {
                "name": "human interest - physical fitness"
            },
            {
                "name": "human interest - plant"
            },
            {
                "name": "human interest - preventative medicine"
            },
            {
                "name": "human interest - private health care"
            },
            {
                "name": "human science - anthropology"
            },
            {
                "name": "human science - history"
            },
            {
                "name": "human science - psychology"
            },
            {
                "name": "human science - social sciences"
            },
            {
                "name": "ice - hockey"
            },
            {
                "name": "illness - eating disorder"
            },
            {
                "name": "illness - mental illness"
            },
            {
                "name": "illness - obesity"
            },
            {
                "name": "interior policy - data protection"
            },
            {
                "name": "interior policy - pension and welfare"
            },
            {
                "name": "interior policy - planning inquiries"
            },
            {
                "name": "isaster (general) - genetics"
            },
            {
                "name": "isaster (general) - isaster (general)"
            },
            {
                "name": "labour - advanced training"
            },
            {
                "name": "labour - employee"
            },
            {
                "name": "labour - employment"
            },
            {
                "name": "labour - labour legislation"
            },
            {
                "name": "labour - retirement"
            },
            {
                "name": "labour - strike"
            },
            {
                "name": "labour - unemployment"
            },
            {
                "name": "lifestyle and leisure - adventure"
            },
            {
                "name": "lifestyle and leisure - auto trends"
            },
            {
                "name": "lifestyle and leisure - beauty"
            },
            {
                "name": "lifestyle and leisure - club and association"
            },
            {
                "name": "lifestyle and leisure - consumer issue"
            },
            {
                "name": "lifestyle and leisure - fishing"
            },
            {
                "name": "lifestyle and leisure - game"
            },
            {
                "name": "lifestyle and leisure - gaming"
            },
            {
                "name": "lifestyle and leisure - gaming and lottery"
            },
            {
                "name": "lifestyle and leisure - hobby"
            },
            {
                "name": "lifestyle and leisure - holiday or vacation"
            },
            {
                "name": "lifestyle and leisure - hunting"
            },
            {
                "name": "lifestyle and leisure - leisure (general)"
            },
            {
                "name": "lifestyle and leisure - lifestyle (house and home)"
            },
            {
                "name": "lifestyle and leisure - public holiday"
            },
            {
                "name": "lifestyle and leisure - romance"
            },
            {
                "name": "lifestyle and leisure - tourism"
            },
            {
                "name": "lifestyle and leisure - wedding"
            },
            {
                "name": "massacre - genocide"
            },
            {
                "name": "media, journalism - business"
            },
            {
                "name": "medical specialisation - genetics"
            },
            {
                "name": "minority group - gays and lesbians"
            },
            {
                "name": "motivation - people"
            },
            {
                "name": "motor racing - endurance"
            },
            {
                "name": "motor racing - Formula One"
            },
            {
                "name": "motor racing - NASCAR"
            },
            {
                "name": "natural resources - forests"
            },
            {
                "name": "natural resources - mountains"
            },
            {
                "name": "natural resources - oceans"
            },
            {
                "name": "natural resources - parks"
            },
            {
                "name": "natural resources - rivers"
            },
            {
                "name": "natural resources - wildlife"
            },
            {
                "name": "natural science - astronomy"
            },
            {
                "name": "natural science - biology"
            },
            {
                "name": "natural science - geography"
            },
            {
                "name": "natural science - geology"
            },
            {
                "name": "natural science - physiology"
            },
            {
                "name": "natural science - zoology"
            },
            {
                "name": "news - general"
            },
            {
                "name": "news - politics"
            },
            {
                "name": "organization - celebration"
            },
            {
                "name": "people - accomplishment"
            },
            {
                "name": "people - celebrity"
            },
            {
                "name": "people - quotes"
            },
            {
                "name": "politics - censorship"
            },
            {
                "name": "politics - citizens initiative and recall"
            },
            {
                "name": "politics - constitution"
            },
            {
                "name": "politics - defence"
            },
            {
                "name": "politics - espionage and intelligence"
            },
            {
                "name": "politics - foreign aid"
            },
            {
                "name": "politics - freedom of religion"
            },
            {
                "name": "politics - freedom of the press"
            },
            {
                "name": "politics (general) - democracy"
            },
            {
                "name": "politics - government"
            },
            {
                "name": "politics - human rights"
            },
            {
                "name": "politics - interior policy"
            },
            {
                "name": "politics - lobbying"
            },
            {
                "name": "politics - local authority"
            },
            {
                "name": "politics - migration"
            },
            {
                "name": "politics - opposition"
            },
            {
                "name": "politics - parliament"
            },
            {
                "name": "politics - parties and movements"
            },
            {
                "name": "politics - politics (general)"
            },
            {
                "name": "politics - referenda"
            },
            {
                "name": "politics - refugee"
            },
            {
                "name": "politics - regulatory policy and organisation"
            },
            {
                "name": "politics - state budget and tax"
            },
            {
                "name": "politics - treaty"
            },
            {
                "name": "religion and belief - belief (faith)"
            },
            {
                "name": "religion and belief - buddhism"
            },
            {
                "name": "religion and belief - christianity"
            },
            {
                "name": "religion and belief - cult and sect"
            },
            {
                "name": "religion and belief - hinduism"
            },
            {
                "name": "religion and belief - islam"
            },
            {
                "name": "religion and belief - judaism"
            },
            {
                "name": "religion and belief - philosophy"
            },
            {
                "name": "religion and belief - sikhism"
            },
            {
                "name": "religious festival or holiday - christmas"
            },
            {
                "name": "religious festival or holiday - diwali"
            },
            {
                "name": "religious festival or holiday - easter"
            },
            {
                "name": "religious festival or holiday - eid"
            },
            {
                "name": "religious festival or holiday - ramadan"
            },
            {
                "name": "religious leader - pop"
            },
            {
                "name": "religious leader - pope"
            },
            {
                "name": "religious text - bible"
            },
            {
                "name": "religious text - gita"
            },
            {
                "name": "religious text - Quran Majeed"
            },
            {
                "name": "road - under construction"
            },
            {
                "name": "sarcasm - comedy"
            },
            {
                "name": "science and technology - agricultural research and technology"
            },
            {
                "name": "science and technology - animal science"
            },
            {
                "name": "science and technology - electronics"
            },
            {
                "name": "science and technology - engineering"
            },
            {
                "name": "science and technology - identification technology"
            },
            {
                "name": "science and technology - IT/computer sciences"
            },
            {
                "name": "science and technology - marine science"
            },
            {
                "name": "science and technology - mathematics"
            },
            {
                "name": "science and technology - nanotechnology"
            },
            {
                "name": "science and technology - research"
            },
            {
                "name": "science and technology - science (general)"
            },
            {
                "name": "science and technology - space programme"
            },
            {
                "name": "science and technology - technology (general)"
            },
            {
                "name": "social - app"
            },
            {
                "name": "social issue - abortion"
            },
            {
                "name": "social issue - addiction"
            },
            {
                "name": "social issue - charity"
            },
            {
                "name": "social issue - death and dying"
            },
            {
                "name": "social issue - family"
            },
            {
                "name": "social issue - family planning"
            },
            {
                "name": "social issue - health insurance"
            },
            {
                "name": "social issue - homelessness"
            },
            {
                "name": "social issue - long term care"
            },
            {
                "name": "social issue - people"
            },
            {
                "name": "social issue - pornography"
            },
            {
                "name": "social issue - poverty"
            },
            {
                "name": "social issue - prostitution"
            },
            {
                "name": "social issue - racism"
            },
            {
                "name": "social issues (general) - discrimination"
            },
            {
                "name": "social issue - slavery"
            },
            {
                "name": "social issue - welfare"
            },
            {
                "name": "social media - celebration"
            },
            {
                "name": "social media - trends"
            },
            {
                "name": "sport - alpine skiing"
            },
            {
                "name": "sport - American football"
            },
            {
                "name": "sport - archery"
            },
            {
                "name": "sport - athletics, track and field"
            },
            {
                "name": "sport - baseball"
            },
            {
                "name": "sport - basketball"
            },
            {
                "name": "sport - billiards, snooker and pool"
            },
            {
                "name": "sport - boxing"
            },
            {
                "name": "sport - canoeing and kayaking"
            },
            {
                "name": "sport - climbing"
            },
            {
                "name": "sport - cricket"
            },
            {
                "name": "sport - curling"
            },
            {
                "name": "sport - cycling"
            },
            {
                "name": "sport - diving"
            },
            {
                "name": "sport - equestrian"
            },
            {
                "name": "sport - fencing"
            },
            {
                "name": "sport - football"
            },
            {
                "name": "sport - golf"
            },
            {
                "name": "sport - gulf"
            },
            {
                "name": "sport - gymnastics"
            },
            {
                "name": "sport - handball (team)"
            },
            {
                "name": "sport - horse racing, harness racing"
            },
            {
                "name": "sport - ice hockey"
            },
            {
                "name": "sport - ipl"
            },
            {
                "name": "sport - judo"
            },
            {
                "name": "sport - marathon"
            },
            {
                "name": "sport - modern pentathlon"
            },
            {
                "name": "sport - motor netball"
            },
            {
                "name": "sport - motor racing"
            },
            {
                "name": "sport - motor rallying"
            },
            {
                "name": "sport - netball"
            },
            {
                "name": "sport - power boating"
            },
            {
                "name": "sport - rowing"
            },
            {
                "name": "sport - rugby league"
            },
            {
                "name": "sport - rugby union"
            },
            {
                "name": "sport - sailing"
            },
            {
                "name": "sports event - Commonwealth Games"
            },
            {
                "name": "sports event - Grand Prix"
            },
            {
                "name": "sports event - Summer Olympics"
            },
            {
                "name": "sports event - Super Bowl"
            },
            {
                "name": "sports event - Winter Olympics"
            },
            {
                "name": "sports event - World Cup"
            },
            {
                "name": "sport - shooting"
            },
            {
                "name": "sport - snow boarding"
            },
            {
                "name": "sport - soccer"
            },
            {
                "name": "sport - softball"
            },
            {
                "name": "sport - speedway"
            },
            {
                "name": "sport - squash"
            },
            {
                "name": "sport - sumo wrestling"
            },
            {
                "name": "sport - surfing"
            },
            {
                "name": "sport - swimming"
            },
            {
                "name": "sport - table tennis"
            },
            {
                "name": "sport - taekwon"
            },
            {
                "name": "sport - Taekwon"
            },
            {
                "name": "sport - Taekwon-Do"
            },
            {
                "name": "sport - tennis"
            },
            {
                "name": "sport - triathlon"
            },
            {
                "name": "sport - ultimate fighting championship"
            },
            {
                "name": "sport - volleyball"
            },
            {
                "name": "sport - water polo"
            },
            {
                "name": "sport - weightlifting"
            },
            {
                "name": "sport - wrestling"
            },
            {
                "name": "television and radio - performance"
            },
            {
                "name": "unrest, conflicts and war - act of terror"
            },
            {
                "name": "unrest, conflicts and war - crisis"
            },
            {
                "name": "unrest, conflicts and war - massacre"
            },
            {
                "name": "unrest, conflicts and war - riots"
            },
            {
                "name": "unrest, conflicts and war - war"
            },
            {
                "name": "upcoming - season"
            },
            {
                "name": "values - ethics"
            },
            {
                "name": "wage and pension - employee benefits"
            },
            {
                "name": "wage and pension - social security"
            }
        ];
        this.pager = {};
        this.searchSuggestions = [];
        this.searchSuggestions1 = [];
        this.loaded = false;
        this.results = [];
    }
    SearchpageComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    SearchpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.profile_pic = this.currentUser.profile_image;
        this.http1.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/blog/search/suggestions/')
            .subscribe(function (res) {
            _this.searchSuggestions = res.json();
        });
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/get_iList_names/' + this.currentUser.username + '/-id/').subscribe(function (res) {
            _this.user_list = res.json().results;
        });
        this.setPagedefaults(1);
        this.filterCategory();
    };
    SearchpageComponent.prototype.filterCategory = function () {
        // return this.searchSuggestions.filter(option =>
        //     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
        for (var _i = 0, _a = this.searchSuggestions; _i < _a.length; _i++) {
            var item = _a[_i];
            this.searchSuggestions1.push(item['name']);
        }
    };
    SearchpageComponent.prototype.searchTwitter = function (e) {
        if (e.keyCode == 13) {
            if (this.twQuery['name']) {
                // alert(this.twQuery['name'])
                this.router.navigate(['/search', this.twQuery['name']]);
            }
            else {
                // alert(this.twQuery)
                this.router.navigate(['/search', this.twQuery]);
            }
        }
    };
    SearchpageComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.webInfluencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    SearchpageComponent.prototype.cheakalldef = function (e) {
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    SearchpageComponent.prototype.clear_list_def = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    SearchpageComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.httpNoPreloader.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/get_iList_names/' + currentUser.username + '/-id/')
            .subscribe(function (res) {
            _this.user_list = res.json();
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                _this.user_list[li['id']] = li['name'];
            }
        });
        var mysvc = this.http;
        var list = this.inflist;
        var ilist = false;
        var user_list = this.user_list;
        var current_list = JSON.parse(localStorage.getItem('selected_list'));
        for (var i in list) {
            if (list[i]) {
                ilist = true;
                // alert('jsdkada');
                break;
            }
        }
        if (current_list) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                mysvc.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/create_add_ilist/', JSON.stringify({ id: current_list.id, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    localStorage.removeItem('selected_list');
                    for (var i in _this.inflist) {
                        // this.inflist[i['id']] = e;
                        _this.inflist[i] = false;
                    }
                    _this.main_checkbox = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('List updated!', current_list.name, 'success');
                }, function (error) {
                    // alert('error')
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Try again after some time!', 
                    // error.toString(),
                    'error');
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    localStorage.removeItem('selected_list');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'No influencers added :)', 'success');
                }
            });
        }
        else {
            // let currentUser =JSON.parse(localStorage.getItem('currentUser'));
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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
                                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                                    headers.append('Content-Type', 'application/json');
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/check_ilist/', JSON.stringify({
                                        name: result.value,
                                        username: currentUser.username
                                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                        resolve();
                                    }, function (error) {
                                        if (error.status === 406) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("List Already Exist");
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
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                    headers.append('Content-Type', 'application/json');
                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/create_add_ilist/', JSON.stringify({
                        name: result.value,
                        list: list,
                        username: currentUser.username
                    }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        for (var i in _this.inflist) {
                            // this.inflist[i['id']] = e;
                            _this.inflist[i] = false;
                        }
                        _this.main_checkbox = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('List created and influencers added!', result.value(), 'success');
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Try again after some time!', 
                        // error.toString(),
                        'error');
                    });
                }, function (dismiss) {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss === 'cancel') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'No list created :)', 'success');
                    }
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    if (ilist) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            input: 'select',
                            confirmButtonText: 'Add',
                            showCancelButton: true,
                            confirmButtonColor: '#00a8ff',
                            cancelButtonColor: '#00a8ff',
                            inputOptions: user_list,
                            inputClass: 'form-control'
                        }).then(function (result) {
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                            headers.append('Content-Type', 'application/json');
                            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/create_add_ilist/', JSON.stringify({ id: result, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                for (var i in _this.inflist) {
                                    // this.inflist[i['id']] = e;
                                    _this.inflist[i] = false;
                                }
                                _this.main_checkbox = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('List updated!', '', 'success');
                            }, function (error) {
                                // alert('error')
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Try again after some time!', 
                                // error.toString(),
                                'error');
                            });
                        }, function (dismiss) {
                            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                            if (dismiss === 'cancel') {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'No list Updated :)', 'success');
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('No Influencers selected', '', 'warning');
                    }
                }
            });
        }
    };
    SearchpageComponent.prototype.search = function (search) {
        //{"text":"arts","username":"billubhai","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InVtYXIuYmlsYWxAYnJhaW5wbG93LmNvbSIsInVzZXJuYW1lIjoidW1hcmJpbGFsIiwib3JpZ19pYXQiOjE1MDMzOTU1NTMsImV4cCI6MTUwMzM5NTg1M30.5xZYL_1HOoIiRwRlF1NTZ-lxQRwKLlXh_Yx9RTaMPCg", "reply_channel": "daphne.response.rOXStTDRJo!RjpFXOwgzm"}
        var replay_channel = localStorage.getItem('replay_channel');
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        // if (currentUser && currentUser.token) {
        //     headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
        // }
        headers.append('Content-Type', 'application/json');
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/blog/tasks/', JSON.stringify({ token: currentUser.token, reply_channel: replay_channel, search: search, username: currentUser.username }), { headers: headers }).map(function (response) { return response.json(); });
    };
    SearchpageComponent.prototype.startBRO = function (value) {
        this.search(value)
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            // this.router.navigate(['/login']);
            // alert('success')
        }, function (error) {
            // this.alertService.error(error);
            // this.loading = false;
            alert('error');
        });
    };
    SearchpageComponent.prototype.search1 = function (search) {
        //{"text":"arts","username":"billubhai","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InVtYXIuYmlsYWxAYnJhaW5wbG93LmNvbSIsInVzZXJuYW1lIjoidW1hcmJpbGFsIiwib3JpZ19pYXQiOjE1MDMzOTU1NTMsImV4cCI6MTUwMzM5NTg1M30.5xZYL_1HOoIiRwRlF1NTZ-lxQRwKLlXh_Yx9RTaMPCg", "reply_channel": "daphne.response.rOXStTDRJo!RjpFXOwgzm"}
        var replay_channel = localStorage.getItem('replay_channel');
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        // if (currentUser && currentUser.token) {
        //     headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
        // }
        headers.append('Content-Type', 'application/json');
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/blog/tasks/v1/', JSON.stringify({ token: currentUser.token, reply_channel: replay_channel, search: search, username: currentUser.username }), { headers: headers }).map(function (response) { return response.json(); });
    };
    SearchpageComponent.prototype.setPagedefaults = function (page) {
        var _this = this;
        // this.loaded = false;
        this.pager = {};
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/blog/get_blogsphere_pages_list' + '/?page=' + page)
            .subscribe(function (res) {
            _this.influencers = res.json();
            _this.results = _this.influencers['results'];
            // this.loaded = true;
            _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 10);
        });
    };
    SearchpageComponent.prototype.gotoblog = function (url) {
        //let url = 'https://twitter.com/' + influencer.screen_name.replace("('", '').replace("',)", '');
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', '', 'success');
            }
        });
    };
    SearchpageComponent.prototype.filldata = function (b) {
        var arr = [];
        for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
            var obj = b_1[_i];
            for (var key in obj) {
                arr.push(obj[key]);
            }
        }
        this.blogdata = arr;
    };
    SearchpageComponent.prototype.startBRO1 = function (value) {
        this.search1(value)
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            // this.router.navigate(['/login']);
            // alert('success')
        }, function (error) {
            // this.alertService.error(error);
            // this.loading = false;
            alert('error');
        });
    };
    SearchpageComponent.prototype.searchB1 = function (e) {
        if (e.keyCode == 13) {
            if (this.b1Query['name']) {
                // this.router.navigate(['/blogs/search/', this.b1Query['name']])
                this.startBRO1(this.b1Query['name']);
            }
            else {
                this.startBRO1(this.b1Query);
                // alert(this.b1Query)
                // this.router.navigate(['/blogs/search/', this.b1Query['name']])
            }
        }
    };
    SearchpageComponent.prototype.searchB2 = function (e) {
        if (e.keyCode == 13) {
            if (this.b2Query['name']) {
                // alert(this.b2Query['name'])
                this.startBRO(this.b2Query['name']);
            }
            else {
                // alert(this.b2Query)
                this.startBRO(this.b2Query);
            }
        }
    };
    SearchpageComponent.prototype.searchB2Static = function (e) {
        this.selected_category = e['option']['value'];
        this.pager = {};
        this.setPage(1);
    };
    SearchpageComponent.prototype.getCatNameWeb = function (e) {
        this.selected_category = e.value;
    };
    SearchpageComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/blog/web/' + this.selected_category + '/?page=' + page + '', {
            title: this.title,
            moz_rank: this.moz,
            seoData: this.seo,
        }, { headers: headers })
            .subscribe(function (res) {
            _this.main_checkbox = false;
            _this.webInfluencers = res.json();
            _this.webResults = _this.webInfluencers['results'];
            _this.pager = _this.pagerService.getPager(_this.webInfluencers['totalItems'], page, 10);
            _this.loaded = true;
        });
    };
    SearchpageComponent.prototype.filterCountrySingle = function (event) {
        var query = event.query;
        // this.countryService.getCountries().then(countries => {
        this.filteredCountriesSingle = this.filterCountry(query, this.items);
        // });
    };
    SearchpageComponent.prototype.filterSearchSingle = function (event) {
        var query = event.query;
        // this.countryService.getCountries().then(countries => {
        this.filteredsearchwords = this.filterCountry(query, this.searchSuggestions);
        // });
    };
    SearchpageComponent.prototype.filterCountryMultiple = function (event) {
        var query = event.query;
        // this.countryService.getCountries().then(countries => {
        this.filteredCountriesMultiple = this.filterCountry(query, this.items);
        // });
    };
    SearchpageComponent.prototype.filterCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().includes(query.toLowerCase())) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    SearchpageComponent.prototype.fillseodata = function (b) {
        this.seodata = b;
        this.dialogVisible = true;
    };
    SearchpageComponent.prototype.fillfeaturedata = function (b) {
        this.feature_data = b;
        this.dialogVisible_features = true;
    };
    SearchpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchpage',
            template: __webpack_require__(/*! ./searchpage.component.html */ "./src/app/home/searchpage.component.html"),
            styles: [__webpack_require__(/*! ./searchpage.component.css */ "./src/app/home/searchpage.component.css")],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], SearchpageComponent);
    return SearchpageComponent;
}());



/***/ }),

/***/ "./src/app/home/searchpage.module.ts":
/*!*******************************************!*\
  !*** ./src/app/home/searchpage.module.ts ***!
  \*******************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _searchpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchpage.component */ "./src/app/home/searchpage.component.ts");
/* harmony import */ var _searchpage_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchpage.routing */ "./src/app/home/searchpage.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_3__["NgPipesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_searchpage_routing__WEBPACK_IMPORTED_MODULE_7__["SearchPageRoutes"]), primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
            declarations: [_searchpage_component__WEBPACK_IMPORTED_MODULE_6__["SearchpageComponent"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/home/searchpage.routing.ts":
/*!********************************************!*\
  !*** ./src/app/home/searchpage.routing.ts ***!
  \********************************************/
/*! exports provided: SearchPageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutes", function() { return SearchPageRoutes; });
/* harmony import */ var _searchpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchpage.component */ "./src/app/home/searchpage.component.ts");

var SearchPageRoutes = [{
        path: '',
        component: _searchpage_component__WEBPACK_IMPORTED_MODULE_0__["SearchpageComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=home-searchpage-module.js.map