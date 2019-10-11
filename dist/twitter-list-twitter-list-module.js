(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["twitter-list-twitter-list-module"],{

/***/ "./src/app/twitter-list/twitter-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-content\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"container-fluid\" *ngIf=\"loaded && influencers.totalItems==0\">\r\n      <div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">\r\n        <div class=\"add-customers-screen tbl\" style=\"height: 119px;\">\r\n          <div class=\"add-customers-screen-in\">\r\n            <div class=\"add-customers-screen-user\">\r\n              <i class=\"font-icon font-icon-user\"></i>\r\n            </div>\r\n            <h2>OOPS!</h2>\r\n            <p class=\"lead color-blue-grey-lighter\">Zero influencers in the list.<br> Add some influencers <strong></strong></p>\r\n            <!--<a href=\"#\" class=\"btn\">Add customer</a>-->\r\n          </div>\r\n        </div>\r\n      </div><!--.box-typical-->\r\n    </div>\r\n\r\n      <div class=\"row\" style=\"margin-top: 2%\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <nav>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">\r\n\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n              <!--<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" aria-label=\"Previous\"></a>-->\r\n              <!--</li>-->\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">\r\n                  First\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">\r\n                  <span aria-hidden=\"true\">&laquo;</span>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\"\r\n                  [ngClass]=\"{active:pager.currentPage === page}\"\r\n                  (click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n              <!--<a (click)=\"setPage(pager.currentPage + 1)\">Next</a>-->\r\n              <!--</li>-->\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">\r\n                  <span aria-hidden=\"true\">&raquo;</span>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">\r\n                  Last\r\n                </a>\r\n              </li>\r\n              <!--<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n              <!--<a (click)=\"setPage(pager.totalPages)\">Last</a>-->\r\n              <!--</li>-->\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n        <section class=\"box-typical\"  *ngIf=\"loaded && influencers.totalItems!=0\">\r\n\r\n\r\n      <div class=\"box-typical-body\">\r\n        <div class=\"table-responsive\">\r\n          <div class=\"bootstrap-table\">\r\n            <p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers.results\"\r\n                         class=\"table table-striped table-hover\">\r\n\r\n              <p-header class=\"box-typical-header\">\r\n                <div class=\"fixed-table-toolbar\">\r\n\r\n                  <div class=\"bars pull-left\">\r\n                    <div id=\"toolbar\">\r\n\r\n                      <!--<button  style=\"width:70%;font-size: x-large;font-weight: bold;\" class=\"btn btn-rounded\">Login</button>-->\r\n\r\n                      <inline-editor [disabled]=\"loading\" class=\"bootstrap-table-header\" type=\"text\" [(ngModel)]=\"list_name\" min=\"1\"\r\n                                     max=\"30\" [fnErrorLength]=\"myHandleError\" (onSave)=\"saveEditable($event)\" name=\"editableText1\" size=\"30\"></inline-editor>\r\n                      <img *ngIf=\"loading\"\r\n                           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\r\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\r\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\r\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\r\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\r\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\r\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\r\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\r\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\r\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\r\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\r\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n                      <button  class=\"btn btn-primary\" (click)=\"update_delete_list()\">\r\n                        <!--<i class=\"font-icon font-icon-close-2\"></i> -->\r\n                        Delete selected\r\n                      </button>\r\n                      <button  class=\"btn btn-primary\" (click)=\"clear_list()\">\r\n                        <!--<i class=\"font-icon font-icon-close-2\"></i> -->\r\n                        Clear selected\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"columns columns-right btn-group pull-right\">\r\n\r\n                    <div class=\"export btn-group\">\r\n                      <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\r\n                              type=\"button\" aria-expanded=\"false\"><i\r\n                              class=\"font-icon font-icon-download\"></i> <span class=\"caret\"></span>\r\n                      </button>\r\n                      <ul class=\"dropdown-menu\" role=\"menu\" style=\"min-width: fit-content;left: auto\">\r\n                        <li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>\r\n                        <li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>\r\n                        <li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>\r\n                        <li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>\r\n                        <li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>\r\n                        <li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </p-header>\r\n              <p-column>\r\n                <ng-template pTemplate=\"header\">\r\n                  <div class=\"table-check\">\r\n                    <div class=\"checkbox checkbox-only\">\r\n                      <input type=\"checkbox\"  id=\"table-check-head\" name=\"main_checkbox\" [(ngModel)]=\"main_checkbox\" (change)=\"cheakall($event.target.checked)\">\r\n                      <label for=\"table-check-head\"></label>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-col let-car=\"rowData\">\r\n\r\n                  <div class=\"table-check\">\r\n                    <div class=\"checkbox checkbox-only\">\r\n                      <input type=\"checkbox\"  name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\" (change)=\"chec()\" id=\"table-check-{{car['id']}}\">\r\n                      <label for=\"table-check-{{car['id']}}\"></label>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </p-column>\r\n\r\n              <p-column>\r\n\r\n                <ng-template pTemplate=\"header\">\r\n                  <div style=\"text-align: center; \" class=\"th-inner\">Influencer</div>\r\n                  <div class=\"fht-cell\"></div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-col let-car=\"rowData\">\r\n\r\n\r\n                  <a (click)=\"goTwitterProfile(car)\"\r\n                     title=\"{{car['name']}}\" style=\"text-align: left;\">\r\n                    <div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">\r\n                      <div class=\"mail-box-item-header\">\r\n\r\n                        <div class=\"mail-box-item-photo\">\r\n                          <img *ngIf=\"car['image_url']\"\r\n                               src=\"{{car['image_url']}}\"\r\n                               style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"\r\n                               data-placement=\"bottom\">\r\n\r\n                        </div>\r\n                        <div class=\"tbl mail-box-item-head-tbl\">\r\n                          <div class=\"tbl-row\">\r\n                            <div class=\"tbl-cell\">\r\n                              <div class=\"tbl mail-box-item-user-tbl\">\r\n                                <div class=\"tbl-row\">\r\n                                  <div class=\"tbl-cell tbl-cell-name\"\r\n                                       [innerHTML]=\"car['name']\"></div>\r\n                                  <!--<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>-->\r\n                                </div>\r\n                              </div>\r\n\r\n                            </div>\r\n                            <!--<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']-->\r\n                            <!--| uppercase}}</strong></div>-->\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"mail-box-item-content\">\r\n                        <!--<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>-->\r\n                        <div *ngIf=\"car['description']\" class=\"txt\" title=\"{{car['description']}}\"\r\n                             style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"\r\n                             [innerHTML]=\"car['description']\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column>\r\n                <ng-template pTemplate=\"header\">\r\n                  <div style=\"text-align: center; \" class=\"th-inner\">Contact</div>\r\n                  <div class=\"fht-cell\"></div>\r\n                </ng-template>\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                  <div class=\"col-item col-contact tooltips\">\r\n                    <ul>\r\n                      <li *ngIf=\"car['location']\">\r\n                        <div>\r\n                          <i class=\"fa fa-map-marker\"></i><!--ko text:AlexaCountry-->\r\n                          {{car['location']}}<!--/ko-->\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n\r\n                      </li>\r\n\r\n                    </ul>\r\n\r\n                  </div>\r\n\r\n\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [sortable]=\"true\" field=\"infscore.score\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <div style=\"text-align: center; \" class=\"th-inner\">Influence</div>\r\n                  <div class=\"fht-cell\"></div>\r\n                </ng-template>\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                  <div class=\"col-lg-1\"></div>\r\n\r\n                  <!--<div class=\"chart\" style=\" width: 175px;\">-->\r\n                    <!--<div class=\"bar bar-{{car['infscore']['score'] | round}} cyan\">-->\r\n                      <!--<div class=\"face top\">-->\r\n                        <!--<div class=\"growing-bar\"></div>-->\r\n                      <!--</div>-->\r\n                      <!--<div class=\"face side-0\">-->\r\n                        <!--<div class=\"growing-bar\"></div>-->\r\n                      <!--</div>-->\r\n                      <!--<div class=\"face floor\">-->\r\n                        <!--<div class=\"growing-bar\"></div>-->\r\n                      <!--</div>-->\r\n                      <!--<div class=\"face side-a\"></div>-->\r\n                      <!--<div class=\"face side-b\"></div>-->\r\n                      <!--<div class=\"face side-1\">-->\r\n                        <!--<div class=\"growing-bar\"></div>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n\r\n                  <round-progress [current]=\"car['infscore']['score'] | round\"\r\n                                  [max]=\"max\"\r\n                                  [color]=\"'#ca260f'\"\r\n                                  [background]=\"'#eaeaea'\"\r\n                                  [radius]=\"100\"\r\n                                  [stroke]=\"20\"\r\n                                  [semicircle]=\"false\"\r\n                                  [rounded]=\"false\"\r\n                                  [clockwise]=\"true\"\r\n                                  [responsive]=\"false\"\r\n                                  [duration]=\"800\"\r\n                                  [animation]=\"'easeInOutQuart'\"\r\n                                  [animationDelay]=\"5\"\r\n                                  style=\"margin: auto; max-width:100px; max-height: 100px;\"   >\r\n\r\n                  </round-progress>\r\n                  <div style=\"position: relative; bottom: 70px;font-size:22px;\">  {{car['infscore']['score'] | round}} %</div>\r\n\r\n\r\n\r\n                </ng-template>\r\n              </p-column>\r\n\r\n              <!--<p-column field=\"location\" header=\"Location\"></p-column>-->\r\n              <p-column>\r\n                <ng-template pTemplate=\"header\">\r\n                  <div style=\"text-align: center; \" class=\"th-inner\">Interests</div>\r\n                  <div class=\"fht-cell\"></div>\r\n\r\n                </ng-template>\r\n\r\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\r\n                  <div class=\"col-lg-1\"></div>\r\n                  <button type=\"text\" (click)=\"fillinterests(car)\" pButton\r\n                          class=\"btn btn-rounded btn-inline btn-info\">Show Interests\r\n                  </button>\r\n                </ng-template>\r\n\r\n              </p-column>\r\n              <p-column>\r\n                <ng-template pTemplate=\"header\">\r\n                  <div style=\"text-align: center; \" class=\"th-inner\">Twitter Stats</div>\r\n                  <div class=\"fht-cell\"></div>\r\n\r\n                </ng-template>\r\n\r\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <button type=\"text\" (click)=\"filltwitterdata(car)\" pButton\r\n                          class=\"btn btn-rounded btn-inline btn-info\">Show\r\n                  </button>\r\n\r\n\r\n                </ng-template>\r\n\r\n              </p-column>\r\n\r\n\r\n            </p-dataTable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <p-dialog *ngIf=\"dialogVisible_features\" [(visible)]=\"dialogVisible_features\" [responsive]=\"true\" showEffect=\"fade\"\r\n              [modal]=\"true\" width=\"450\">\r\n      <p-header *ngIf=\"dialogVisible_features\">\r\n\r\n        Interests of {{interests.name}}\r\n\r\n      </p-header>\r\n      <ul class=\"list-group\">\r\n        <li *ngIf=\"interests.infscore.interests\" class=\"list-group-item\">Interests:\r\n          <ul>\r\n            <li *ngFor=\"let c of interests.infscore.interests\" class=\"list-group-item\"\r\n                style=\"text-align: right;\">{{c}}\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li *ngIf=\"interests.trend \" class=\"list-group-item\">Category:\r\n          <ul>\r\n            <li>\r\n              <ul *ngFor=\"let c of interests.trend \" class=\"list-group-item\" style=\"text-align: right;\">\r\n                <li *ngFor=\"let cat of c.category | unique: 'name'\">\r\n                  {{cat.name}}\r\n\r\n                </li>\r\n                <li *ngIf=\"!c.location\">\r\n                {{c.name}}\r\n              </li>\r\n\r\n                <!--<li *ngFor=\"let c of interests.trend\" class=\"list-group-item\" style=\"text-align: right;\"> <span *ngIf=\"c.category[1].name\">{{c.category[1].name}}</span></li>-->\r\n              </ul>\r\n\r\n            </li>\r\n            <li>\r\n              <!--<ul *ngFor=\"let c of interests.trend \" class=\"list-group-item\" style=\"text-align: right;\">-->\r\n               <!---->\r\n                <!--&lt;!&ndash;<li *ngFor=\"let c of interests.trend\" class=\"list-group-item\" style=\"text-align: right;\"> <span *ngIf=\"c.category[1].name\">{{c.category[1].name}}</span></li>&ndash;&gt;-->\r\n              <!--</ul>-->\r\n\r\n            </li>\r\n            <!--<li *ngIf=\"interests.infscore.interests\" class=\"list-group-item\">Interests:-->\r\n            <!--<ul>-->\r\n            <!--<li *ngFor=\"let c of interests.infscore.interests\" class=\"list-group-item\" style=\"text-align: right;\">{{c}}</li>-->\r\n            <!--</ul>-->\r\n            <!--</li>-->\r\n          </ul>\r\n      </ul>\r\n    </p-dialog>\r\n\r\n    <p-dialog *ngIf=\"dialogVisible\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\r\n              width=\"450\">\r\n      <p-header *ngIf=\"dialogVisible\">\r\n\r\n        Stats of {{twitterdata.name}}\r\n\r\n      </p-header>\r\n      <ul class=\"list-group\">\r\n        <li *ngIf=\"twitterdata.followers_count\" class=\"list-group-item\"><span>Followers:</span>\r\n          <span style=\"float: right;\">{{twitterdata.followers_count}}</span></li>\r\n\r\n        <li *ngIf=\"twitterdata.favourites_count\" class=\"list-group-item\"><span>Favourites:</span>\r\n          <span style=\"float: right;\">{{twitterdata.favourites_count}}</span></li>\r\n        <li *ngIf=\"twitterdata.friends_count\" class=\"list-group-item\"><span>Friends:</span>\r\n          <span style=\"float: right;\">{{twitterdata.friends_count}}</span></li>\r\n\r\n\r\n      </ul>\r\n    </p-dialog>\r\n\r\n    <div class=\"container-fluid\" *ngIf=\"loaded\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/twitter-list/twitter-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);\nh3 {\n  font-family: Ubuntu;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 15.4px; }\n#wrapper {\n  /*background-color: green; !* for vizualization purposes *!*/\n  text-align: center; }\n#yourdiv {\n  /*background-color: red; !* for vizualization purposes *!*/\n  display: inline-block; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1em;\n  text-align: center;\n  color: #444;\n  background: #d0d0d0; }\nh1 {\n  font-size: 2.5em;\n  margin: 2em 0 .5em; }\nh2 {\n  margin-bottom: 3em; }\nem,\nstrong {\n  font-weight: 700; }\ninput {\n  display: none; }\nheader p {\n  margin-bottom: 0; }\nsection {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 2em;\n  padding: 0; }\nsection:last-of-type {\n    margin-bottom: 0; }\nsection article {\n    -ms-grid-row-align: center;\n        align-self: center;\n    width: 20em;\n    margin-bottom: 2em; }\nsection article p, section article:last-of-type {\n      margin-bottom: 0; }\np {\n  line-height: 1.5em;\n  max-width: 20em;\n  margin: 1.5em auto 2em;\n  padding-bottom: 1.5em; }\np span {\n    display: block; }\n.container {\n  z-index: 1;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 4em; }\n/*\r\n*\r\n*\r\nSTART // CHART'S RULES\r\n -> \"if you're picking code, don't forget the variables :)\"\r\n*/\n.chart {\n  font-size: 1em;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible; }\n.bar {\n  font-size: 1em;\n  position: relative;\n  height: 10em;\n  transition: all 0.3s ease-in-out;\n  -webkit-transform: rotateX(60deg) rotateY(0deg);\n          transform: rotateX(60deg) rotateY(0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n.bar .face {\n    font-size: 2em;\n    position: relative;\n    width: 100%;\n    height: 2em;\n    background-color: rgba(254, 254, 254, 0.3); }\n.bar .face.side-a, .bar .face.side-b {\n      width: 2em; }\n.bar .side-a {\n    -webkit-transform: rotateX(90deg) rotateY(-90deg) translateX(2em) translateY(1em) translateZ(1em);\n            transform: rotateX(90deg) rotateY(-90deg) translateX(2em) translateY(1em) translateZ(1em); }\n.bar .side-b {\n    -webkit-transform: rotateX(90deg) rotateY(-90deg) translateX(4em) translateY(1em) translateZ(-1em);\n            transform: rotateX(90deg) rotateY(-90deg) translateX(4em) translateY(1em) translateZ(-1em);\n    position: absolute;\n    right: 0; }\n.bar .side-0 {\n    -webkit-transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(-1em);\n            transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(-1em); }\n.bar .side-1 {\n    -webkit-transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(3em);\n            transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(3em); }\n.bar .top {\n    -webkit-transform: rotateX(0deg) rotateY(0) translateX(0em) translateY(4em) translateZ(2em);\n            transform: rotateX(0deg) rotateY(0) translateX(0em) translateY(4em) translateZ(2em); }\n.bar .floor {\n    box-shadow: 0 0.1em 0.6em rgba(0, 0, 0, 0.3), 0.6em -0.5em 3em rgba(0, 0, 0, 0.3), 1em -1em 8em #fefefe; }\n.growing-bar {\n  transition: all 0.3s ease-in-out;\n  background-color: rgba(236, 0, 140, 0.6);\n  width: 100%;\n  height: 2em; }\n.bar.yellow .side-a,\n.bar.yellow .growing-bar {\n  background-color: rgba(241, 196, 15, 0.6); }\n.bar.yellow .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em rgba(241, 196, 15, 0.8); }\n.bar.yellow .floor .growing-bar {\n  box-shadow: 0em 0em 2em rgba(241, 196, 15, 0.8); }\n.bar.red .side-a, input[id='red']:checked ~ .chart .side-a,\n.bar.red .growing-bar,\ninput[id='red']:checked ~ .chart .growing-bar {\n  background-color: rgba(236, 0, 140, 0.6); }\n.bar.red .side-0 .growing-bar, input[id='red']:checked ~ .chart .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em rgba(236, 0, 140, 0.8); }\n.bar.red .floor .growing-bar, input[id='red']:checked ~ .chart .floor .growing-bar {\n  box-shadow: 0em 0em 2em rgba(236, 0, 140, 0.8); }\n.bar.cyan .side-a, input[id='cyan']:checked ~ .chart .side-a,\n.bar.cyan .growing-bar,\ninput[id='cyan']:checked ~ .chart .growing-bar {\n  background-color: rgba(87, 202, 244, 0.6); }\n.bar.cyan .side-0 .growing-bar, input[id='cyan']:checked ~ .chart .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #57caf4; }\n.bar.cyan .floor .growing-bar, input[id='cyan']:checked ~ .chart .floor .growing-bar {\n  box-shadow: 0em 0em 2em #57caf4; }\n.bar.navy .side-a,\n.bar.navy .growing-bar {\n  background-color: rgba(10, 64, 105, 0.6); }\n.bar.navy .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em rgba(10, 64, 105, 0.8); }\n.bar.navy .floor .growing-bar {\n  box-shadow: 0em 0em 2em rgba(10, 64, 105, 0.8); }\n.bar.lime .side-a, input[id='lime']:checked ~ .chart .side-a,\n.bar.lime .growing-bar,\ninput[id='lime']:checked ~ .chart .growing-bar {\n  background-color: rgba(118, 201, 0, 0.6); }\n.bar.lime .side-0 .growing-bar, input[id='lime']:checked ~ .chart .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #76c900; }\n.bar.lime .floor .growing-bar, input[id='lime']:checked ~ .chart .floor .growing-bar {\n  box-shadow: 0em 0em 2em #76c900; }\n.bar.white .side-a,\n.bar.white .growing-bar {\n  background-color: rgba(254, 254, 254, 0.6); }\n.bar.white .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #fefefe; }\n.bar.white .floor .growing-bar {\n  box-shadow: 0em 0em 2em #fefefe; }\n.bar.gray .side-a,\n.bar.gray .growing-bar {\n  background-color: rgba(68, 68, 68, 0.6); }\n.bar.gray .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #444; }\n.bar.gray .floor .growing-bar {\n  box-shadow: 0em 0em 2em #444; }\n.chart .bar.yellow-face .face {\n  background-color: rgba(241, 196, 15, 0.2); }\n.chart .bar.lime-face .face {\n  background-color: rgba(118, 201, 0, 0.2); }\n.chart .bar.red-face .face {\n  background-color: rgba(236, 0, 140, 0.2); }\n.chart .bar.navy-face .face {\n  background-color: rgba(10, 64, 105, 0.2); }\n.chart .bar.cyan-face .face {\n  background-color: rgba(87, 202, 244, 0.2); }\n.chart .bar.gray-face .face {\n  background-color: rgba(68, 68, 68, 0.2); }\n.chart .bar.lightGray-face .face {\n  background-color: rgba(145, 144, 144, 0.2); }\n.bar-0 .growing-bar {\n  width: 0%; }\n.bar-1 .growing-bar {\n  width: 1%; }\n.bar-2 .growing-bar {\n  width: 2%; }\n.bar-3 .growing-bar {\n  width: 3%; }\n.bar-4 .growing-bar {\n  width: 4%; }\n.bar-5 .growing-bar {\n  width: 5%; }\n.bar-6 .growing-bar {\n  width: 6%; }\n.bar-7 .growing-bar {\n  width: 7%; }\n.bar-8 .growing-bar {\n  width: 8%; }\n.bar-9 .growing-bar {\n  width: 9%; }\n.bar-10 .growing-bar {\n  width: 10%; }\n.bar-11 .growing-bar {\n  width: 11%; }\n.bar-12 .growing-bar {\n  width: 12%; }\n.bar-13 .growing-bar {\n  width: 13%; }\n.bar-14 .growing-bar {\n  width: 14%; }\n.bar-15 .growing-bar {\n  width: 15%; }\n.bar-16 .growing-bar {\n  width: 16%; }\n.bar-17 .growing-bar {\n  width: 17%; }\n.bar-18 .growing-bar {\n  width: 18%; }\n.bar-19 .growing-bar {\n  width: 19%; }\n.bar-20 .growing-bar, input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar {\n  width: 20%; }\n.bar-21 .growing-bar {\n  width: 21%; }\n.bar-22 .growing-bar {\n  width: 22%; }\n.bar-23 .growing-bar {\n  width: 23%; }\n.bar-24 .growing-bar {\n  width: 24%; }\n.bar-25 .growing-bar, input[id='pos-0']:checked ~ .chart .growing-bar {\n  width: 25%; }\n.bar-26 .growing-bar {\n  width: 26%; }\n.bar-27 .growing-bar {\n  width: 27%; }\n.bar-28 .growing-bar {\n  width: 28%; }\n.bar-29 .growing-bar {\n  width: 29%; }\n.bar-30 .growing-bar {\n  width: 30%; }\n.bar-31 .growing-bar {\n  width: 31%; }\n.bar-32 .growing-bar {\n  width: 32%; }\n.bar-33 .growing-bar {\n  width: 33%; }\n.bar-34 .growing-bar {\n  width: 34%; }\n.bar-35 .growing-bar {\n  width: 35%; }\n.bar-36 .growing-bar {\n  width: 36%; }\n.bar-37 .growing-bar {\n  width: 37%; }\n.bar-38 .growing-bar {\n  width: 38%; }\n.bar-39 .growing-bar {\n  width: 39%; }\n.bar-40 .growing-bar {\n  width: 40%; }\n.bar-41 .growing-bar {\n  width: 41%; }\n.bar-42 .growing-bar {\n  width: 42%; }\n.bar-43 .growing-bar {\n  width: 43%; }\n.bar-44 .growing-bar {\n  width: 44%; }\n.bar-45 .growing-bar {\n  width: 45%; }\n.bar-46 .growing-bar {\n  width: 46%; }\n.bar-47 .growing-bar {\n  width: 47%; }\n.bar-48 .growing-bar {\n  width: 48%; }\n.bar-49 .growing-bar {\n  width: 49%; }\n.bar-50 .growing-bar, input[id='pos-1']:checked ~ .chart .growing-bar, input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar, input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar, input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar {\n  width: 50%; }\n.bar-51 .growing-bar {\n  width: 51%; }\n.bar-52 .growing-bar {\n  width: 52%; }\n.bar-53 .growing-bar {\n  width: 53%; }\n.bar-54 .growing-bar {\n  width: 54%; }\n.bar-55 .growing-bar {\n  width: 55%; }\n.bar-56 .growing-bar {\n  width: 56%; }\n.bar-57 .growing-bar {\n  width: 57%; }\n.bar-58 .growing-bar {\n  width: 58%; }\n.bar-59 .growing-bar {\n  width: 59%; }\n.bar-60 .growing-bar {\n  width: 60%; }\n.bar-61 .growing-bar {\n  width: 61%; }\n.bar-62 .growing-bar {\n  width: 62%; }\n.bar-63 .growing-bar {\n  width: 63%; }\n.bar-64 .growing-bar {\n  width: 64%; }\n.bar-65 .growing-bar {\n  width: 65%; }\n.bar-66 .growing-bar {\n  width: 66%; }\n.bar-67 .growing-bar {\n  width: 67%; }\n.bar-68 .growing-bar {\n  width: 68%; }\n.bar-69 .growing-bar {\n  width: 69%; }\n.bar-70 .growing-bar, input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar, input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar, input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar {\n  width: 70%; }\n.bar-71 .growing-bar {\n  width: 71%; }\n.bar-72 .growing-bar {\n  width: 72%; }\n.bar-73 .growing-bar {\n  width: 73%; }\n.bar-74 .growing-bar {\n  width: 74%; }\n.bar-75 .growing-bar, input[id='pos-2']:checked ~ .chart .growing-bar {\n  width: 75%; }\n.bar-76 .growing-bar {\n  width: 76%; }\n.bar-77 .growing-bar {\n  width: 77%; }\n.bar-78 .growing-bar {\n  width: 78%; }\n.bar-79 .growing-bar {\n  width: 79%; }\n.bar-80 .growing-bar, input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar {\n  width: 80%; }\n.bar-81 .growing-bar {\n  width: 81%; }\n.bar-82 .growing-bar {\n  width: 82%; }\n.bar-83 .growing-bar {\n  width: 83%; }\n.bar-84 .growing-bar {\n  width: 84%; }\n.bar-85 .growing-bar {\n  width: 85%; }\n.bar-86 .growing-bar {\n  width: 86%; }\n.bar-87 .growing-bar {\n  width: 87%; }\n.bar-88 .growing-bar {\n  width: 88%; }\n.bar-89 .growing-bar {\n  width: 89%; }\n.bar-90 .growing-bar {\n  width: 90%; }\n.bar-91 .growing-bar {\n  width: 91%; }\n.bar-92 .growing-bar {\n  width: 92%; }\n.bar-93 .growing-bar {\n  width: 93%; }\n.bar-94 .growing-bar {\n  width: 94%; }\n.bar-95 .growing-bar {\n  width: 95%; }\n.bar-96 .growing-bar {\n  width: 96%; }\n.bar-97 .growing-bar {\n  width: 97%; }\n.bar-98 .growing-bar {\n  width: 98%; }\n.bar-99 .growing-bar {\n  width: 99%; }\n.bar-100 .growing-bar, input[id='pos-3']:checked ~ .chart .growing-bar, input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar {\n  width: 100%; }\n/*\r\nEND // CHART'S RULES\r\n*\r\n*\r\n*/\n.chart.grid {\n  display: flex;\n  flex-direction: row; }\n.chart.grid .exercise {\n    flex: 0 0 100%;\n    display: flex; }\n.chart.grid .exercise .bar {\n      flex: 1;\n      margin: 0 .5em; }\n.chart.grid .exercise .bar:nth-child(2) {\n        z-index: 8;\n        flex: 1 0 40%; }\n.chart.grid .exercise .bar:first-child {\n        z-index: 10;\n        margin-left: 0; }\n.chart.grid .exercise .bar:last-child {\n        margin-right: 0; }\n.actions {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0;\n  padding-bottom: 2em;\n  border-bottom: 1px dotted rgba(68, 68, 68, 0.4); }\nlabel {\n  box-sizing: border-box;\n  padding: 1em;\n  margin: 0 .2em;\n  cursor: pointer;\n  transition: all .15s ease-in-out;\n  color: #0a4069;\n  border: 1px solid rgba(254, 254, 254, 0.6);\n  border-radius: 0;\n  flex: 1; }\nlabel:first-child {\n    margin-left: 0;\n    border-radius: .2em 0 0 .2em; }\nlabel:last-child {\n    margin-right: 0;\n    border-radius: 0 .2em .2em 0; }\ninput[id='exercise-1']:checked ~ .actions label[for='exercise-1'],\ninput[id='exercise-2']:checked ~ .actions label[for='exercise-2'],\ninput[id='exercise-3']:checked ~ .actions label[for='exercise-3'],\ninput[id='exercise-4']:checked ~ .actions label[for='exercise-4'],\ninput[id='pos-0']:checked ~ .actions label[for='pos-0'],\ninput[id='pos-1']:checked ~ .actions label[for='pos-1'],\ninput[id='pos-2']:checked ~ .actions label[for='pos-2'],\ninput[id='pos-3']:checked ~ .actions label[for='pos-3'],\ninput[id='red']:checked ~ .actions label[for='red'],\ninput[id='cyan']:checked ~ .actions label[for='cyan'],\ninput[id='lime']:checked ~ .actions label[for='lime'] {\n  color: #76c900;\n  border: 1px solid #031523;\n  background-color: #0a4069; }\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(1) {\n  flex: 1 0 0%; }\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(2) {\n  flex: 1; }\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(3) {\n  flex: 1 0 30%; }\ninput[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(1), input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(2), input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(3) {\n  flex: 1; }\ninput[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(1), input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(2) {\n  flex: 1 0 30%; }\ninput[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(3) {\n  flex: 1; }\n.SickyPage {\n  position: fixed;\n  top: 79px;\n  background: #eceff4;\n  z-index: 9;\n  width: 86%; }\n"

/***/ }),

