(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["youtube-search-youtube-search-module"],{

/***/ "./src/app/youtube-search/youtube-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\"padding-right:15px;\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid \">\r\n            <mat-tab-group   style=\"background: #000;  \">\r\n\r\n\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\r\n                                    Category Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <h6 style=\"padding: 20px 20px 2px 20px; font-weight: bolder\"> Youtube Influencers</h6>\r\n                            </div>\r\n                            <div class=\"col-md-6 text-center p-auto\">\r\n\r\n                                <mat-form-field class=\"example-full-width \" style=\"width:60%\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"getYTChannels($event)\">\r\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\"  [value]=\"option\">\r\n                                            {{ option }}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                    <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fire\"></i>\r\n                                    Advanced Search\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                    </ng-template>\r\n                    <div class=\"body\">\r\n                        <div class=\"container\">\r\n                            <form (submit)=\"setPage(1)\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-select  name=\"selected_choice\"  [(ngModel)]=\"selected_category\" (change)=\"getCatName($event)\"\r\n                                                    placeholder=\"Select Category\" style=\"width:75%\">\r\n                                            <mat-option *ngFor=\"let choice of options\" [value]=\"choice\">{{ choice }}</mat-option>\r\n                                        </mat-select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\"[(ngModel)]=\"name\" placeholder=\"Serch by Title/Name\" name=\"contact\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"subscribers\" placeholder=\"Serch by Subscribers\" name=\"social\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"t_views\" placeholder=\"Serch by Total Views\" name=\"seo\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"rank\" placeholder=\"Serch by Rank\" name=\"loc\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"today_upload_video\" placeholder=\"Serch by Today Upload Videos\" name=\"er\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"margin-bottom: 1%\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <mat-form-field>\r\n                                            <input matInput type=\"text\" [(ngModel)]=\"tomorrow_upload_video\" placeholder=\"Serch by Tommorow Upload Videos\" name=\"er\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-md-2 offset-md-4 text-right\">\r\n                                        <button type=\"submit\"  class=\"btn btn-rounded\" >\r\n                                            Search <i class=\"fa fa-sliders\"></i>\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!loaded\" style=\"margin-top: 3%\">\r\n        <div class=\"col-md-12 text-left\">\r\n            <h4 style=\"font-weight: bolder\">Featured Youtube Influencers</h4>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"SickyPage\">\r\n  <div id=\"wrapper\" *ngIf=\"loaded&& influencers.totalItems!=0\">\r\n\r\n    <div class=\"row\" style=\"margin-top: 2%\">\r\n        <div class=\"col-md-12 text-center\">\r\n      <nav>\r\n        <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n          <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n          <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n          <!--</li>-->\r\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n            <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n              First\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n              [ngClass]=\"{active:pager.currentPage === page}\"\r\n              (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n          <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n          <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n          <!--</li>-->\r\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n              Last\r\n            </a>\r\n          </li>\r\n          <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n          <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n          <!--</li>-->\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"inCurrentpage\">\r\n        <div class=\"col-md-4\"style=\"text-align: left\"  >\r\n            <h6>List Name: <b>{{currentList.name}} </b> </h6>\r\n        </div>\r\n        <div class=\"col-md-4 offset-md-4 text-center\" *ngIf=\"inCurrentpage\">\r\n            <a (click)=\"go_to_list_yt(currentList.id, currentList.name)\" >View<b> List</b></a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fluid\" *ngIf=\"!loaded\">\r\n\r\n        <div class=\"row\" id=\"myHeader\">\r\n            <div class=\"col-md-12 list-row\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n                        <div id=\"ck-button\">\r\n                            <label>\r\n\r\n                                <input type=\"checkbox\"  (change)=\"cheakalldef($event.target.checked)\" ><span>Select All</span>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <button  class=\"btn btn-priamry add-to-list\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cross-button\">\r\n                <a (click)=cl class=\"closebtn\">×</a>\r\n            </div>\r\n\r\n        <div class=\"profile-container\" *ngFor=\"let item of influencers_by_default.results\" >\r\n            <div class=\"row\">\r\n\r\n\r\n                <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n                    <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                    <label for=\"table-check-{{item['id']}}\"></label>\r\n                </div>\r\n                <div class=\"col-md-2 text-center\">\r\n                    <img [src]=\"item['thumbnail_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n                </div>\r\n\r\n\r\n                <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n                    <div class=\"row\">\r\n                        <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\r\n                    </div>\r\n                    <div class=\"row\" style=\"padding-top: 8px\">\r\n                        <label class=\"item-content\" style=\"overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n                    </div>\r\n                    <div class=\"row\" style=\"padding-top: 8px\">\r\n                        <div class=\"col-md-3 text-left\">\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> {{item['location']}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-9 text-left\" *ngIf=\"item['contact']\" >\r\n\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['contact'].slice(7)}}</a></label>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-9 text-left\" *ngIf=\"!item['contact']\">\r\n\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">N/A</a></label>\r\n                        </div>\r\n                    </div>\r\n                    <hr style=\"color: #555555\">\r\n                    <div class=\"row\" >\r\n                        <ul style=\"display: flex; padding-top: 5px\">\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> subscribers:</span> <span class=\"list-item1\">{{item['subscribers']}} |  </span> </li>\r\n                            <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Total Views:</span> <span class=\"list-item1\">{{item['total_views']}} |   </span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['rank']}}</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-calendar-o\" style=\"font-size:16px;color:#0a4069\"></i> Joined Year:</span> <span class=\"list-item1\">{{item['date']}}</span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <hr style=\"color: #555555\">\r\n                    <div class=\"row\" >\r\n                        <ul style=\"display: flex; padding-top: 5px\">\r\n                            <li style=\"font-weight: bolder\"> Videos Uploads | </li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Today :</span> <span class=\"list-item1\">{{item['today_upload_videos']}} |  </span> </li>\r\n                            <li><span class=\"right-item\"> <i class=\"fa fa-file-video-o\" style=\"font-size:16px;color:#0a4069\"></i> Tomorrow :</span> <span class=\"list-item1\">{{item['tomorrow_upload_videos']}} |   </span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> Last Week: </span> <span class=\"list-item1\">{{item['last_week_upload_videos']}}</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems==0\">\r\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\r\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\r\n        <div class=\"add-customers-screen-in\">\r\n          <div class=\"add-customers-screen-user\">\r\n            <i class=\"font-icon font-icon-user\"></i>\r\n          </div>\r\n          <h2>OOPS!</h2>\r\n          <p class=\"lead color-blue-grey-lighter\">No search results are found<br> try another category.</p>\r\n          <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\r\n        </div>\r\n      </div>\r\n    </div><!--.box-typical-->\r\n  </div>\r\n\r\n\r\n    <div class=\"container-fluid\" *ngIf=\"loaded&& influencers.totalItems!=0\">\r\n\r\n        <div class=\"row\" id=\"myHeader\">\r\n            <div class=\"col-md-12 list-row\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <!--<button  class=\"btn btn-success\">Select All</button>-->\r\n                        <div id=\"ck-button\">\r\n                            <label>\r\n\r\n                                <input type=\"checkbox\"  (change)=\"cheakall($event.target.checked)\" ><span>Select All</span>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <button  class=\"btn btn-success\" (click)=\"add_create_list()\"> Add to list</button>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"profile-container\" *ngFor=\"let item of influencers.results\" >\r\n            <div class=\"row\">\r\n\r\n\r\n                <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\r\n                    <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\r\n                    <label for=\"table-check-{{item['id']}}\"></label>\r\n                </div>\r\n                <div class=\"col-md-2 text-center\">\r\n                    <img *ngIf=\"item['thumbnail_url']\" [src]=\"item['thumbnail_url']\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n                    <img *ngIf=\"!item['thumbnail_url']\" src=\"../../assets/no-image-found.jpg\"  style=\"height: 100px;  width: 100px; margin-top: 15px; border-radius: 100%\">\r\n                </div>\r\n\r\n\r\n                <div class=\"col-md-7\" style=\"margin-left: 3%\">\r\n                    <div class=\"row\">\r\n                        <label class=\"tbl-cell tbl-cell-name\">{{item['name']}}</label>\r\n                    </div>\r\n                    <div class=\"row\" style=\"padding-top: 8px\">\r\n                        <label class=\"item-content\" style=\"overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\" title=\"{{item['description']}}\">{{item['description']}}</label>\r\n                    </div>\r\n                    <div class=\"row\" style=\"padding-top: 8px\">\r\n                        <div class=\"col-md-3 text-left\" *ngIf=\"item['location']\">\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> {{item['location']}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-3 text-left\" *ngIf=\"!item['location']\">\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> N/A</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-9 text-left\" *ngIf=\"item['contact']\">\r\n\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['contact']}}</a></label>\r\n                        </div>\r\n                        <div class=\"col-md-9 text-left\" *ngIf=\"!item['contact']\">\r\n\r\n                            <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">N/A</a></label>\r\n                        </div>\r\n                    </div>\r\n                    <hr style=\"color: #555555\">\r\n                    <div class=\"row\" >\r\n                        <ul style=\"display: flex; padding-top: 5px\">\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-users\" style=\"font-size:16px;color:#0a4069\"></i> subscribers:</span> <span class=\"list-item1\">{{item['subscribers']}} |  </span> </li>\r\n                            <li><span class=\"right-item\"> <i class=\"fa fa-eye\" style=\"font-size:16px;color:#0a4069\"></i> Total Views:</span> <span class=\"list-item1\">{{item['total_views']}} |   </span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Rank:</span> <span class=\"list-item1\">{{item['rank']}}</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-calendar-o\" style=\"font-size:16px;color:#0a4069\"></i> Joined Year:</span> <span class=\"list-item1\">{{item['date']}}</span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <hr style=\"color: #555555\">\r\n                    <div class=\"row\" >\r\n                        <ul style=\"display: flex; padding-top: 5px\">\r\n                            <li style=\"font-weight: bolder\"> Videos Uploads | </li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-upload\" style=\"font-size:16px;color:#0a4069; padding-left: 5px\"></i> Today :</span> <span class=\"list-item1\">{{item['today_upload_videos']}} |  </span> </li>\r\n                            <li><span class=\"right-item\"> <i class=\"fa fa-file-video-o\" style=\"font-size:16px;color:#0a4069\"></i> Tomorrow :</span> <span class=\"list-item1\">{{item['tomorrow_upload_videos']}} |   </span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> Last Week: </span> <span class=\"list-item1\">{{item['last_week_upload_videos']}}</span></li>\r\n                            <li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Last Month:</span> <span class=\"list-item1\">{{item['last_month_upload_videos']}}</span></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/youtube-search/youtube-search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/youtube-search/youtube-search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\nsection {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.body {\n  background-color: #f9f9f9 !important; }\n\nmat-form-field {\n  width: 75%;\n  color: #343739 !important;\n  line-height: 0.95; }\n\n.col-md-6 {\n  margin-top: 0 !important; }\n\n.btn-rounded {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  margin-top: 3%;\n  border-color: black;\n  font-size: 17px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.list-row {\n  margin-left: 15px;\n  border-radius: 3px;\n  height: 45px;\n  /*-webkit-box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;*/\n  /*box-shadow: 0 0px 0px 0 rgba(0,0,0,.5),0 0px 2px 0 rgba(0,0,0,.19)!important;*/ }\n\n.profile-container {\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  border-radius: 5px;\n  background-color: #fff;\n  /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n  max-width: 1200px;\n  display: inline-block;\n  /*height: 165px;*/\n  margin-top: 18px; }\n\n.loaded-container {\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  border-radius: 5px;\n  background-color: #fff;\n  /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n  max-width: 1200px;\n  /*height: 300px;*/\n  /*display: inline-block;*/\n  margin-top: 18px; }\n\n.profile-checkbox {\n  display: flex;\n  flex: 0 0 auto;\n  width: 65px;\n  /* height: 100%; */\n  /* padding-left: 12px; */\n  padding-right: 12px;\n  border-right: 1px solid #ebecf3;\n  justify-content: center;\n  align-items: center;\n  /* background-color: #fff; */\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  cursor: pointer; }\n\ninput[type=checkbox] {\n  zoom: 1.5; }\n\n.tbl-cell {\n  font-weight: 600;\n  font-size: 19px; }\n\ni {\n  color: white; }\n\n.item-content {\n  color: #919fa9;\n  font-size: 14px; }\n\n.item-loc {\n  color: #919fa9;\n  font-size: 14px; }\n\nhr {\n  margin: 0 !important; }\n\n.list-item1 {\n  margin-right: 20px;\n  color: #000;\n  font-weight: 700;\n  font-size: 15px; }\n\n.right-item {\n  color: #919fa9;\n  font-size: 14px; }\n\n.btn-success {\n  background: black;\n  border-radius: 50px;\n  border-color: black;\n  font-weight: bold;\n  padding: 8px 26px;\n  margin-top: 3px;\n  box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important; }\n\nmat-form-field-header {\n  background-color: black; }\n"

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
    YoutubeSearchComponent.prototype.getYTChannels = function (e) {
        // alert('called')
        this.selected_category = e['option']['value'];
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
            subscribers: this.subscribers,
            total_views: this.t_views,
            rank: this.rank,
            today_upload_videos: this.today_upload_video,
            tomorrow_upload_videos: this.tomorrow_upload_video
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_youtube_search_routing__WEBPACK_IMPORTED_MODULE_4__["YoutubeSearchRoutes"]), primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
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