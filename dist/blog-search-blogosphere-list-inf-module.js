(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-search-blogosphere-list-inf-module"],{

/***/ "./src/app/blog-search/blogosphere-list-inf.component.css":
/*!****************************************************************!*\
  !*** ./src/app/blog-search/blogosphere-list-inf.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    font-family: Ubuntu;\n    font-size: 14px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 500;\n    line-height: 15.4px;\n}\n\n#wrapper {\n    /*background-color: green; !* for vizualization purposes *!*/\n    text-align: center;\n}\n\n#yourdiv {\n    /*background-color: red; !* for vizualization purposes *!*/\n    display: inline-block;\n}\n\n.btn-rounded {\n    background: #000;\n    color: #fff;\n    text-align: center;\n    margin-top: 3%;\n    border-color: black;\n    font-size: 17px;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n}\n\n.list-row{\n    margin-left: 15px;\n    border-radius: 3px;\n    height: 45px;\n    /*-webkit-box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;*/\n    /*box-shadow: 0 0px 0px 0 rgba(0,0,0,.5),0 0px 2px 0 rgba(0,0,0,.19)!important;*/\n}\n\n.loaded-container{\n    width: 100%;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    background-color: #fff;\n    /*box-shadow: 0 3px 4px 0 #bdbdc3;*/\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\n    max-width: 1200px;\n    /*height: 300px;*/\n    /*display: inline-block;*/\n    margin-top: 18px;\n}\n\n.profile-checkbox {\n    display: flex;\n    flex: 0 0 auto;\n    width: 65px;\n    /* height: 100%; */\n    /* padding-left: 12px; */\n    padding-right: 12px;\n    border-right: 1px solid #ebecf3;\n    justify-content: center;\n    align-items: center;\n    /* background-color: #fff; */\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    cursor: pointer;\n}\n\ninput[type=checkbox]{\n    zoom: 1.5;\n}\n\n.tbl-cell{\n    font-weight: 600;\n    font-size: 19px;\n}\n\ni{\n    color: white;\n}\n\n.item-content{\n\n    color: #919fa9;\n    font-size: 14px;\n\n}\n\n.item-loc{\n    color: #919fa9;\n    font-size: 14px;\n}\n\nhr{\n    margin: 0!important;\n}\n\n.list-item1{\n    margin-right: 20px;\n    color: #000;\n    font-weight: 700;\n    font-size: 15px;\n}\n\n.right-item{\n    color: #919fa9;\n    font-size: 14px;\n}\n\n.btn-success{\n    background: black;\n    border-radius: 50px;\n    border-color: black;\n    padding: 8px 26px;\n    margin-top: 3px;\n    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)!important;\n}"

/***/ }),