/***/ "./src/app/twitter-list/twitter-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.component.ts ***!
  \********************************************************/
/*! exports provided: TwitterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterListComponent", function() { return TwitterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TwitterListComponent = /** @class */ (function () {
    function TwitterListComponent(http, httpNoPreloader, route, router, pagerService) {
        this.http = http;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.router = router;
        this.pagerService = pagerService;
        this.inflist = {};
        this.max = 100;
        this.user_list = {};
        this.loaded = false;
        this.loading = false;
        this.pager = {};
    }
    TwitterListComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    TwitterListComponent.prototype.saveEditable = function (t) {
        var _this = this;
        this.loading = true;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/update_name_ilist_twitter/', JSON.stringify({
            id: this.searchQuery,
            name: t
        }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
            localStorage.removeItem('selected_list_twitter');
            localStorage.setItem('selected_list_twitter', JSON.stringify({ id: _this.searchQuery, name: t }));
            _this.list_name = t;
            _this.loading = false;
        });
    };
    TwitterListComponent.prototype.fillinterests = function (data) {
        this.interests = data;
        this.dialogVisible_features = true;
    };
    TwitterListComponent.prototype.update_delete_list = function () {
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            mysvc.put(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/update_delete_ilist_twitter/', JSON.stringify({
                id: _this.searchQuery,
                list: list
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.setPage(1);
                for (var i in _this.inflist) {
                    // this.inflist[i['id']] = e;
                    _this.inflist[i] = false;
                }
                _this.main_checkbox = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', '', 'success');
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', '', 'success');
            }
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        });
    };
    TwitterListComponent.prototype.filltwitterdata = function (data) {
        // data
        this.twitterdata = data;
        this.dialogVisible = true;
    };
    TwitterListComponent.prototype.setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.loaded = false;
        this.sub = this.route.params.subscribe(function (params) {
            if (Number(params['query'])) {
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/get_list_inf_twitter/' + params['query'] + '/?page=' + page, { headers: headers }, 'full')
                    .subscribe(function (res) {
                    _this.main_checkbox = false;
                    _this.influencers = res.json();
                    _this.list_name = res.json().name;
                    _this.searchQuery = params['query'];
                    _this.loaded = true;
                    _this.pager = _this.pagerService.getPager(_this.influencers['totalItems'], page, 20);
                }, function (error) {
                    _this.router.navigate(['page-not-found']);
                });
            }
            else {
                _this.router.navigate(['page-not-found']);
            }
        });
    };
    // goTwitterProfile(influencer) {
    //     let url = 'https://twitter.com/' + influencer.screen_name.replace("('", '').replace("',)", '');
    //     Swal({
    //         title: 'You&#39;re Leaving This Site!',
    //         text: 'This is a link to an external site. Click OK to continue to the content (' + url + ').',
    //         // html: true,
    //         confirmButtonColor: '#2ecc71',
    //         showCancelButton: true,
    //
    //     }).then(() => {
    //
    //         window.open(url);
    //
    //
    //     }, (dismiss) => {
    //         // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
    //         if (dismiss === 'cancel') {
    //             // localStorage.removeItem('selected_list_twitter');
    //
    //             Swal(
    //                 'Cancelled',
    //                 '',
    //                 'success'
    //             )
    //         }
    //     });
    // }
    TwitterListComponent.prototype.chec = function () {
        console.clear();
        console.log(this.inflist);
    };
    TwitterListComponent.prototype.add_create_list = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.httpNoPreloader.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml' + '/get_iList_names_twitter/' + currentUser.username + '/-id/', { headers: headers })
            .subscribe(function (res) {
            for (var _i = 0, _a = res.json().results; _i < _a.length; _i++) {
                var li = _a[_i];
                _this.user_list[li['id']] = li['name'];
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
                    // console.log({name: result.value, list: list, username: currentUser.username});
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
                                    mysvc.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '' + '/check_ilist_twitter/', JSON.stringify({
                                        name: result.value,
                                        username: currentUser.username
                                    }), { headers: headers_1 }).map(function (response) { return response.json(); }).subscribe(function (data) {
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
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
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
                                console.log({ name: result.value, list: list, username: currentUser.username });
                                for (var i in _this.inflist) {
                                    // this.inflist[i['id']] = e;
                                    _this.inflist[i] = false;
                                }
                                _this.main_checkbox = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('List updated!', '', 'success');
                            }, function (error) {
                                // alert('error')
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Try again after some time!', error.toString(), 'error');
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
    TwitterListComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    TwitterListComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
        console.log(this.inflist);
    };
    TwitterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-list',
            template: __webpack_require__(/*! ./twitter-list.component.html */ "./src/app/twitter-list/twitter-list.component.html"),
            styles: [__webpack_require__(/*! ./twitter-list.component.scss */ "./src/app/twitter-list/twitter-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"]])
    ], TwitterListComponent);
    return TwitterListComponent;
}());



