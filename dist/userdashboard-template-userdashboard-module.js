(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userdashboard-template-userdashboard-module"],{

/***/ "./src/app/userdashboard-template/userdashboard-template.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/userdashboard-template/userdashboard-template.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div *ngIf=\"loaded\">-->\r\n<div class=\"page-content\">\r\n    <div class=\"container-fluid padding-zero\">\r\n        <mat-tab-group (selectedIndexChange)=\"selectedIndexChange($event)\" style=\"background: #ffffff; -webkit-box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important;\r\n    box-shadow: 0 3px 5px 0 rgba(0,0,0,.5),0 6px 20px 0 rgba(0,0,0,.19)!important; \"\r\n                      [selectedIndex]=\"selectedIndex\">\r\n\r\n\r\n            <mat-tab class=\"font-icon font-icon-page\" label=\"Web\" style=\"margin: 0 auto\">\r\n                <ng-template mat-tab-label style=\"background: white\">\r\n                          <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-globe\"></i>\r\n\t\t\t\t\t\t\t\t\t\tWeb\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                </ng-template>\r\n                <br>\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"margin: 0 auto; width: 90%\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-8 pull-right\">\r\n                                                <!-- <mat-select (change)=\"sort_lists()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of blog_choices\" [value]=\"choice.code\">{{ choice.name }}</mat-option>\r\n                                                </mat-select> -->\r\n                                                <mat-form-field class=\"w-100\">\r\n                                                    <mat-label>Sort By</mat-label>\r\n                                                    <mat-select  (change)=\"sort_lists()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\">\r\n                                                      <mat-option *ngFor=\"let choice of blog_choices\" [value]=\"choice.code\">\r\n                                                        {{ choice.name }}\r\n                                                      </mat-option>\r\n                                                    </mat-select>\r\n                                                  </mat-form-field>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-4 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-priamry crete-list-button\" (click)=\"create_empty_list()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"sh-n-table row\" >-->\r\n                            <!--<table>-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th>List Name</th>-->\r\n                                    <!--<th>Total Influencers</th>-->\r\n                                    <!--<th>Add Influencers</th>-->\r\n                                    <!--<th>Edit</th>-->\r\n                                    <!--<th>Email</th>-->\r\n                                    <!--<th>Delete</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody >-->\r\n                                <!--<tr *ngFor=\"let li of user_lists_web;let i=index\">-->\r\n                                    <!--<td >-->\r\n                                        <!--<a style=\"font-size: 17px;\" (click)=\"go_to_list(li.id,li.name)\">-->\r\n                                        <!--{{li.name }}-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td >-->\r\n                                        <!--<span class=\"block-ellipsis\"> {{li.influencers_count}}</span>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to add influencers in this list\">-->\r\n                                        <!--<a (click)=\"select_add_influencers(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-plus\" ></i>-->\r\n\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td  title=\"Click to Edit this list\">-->\r\n                                        <!--<a (click)=\"go_to_list(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-pencil\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Email this Infleuncer\">-->\r\n                                        <!--<a (click)=\"email_list(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Delete this influencer\">-->\r\n                                        <!--<a (click)=\"delete_list(li.id)\">-->\r\n                                            <!--<i class=\"fab fa-trash\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n                        <!--</div>-->\r\n\r\n\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                        <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                        <div class=\"sortable\">\r\n                        <section class=\"box-typical task-card task\">\r\n                        <div class=\"task-card-photo\">\r\n                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                        </div>\r\n                        <div class=\"task-card-in\">\r\n                        <!--<input type=\"checkbox\" style=\"zoom: 1.5\">-->\r\n                        <!--<div class=\"btn-group task-card-menu\">-->\r\n                        <!--<button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"-->\r\n                        <!--aria-expanded=\"false\">-->\r\n                        <!--<i class=\"font-icon-dots-vert-square\"></i>-->\r\n                        <!--</button>-->\r\n                        <!--<div class=\"dropdown-menu dropdown-menu-right\">-->\r\n                        <!--<a class=\"dropdown-item\" (click)=\"go_to_list(li.id,li.name)\"><i-->\r\n                        <!--class=\"font-icon font-icon-pencil\"></i>Edit</a>-->\r\n                        <!--<a class=\"dropdown-item\" (click)=\"email_list(li.id,li.name)\"><i-->\r\n                        <!--class=\"font-icon font-icon-mail\"></i>Email</a>-->\r\n                        <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"#\"><i class=\"font-icon font-icon-archive\"></i>Archive</a>&ndash;&gt;-->\r\n                        <!--<a class=\"dropdown-item\" (click)=\"delete_list(li.id)\"><i-->\r\n                        <!--class=\"font-icon font-icon-trash\"></i>Delete</a>-->\r\n                        <!--</div>-->\r\n                        <!--</div>-->\r\n                            <div class=\"task-card-title-label text-center\">\r\n                                <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                            </div>\r\n                        <div class=\"task-card-title text-center\">\r\n                        <!--<div class=\"button__holder\">-->\r\n                            <!--<button class=\"plus\"-->\r\n                        <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                        <!--</div>-->\r\n                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers(li.id, li.name) \">\r\n                                Add Influencers\r\n                            </button>\r\n                        </div>\r\n\r\n                        </div>\r\n                        <div class=\"task-card-footer\">\r\n                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list(li.id, li.name)\">\r\n                            <i class=\"fa  fa-edit\"></i>\r\n                        </div>\r\n                            <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                <!--<i class=\"fab fa-envelope\"></i>-->\r\n                            <!--</div>-->\r\n                            <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                <!---->\r\n                            <!--</div>-->\r\n                        <div class=\"avatar-preview avatar-preview-32\">\r\n                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_list(li.id, li.name)\"></i>\r\n                        </div>\r\n                        </div>\r\n                        </section>\r\n                        </div>\r\n                        </div>\r\n                        <!--</section>&lt;!&ndash;.task-card&ndash;&gt;-->\r\n\r\n\r\n                        <!--</div>-->\r\n                        <!--</div>&lt;!&ndash;.tasks-grid-col&ndash;&gt;-->\r\n                    </div><!--.tasks-grid-->\r\n\r\n                </div><!--.tab-pane-->\r\n            </mat-tab>\r\n            <mat-tab label=\"Twitter\">\r\n                <ng-template mat-tab-label>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\tTwitter\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"margin: 0 auto; width: 90%\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select style=\"width:60%; float: right\" (change)=\"sort_lists_twitter()\" name=\"selected_choice\"\r\n                                                           [(ngModel)]=\"selected_choice_twitter\"\r\n                                                           placeholder=\"Sort By\">\r\n                                                    <mat-option *ngFor=\"let choice of choices_twitter\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_twitter()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--<div class=\"sh-n-table row\" >-->\r\n                            <!--<table>-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th>List Name</th>-->\r\n                                    <!--<th>Total Influencers</th>-->\r\n                                    <!--<th>Add Influencers</th>-->\r\n                                    <!--<th>Edit</th>-->\r\n                                    <!--<th>Email</th>-->\r\n                                    <!--<th>Delete</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody >-->\r\n                                <!--<tr *ngFor=\"let li of user_lists.results;let i=index\">-->\r\n                                    <!--<td>-->\r\n                                        <!--<a style=\"font-size: 17px;\" (click)=\"go_to_list_twitter(li.id,li.name)\">-->\r\n                                            <!--{{li.name }}-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td >-->\r\n                                        <!--<span class=\"block-ellipsis\"> {{li.influencers_count}}</span>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to add influencers in this list\">-->\r\n                                        <!--<a (click)=\"select_add_influencers_twitter(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-plus\" ></i>-->\r\n\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td  title=\"Click to Edit this list\">-->\r\n                                        <!--<a (click)=\"go_to_list_twitter(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-pencil\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Email this Infleuncer\">-->\r\n                                        <!--<a (click)=\"email_list_twitter(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Delete this influencer\">-->\r\n                                        <!--<a (click)=\"delete_list_twitter(li.id)\">-->\r\n                                            <!--<i class=\"fab fa-trash\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n                        <!--</div>-->\r\n\r\n\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n                                        <!--<input type=\"checkbox\" style=\"zoom: 1.5\">-->\r\n                                        <!--<div class=\"btn-group task-card-menu\">-->\r\n                                        <!--<button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"-->\r\n                                        <!--aria-expanded=\"false\">-->\r\n                                        <!--<i class=\"font-icon-dots-vert-square\"></i>-->\r\n                                        <!--</button>-->\r\n                                        <!--<div class=\"dropdown-menu dropdown-menu-right\">-->\r\n                                        <!--<a class=\"dropdown-item\" (click)=\"go_to_list(li.id,li.name)\"><i-->\r\n                                        <!--class=\"font-icon font-icon-pencil\"></i>Edit</a>-->\r\n                                        <!--<a class=\"dropdown-item\" (click)=\"email_list(li.id,li.name)\"><i-->\r\n                                        <!--class=\"font-icon font-icon-mail\"></i>Email</a>-->\r\n                                        <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"#\"><i class=\"font-icon font-icon-archive\"></i>Archive</a>&ndash;&gt;-->\r\n                                        <!--<a class=\"dropdown-item\" (click)=\"delete_list(li.id)\"><i-->\r\n                                        <!--class=\"font-icon font-icon-trash\"></i>Delete</a>-->\r\n                                        <!--</div>-->\r\n                                        <!--</div>-->\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n                                            <!--<div class=\"button__holder\">-->\r\n                                            <!--<button class=\"plus\"-->\r\n                                            <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                            <!--</div>-->\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers_twitter(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_twitter(li.id, li.name)\">\r\n                                            <i class=\"fa fa-edit\"></i>\r\n                                        </div>\r\n                                        <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_twitter(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                        <!---->\r\n                                        <!--</div>-->\r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_list_twitter(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--<div *ngFor=\"let li of user_lists.results; let i = index\"-->\r\n                        <!--[ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col purple': i%2===0, 'tasks-grid-col green': i%1===0}\">-->\r\n                        <!--&lt;!&ndash;<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>&ndash;&gt;-->\r\n\r\n                        <!--<div class=\"sortable\">-->\r\n                        <!--<section class=\"box-typical task-card task\">-->\r\n                        <!--<div class=\"task-card-photo\">-->\r\n                        <!--&lt;!&ndash;<img src=\"img/img-task.jpg\" alt=\"\">&ndash;&gt;-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"task-card-in\">-->\r\n                        <!--<div class=\"btn-group task-card-menu\">-->\r\n                        <!--<button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"-->\r\n                        <!--aria-expanded=\"false\">-->\r\n                        <!--<i class=\"font-icon-dots-vert-square\"></i>-->\r\n                        <!--</button>-->\r\n                        <!--<div class=\"dropdown-menu dropdown-menu-right\">-->\r\n                        <!--<a class=\"dropdown-item\" (click)=\"go_to_list_twitter(li.id,li.name)\"><i-->\r\n                        <!--class=\"font-icon font-icon-pencil\"></i>Edit</a>-->\r\n                        <!--<a class=\"dropdown-item\" (click)=\"email_list_twitter(li.id,li.name)\"><i-->\r\n                        <!--class=\"font-icon font-icon-mail\"></i>Email</a>-->\r\n                        <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"#\"><i class=\"font-icon font-icon-archive\"></i>Archive</a>&ndash;&gt;-->\r\n                        <!--<a class=\"dropdown-item\" (click)=\"delete_list_twitter(li.id)\"><i-->\r\n                        <!--class=\"font-icon font-icon-trash\"></i>Delete</a>-->\r\n                        <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"task-card-title\">-->\r\n                        <!--<div class=\"button__holder\">-->\r\n                        <!--&lt;!&ndash;<h2>Hover me &rarr;</h2>&ndash;&gt;-->\r\n                        <!--<button class=\"plus\"-->\r\n                        <!--(click)=\"select_add_influencers_twitter(li.id,li.name)\"></button>-->\r\n                        <!--</div>-->\r\n                        <!--<br>-->\r\n                        <!--<a id=\"list_name\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_twitter(li.id,li.name)\">{{li.name}}</a>-->\r\n                        <!--<span class=\"task-card-title-label\"></span>-->\r\n                        <!--</div>-->\r\n\r\n                        <!--</div>-->\r\n                        <!--<div class=\"task-card-footer\">-->\r\n                        <!--&lt;!&ndash;<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>&ndash;&gt;-->\r\n                        <!--<div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_twitter(li.id, li.name)\"><i class=\"font-icon font-icon-users-group\"></i><strong>{{li.influencers_count}}-->\r\n                        <!--Influencers</strong></div>-->\r\n                        <!--<div class=\"avatar-preview avatar-preview-32\">-->\r\n                        <!--<a href=\"#\">-->\r\n                        <!--&lt;!&ndash;<img src=\"img/photo-64-2.jpg\" alt=\"\">&ndash;&gt;-->\r\n                        <!--</a>-->\r\n                        <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--</section>&lt;!&ndash;.task-card&ndash;&gt;-->\r\n\r\n\r\n                        <!--</div>-->\r\n                        <!--</div>-->\r\n\r\n                        <!--.tasks-grid-col-->\r\n\r\n\r\n\r\n                    </div><!--.tasks-grid-->\r\n\r\n                </div>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Blogosphere\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-newspaper-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\tBlogosphere\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"margin: 0 auto; width: 90%\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select (change)=\"sort_lists_dd()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of blog_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_dd()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n                                        <!--<input type=\"checkbox\" style=\"zoom: 1.5\">-->\r\n                                        <!--<div class=\"btn-group task-card-menu\">-->\r\n                                        <!--<button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"-->\r\n                                        <!--aria-expanded=\"false\">-->\r\n                                        <!--<i class=\"font-icon-dots-vert-square\"></i>-->\r\n                                        <!--</button>-->\r\n                                        <!--<div class=\"dropdown-menu dropdown-menu-right\">-->\r\n                                        <!--<a class=\"dropdown-item\" (click)=\"go_to_list(li.id,li.name)\"><i-->\r\n                                        <!--class=\"font-icon font-icon-pencil\"></i>Edit</a>-->\r\n                                        <!--<a class=\"dropdown-item\" (click)=\"email_list(li.id,li.name)\"><i-->\r\n                                        <!--class=\"font-icon font-icon-mail\"></i>Email</a>-->\r\n                                        <!--&lt;!&ndash;<a class=\"dropdown-item\" href=\"#\"><i class=\"font-icon font-icon-archive\"></i>Archive</a>&ndash;&gt;-->\r\n                                        <!--<a class=\"dropdown-item\" (click)=\"delete_list(li.id)\"><i-->\r\n                                        <!--class=\"font-icon font-icon-trash\"></i>Delete</a>-->\r\n                                        <!--</div>-->\r\n                                        <!--</div>-->\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n                                            <!--<div class=\"button__holder\">-->\r\n                                            <!--<button class=\"plus\"-->\r\n                                            <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                            <!--</div>-->\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers_dd(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_dd(li.id, li.name)\">\r\n                                            <i class=\"fa fa-edit\"></i>\r\n                                        </div>\r\n                                        <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                        <!---->\r\n                                        <!--</div>-->\r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_list_dd(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--<div class=\"sh-n-table row\" >-->\r\n                            <!--<table>-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th>List Name</th>-->\r\n                                    <!--<th>Total Influencers</th>-->\r\n                                    <!--<th>Add Influencers</th>-->\r\n                                    <!--<th>Edit</th>-->\r\n                                    <!--<th>Email</th>-->\r\n                                    <!--<th>Delete</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody >-->\r\n                                <!--<tr *ngFor=\"let li of user_lists.results;let i=index\">-->\r\n                                    <!--<td>-->\r\n                                        <!--<a style=\"font-size: 17px;\" (click)=\"go_to_list_dd(li.id,li.name)\">-->\r\n                                            <!--{{li.name }}-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td >-->\r\n                                        <!--<span class=\"block-ellipsis\"> {{li.influencers_count}}</span>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to add influencers in this list\">-->\r\n                                        <!--<a (click)=\"select_add_influencers_dd(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-plus\" ></i>-->\r\n\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td  title=\"Click to Edit this list\">-->\r\n                                        <!--<a (click)=\"go_to_list_dd(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-pencil\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Email this Infleuncer\">-->\r\n                                        <!--<a (click)=\"email_list_dd(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Delete this influencer\">-->\r\n                                        <!--<a (click)=\"delete_list_dd(li.id)\">-->\r\n                                            <!--<i class=\"fab fa-trash\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n                        <!--</div>-->\r\n\r\n                    <!--</div>&lt;!&ndash;.tasks-grid&ndash;&gt;</div>-->\r\n\r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Youtube\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-youtube\"></i>\r\n\t\t\t\t\t\t\t\t\t\tYoutube\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"margin: 0 auto; width: 90%\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select (change)=\"sort_lists_yt()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of youtube_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_yt()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n                                            <!--<div class=\"button__holder\">-->\r\n                                            <!--<button class=\"plus\"-->\r\n                                            <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                            <!--</div>-->\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers_yt(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_yt(li.id, li.name)\">\r\n                                            <i class=\"fa  fa-edit\"></i>\r\n                                        </div>\r\n                                        <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_yt(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                        <!---->\r\n                                        <!--</div>-->\r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_list_yt(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--.tasks-grid-col-->\r\n                        <!--<div class=\"sh-n-table row\" >-->\r\n                            <!--<table>-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th>List Name</th>-->\r\n                                    <!--<th>Total Influencers</th>-->\r\n                                    <!--<th>Add Influencers</th>-->\r\n                                    <!--<th>Edit</th>-->\r\n                                    <!--<th>Email</th>-->\r\n                                    <!--<th>Delete</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody >-->\r\n                                <!--<tr *ngFor=\"let li of user_lists.results;let i=index\">-->\r\n                                    <!--<td>-->\r\n                                        <!--<a style=\"font-size: 17px;\" (click)=\"go_to_list_yt(li.id,li.name)\">-->\r\n                                            <!--{{li.name }}-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td >-->\r\n                                        <!--<span class=\"block-ellipsis\"> {{li.influencers_count}}</span>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to add influencers in this list\">-->\r\n                                        <!--<a (click)=\"select_add_influencers_yt(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-plus\" ></i>-->\r\n\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td  title=\"Click to Edit this list\">-->\r\n                                        <!--<a (click)=\"go_to_list_yt(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-pencil\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Email this Infleuncer\">-->\r\n                                        <!--<a (click)=\"email_list_yt(li.id,li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                    <!--<td title=\"Click to Delete this influencer\">-->\r\n                                        <!--<a (click)=\"delete_list_yt(li.id)\">-->\r\n                                            <!--<i class=\"fab fa-trash\" ></i>-->\r\n                                        <!--</a>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n                        <!--</div>-->\r\n                    </div><!--.tasks-grid--></div>\r\n\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"Instagram\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-instagram\"></i>\r\n\t\t\t\t\t\t\t\t\t\tInstagram\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"margin:0 auto; width: 90%\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select (change)=\"sort_lists_in()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of insta_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_in()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n                                            <!--<div class=\"button__holder\">-->\r\n                                            <!--<button class=\"plus\"-->\r\n                                            <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                            <!--</div>-->\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-priamry\" (click)=\"select_add_influencers_in(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_in(li.id, li.name)\">\r\n                                            <i class=\"fa  fa-edit\"></i>\r\n                                        </div>\r\n                                        <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_in(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                        <!---->\r\n                                        <!--</div>-->\r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_list_in(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div><!--.tasks-grid-->\r\n                </div>\r\n\r\n\r\n            </mat-tab>\r\n            <!--<p>For Facebook</p> -->\r\n\r\n\r\n            <mat-tab label=\"Facebook\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\tFacebook\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"width: 90%; margin: 0 auto\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select (change)=\"sort_lists_fb()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of facebook_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_fb()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n                                            <!--<div class=\"button__holder\">-->\r\n                                            <!--<button class=\"plus\"-->\r\n                                            <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                            <!--</div>-->\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-priamry\" (click)=\"select_add_influencers_fb(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_fb(li.id, li.name)\">\r\n                                            <i class=\"fa  fa-edit\"></i>\r\n                                        </div>\r\n                                        <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                        <!---->\r\n                                        <!--</div>-->\r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_list_fb(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </mat-tab>\r\n\r\n\r\n            <!-- <mat-tab label=\"linkedIn\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\tLinkedin\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"margin: 0 auto; width: 90%\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select (change)=\"sort_list_lnkd()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of linkedin_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_lnkd()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            \r\n                            <div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <img src=\"img/img-task.jpg\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h6 style=\"font-weight: bolder\">{{li.name}}</h6>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n\r\n                                            <div class=\"button__holder\">\r\n                                            <button class=\"plus\"\r\n                                            (click)=\"select_add_influencers(li.id,li.name)\"></button>\r\n                                            </div>\r\n\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers_lnkd(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        \r\n                                        <div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>\r\n                                        \r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_lnkd(li.id, li.name)\">\r\n                                            <i class=\"fa  fa-edit\"></i>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">\r\n                                            <i class=\"fab fa-envelope\"></i>\r\n                                        </div>\r\n                                        <div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">\r\n                                        \r\n                                        </div>\r\n                                        \r\n                                        \r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fab fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_ilist_lnkd(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    .tasks-grid\r\n                </div>\r\n\r\n\r\n            </mat-tab> -->\r\n\r\n\r\n            <!--  For Pinterest Coded by Amjad-->\r\n            <mat-tab label=\"Pinterest\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fab fa-pinterest \"></i>\r\n\t\t\t\t\t\t\t\t\t\tPinterest\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n                <br>\r\n\r\n                <div>\r\n                    <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"width: 90%; margin: 0 auto\">\r\n                        <div class=\"row header\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                                <mat-select (change)=\"sort_list_pt()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                           placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                    <mat-option *ngFor=\"let choice of pint_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </div>\r\n                                            <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_pt()\">\r\n                                                    Create List\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                            <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                            <div class=\"sortable\">\r\n                                <section class=\"box-typical task-card task\">\r\n                                    <div class=\"task-card-photo\">\r\n                                        <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                    </div>\r\n                                    <div class=\"task-card-in\">\r\n\r\n                                        <div class=\"task-card-title-label text-center\">\r\n                                            <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                        </div>\r\n                                        <div class=\"task-card-title text-center\">\r\n                                            <!--<div class=\"button__holder\">-->\r\n                                            <!--<button class=\"plus\"-->\r\n                                            <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                            <!--</div>-->\r\n                                            <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                            <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-priamry\" (click)=\"select_add_influencers_pt(li.id, li.name) \">\r\n                                                Add Influencers\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"task-card-footer\">\r\n                                        <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                        <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_pt(li.id, li.name)\">\r\n                                            <i class=\"fa  fa-edit\"></i>\r\n                                        </div>\r\n                                        <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">-->\r\n                                            <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                        <!---->\r\n                                        <!--</div>-->\r\n                                        <div class=\"avatar-preview avatar-preview-32\">\r\n                                            <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_ilist_pt(li.id, li.name)\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </div>\r\n                    </div><!--.tasks-grid-->\r\n                </div>\r\n\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"Periscope\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n                         <img src=\"../../assets/img/periscope.png\">\r\n                         Periscope\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n\r\n\r\n                <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"width: 90%; margin: 28px auto 20px auto \">\r\n                    <div class=\"row header\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                            <mat-select (change)=\"sort_lists_peri()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                       placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                <mat-option *ngFor=\"let choice of periscope_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_peri()\">\r\n                                                Create List\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                        <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                        <div class=\"sortable\">\r\n                            <section class=\"box-typical task-card task\">\r\n                                <div class=\"task-card-photo\">\r\n                                    <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                </div>\r\n                                <div class=\"task-card-in\">\r\n\r\n                                    <div class=\"task-card-title-label text-center\">\r\n                                        <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                    </div>\r\n                                    <div class=\"task-card-title text-center\">\r\n                                        <!--<div class=\"button__holder\">-->\r\n                                        <!--<button class=\"plus\"-->\r\n                                        <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                        <!--</div>-->\r\n                                        <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                        <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-priamry\" (click)=\"select_add_influencers_peri(li.id, li.name) \">\r\n                                            Add Influencers\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"task-card-footer\">\r\n                                    <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                    <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_peri(li.id, li.name)\">\r\n                                        <i class=\"fa  fa-edit\"></i>\r\n                                    </div>\r\n                                    <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">-->\r\n                                        <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                    <!---->\r\n                                    <!--</div>-->\r\n                                    <div class=\"avatar-preview avatar-preview-32\">\r\n                                        <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_ilist_peri(li.id, li.name)\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Periscope\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n                         <!--<img src=\"../../assets/img/periscope.png\">-->\r\n                         <i class=\"fab fa-medium\"></i>\r\n                         Medium\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n\r\n\r\n                <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"width: 90%; margin: 28px auto 20px auto \">\r\n                    <div class=\"row header\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                            <mat-select (change)=\"sort_lists_med()\" name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                        placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                <mat-option *ngFor=\"let choice of medium_choices\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_med()\">\r\n                                                Create List\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                        <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                        <div class=\"sortable\">\r\n                            <section class=\"box-typical task-card task\">\r\n                                <div class=\"task-card-photo\">\r\n                                    <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                </div>\r\n                                <div class=\"task-card-in\">\r\n\r\n                                    <div class=\"task-card-title-label text-center\">\r\n                                        <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                    </div>\r\n                                    <div class=\"task-card-title text-center\">\r\n                                        <!--<div class=\"button__holder\">-->\r\n                                        <!--<button class=\"plus\"-->\r\n                                        <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                        <!--</div>-->\r\n                                        <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                        <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers_med(li.id, li.name) \">\r\n                                            Add Influencers\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"task-card-footer\">\r\n                                    <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                    <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_med(li.id, li.name)\">\r\n                                        <i class=\"fa  fa-edit\"></i>\r\n                                    </div>\r\n                                    <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">-->\r\n                                        <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                    <!---->\r\n                                    <!--</div>-->\r\n                                    <div class=\"avatar-preview avatar-preview-32\">\r\n                                        <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_ilist_med(li.id, li.name)\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Flickr\">\r\n                <ng-template mat-tab-label>\r\n                     <span class=\"nav-link-in-dash\">\r\n                         <!--<img src=\"../../assets/img/periscope.png\">-->\r\n                         <i class=\"fab fa-flickr\"></i>\r\n                         Flickr\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n                </ng-template>\r\n\r\n\r\n                <div class=\"tasks-grid\" *ngIf=\"loaded\" style=\"width: 90%; margin: 28px auto 20px auto \">\r\n                    <div class=\"row header\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                        <span class=\"tasks-grid-col-title align-left\">Total Lists: <strong>{{user_lists.totalItems}}</strong>\r\n                                        </span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-8 col-sm-6 pull-right\">\r\n                                            <mat-select (change)=\"sort_lists_fli()\"  name=\"selected_choice\" [(ngModel)]=\"selected_choice\"\r\n                                                        placeholder=\"Sort By\" style=\"width: 60%; float: right\">\r\n                                                <mat-option *ngFor=\"let choice of choices_flicker\" [value]=\"choice.code\">{{ choice.name }}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-sm-6 pull-right\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"create_empty_list_flkr()\">\r\n                                                Create List\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div *ngFor=\"let li of user_lists.results; let i = index\" [ngClass]=\"{'tasks-grid-col': i%7===0, 'tasks-grid-col red': i%3===0, 'tasks-grid-col black': i%2===0, 'tasks-grid-col blue': i%1===0}\">\r\n                        <!--<div class=\"tasks-grid-col-title\">Done <strong>100</strong></div>-->\r\n\r\n                        <div class=\"sortable\">\r\n                            <section class=\"box-typical task-card task\">\r\n                                <div class=\"task-card-photo\">\r\n                                    <!--<img src=\"img/img-task.jpg\" alt=\"\">-->\r\n                                </div>\r\n                                <div class=\"task-card-in\">\r\n\r\n                                    <div class=\"task-card-title-label text-center\">\r\n                                        <h5 style=\"font-weight: bolder\">{{li.name}}</h5>\r\n                                    </div>\r\n                                    <div class=\"task-card-title text-center\">\r\n                                        <!--<div class=\"button__holder\">-->\r\n                                        <!--<button class=\"plus\"-->\r\n                                        <!--(click)=\"select_add_influencers(li.id,li.name)\"></button>-->\r\n                                        <!--</div>-->\r\n                                        <h6>  Total Influencers: <b>{{li.influencers_count}}</b></h6>\r\n                                        <button style=\"margin-bottom: 5%\" type=\"button\" class=\"btn btn-primary\" (click)=\"select_add_influencers_flkr(li.id, li.name) \">\r\n                                            Add Influencers\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"task-card-footer\">\r\n                                    <!--<div class=\"task-card-meta-item\"><i class=\"font-icon font-icon-comments-2\"></i>10</div>-->\r\n                                    <div class=\"task-card-meta-item\" title=\"Click to Show all Influencers in this list\" style=\"cursor: pointer;\" (click)=\"go_to_list_flkr(li.id, li.name)\">\r\n                                        <i class=\"fa  fa-edit\"></i>\r\n                                    </div>\r\n                                    <!--<div class=\"task-card-meta-item\" title=\"Click to Email\" style=\"cursor: pointer;\" (click)=\"email_list_dd(li.id, li.name)\">-->\r\n                                        <!--<i class=\"fab fa-envelope\"></i>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"task-card-meta-item text-right\" title=\"Click to Delete\" style=\"cursor: pointer;\" (click)=\"email_list(li.id, li.name)\">-->\r\n                                    <!---->\r\n                                    <!--</div>-->\r\n                                    <div class=\"avatar-preview avatar-preview-32\">\r\n                                        <i class=\"fa fa-trash\" style=\"cursor: pointer;\" (click)=\"delete_ilist_flkr(li.id, li.name)\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n        <preloader-small></preloader-small>\r\n        <!--<md-card>-->\r\n            <!--(Currently)Listing feature available for only blog influencers.-->\r\n        <!--</md-card>-->\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n<!--</div>-->\r\n<!-- <app-footer></app-footer> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/userdashboard-template/userdashboard-template.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/userdashboard-template/userdashboard-template.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300);\nbody, html {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Source Sans Pro\" sans-serif; }\n.button__holder {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center; }\n.button__holder:after {\n    content: \"\";\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n.button__holder h2 {\n    margin-right: 1em;\n    text-align: center;\n    color: #79CDCD; }\n.plus {\n  position: relative;\n  z-index: 1;\n  width: 80px;\n  height: 80px;\n  background: #262626;\n  border-radius: 50%;\n  border: none;\n  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), -webkit-transform 200ms cubic-bezier(0.2, 0, 0.7, 1);\n  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1);\n  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1), -webkit-transform 200ms cubic-bezier(0.2, 0, 0.7, 1); }\n.plus:after {\n    content: \"+\";\n    font-size: 5em;\n    line-height: 1.1em;\n    color: white; }\n.plus:hover {\n    box-shadow: 0 0 1px 10px rgba(13, 13, 13, 0.16), 0 0 1px 20px rgba(56, 50, 50, 0.1), 0 0 1px 30px rgba(0, 0, 0, 0.1); }\n#list_name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #c00;\n  text-transform: capitalize; }\n.mat-tab-labels {\n  background-color: #FFFFFF; }\n.sh-n-table table thead tr th {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  border-right: 1px solid;\n  font-size: 16px;\n  padding: 5px 0;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n.sh-n-table table tbody tr td {\n  width: 300px;\n  padding: 5px 10px;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  font-size: .9em;\n  font-weight: 400;\n  color: #000;\n  border: none !important;\n  border-bottom: 1px solid #ccc !important; }\n.sh-n-table table tbody tr td a {\n  cursor: pointer; }\n.crete-list-button {\n  background: #000;\n  margin: 17px !important; }\n.crete-list-button:hover {\n  color: #fff; }\n.tasks-grid .header .tasks-grid-col-title {\n  display: block;\n  padding: 27px 0 0; }\n.task-card-title-label h5 {\n  padding-top: 13px;\n  color: #6991c5;\n  text-transform: capitalize;\n  font-weight: 600; }\n.task-card-footer {\n  display: flex;\n  justify-content: center; }\n.task-card-meta-item {\n  cursor: pointer;\n  padding: 5px;\n  color: #6991c5; }\n.avatar-preview-32 {\n  color: #d66464;\n  padding: 5px;\n  cursor: pointer; }\n.avatar-preview-32:hover {\n  color: #c00; }\n.sh-n-table table tbody tr td:first-child {\n  color: #c00;\n  cursor: pointer; }\ni {\n  font-size: 18px; }\n.btn-rounded {\n  background: #000;\n  color: #fff;\n  text-align: center;\n  margin-top: 3%;\n  font-size: 17px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n.list-name {\n  color: black;\n  font-size: 18px; }\nlabel {\n  color: black;\n  font-size: 17px;\n  font-weight: 600; }\na {\n  cursor: pointer; }\nmat-tab-header {\n  background: #FFFFFF !important; }\n.nav-link-in-dash {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/userdashboard-template/userdashboard-template.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/userdashboard-template/userdashboard-template.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserdashboardTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashboardTemplateComponent", function() { return UserdashboardTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserdashboardTemplateComponent = /** @class */ (function () {
    function UserdashboardTemplateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.current_dashboard = 1;
        this.loaded = false;
        this.selected_choice = '-id';
        this.pint_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-pinterest_influencer', name: 'Number of influencers - DSC' },
            { code: 'pinterest_influencer', name: 'Number of influencers - ASC' },
        ];
        this.youtube_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-youtube_influencer', name: 'Number of influencers - DSC' },
            { code: 'youtube_influencer', name: 'Number of influencers - ASC' },
        ];
        this.periscope_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-periscope_influencer', name: 'Number of influencers - DSC' },
            { code: 'periscope_influencer', name: 'Number of influencers - ASC' },
        ];
        this.medium_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-medium_influencer', name: 'Number of influencers - DSC' },
            { code: 'medium_influencer', name: 'Number of influencers - ASC' },
        ];
        this.insta_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-instagram_influencer', name: 'Number of influencers - DSC' },
            { code: 'instagram_influencer', name: 'Number of influencers - ASC' },
        ];
        this.facebook_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-facebook_influencer', name: 'Number of influencers - DSC' },
            { code: 'facebook_influencer', name: 'Number of influencers - ASC' },
        ];
        this.linkedin_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-linkedin_influencer', name: 'Number of influencers - DSC' },
            { code: 'linkedin_influencer', name: 'Number of influencers - ASC' },
        ];
        this.blog_choices = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-blog_influencer', name: 'Number of influencers - DSC' },
            { code: 'blog_influencer', name: 'Number of influencers - ASC' },
        ];
        this.choices_flicker = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-flickr_influencer', name: 'Number of influencers - DSC' },
            { code: 'flickr_influencer', name: 'Number of influencers - ASC' },
        ];
        this.selected_choice_twitter = '-id';
        this.choices_twitter = [
            { code: 'name', name: 'Name - Ascending' },
            { code: '-name', name: 'Name - Descending' },
            { code: '-created_at', name: 'Newest' },
            { code: 'created_at', name: 'Oldest' },
            { code: '-twitter_influencer', name: 'Number of influencers - DSC' },
            { code: 'twitter_influencer', name: 'Number of influencers - ASC' },
        ];
    }
    UserdashboardTemplateComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.get_lists(this.selected_choice);
    };
    // Start Dashboard Web all API's Implements by Amjad
    //Function that add influencers in web lists.
    UserdashboardTemplateComponent.prototype.select_add_influencers = function (id, name, dashboard) {
        localStorage.setItem('selected_list', JSON.stringify({ id: id, name: name }));
        // this.router.navigate(['multi/search'],{queryParams: {name: 'web'}})
        this.router.navigate(['multi/search']);
    };
    // Function that fo to current web lists where you can edit the list.
    UserdashboardTemplateComponent.prototype.go_to_list = function (e, name, dashboard) {
        this.router.navigate(['blogs/list/', e]);
    };
    //Send Email to Influencer's
    UserdashboardTemplateComponent.prototype.email_list = function (e, name, dashboard) {
        // localStorage.setItem('navigated_list',JSON.stringify({id:e,name:name}));
        // if (dashboard === 1) {
        //
        // } else if (dashboard === 2) {
        //     this.router.navigate(['email/settings/', e])
        //
        // } else if (dashboard === 6) {
        this.router.navigate(['email/settings/', e]);
        //
        // }
    };
    //Delete any Web list by clicking pencil Icons
    UserdashboardTemplateComponent.prototype.delete_list = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        var myhttp = this.http;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            // title: 'Are you sure?',
            title: 'Deleted',
            // text: 'You will not be able to recover this list!',
            text: 'List has been deleted successfully',
        }).then(function () {
            myhttp.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist/' + id, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists(_this.selected_choice);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', 
                // error.toString(),
                'error');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    //Sort Lists of web
    UserdashboardTemplateComponent.prototype.sort_lists = function () {
        this.get_lists(this.selected_choice);
    };
    // Create New Lists of Web
    UserdashboardTemplateComponent.prototype.create_empty_list = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist/', JSON.stringify({
                                name: result,
                                username: _this.currentUser.username
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                resolve();
                            }, function (error) {
                                if (error.status === 406) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("List Already Exist");
                                }
                                // reject('List named "' + result + '" already exists')
                            });
                        }
                    });
                });
            },
            showCancelButton: true,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel'
        }).then(function (result) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    //Start Twitter all API's Implements by Amjad
    UserdashboardTemplateComponent.prototype.create_empty_list_twitter = function () {
        var _this = this;
        // let dashboard = this.current_dashboard;
        //
        // if (dashboard === 1) {
        //     this.create_empty_list()
        // }
        // else if (dashboard === 6) {
        //     this.create_empty_list_dd()
        // }
        // else if (dashboard === 2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/ml/check_ilist_twitter/', JSON.stringify({
                                // name: result,
                                name: result,
                                username: _this.currentUser.username
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                resolve();
                            }, function (error) {
                                if (error.status === 406) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List Already Exist');
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/ml/create_add_ilist_twitter/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.loadTwitterLists(_this.selected_choice_twitter);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.sort_lists_twitter = function () {
        this.getTwLists(this.selected_choice_twitter);
    };
    UserdashboardTemplateComponent.prototype.sort_lists_peri = function () {
        this.get_list_peri(this.selected_choice);
    };
    UserdashboardTemplateComponent.prototype.sort_lists_med = function () {
        this.get_list_med(this.selected_choice);
    };
    UserdashboardTemplateComponent.prototype.sort_lists_fli = function () {
        this.get_list_flkr(this.selected_choice);
    };
    //Function that add influencers in web lists.
    UserdashboardTemplateComponent.prototype.select_add_influencers_twitter = function (id, name) {
        localStorage.setItem('selected_list_twitter', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['twitter/search'], { queryParams: { name: 'twitter' } });
    };
    UserdashboardTemplateComponent.prototype.go_to_list_twitter = function (e, name) {
        this.router.navigate(['twitter/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.email_list_twitter = function (e, name) {
    };
    UserdashboardTemplateComponent.prototype.delete_list_twitter = function (id) {
        var _this = this;
        // let dashboard = this.current_dashboard;
        //
        // if (dashboard === 1) {
        //     this.delete_list(id);
        // } else if (dashboard === 6) {
        //     alert('blgoooooo')
        //     this.delete_list_dd(id);
        // } else if (dashboard === 2) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        var myhttp = this.http;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            myhttp.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/ml/delete_ilist_twitter/' + id, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.loadTwitterLists(_this.selected_choice_twitter);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    //Start Youtube all API's Implements by Amjad
    UserdashboardTemplateComponent.prototype.email_list_yt = function (e, name) {
        // localStorage.setItem('navigated_list',JSON.stringify({id:e,name:name}));
        this.router.navigate(['email/settings/', e]);
    };
    UserdashboardTemplateComponent.prototype.delete_list_yt = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        var myhttp = this.http;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            myhttp.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_yt/' + id, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists_yt(_this.selected_choice.replace('blog_influencer', 'youtube_influencer'));
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.sort_lists_yt = function () {
        this.get_lists_yt(this.selected_choice.replace('blog_influencer', 'youtube_influencer'));
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_yt = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_yt/', JSON.stringify({
                                // name: result,
                                name: result,
                                username: _this.currentUser.username
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                resolve();
                            }, function (error) {
                                if (error.status === 406) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List Already Exist', 'error');
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_yt/', JSON.stringify({
                // name: result,
                name: result,
                // list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists_yt(_this.selected_choice.replace('blog_influencer', 'youtube_influencer'));
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.get_lists_yt = function (v) {
        var _this = this;
        this.current_dashboard = 6;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_yt/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_yt = function (id, name) {
        localStorage.setItem('selected_list_yt', JSON.stringify({ id: id, name: name, }));
        this.router.navigate(['youtube/search'], { queryParams: { name: 'youtube' } });
    };
    UserdashboardTemplateComponent.prototype.go_to_list_yt = function (e, name) {
        this.router.navigate(['youtube/list/', e]);
    };
    //Start Instagram all API's Implements by Amjad
    UserdashboardTemplateComponent.prototype.sort_lists_in = function () {
        this.get_lists_in(this.selected_choice.replace('blog_influencer', 'instagram_influencer'));
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_in = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_in/', JSON.stringify({
                                // name: result,
                                name: result,
                                username: _this.currentUser.username
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                resolve();
                            }, function (error) {
                                if (error.status === 406) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List already exist');
                                }
                                // reject('List named "' + result + '" already exists')
                            });
                        }
                    }, 1);
                });
            },
            showCancelButton: true,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel'
        }).then(function (result) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_in/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists_in(_this.selected_choice.replace('blog_influencer', 'instagram_influencer'));
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.get_lists_in = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_in/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_in = function (id, name) {
        localStorage.setItem('selected_list_in', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['instagram/search'], { queryParams: { name: 'instagram' } });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_pt = function (id, name) {
        localStorage.setItem('selected_list_pt', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['/pinterest/search'], { queryParams: { name: 'pinterest' } });
    };
    UserdashboardTemplateComponent.prototype.go_to_list_in = function (e, name) {
        this.router.navigate(['instagram/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.email_list_in = function (e, name) {
        // localStorage.setItem('navigated_list',JSON.stringify({id:e,name:name}));
        this.router.navigate(['email/settings/', e]);
    };
    UserdashboardTemplateComponent.prototype.delete_list_in = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        var myhttp = this.http;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            myhttp.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_in/' + id, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists_in(_this.selected_choice.replace('blog_influencer', 'instagram_influencer'));
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    // Start Facebook  all API's Implements by Amjad
    UserdashboardTemplateComponent.prototype.get_lists_fb = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iLists_names_fb/' + this.currentUser.username + '/' + v + '/', null, '')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_fb = function (id, name) {
        localStorage.setItem('select_list_fb', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['facebook/search'], { queryParams: { name: 'facebook' } });
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_fb = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_fb/', JSON.stringify({
                                name: result,
                                // name: result,
                                username: _this.currentUser.username
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                resolve();
                            }, function (error) {
                                if (error.status === 406) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List Already Exist', 'error');
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_fb/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_list_fb(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.delete_list_fb = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_fb/' + id, { headers: headers }).map(function (responce) { return responce.json(); }).subscribe(function (data) {
                _this.get_list_fb(_this.selected_choice);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.go_to_list_fb = function (e, name) {
        this.router.navigate(['facebook/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.sort_lists_fb = function () {
        this.get_list_fb(this.selected_choice);
    };
    UserdashboardTemplateComponent.prototype.get_list_fb = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_fb/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json(),
                _this.loaded = true;
        });
    };
    // Start Linkedin  all API's Implements by Amjad
    // go_to_list_lnkd(e:number, name: string){
    //     this.router.navigate(['linkedin/list/', e])
    // }
    // get_list_lnkd(v){
    //     this.loaded=false;
    //     this.http.get(Config.api+ '/get_iList_names_ld/'+ this.currentUser.username + '/'+ v + '/', null, 'small')
    //         .subscribe(res=> {
    //             this.user_lists= res.json();
    //             this.loaded=true;
    //         })
    // }
    // create_empty_list_lnkd() {
    //     Swal.fire({
    //         title: 'Enter the name of list',
    //         text: 'New list will be created',
    //         type: 'question',
    //         input: 'text',
    //         preConfirm: (result) => {
    //             return new Promise((resolve, reject) => {
    //                 setTimeout(() => {
    //                     if (result === '') {
    //                         reject('List name cannot be empty')
    //                     } else if (result.length > 30) {
    //                         reject('Length of list name cannot be greater than 30')
    //                     }
    //                     else {
    //                         let headers = new Headers({'Authorization': 'JWT ' + this.currentUser['token']});
    //                         headers.append('Content-Type', 'application/json');
    //                         this.http.post(Config.api + '/check_ilist_ld/', JSON.stringify({
    //                                 name: result,
    //                                 username: this.currentUser.username
    //                             }),
    //                             {headers: headers}).map((response: Response) => response.json()).subscribe(
    //                             data => {
    //                                 resolve()
    //                             },
    //                             error => {
    //                                 reject('List named "' + result + '" already exists')
    //                             });
    //                     }
    //                 }, 2)
    //             })
    //         },
    //         showCancelButton: true,
    //         confirmButtonText: 'Create',
    //         cancelButtonText: 'Cancel'
    //     }).then((result) => {
    //         let headers = new Headers({'Authorization': 'JWT ' + this.currentUser['token']});
    //         headers.append('Content-Type', 'application/json');
    //         this.http.post(Config.api + '/create_add_ilist_ld/', JSON.stringify({
    //                 name: result,
    //                 list: {},
    //                 username: this.currentUser.username
    //             }),
    //             {headers: headers}).map((response: Response) => response.json()).subscribe(
    //             data => {
    //                 this.get_list_lnkd(this.selected_choice);
    //                 Swal.fire(
    //                     'List created!',
    //                     result.value(),
    //                     'success'
    //                 )
    //             },
    //             // error => {
    //             //     Swal.fire(
    //             //         'Try again after some time!',
    //             //         error.toString(),
    //             //         'error'
    //             //     )
    //             // }
    //             );
    //     }, function (dismiss) {
    //         // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
    //         if (dismiss === 'cancel') {
    //             Swal.fire(
    //                 'Cancelled',
    //                 'No list created :)',
    //                 'success'
    //             )
    //         }
    //     })
    // }
    // sort_list_lnkd(){
    //     this.get_list_lnkd(this.selected_choice)
    // }
    // select_add_influencers_lnkd(id: number, name:string){
    //     localStorage.setItem('select_list_linkin', JSON.stringify({id: id, name: name}));
    //     this.router.navigate(['linkedin/search'], {queryParams:{name: 'linkedIn'}})
    // }
    // delete_ilist_lnkd(id: number) {
    //     let headers = new Headers({'Authorization': 'JWT' + this.currentUser['token']}) ;
    //     headers.append('Content-Type', 'application/json');
    //     Swal.fire({
    //         title: 'Deleted',
    //         text: 'List has been deleted successfully',
    //         // title: 'Are you Sure?',
    //         // text: 'You will not be able to recover this list!',
    //         // showCancelButton: true,
    //         // confirmButtonText: 'Yes, delete it!',
    //         // cancelButtonText: 'No, keep it'
    //     }).then(() => {
    //         headers = new Headers({'Authorization': 'JWT ' + this.currentUser['token']});
    //         headers.append('Content-Type', 'application/json');
    //         this.http.delete(Config.api + '/delete_ilist_ld/' + id,
    //             {headers: headers}).map((responce: Response) => responce.json()).subscribe(
    //             data => {
    //                 this.get_list_lnkd(this.selected_choice);
    //                 // Swal.fire(
    //                 //     'List Deleted!',
    //                 //     '',
    //                 //     'success'
    //                 // )
    //             },
    //             error => {
    //                 // alert('error')
    //                 Swal.fire(
    //                     'Try again after some time!',
    //                     error.toString(),
    //                     'error'
    //                 )
    //             }
    //         )
    //     }, function (dismiss) {
    //         if (dismiss === 'cancel') {
    //             Swal.fire(
    //                 'Cancelled',
    //                 'Your list is not deleted :)',
    //                 'error'
    //             )
    //         }
    //     })
    // }
    // Start BlogoSphere  all API's Implements by Amjad
    UserdashboardTemplateComponent.prototype.sort_lists_dd = function () {
        this.get_lists_dd(this.selected_choice);
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_dd = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_dd/', JSON.stringify({
                                name: result,
                                // name: result,
                                username: _this.currentUser.username
                            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                                resolve();
                            }, function (error) {
                                if (error.status === 406) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List Already Exist');
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_dd/', JSON.stringify({
                // name: result,
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists_dd(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.get_lists_dd = function (v) {
        var _this = this;
        this.current_dashboard = 6;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_dd/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_dd = function (id, name) {
        localStorage.setItem('selected_list_dd', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['blogosphere/search'], { queryParams: { name: 'blog' } });
    };
    UserdashboardTemplateComponent.prototype.go_to_list_dd = function (e, name) {
        this.router.navigate(['blogosphere/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.email_list_dd = function (e, name) {
        // localStorage.setItem('navigated_list',JSON.stringify({id:e,name:name}));
        this.router.navigate(['email/settings/', e]);
    };
    UserdashboardTemplateComponent.prototype.delete_list_dd = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        var myhttp = this.http;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            myhttp.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_dd/' + id, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_lists_dd(_this.selected_choice);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.get_lists = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.user_lists_web = res.json().results;
            _this.loaded = true;
        });
    };
    // Start Pinterests  all API's Implements by Amjad
    UserdashboardTemplateComponent.prototype.sort_list_pt = function () {
        this.get_list_pinterest(this.selected_choice);
    };
    UserdashboardTemplateComponent.prototype.delete_ilist_pt = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_pt/' + id, { headers: headers }).map(function (responce) { return responce.json(); }).subscribe(function (data) {
                _this.get_list_pinterest(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List Deleted!', '', 'success');
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', 
                // error.toString(),
                'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.delete_ilist_peri = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_periscope/' + id, { headers: headers }).map(function (responce) { return responce.json(); }).subscribe(function (data) {
                _this.get_list_peri(_this.selected_choice);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.delete_ilist_med = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_md/' + id, { headers: headers }).map(function (responce) { return responce.json(); }).subscribe(function (data) {
                _this.get_list_med(_this.selected_choice);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.go_to_list_pt = function (e, name) {
        this.router.navigate(['pinterest/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.go_to_list_peri = function (e, name) {
        this.router.navigate(['periscope/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.go_to_list_med = function (e, name) {
        this.router.navigate(['medium/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.go_to_list_flkr = function (e, name) {
        this.router.navigate(['flickr/list/', e]);
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_peri = function (id, name) {
        localStorage.setItem('selected_list_peri', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['/periscope/search'], { queryParams: { name: 'periscope' } });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_med = function (id, name) {
        localStorage.setItem('selected_list_med', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['/medium/search'], { queryParams: { name: 'medium' } });
    };
    UserdashboardTemplateComponent.prototype.select_add_influencers_flkr = function (id, name) {
        localStorage.setItem('selected_list_fl', JSON.stringify({ id: id, name: name }));
        this.router.navigate(['/flickr/search'], { queryParams: { name: 'flickr' } });
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_pt = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_pt/', JSON.stringify({
                                // name: result,
                                name: result,
                                username: _this.currentUser.username
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_pt/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_list_pinterest(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    // get_list_pinterest(v) {
    //     this.loaded=false;
    //     this.http.get(Config.api + '/get_iList_names_pt/'+ this.currentUser.username+ '/'+ v + '/', null, 'samll')
    //         .subscribe(res=> {
    //             this.user_lists= res.json();
    //             this.loaded= true;
    //         })
    // }
    UserdashboardTemplateComponent.prototype.get_list_pinterest = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_pt/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.delete_ilist_flkr = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Deleted',
            text: 'List has been deleted successfully',
        }).then(function () {
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/delete_ilist_fl/' + id, { headers: headers }).map(function (responce) { return responce.json(); }).subscribe(function (data) {
                _this.get_list_flkr(_this.selected_choice);
                // Swal.fire(
                //     'List Deleted!',
                //     '',
                //     'success'
                // )
            }, function (error) {
                // alert('error')
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Try again after some time!', error.toString(), 'error');
            });
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your list is not deleted :)', 'error');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.get_list_med = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_md/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.get_list_flkr = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_fl/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.get_list_peri = function (v) {
        var _this = this;
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/get_iList_names_periscope/' + this.currentUser.username + '/' + v + '/', null, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    //Others Functions
    UserdashboardTemplateComponent.prototype.loadTwitterLists = function (v) {
        // this.current_dashboard = 2;
        this.getTwLists(v);
        // this.load_all_lists(v, this.current_dashboard);
    };
    UserdashboardTemplateComponent.prototype.getTwLists = function (v) {
        var _this = this;
        this.current_dashboard = 2;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser['token'] });
        headers.append('Content-Type', 'application/json');
        this.loaded = false;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/ml/get_iList_names_twitter/' + this.currentUser.username + '/' + v + '/', { headers: headers }, 'small')
            .subscribe(function (res) {
            _this.user_lists = res.json();
            _this.loaded = true;
        });
    };
    UserdashboardTemplateComponent.prototype.selectedIndexChange = function (e) {
        if (e === 0) {
            this.get_lists('-id');
        }
        else if (e === 1) {
            this.loadTwitterLists('-id');
        }
        else if (e === 2) {
            this.get_lists_dd('-id');
        }
        else if (e === 3) {
            this.get_lists_yt('-id');
        }
        else if (e === 4) {
            this.get_lists_in('-id');
        }
        else if (e === 5) {
            this.get_list_fb('-id');
        }
        // else if(e===6){
        //     this.get_list_lnkd('-id');
        // }
        else if (e === 6) {
            this.get_list_pinterest('-id');
        }
        else if (e === 7) {
            this.get_list_peri('-id');
        }
        else if (e === 8) {
            this.get_list_med('-id');
        }
        else if (e === 9) {
            this.get_list_flkr('-id');
        }
    };
    UserdashboardTemplateComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_peri = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_periscope/', JSON.stringify({
                                name: result,
                                // name: result,
                                username: _this.currentUser.username
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_periscope/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_list_peri(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value, 'success');
                console.log('Result is..................', result.value);
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_med = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_md/', JSON.stringify({
                                // name: result,
                                name: result,
                                username: _this.currentUser.username
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_md/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_list_med(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', 
                // result.value(),
                'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent.prototype.create_empty_list_flkr = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/check_ilist_fl/', JSON.stringify({
                                name: result,
                                username: _this.currentUser.username
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
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Authorization': 'JWT ' + _this.currentUser['token'] });
            headers.append('Content-Type', 'application/json');
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].api + '/create_add_ilist_fl/', JSON.stringify({
                name: result,
                list: {},
                username: _this.currentUser.username
            }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.get_list_flkr(_this.selected_choice);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('List created!', result.value(), 'success');
            });
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'No list created :)', 'success');
            }
        });
    };
    UserdashboardTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdashboard-template',
            template: __webpack_require__(/*! ./userdashboard-template.component.html */ "./src/app/userdashboard-template/userdashboard-template.component.html"),
            styles: [__webpack_require__(/*! ./userdashboard-template.component.scss */ "./src/app/userdashboard-template/userdashboard-template.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserdashboardTemplateComponent);
    return UserdashboardTemplateComponent;
}());



/***/ }),

/***/ "./src/app/userdashboard-template/userdashboard.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/userdashboard-template/userdashboard.module.ts ***!
  \****************************************************************/
/*! exports provided: UserDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function() { return UserDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userdashboard_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userdashboard.routing */ "./src/app/userdashboard-template/userdashboard.routing.ts");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.module */ "./src/app/loader/loader.module.ts");
/* harmony import */ var _userdashboard_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdashboard-template.component */ "./src/app/userdashboard-template/userdashboard-template.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_preloader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/preloader.module */ "./src/app/components/preloader.module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import {} from '@angular/material';
var UserDashboardModule = /** @class */ (function () {
    function UserDashboardModule() {
    }
    UserDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_userdashboard_routing__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _components_preloader_module__WEBPACK_IMPORTED_MODULE_8__["PreloaderModule"],],
            declarations: [_userdashboard_template_component__WEBPACK_IMPORTED_MODULE_5__["UserdashboardTemplateComponent"]]
        })
    ], UserDashboardModule);
    return UserDashboardModule;
}());



/***/ }),

/***/ "./src/app/userdashboard-template/userdashboard.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/userdashboard-template/userdashboard.routing.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _userdashboard_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdashboard-template.component */ "./src/app/userdashboard-template/userdashboard-template.component.ts");

// import { TaskboardComponent } from './taskboard.component';
var DashboardRoutes = [{
        path: '',
        component: _userdashboard_template_component__WEBPACK_IMPORTED_MODULE_0__["UserdashboardTemplateComponent"],
        data: {
            heading: 'Dashboard',
        }
    }];


/***/ })

}]);
//# sourceMappingURL=userdashboard-template-userdashboard-module.js.map