/***/ "./src/app/blog-search/blogosphere-list-inf.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/blog-search/blogosphere-list-inf.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div id=\"wrapper\" *ngIf=\"loaded&& blogs.totalItems!=0\">\n    <!--<div id=\"yourdiv\">-->\n      <nav>\n        <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\n\n          <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\n          <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\n          <!--</li>-->\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n            <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\n              First\n            </a>\n          </li>\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n\n          <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\n              [ngClass]=\"{active:pager.currentPage === page}\"\n              (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\n          <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n          <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\n          <!--</li>-->\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\n              Last\n            </a>\n          </li>\n          <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\n          <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\n          <!--</li>-->\n        </ul>\n      </nav>\n  </div>\n  <div class=\"container-fluid\" *ngIf=\"loaded && blogs.totalItems==0\">\n    <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\n      <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\n        <div class=\"add-customers-screen-in\">\n          <div class=\"add-customers-screen-user\">\n            <i class=\"font-icon font-icon-user\"></i>\n          </div>\n          <h2>OOPS!</h2>\n          <p class=\"lead color-blue-grey-lighter\">Zero influencers in the list.<br> Add some influencers <strong></strong></p>\n          <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\n        </div>\n      </div>\n    </div><!--.box-typical-->\n  </div>\n\n  <div class=\"container-fluid\" *ngIf=\"loaded&& blogs.totalItems!=0\">\n\n    <div class=\"row\" id=\"myHeader\">\n      <div class=\"col-md-12 list-row\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <!--<button  class=\"btn btn-success\">Select All</button>-->\n            <div id=\"toolbar\">\n\n              <!--<button  style=\"width:70%;font-size: x-large;font-weight: bold;\" class=\"btn btn-rounded\">Login</button>-->\n\n              <inline-editor [disabled]=\"loading\" class=\"bootstrap-table-header\" type=\"text\" [(ngModel)]=\"list_name\" min=\"1\"\n                             max=\"30\" [fnErrorLength]=\"myHandleError\" (onSave)=\"saveEditable($event)\" name=\"editableText1\" size=\"30\"></inline-editor>\n              <img *ngIf=\"loading\"\n                   src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n              <button  class=\"btn btn-success\" (click)=\"update_delete_list()\">\n                <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                Delete selected\n              </button>\n              <button  class=\"btn btn-success\" (click)=\"clear_list()\">\n                <!--<i class=\"font-icon font-icon-close-2\"></i> -->\n                Clear selected\n              </button>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"profile-container\" *ngFor=\"let item of blogs.results\" >\n      <div class=\"row\">\n\n\n        <div class=\"col-md-2 profile-checkbox\" type=\"checkbox\">\n          <input type=\"checkbox\" style=\"display: flex\"  name=\"{{item['id']}}\" [(ngModel)]=\"inflist[item['id']]\" (change)=\"chec()\" id=\"table-check-{{item['id']}}\">\n          <label for=\"table-check-{{item['id']}}\"></label>\n        </div>\n\n        <div class=\"col-md-9\" style=\"margin-left: 3%\">\n          <div class=\"row\">\n            <label class=\"tbl-cell tbl-cell-name\">{{item['title']}}</label>\n          </div>\n          <div class=\"row\" style=\"padding-top: 8px\">\n            <label class=\"item-content\">{{item['description']}}</label>\n          </div>\n          <div class=\"row\" style=\"padding-top: 8px\">\n            <div class=\"col-md-3 text-left\">\n              <label class=\"item-loc\"> <i class=\"fa fa-map-marker\" style=\"font-size:16px;color:#c00\"></i> {{item['location']}}</label>\n\n            </div>\n            <div class=\"col-md-9 text-left\">\n\n              <label class=\"item-loc\"> <i class=\"fa fa-location-arrow\" style=\"font-size:16px;color:#c00; \"></i> Contact:  <a style=\"color: #0a6aa1; font-weight: bolder\">{{item['main_url']}}</a></label>\n            </div>\n          </div>\n          <hr style=\"color: #555555\">\n          <div class=\"row\" >\n            <ul style=\"display: flex; padding-top: 5px\">\n              <li><span class=\"right-item\"><i class=\"fa fa-bar-chart\" style=\"font-size:16px;color:#0a4069\"></i> Alexa:</span> <span class=\"list-item1\">{{item['seoData']['ALEXA']}} |  </span> </li>\n              <li><span class=\"right-item\"> <i class=\"fa fa-link\" style=\"font-size:16px;color:#0a4069\"></i> Moz Rank:</span> <span class=\"list-item1\">{{item['moz_rank']}} |   </span></li>\n              <li><span class=\"right-item\"><i class=\"fa fa-newspaper-o\" style=\"font-size:16px;color:#0a4069\"></i> Blogs:</span> <span class=\"list-item1\">{{item['blogs']}}</span></li>\n              <li><span class=\"right-item\"><i class=\"fa fa-random\" style=\"font-size:16px;color:#0a4069\"></i> Wowtr:</span> <span class=\"list-item1\">{{item['seoData']['WOWTR']}}</span></li>\n\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--<section class=\"box-typical\" *ngIf=\"loaded&& blogs.totalItems!=0\">-->\n\n    <!--<div class=\"box-typical-body\">-->\n      <!--<div class=\"table-responsive\">-->\n        <!--<div class=\"bootstrap-table\">-->\n          <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"blogs.results\"-->\n                       <!--[globalFilter]=\"gb\" class=\"table table-striped table-hover\">-->\n\n            <!--<p-header class=\"box-typical-header\">-->\n              <!--<div class=\"fixed-table-toolbar\">-->\n                <!--<div class=\"bars pull-left\">-->\n                  <!--<div id=\"toolbar\">-->\n\n                    <!--&lt;!&ndash;<button  style=\"width:70%;font-size: x-large;font-weight: bold;\" class=\"btn btn-rounded\">Login</button>&ndash;&gt;-->\n\n                    <!--<inline-editor [disabled]=\"loading\" class=\"bootstrap-table-header\" type=\"text\" [(ngModel)]=\"list_name\" min=\"1\"-->\n                                   <!--max=\"30\" [fnErrorLength]=\"myHandleError\" (onSave)=\"saveEditable($event)\" name=\"editableText1\" size=\"30\"></inline-editor>-->\n                    <!--<img *ngIf=\"loading\"-->\n                         <!--src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA-->\n                        <!--GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ-->\n                        <!--CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd-->\n                        <!--Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W-->\n                        <!--EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm-->\n                        <!--KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf-->\n                        <!--hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI-->\n                        <!--nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA-->\n                        <!--AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC-->\n                        <!--gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW-->\n                        <!--zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq-->\n                        <!--lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>-->\n                    <!--<button  class=\"btn btn-primary\" (click)=\"update_delete_list()\">-->\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\n                      <!--Delete selected-->\n                    <!--</button>-->\n                    <!--<button  class=\"btn btn-primary\" (click)=\"clear_list()\">-->\n                      <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\n                      <!--Clear selected-->\n                    <!--</button>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"columns columns-right btn-group pull-right\">-->\n\n                  <!--<div class=\"export btn-group\">-->\n\n                    <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\n                            <!--type=\"button\" aria-expanded=\"false\"><i-->\n                            <!--class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>-->\n                    <!--</button>-->\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">-->\n                      <!--&lt;!&ndash;<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>&ndash;&gt;-->\n                      <!--<li data-type=\"csv\"><a (click)=\"convert_to_csv()\" >CSV</a></li>-->\n                      <!--&lt;!&ndash;<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>&ndash;&gt;-->\n                    <!--</ul>-->\n                  <!--</div>-->\n                <!--</div>-->\n\n              <!--</div>-->\n            <!--</p-header>-->\n            <!--&lt;!&ndash;<p-column >&ndash;&gt;-->\n            <!--&lt;!&ndash;<ng-template  let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">&ndash;&gt;-->\n\n            <!--&lt;!&ndash;<div class=\"mail-box-item-photo\">&ndash;&gt;-->\n            <!--&lt;!&ndash;<img *ngIf=\"car['data']['main_image']\" src=\"{{car['data']['main_image']}}\" style=\"width: 62px;height: 62px\" alt=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\">&ndash;&gt;-->\n\n            <!--&lt;!&ndash;</div>&ndash;&gt;-->\n            <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\n            <!--&lt;!&ndash;</p-column>&ndash;&gt;-->\n\n\n            <!--<p-column>-->\n              <!--<ng-template pTemplate=\"header\">-->\n                <!--<div class=\"table-check\">-->\n                  <!--<div class=\"checkbox checkbox-only\">-->\n                    <!--<input type=\"checkbox\" id=\"table-check-head\" name=\"main_checkbox\"-->\n                           <!--[(ngModel)]=\"main_checkbox\" (change)=\"cheakall($event.target.checked)\">-->\n                    <!--<label for=\"table-check-head\"></label>-->\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</ng-template>-->\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\n\n                <!--<div class=\"table-check\">-->\n                  <!--<div class=\"checkbox checkbox-only\">-->\n                    <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\"-->\n                           <!--(change)=\"chec()\" id=\"table-check-{{car['id']}}\">-->\n                    <!--<label for=\"table-check-{{car['id']}}\"></label>-->\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</ng-template>-->\n            <!--</p-column>-->\n            <!--<p-column>-->\n              <!--<ng-template pTemplate=\"header\">-->\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Title</div>-->\n                <!--<div class=\"fht-cell\"></div>-->\n              <!--</ng-template>-->\n              <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\n\n\n                <!--<a (click)=\"gotoblog(car['main_url'])\"-->\n                   <!--title=\"{{car['title']}}\" style=\"text-align: left;\">-->\n                  <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 450px\">-->\n                    <!--<div class=\"mail-box-item-header\">-->\n\n\n                      <!--<div class=\"tbl mail-box-item-head-tbl\">-->\n                        <!--<div class=\"tbl-row\">-->\n                          <!--<div class=\"tbl-cell\">-->\n                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\n                              <!--<div class=\"tbl-row\">-->\n                                <!--<div class=\"tbl-cell tbl-cell-name\"-->\n                                     <!--[innerHTML]=\"car['title']\"></div>-->\n                                <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\n                              <!--</div>-->\n                            <!--</div>-->\n\n                          <!--</div>-->\n                          <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\n                          <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\n                        <!--</div>-->\n                      <!--</div>-->\n\n                    <!--</div>-->\n                    <!--<div class=\"mail-box-item-content\">-->\n                      <!--<div *ngIf=\"!car['highlightText']\" class=\"txt\"-->\n                           <!--title=\"{{car['description']}}\" [innerHTML]=\"car['description']\"></div>-->\n                      <!--&lt;!&ndash;<div *ngIf=\"car['highlightText']\"  class=\"txt\" title=\"{{car['highlightText']}}\" style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\" [innerHTML]=\"car['highlightText']\"></div>&ndash;&gt;-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</a>-->\n              <!--</ng-template>-->\n            <!--</p-column>-->\n            <!--<p-column>-->\n              <!--<ng-template pTemplate=\"header\">-->\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Contact</div>-->\n                <!--<div class=\"fht-cell\"></div>-->\n              <!--</ng-template>-->\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\n                <!--<div class=\"col-item col-contact tooltips\">-->\n                  <!--<ul>-->\n                    <!--<li *ngIf=\"car['location']\">-->\n                      <!--<div>-->\n                        <!--<i class=\"fa fa-map-marker\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\n                        <!--{{car['location']}}&lt;!&ndash;/ko&ndash;&gt;-->\n                      <!--</div>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                      <!--<a target=\"_blank\" data-container=\"body\"-->\n                         <!--href=\"{{car['seoData']['contactpages']}}\"-->\n                         <!--*ngIf=\"car['seoData']['contactpages']\"-->\n                         <!--title=\"{{car['seoData']['contactpages']}}\"><i-->\n                              <!--class=\"fa fa-info-circle\"></i>-->\n                        <!--Contact</a>-->\n                      <!--&lt;!&ndash;<br>&ndash;&gt;-->\n                    <!--</li>-->\n                    <!--&lt;!&ndash;<a data-bind=\"href : AboutUrl,attr.title:AboutUrl\" target=\"_blank\" data-container=\"body\" href=\"\"><i class=\"fa fa-user\"></i> About</a>&ndash;&gt;-->\n                    <!--<li><a target=\"_blank\" data-container=\"body\"-->\n                           <!--href=\"{{car['seoData']['aboutpages']}}\"-->\n                           <!--*ngIf=\"car['seoData']['aboutpages']\"-->\n                           <!--title=\"{{car['seoData']['aboutpages']}}\"><i-->\n                            <!--class=\"fa fa-user\"></i> About</a>-->\n                    <!--</li>-->\n                    <!--&lt;!&ndash;<a class=\"email\" target=\"_blank\" data-container=\"body\" title=\"foundation_ww@oracle.com\"><i class=\"fa fa-envelope\"></i>&lt;!&ndash;ko text:EmailAddress&ndash;&gt; <span>admin@b.com</span>&lt;!&ndash;/ko&ndash;&gt;</a>&ndash;&gt;-->\n                    <!--<li *ngIf=\"car['seoData']['phones']\"><a class=\"phone\" target=\"_blank\"-->\n                                                            <!--data-container=\"body\"-->\n                                                            <!--(mouseenter)=\"filldata(car['seoData']['phones'])\"-->\n                                                            <!--*ngIf=\"car['seoData']['phones'][0]\"-->\n                                                            <!--(click)=\"op.toggle($event)\"><i-->\n                            <!--class=\"fa fa-phone\"></i> Phone-->\n                      <!--&lt;!&ndash;ko text:AlexaPhoneNumber&ndash;&gt;&lt;!&ndash;/ko&ndash;&gt;</a>-->\n                    <!--</li>-->\n                    <!--<li *ngIf=\"car['seoData']['emails']\">-->\n                      <!--<a class=\"phone\" target=\"_blank\" data-container=\"body\"-->\n                         <!--(mouseenter)=\"filldata(car['seoData']['emails'])\"-->\n                         <!--*ngIf=\"car['seoData']['emails'][0]\"-->\n                         <!--(click)=\"op.toggle($event)\"><i class=\"font-icon-mail\"></i> Email-->\n                        <!--&lt;!&ndash;ko text:AlexaPhoneNumber&ndash;&gt;&lt;!&ndash;/ko&ndash;&gt;</a>-->\n                    <!--</li>-->\n                  <!--</ul>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;<td class=\"table-date\">{{car['email']}} <i&ndash;&gt;-->\n                <!--&lt;!&ndash;class=\"font-icon font-icon-clock\"></i></td>&ndash;&gt;-->\n              <!--</ng-template>-->\n            <!--</p-column>-->\n            <!--<p-column>-->\n              <!--<ng-template pTemplate=\"header\">-->\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Social</div>-->\n                <!--<div class=\"fht-cell\"></div>-->\n              <!--</ng-template>-->\n              <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\n\n                <!--<ul class=\"clearfix\">-->\n                  <!--<div class=\"col-sm-6\" align=\"left\">-->\n                    <!--<li>-->\n                      <!--<a (mouseenter)=\"filldata(car['seoData']['facebook'])\"-->\n                         <!--*ngIf=\"car['seoData']['facebook'] && car['seoData']['facebook'][0]\"-->\n                         <!--(click)=\"op.toggle($event)\">-->\n                        <!--<div class=\"circle-social facebook\">-->\n                          <!--<i class=\"fa fa-facebook\"> </i>-->\n                        <!--</div>-->\n                        <!--&lt;!&ndash;<span>{{car['data']['social']['facebook']['shares'] + car['data']['social']['facebook']['likes']+ car['data']['social']['facebook']['comments']}}</span>&ndash;&gt;-->\n                      <!--</a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                      <!--<a (mouseenter)=\"filldata(car['seoData']['twitter'])\"-->\n                         <!--*ngIf=\"car['seoData']['twitter']\"-->\n                         <!--(click)=\"op.toggle($event)\">-->\n                        <!--<div class=\"circle-social twitter\">-->\n                          <!--<i class=\"fa fa-twitter\"> </i>-->\n                        <!--</div>-->\n                      <!--</a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                      <!--<a *ngIf=\"car['seoData']['pinterest']\"-->\n                         <!--(mouseenter)=\"filldata(car['seoData']['pinterest'])\"-->\n                         <!--(click)=\"op.toggle($event)\">-->\n                        <!--<div class=\"circle-social pinterest\">-->\n                          <!--<i class=\"fa fa-pinterest\"></i>-->\n                        <!--</div>-->\n                        <!--&lt;!&ndash;<span>{{car['data']['social']['pinterest']['shares']}}</span>&ndash;&gt;-->\n                      <!--</a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                      <!--<a (mouseenter)=\"filldata(car['seoData']['youtube'])\"-->\n                         <!--*ngIf=\"car['seoData']['youtube']\"-->\n                         <!--(click)=\"op.toggle($event)\">-->\n                        <!--<div class=\"circle-social youtube\">-->\n                          <!--<i class=\"fa fa-youtube\"></i>-->\n                        <!--</div>-->\n                      <!--</a>-->\n                    <!--</li>-->\n\n                  <!--</div>-->\n                  <!--<div class=\"col-sm-6 col-lg-push-1\">-->\n                    <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<a (mouseenter)=\"filldata(car['seoData']['googleplus'])\"&ndash;&gt;-->\n                         <!--&lt;!&ndash;*ngIf=\"car['seoData']['googleplus']\"&ndash;&gt;-->\n                         <!--&lt;!&ndash;(click)=\"op.toggle($event)\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;<div class=\"circle-social google-plus\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;<i class=\"fa fa-google-plus\"></i>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;<span>{{car['data']['social']['gplus']['shares']}}</span>&ndash;&gt;&ndash;&gt;-->\n                      <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                    <!--<li>-->\n                      <!--<a (mouseenter)=\"filldata(car['seoData']['linkedin'])\"-->\n                         <!--*ngIf=\"car['seoData']['linkedin']\"-->\n                         <!--(click)=\"op.toggle($event)\">-->\n                        <!--<div class=\"circle-social linkedin\">-->\n                          <!--<i class=\"fa fa-linkedin\"></i>-->\n                        <!--</div>-->\n                        <!--&lt;!&ndash;<span>{{car['data']['social']['linkedin']['shares']}}</span>&ndash;&gt;-->\n                      <!--</a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                      <!--<a (mouseenter)=\"filldata(car['seoData']['instagram'])\"-->\n                         <!--*ngIf=\"car['seoData']['instagram']\"-->\n                         <!--(click)=\"op.toggle($event)\">-->\n                        <!--<div class=\"circle-social instagram\">-->\n                          <!--<i class=\"fa fa-instagram\"></i>-->\n                        <!--</div>-->\n                      <!--</a>-->\n                    <!--</li>-->\n                  <!--</div>-->\n                <!--</ul>-->\n              <!--</ng-template>-->\n            <!--</p-column>-->\n\n            <!--&lt;!&ndash;<p-column field=\"location\" header=\"Location\"></p-column>&ndash;&gt;-->\n            <!--<p-column>-->\n              <!--<ng-template pTemplate=\"header\">-->\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">SEO Stats</div>-->\n                <!--<div class=\"fht-cell\"></div>-->\n\n              <!--</ng-template>-->\n\n              <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\n\n                <!--<button type=\"text\" (click)=\"fillseodata(car)\" pButton-->\n                        <!--class=\"btn btn-rounded btn-inline btn-info\">Show SEO stats-->\n                <!--</button>-->\n              <!--</ng-template>-->\n\n            <!--</p-column>-->\n            <!--<p-column>-->\n              <!--<ng-template pTemplate=\"header\">-->\n                <!--<div style=\"text-align: center; \" class=\"th-inner\">Site Features</div>-->\n                <!--<div class=\"fht-cell\"></div>-->\n\n              <!--</ng-template>-->\n\n              <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\n                <!--<ul>-->\n                  <!--<li>-->\n                    <!--Moz Rank:-->\n                    <!--<ul class=\"list-group-item\" style=\"text-align: right;\">-->\n                      <!--<li>-->\n                        <!--{{car['moz_rank']}}-->\n                      <!--</li>-->\n\n                    <!--</ul>-->\n                  <!--</li>-->\n                  <!--<li>Alexa:-->\n                    <!--<ul class=\"list-group-item\" style=\"text-align: right;\">-->\n                      <!--<li>-->\n                        <!--{{car['seoData']['ALEXA']}}-->\n                      <!--</li>-->\n\n                    <!--</ul>-->\n                  <!--</li>-->\n                <!--</ul>-->\n\n                <!--&lt;!&ndash;<button type=\"text\" (click)=\"fillfeaturedata(car)\" pButton&ndash;&gt;-->\n                <!--&lt;!&ndash;class=\"btn btn-rounded btn-inline btn-info\">Show features&ndash;&gt;-->\n                <!--&lt;!&ndash;</button>&ndash;&gt;-->\n\n\n              <!--</ng-template>-->\n\n            <!--</p-column>-->\n\n\n          <!--</p-dataTable>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</section>-->\n  <p-dialog *ngIf=\"dialogVisible_features\" [(visible)]=\"dialogVisible_features\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"450\">\n    <p-header *ngIf=\"dialogVisible_features\">\n\n      Web features of <a href=\"{{feature_data.main_url}}\">{{feature_data.data.title}}</a>\n\n    </p-header>\n    <ul class=\"list-group\">\n\n      <li *ngIf=\"feature_data.data.domain_rank\" class=\"list-group-item\"><span>Domain Rank:</span>\n        <span style=\"float: right;\">{{feature_data.data.domain_rank}}</span></li>\n\n      <li class=\"list-group-item\"><span>Spam Score:</span>\n        <span style=\"float: right;\">{{feature_data.data.spam_score}}</span></li>\n      <li *ngIf=\"feature_data.data.performance_score\" class=\"list-group-item\"><span>Performance:</span>\n        <span style=\"float: right;\">{{feature_data.data.performance_score}}</span></li>\n      <li *ngIf=\"feature_data.data.site_categories[0]\" class=\"list-group-item\">Category:\n        <ul>\n          <li *ngFor=\"let c of feature_data.data.site_categories\" class=\"list-group-item\" style=\"text-align: right;\">{{c}}</li>\n        </ul>\n      </li>\n\n    </ul>\n  </p-dialog>\n\n\n  <p-dialog [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"933\" >\n    <p-header *ngIf=\"dialogVisible\">\n\n      SEO stats for <a href=\"{{seodata.main_url}}\">{{seodata.data.site_full}}</a>\n\n    </p-header>\n    <table id=\"table-xs\" *ngIf=\"dialogVisible\" class=\"table table-bordered table-hover table-xs\">\n\n      <tbody>\n      <tr>\n        <!--<td title=\"Blog Rank\"><strong>Blog rank</strong></td>-->\n        <!--<td title=\"Blog Rank\">{{seodata.data.blogrank}}</td>-->\n        <!--<td title=\"Linked By\"><strong>Linked By</strong></td>-->\n        <!--<td title=\"Linked By\">{{seodata.data.linkedby}}</td>-->\n        <!--<td title=\"Posts per week\"><strong>Posts per week</strong></td>-->\n        <!--<td title=\"Posts per week\">{{seodata.data.postsperweek}}</td>-->\n        <td title=\"Worth Of Web Traffic Rank\"><strong>WOWTR</strong></td>\n        <td title=\"Worth Of Web Traffic Rank\">{{seodata.seoData.WOWTR}}</td>\n      </tr>\n      <tr>\n        <td title=\"Estimated worth of website\"><strong>EWOW</strong></td>\n        <td title=\"Estimated worth of website\">{{seodata.seoData.EWOW}}</td>\n        <td title=\"Estimated revenue per day\"><strong>ERPD</strong></td>\n        <td title=\"Estimated revenue per day\">{{seodata.seoData.EREVD}}</td>\n        <td title=\"Estimated revenue per month\"><strong>ERPM</strong></td>\n        <td title=\"Estimated revenue per month\">{{seodata.seoData.EREVM}}</td>\n        <td title=\"Estimated revenue per year\"><strong>ERPY</strong></td>\n        <td title=\"Estimated revenue per year\">{{seodata.seoData.EREVY}}</td>\n      </tr>\n      <tr>\n        <td title=\"Estimated visits per day\"><strong>EVISD</strong></td>\n        <td title=\"Estimated visits per day\">{{seodata.seoData.EVISD}}</td>\n        <td title=\"Estimated visits per month\"><strong>EVISM</strong></td>\n        <td title=\"Estimated visits per month\">{{seodata.seoData.EVISM}}</td>\n        <td title=\"Estimated visits per year\"><strong>EVISY</strong></td>\n        <td title=\"Estimated visits per year\">{{seodata.seoData.EVISY}}</td>\n        <td title=\"Estimated pageviews per day\"><strong>EPVISD</strong></td>\n        <td title=\"Estimated pageviews per day\">{{seodata.seoData.EPVISD}}</td>\n      </tr>\n      <!--<tr>-->\n      <!--<td title=\"Estimated visits per day\"><strong>EVISD</strong></td>-->\n      <!--<td title=\"Estimated visits per day\">{{car['data.EVISD}}</td>-->\n      <!--<td title=\"Estimated visits per month\"><strong>EVISM</strong></td>-->\n      <!--<td title=\"Estimated visits per month\">{{car['data.EVISM}}</td>-->\n      <!--<td title=\"Estimated visits per year\"><strong>EVISY</strong></td>-->\n      <!--<td title=\"Estimated visits per year\">{{car['data.EVISY}}</td>-->\n      <!--<td title=\"Estimated pageviews per day\"><strong>EPVISD</strong></td>-->\n      <!--<td title=\"Estimated pageviews per day\">{{car['data.EVIS}}</td>-->\n      <!--</tr>-->\n      <tr>\n        <td title=\"Estimated pageviews per month\"><strong>EPVISM</strong></td>\n        <td title=\"Estimated pageviews per month\">{{seodata.seoData.EPVISM}}</td>\n        <td title=\"Estimated pageviews per year\"><strong>EPVISY</strong></td>\n        <td title=\"Estimated pageviews per year\">{{seodata.seoData.EPVISY}}</td>\n        <td title=\"Alexa Rank\"><strong>ALEXA</strong></td>\n        <td title=\"Alexa Rank\">{{seodata.seoData.ALEXA}}</td>\n        <td title=\"Worth Of Web Traffic Score\"><strong>WOWTS</strong></td>\n        <td title=\"Worth Of Web Traffic Score\">{{seodata.seoData.WOWTS}}</td>\n      </tr>\n      <!--<tr>-->\n      <!--<td><strong>Estimated worth of web</strong></td>-->\n      <!--<td>50</td>-->\n      <!--<td><strong>Estimated revenue per day</strong></td>-->\n      <!--<td>20</td>-->\n      <!--<td><strong>Estimated revenue per month</strong></td>-->\n      <!--<td>20</td>-->\n      <!--</tr>-->\n\n    </table>\n  </p-dialog>\n  <div class=\"container-fluid\" *ngIf=\"loaded\">\n\n  </div>\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/blog-search/blogosphere-list-inf.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/blog-search/blogosphere-list-inf.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogosphereListInfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogosphereListInfComponent", function() { return BlogosphereListInfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
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









var BlogosphereListInfComponent = /** @class */ (function () {
    function BlogosphereListInfComponent(http, router, httpNoPreloader, route, pagerService) {
        this.http = http;
        this.router = router;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.pagerService = pagerService;
        this.inflist = {};
        this.loaded = false;
        this.pager = {};
        this.loading = false;
    }
    BlogosphereListInfComponent.prototype.ngAfterViewInit = function () {
    };
    BlogosphereListInfComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    BlogosphereListInfComponent.prototype.saveEditable = function (t) {
        var _this = this;
        this.loading = true;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/update_name_ilist_dd/', JSON.stringify({ id: this.searchQuery, name: t }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
            localStorage.removeItem('selected_list_dd');
            localStorage.setItem('selected_list_dd', JSON.stringify({ id: _this.searchQuery, name: t }));
            _this.list_name = t;
            _this.loading = false;
        });
    };
    BlogosphereListInfComponent.prototype.myHandleError = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('List name length should be between 1 and 30!', '', 'error');
    };
    BlogosphereListInfComponent.prototype.chec = function () {
        console.clear();
        console.log(this.inflist);
    };
    BlogosphereListInfComponent.prototype.cheakall = function (e) {
        // console.log(e)
        for (var _i = 0, _a = this.blogs['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
        console.log(this.inflist);
    };
    BlogosphereListInfComponent.prototype.update_delete_list = function () {
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/update_delete_ilist_dd/', JSON.stringify({ id: _this.searchQuery, list: list }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.setPage(1);
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
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', '', 'success');
            }
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        });
    };
    BlogosphereListInfComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    BlogosphereListInfComponent.prototype.gotoblog = function (url) {
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
    BlogosphereListInfComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loaded = false;
        this.sub = this.route.params.subscribe(function (params) {
            if (Number(params['query'])) {
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
                headers.append('Content-Type', 'application/json');
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].api + '/get_list_inf_dd/' + params['query'] + '/?page=' + page, { headers: headers }, 'full')
                    .subscribe(function (res) {
                    console.log(params['query']);
                    _this.searchQuery = params['query'];
                    _this.list_name = res.json().name;
                    _this.blogs = res.json();
                    _this.loaded = true;
                    _this.pager = _this.pagerService.getPager(_this.blogs['totalItems'], page, 20);
                    // this.setPage(1);
                    // Swal('Hello world!')
                }, function (error) {
                    // alert('error')
                    _this.router.navigate(['page-not-found']);
                });
            }
            else {
                _this.router.navigate(['page-not-found']);
            }
        });
    };
    BlogosphereListInfComponent.prototype.navSearch = function () {
    };
    BlogosphereListInfComponent.prototype.filldata = function (b) {
        var arr = [];
        console.log(b);
        for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
            var obj = b_1[_i];
            // console.log(email); // 0,1,2
            for (var key in obj) {
                arr.push(obj[key]);
            }
        }
        this.blogdata = arr;
    };
    BlogosphereListInfComponent.prototype.fillseodata = function (b) {
        console.log(b);
        this.seodata = b;
        this.dialogVisible = true;
    };
    BlogosphereListInfComponent.prototype.fillfeaturedata = function (b) {
        console.log(b);
        this.feature_data = b;
        this.dialogVisible_features = true;
    };
    BlogosphereListInfComponent.prototype.ngOnDestroy = function () {
        // localStorage.removeItem('navigated_list');
        this.sub.unsubscribe();
    };
    BlogosphereListInfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogosphere-list-inf',
            template: __webpack_require__(/*! ./blogosphere-list-inf.component.html */ "./src/app/blog-search/blogosphere-list-inf.component.html"),
            styles: [__webpack_require__(/*! ./blogosphere-list-inf.component.css */ "./src/app/blog-search/blogosphere-list-inf.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]])
    ], BlogosphereListInfComponent);
    return BlogosphereListInfComponent;
}());