/***/ }),

/***/ "./src/app/twitter-list/twitter-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.module.ts ***!
  \*****************************************************/
/*! exports provided: TwitterListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterListModule", function() { return TwitterListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _services_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/paginator.service */ "./src/app/_services/paginator.service.ts");
/* harmony import */ var _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/roundpipe.module */ "./src/app/home/roundpipe.module.ts");
/* harmony import */ var _twitter_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./twitter-list.component */ "./src/app/twitter-list/twitter-list.component.ts");
/* harmony import */ var _twitter_list_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twitter-list.routing */ "./src/app/twitter-list/twitter-list.routing.ts");
/* harmony import */ var ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-inline-editor */ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TwitterListModule = /** @class */ (function () {
    function TwitterListModule() {
    }
    TwitterListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_twitter_list_routing__WEBPACK_IMPORTED_MODULE_9__["TwitterListRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"], ng2_inline_editor__WEBPACK_IMPORTED_MODULE_10__["InlineEditorModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _home_roundpipe_module__WEBPACK_IMPORTED_MODULE_7__["RoundpipeModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"]],
            declarations: [_twitter_list_component__WEBPACK_IMPORTED_MODULE_8__["TwitterListComponent"]],
            providers: [_services_paginator_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]]
        })
    ], TwitterListModule);
    return TwitterListModule;
}());



/***/ }),

/***/ "./src/app/twitter-list/twitter-list.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/twitter-list/twitter-list.routing.ts ***!
  \******************************************************/
/*! exports provided: TwitterListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterListRoutes", function() { return TwitterListRoutes; });
/* harmony import */ var _twitter_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twitter-list.component */ "./src/app/twitter-list/twitter-list.component.ts");

var TwitterListRoutes = [{
        path: '',
        component: _twitter_list_component__WEBPACK_IMPORTED_MODULE_0__["TwitterListComponent"],
        data: {
            heading: '',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=twitter-list-twitter-list-module.js.map