/***/ }),

/***/ "./src/app/blog-search/blogosphere-list-inf.module.ts":
/*!************************************************************!*\
  !*** ./src/app/blog-search/blogosphere-list-inf.module.ts ***!
  \************************************************************/
/*! exports provided: BlogosphereListInfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogosphereListInfModule", function() { return BlogosphereListInfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _blogosphere_list_inf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blogosphere-list-inf.component */ "./src/app/blog-search/blogosphere-list-inf.component.ts");
/* harmony import */ var _blogosphere_list_inf_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blogosphere-list-inf.routing */ "./src/app/blog-search/blogosphere-list-inf.routing.ts");
/* harmony import */ var ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-inline-editor */ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BlogosphereListInfModule = /** @class */ (function () {
    function BlogosphereListInfModule() {
    }
    BlogosphereListInfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_blogosphere_list_inf_routing__WEBPACK_IMPORTED_MODULE_9__["BlogosphereListInfRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__["InlineEditorModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"]],
            declarations: [_blogosphere_list_inf_component__WEBPACK_IMPORTED_MODULE_8__["BlogosphereListInfComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]]
        })
    ], BlogosphereListInfModule);
    return BlogosphereListInfModule;
}());



/***/ }),

/***/ "./src/app/blog-search/blogosphere-list-inf.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog-search/blogosphere-list-inf.routing.ts ***!
  \*************************************************************/
/*! exports provided: BlogosphereListInfRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogosphereListInfRoutes", function() { return BlogosphereListInfRoutes; });
/* harmony import */ var _blogosphere_list_inf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogosphere-list-inf.component */ "./src/app/blog-search/blogosphere-list-inf.component.ts");

// import {BlogosphereListInfComponent} from "./BlogosphereListInf.component";
// import {Yout} from "./searchpage.component";
var BlogosphereListInfRoutes = [{
        path: '',
        component: _blogosphere_list_inf_component__WEBPACK_IMPORTED_MODULE_0__["BlogosphereListInfComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=blog-search-blogosphere-list-inf-module.js.map