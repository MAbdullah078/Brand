(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-search-blog-search-module~blog-search-blogosphere-list-inf-module~facebook-search-facebook-sear~b5aeab9e"],{

/***/ "./src/app/home/roundpipe.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/roundpipe.module.ts ***!
  \******************************************/
/*! exports provided: RoundpipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundpipeModule", function() { return RoundpipeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "./src/app/home/search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RoundpipeModule = /** @class */ (function () {
    function RoundpipeModule() {
    }
    RoundpipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_1__["RoundPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            exports: [
                _search_component__WEBPACK_IMPORTED_MODULE_1__["RoundPipe"]
            ]
        })
    ], RoundpipeModule);
    return RoundpipeModule;
}());



/***/ }),

/***/ "./src/app/home/search.component.ts":
/*!******************************************!*\
  !*** ./src/app/home/search.component.ts ***!
  \******************************************/
/*! exports provided: RoundPipe, SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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








/**
 *
 */
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     *
     * @param value
     * @returns {number}
     */
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'round' })
    ], RoundPipe);
    return RoundPipe;
}());

var SearchComponent = /** @class */ (function () {
    function SearchComponent(http, httpNoPreloader, route, pagerService) {
        this.http = http;
        this.httpNoPreloader = httpNoPreloader;
        this.route = route;
        this.pagerService = pagerService;
        // scoreValues;
        this.scoreValues = [1, 100];
        this.column = {};
        this.inflist = {};
        this.influencers = { totalItems: 0 };
        this.interest_value = "";
        this.loc = "";
        this.name_value = "";
        this.user_list = {};
        this.loaded = false;
        this.pager = {};
        this.options = ["Abortion Service", "Academic Camp", "Accessories", "Accessories Store", "Accountant", "Actor", "Actor/director", "Acupuncturist", "Addiction Resources Center", "Addiction Service", "Addiction Treatment Center", "Adoption Service", "Adult Entertainment Service", "Advertising Agency", "Advertising/Marketing", "Advertising/Marketing Service", "Aerospace Company", "Aerospace/defense", "Afghani Restaurant", "African Restaurant", "Agricultural Cooperative", "Agricultural Service", "Agriculture", "Agriculture Company", "AIDS Resource Center", "Aircraft Dealership", "Airline Company", "Airline Industry Service", "Airport", "Airport Lounge", "Airport Shuttle Service", "Airport Terminal", "Album", "Alcohol Addiction Treatment Center", "Allergist", "Alternative & Holistic Health Service", "Amateur sports team", "Amateur Sport Team", "American Restaurant", "Amusement Center", "Amusement & Theme Park", "Andhra Restaurant", "Anesthesiologists", "Anglican Church", "Animal", "Animal breed", "Animal Shelter", "Antique Store", "Apartment & Condo Building", "Apostolic Church", "Apparel", "Apparel & Clothing", "Apparel Company", "Apparel Distributor", "Appliance Manufacturer", "Appliance Repair Service", "Appliances", "App page", "Aquarium", "Aquatic Pet Store", "Arabian Restaurant", "Arcade", "Archaeological Service", "Archery Range", "Archery Shop", "Architect", "Architectural Designer", "Architectural Engineer", "Argentinian Restaurant", "Armed Forces", "Armenian Restaurant", "Aromatherapy Service", "Art", "Art Gallery", "Artist", "Art Museum", "Art Restoration Service", "Art School", "Arts & Crafts Store", "Arts & Entertainment", "Arts/entertainment/nightlife", "Arts/humanities website", "Arts & Humanities Website", "Art Tour Agency", "Asian Fusion Restaurant", "Asian Restaurant", "Astrologist", "Astrologist & Psychic", "Athlete", "Attractions/things to do", "ATV Dealership", "ATV Recreation Park", "ATV Rental", "ATV Rental Shop", "Auction House", "Audiologist", "Audio Visual Equipment Store", "Auditorium", "Australian Restaurant", "Austrian Restaurant", "Author", "Auto Detailing Service", "Automation Service", "Automobiles and parts", "Automotive", "Automotive, Aircraft & Boat", "Automotive, Aircraft, Boat", "Automotive Body Shop", "Automotive Company", "Automotive Consultant", "Automotive Customization Shop", "Automotive Dealership", "Automotive Glass Service", "Automotive Leasing Service", "Automotive Manufacturer", "Automotive Parts Store", "Automotive Repair Shop", "Automotive Restoration Service", "Automotive Service", "Automotive Shipping Service", "Automotive Storage Facility", "Automotive Store", "Automotive Wholesaler", "Automotive Window Tinting Service", "Aviation", "Aviation School", "Awning Supplier", "Baby & Children's Clothing Store", "Baby Goods/Kids Goods", "Babysitter", "Bags/luggage", "Bags & Luggage Company", "Bags & Luggage Store", "Bail Bondsmen", "Bakery", "Ballroom", "Band", "Bank", "Bank Equipment & Service", "Bank/financial institution", "Bank/Financial Service", "Bank/financial services", "Bankruptcy Lawyer", "Baptist Church", "Bar", "Barbecue Restaurant", "Barber Shop", "Bar & Grill", "Bartending School", "Bartending Service", "Baseball Field", "Basketball Court", "Basque Restaurant", "Batting Cage", "Bavarian Restaurant", "Beach", "Beach Resort", "Beauty", "Beauty, Cosmetic & Personal Care", "Beauty/Cosmetics Company", "Beauty Salon", "Beauty Service", "Beauty Store", "Beauty Supplier", "Beauty Supply Store", "Bed and Breakfast", "Beer Bar", "Beer Garden", "Belgian Restaurant", "Bengali/Bangladeshi Restaurant", "Betting Shop", "Bicycle Rental Shop", "Bicycle Repair Service", "Bicycle Shop", "Big Box Retailer", "Bike Rental", "Bike Trail", "Bingo Hall", "Biotechnology", "Biotechnology Company", "Blacksmith", "Blinds & Curtains Store", "Blogger", "Blood Bank", "Board game", "Boat Dealership", "Boat/Ferry Company", "Boat Rental", "Boat / Sailing Instructor", "Boat Service", "Boat Tour Agency", "Book", "Book & Magazine Distributor", "Book series", "Books & Magazines", "Bookstore", "Book Store", "Borough", "Botanical Garden", "Bottled Water Company", "Bottled Water Supplier", "Boutique Store", "Bowling Alley", "Brand", "Brand Agency", "Brand/Company Type", "Brazilian Restaurant", "Breakfast & Brunch Restaurant", "Brewery", "Bridal Shop", "Bridge", "British Restaurant", "Broadcasting & Media Production Company", "Brokerage", "Brokerage Firm", "Bubble Tea Shop", "Buddhist Temple", "Buffet Restaurant", "Building Materials", "Building Material Store", "Burger Restaurant", "Burmese Restaurant", "Business", "Business Center", "Business Consultant", "Business/economy website", "Business & Economy Website", "Business person", "Business Service", "Business services", "Business Supply Service", "Bus Line", "Bus Station", "Bus Tour Agency", "Butcher Shop", "Cabin", "Cabinet & Countertop Store", "Cable & Satellite Company", "Cafe", "Cafeteria", "Cajun & Creole Restaurant", "Calabrian Restaurant", "Cambodian Restaurant", "Camera/photo", "Camera Store", "Campground", "Campus Building", "Canadian Restaurant", "Canal", "Candy Store", "Canoe & Kayak Rental", "Canoe & Kayak Rental Shop", "Cantonese Restaurant", "Car Dealership", "Cardiologist", "Career Counselor", "Cargo & Freight Company", "Caribbean Restaurant", "Car Rental", "Car Stereo Store", "Car Wash"];
        this.sort_by = '-score';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.sub = this.route.params.subscribe(function (params) {
            _this.selected_category = params['query'];
            _this.setPage(1, true);
            // In a real app: dispatch action to load the details here.
        });
    };
    SearchComponent.prototype.getTWInfluencersPress = function (e) {
        if (e.keyCode == 13) {
            this.pager = {};
            this.interest_value = "";
            this.loc = "";
            this.name_value = "";
            this.column = {};
            // alert( this.selected_category)
            // this.selected_category = e['option']['value'];
            this.setPage(1);
        }
    };
    SearchComponent.prototype.getTWInfluencers = function (e) {
        this.pager = {};
        this.interest_value = "";
        this.loc = "";
        this.name_value = "";
        // this.search = "all";
        this.column = {};
        this.setPage(1, true);
    };
    SearchComponent.prototype.fillinterests = function (data) {
        this.interests = data;
        // if(!this.interests['infscore']['interests']) {
        //     this.interests['infscore']['interests'][0] = this.selected_category;
        // }
        this.dialogVisible_features = true;
    };
    SearchComponent.prototype.searchByLocEm = function (e) {
        if (e.keyCode == 13 && this.locEm) {
            this.setPage(1);
        }
    };
    SearchComponent.prototype.filltwitterdata = function (data) {
        // data
        this.twitterdata = data;
        this.dialogVisible = true;
    };
    SearchComponent.prototype.setPage = function (page, doornot) {
        var _this = this;
        if (doornot === void 0) { doornot = false; }
        if (page < 1 || page > this.pager.totalPages) {
            // alert('called')
            return;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        // this.loaded = false;
        headers.append('Content-Type', 'application/json');
        // this.http.post(Config.api+ '/ml/get_twitter_users/' + this.selected_category + '/' + this.sort_by + '/?page=' + page + '', JSON.stringify(this.column), {headers: headers})
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].api + '/ml/get_twitter_users/' + this.selected_category + '/' + this.sort_by + '/?page=' + page + '', JSON.stringify(this.column), { headers: headers })
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
            }
            if (res.status == 204) {
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
        });
    };
    SearchComponent.prototype.custom_filter = function (v) {
        console.clear();
        if (v.keyCode == 13 && this.name_value !== "") {
            // this.column = "name";
            this.column["name"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    SearchComponent.prototype.filter_tweets = function (v) {
        console.clear();
        if (v.keyCode == 13 && this.tweets_value !== "") {
            // this.column = "name";
            this.column["tweets_value"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    SearchComponent.prototype.interest_filter = function (v) {
        console.clear();
        if (v.keyCode == 13 && this.interest_value !== "") {
            // this.column = "name";
            this.column["interest"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    SearchComponent.prototype.filter_loc_email = function (v) {
        if (v.keyCode == 13 && this.loc !== "") {
            // this.column = "name";
            this.column["location"] = v.target.value;
            // this.column["name"] = v.target.value;
            this.setPage(1);
        }
    };
    SearchComponent.prototype.filter_score = function (v) {
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
    SearchComponent.prototype.sortByInfluence = function (e) {
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
    SearchComponent.prototype.sortByName = function (e) {
        console.clear();
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
    SearchComponent.prototype.sortByLoc = function (e) {
        console.clear();
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
    SearchComponent.prototype.goTwitterProfile = function (influencer) {
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
    SearchComponent.prototype.chec = function () {
        console.clear();
    };
    SearchComponent.prototype.add_create_list = function () {
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
    SearchComponent.prototype.clear_list = function () {
        for (var i in this.inflist) {
            this.inflist[i] = false;
        }
    };
    SearchComponent.prototype.cheakall = function (e) {
        for (var _i = 0, _a = this.influencers['results']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.inflist[i['id']] = e;
        }
        console.clear();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./twitter_inflluencers.html */ "./src/app/home/twitter_inflluencers.html"),
            styles: [__webpack_require__(/*! ./search.scss */ "./src/app/home/search.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_paginator_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/home/search.scss":
/*!**********************************!*\
  !*** ./src/app/home/search.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);\n#wrapper {\n  /*background-color: green; !* for vizualization purposes *!*/\n  text-align: center; }\n#yourdiv {\n  /*background-color: red; !* for vizualization purposes *!*/\n  display: inline-block; }\n.container {\n  z-index: 1;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 4em; }\n/*\r\n*\r\n*\r\nSTART // CHART'S RULES\r\n -> \"if you're picking code, don't forget the variables :)\"\r\n*/\n.chart {\n  font-size: 1em;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible; }\n.bar {\n  font-size: 1em;\n  position: relative;\n  height: 10em;\n  transition: all 0.3s ease-in-out;\n  -webkit-transform: rotateX(60deg) rotateY(0deg);\n          transform: rotateX(60deg) rotateY(0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n.bar .face {\n    font-size: 2em;\n    position: relative;\n    width: 100%;\n    height: 2em;\n    background-color: rgba(254, 254, 254, 0.3); }\n.bar .face.side-a, .bar .face.side-b {\n      width: 2em; }\n.bar .side-a {\n    -webkit-transform: rotateX(90deg) rotateY(-90deg) translateX(2em) translateY(1em) translateZ(1em);\n            transform: rotateX(90deg) rotateY(-90deg) translateX(2em) translateY(1em) translateZ(1em); }\n.bar .side-b {\n    -webkit-transform: rotateX(90deg) rotateY(-90deg) translateX(4em) translateY(1em) translateZ(-1em);\n            transform: rotateX(90deg) rotateY(-90deg) translateX(4em) translateY(1em) translateZ(-1em);\n    position: absolute;\n    right: 0; }\n.bar .side-0 {\n    -webkit-transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(-1em);\n            transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(-1em); }\n.bar .side-1 {\n    -webkit-transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(3em);\n            transform: rotateX(90deg) rotateY(0) translateX(0) translateY(1em) translateZ(3em); }\n.bar .top {\n    -webkit-transform: rotateX(0deg) rotateY(0) translateX(0em) translateY(4em) translateZ(2em);\n            transform: rotateX(0deg) rotateY(0) translateX(0em) translateY(4em) translateZ(2em); }\n.bar .floor {\n    box-shadow: 0 0.1em 0.6em rgba(0, 0, 0, 0.3), 0.6em -0.5em 3em rgba(0, 0, 0, 0.3), 1em -1em 8em #fefefe; }\n.growing-bar {\n  transition: all 0.3s ease-in-out;\n  background-color: rgba(255, 0, 0, 0.6);\n  width: 100%;\n  height: 2em; }\n.bar.yellow .side-a,\n.bar.yellow .growing-bar {\n  background-color: rgba(241, 196, 15, 0.6); }\n.bar.yellow .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em rgba(241, 196, 15, 0.8); }\n.bar.yellow .floor .growing-bar {\n  box-shadow: 0em 0em 2em rgba(241, 196, 15, 0.8); }\n.bar.red .side-a, input[id='red']:checked ~ .chart .side-a,\n.bar.red .growing-bar,\ninput[id='red']:checked ~ .chart .growing-bar {\n  background-color: rgba(255, 0, 0, 0.6); }\n.bar.red .side-0 .growing-bar, input[id='red']:checked ~ .chart .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em rgba(255, 0, 0, 0.8); }\n.bar.red .floor .growing-bar, input[id='red']:checked ~ .chart .floor .growing-bar {\n  box-shadow: 0em 0em 2em rgba(255, 0, 0, 0.8); }\n.bar.cyan .side-a, input[id='cyan']:checked ~ .chart .side-a,\n.bar.cyan .growing-bar,\ninput[id='cyan']:checked ~ .chart .growing-bar {\n  background-color: rgba(87, 202, 244, 0.6); }\n.bar.cyan .side-0 .growing-bar, input[id='cyan']:checked ~ .chart .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #57caf4; }\n.bar.cyan .floor .growing-bar, input[id='cyan']:checked ~ .chart .floor .growing-bar {\n  box-shadow: 0em 0em 2em #57caf4; }\n.bar.navy .side-a,\n.bar.navy .growing-bar {\n  background-color: rgba(10, 64, 105, 0.6); }\n.bar.navy .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em rgba(10, 64, 105, 0.8); }\n.bar.navy .floor .growing-bar {\n  box-shadow: 0em 0em 2em rgba(10, 64, 105, 0.8); }\n.bar.lime .side-a, input[id='lime']:checked ~ .chart .side-a,\n.bar.lime .growing-bar,\ninput[id='lime']:checked ~ .chart .growing-bar {\n  background-color: rgba(118, 201, 0, 0.6); }\n.bar.lime .side-0 .growing-bar, input[id='lime']:checked ~ .chart .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #76c900; }\n.bar.lime .floor .growing-bar, input[id='lime']:checked ~ .chart .floor .growing-bar {\n  box-shadow: 0em 0em 2em #76c900; }\n.bar.white .side-a,\n.bar.white .growing-bar {\n  background-color: rgba(254, 254, 254, 0.6); }\n.bar.white .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #fefefe; }\n.bar.white .floor .growing-bar {\n  box-shadow: 0em 0em 2em #fefefe; }\n.bar.gray .side-a,\n.bar.gray .growing-bar {\n  background-color: rgba(68, 68, 68, 0.6); }\n.bar.gray .side-0 .growing-bar {\n  box-shadow: -0.5em -1.5em 4em #444; }\n.bar.gray .floor .growing-bar {\n  box-shadow: 0em 0em 2em #444; }\n.chart .bar.yellow-face .face {\n  background-color: rgba(241, 196, 15, 0.2); }\n.chart .bar.lime-face .face {\n  background-color: rgba(118, 201, 0, 0.2); }\n.chart .bar.red-face .face {\n  background-color: rgba(255, 0, 0, 0.2); }\n.chart .bar.navy-face .face {\n  background-color: rgba(10, 64, 105, 0.2); }\n.chart .bar.cyan-face .face {\n  background-color: rgba(87, 202, 244, 0.2); }\n.chart .bar.gray-face .face {\n  background-color: rgba(68, 68, 68, 0.2); }\n.chart .bar.lightGray-face .face {\n  background-color: rgba(145, 144, 144, 0.2); }\n.bar-0 .growing-bar {\n  width: 0%; }\n.bar-1 .growing-bar {\n  width: 1%; }\n.bar-2 .growing-bar {\n  width: 2%; }\n.bar-3 .growing-bar {\n  width: 3%; }\n.bar-4 .growing-bar {\n  width: 4%; }\n.bar-5 .growing-bar {\n  width: 5%; }\n.bar-6 .growing-bar {\n  width: 6%; }\n.bar-7 .growing-bar {\n  width: 7%; }\n.bar-8 .growing-bar {\n  width: 8%; }\n.bar-9 .growing-bar {\n  width: 9%; }\n.bar-10 .growing-bar {\n  width: 10%; }\n.bar-11 .growing-bar {\n  width: 11%; }\n.bar-12 .growing-bar {\n  width: 12%; }\n.bar-13 .growing-bar {\n  width: 13%; }\n.bar-14 .growing-bar {\n  width: 14%; }\n.bar-15 .growing-bar {\n  width: 15%; }\n.bar-16 .growing-bar {\n  width: 16%; }\n.bar-17 .growing-bar {\n  width: 17%; }\n.bar-18 .growing-bar {\n  width: 18%; }\n.bar-19 .growing-bar {\n  width: 19%; }\n.bar-20 .growing-bar, input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar {\n  width: 20%; }\n.bar-21 .growing-bar {\n  width: 21%; }\n.bar-22 .growing-bar {\n  width: 22%; }\n.bar-23 .growing-bar {\n  width: 23%; }\n.bar-24 .growing-bar {\n  width: 24%; }\n.bar-25 .growing-bar, input[id='pos-0']:checked ~ .chart .growing-bar {\n  width: 25%; }\n.bar-26 .growing-bar {\n  width: 26%; }\n.bar-27 .growing-bar {\n  width: 27%; }\n.bar-28 .growing-bar {\n  width: 28%; }\n.bar-29 .growing-bar {\n  width: 29%; }\n.bar-30 .growing-bar {\n  width: 30%; }\n.bar-31 .growing-bar {\n  width: 31%; }\n.bar-32 .growing-bar {\n  width: 32%; }\n.bar-33 .growing-bar {\n  width: 33%; }\n.bar-34 .growing-bar {\n  width: 34%; }\n.bar-35 .growing-bar {\n  width: 35%; }\n.bar-36 .growing-bar {\n  width: 36%; }\n.bar-37 .growing-bar {\n  width: 37%; }\n.bar-38 .growing-bar {\n  width: 38%; }\n.bar-39 .growing-bar {\n  width: 39%; }\n.bar-40 .growing-bar {\n  width: 40%; }\n.bar-41 .growing-bar {\n  width: 41%; }\n.bar-42 .growing-bar {\n  width: 42%; }\n.bar-43 .growing-bar {\n  width: 43%; }\n.bar-44 .growing-bar {\n  width: 44%; }\n.bar-45 .growing-bar {\n  width: 45%; }\n.bar-46 .growing-bar {\n  width: 46%; }\n.bar-47 .growing-bar {\n  width: 47%; }\n.bar-48 .growing-bar {\n  width: 48%; }\n.bar-49 .growing-bar {\n  width: 49%; }\n.bar-50 .growing-bar, input[id='pos-1']:checked ~ .chart .growing-bar, input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar, input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar, input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar {\n  width: 50%; }\n.bar-51 .growing-bar {\n  width: 51%; }\n.bar-52 .growing-bar {\n  width: 52%; }\n.bar-53 .growing-bar {\n  width: 53%; }\n.bar-54 .growing-bar {\n  width: 54%; }\n.bar-55 .growing-bar {\n  width: 55%; }\n.bar-56 .growing-bar {\n  width: 56%; }\n.bar-57 .growing-bar {\n  width: 57%; }\n.bar-58 .growing-bar {\n  width: 58%; }\n.bar-59 .growing-bar {\n  width: 59%; }\n.bar-60 .growing-bar {\n  width: 60%; }\n.bar-61 .growing-bar {\n  width: 61%; }\n.bar-62 .growing-bar {\n  width: 62%; }\n.bar-63 .growing-bar {\n  width: 63%; }\n.bar-64 .growing-bar {\n  width: 64%; }\n.bar-65 .growing-bar {\n  width: 65%; }\n.bar-66 .growing-bar {\n  width: 66%; }\n.bar-67 .growing-bar {\n  width: 67%; }\n.bar-68 .growing-bar {\n  width: 68%; }\n.bar-69 .growing-bar {\n  width: 69%; }\n.bar-70 .growing-bar, input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(1) .growing-bar, input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(2) .growing-bar, input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar {\n  width: 70%; }\n.bar-71 .growing-bar {\n  width: 71%; }\n.bar-72 .growing-bar {\n  width: 72%; }\n.bar-73 .growing-bar {\n  width: 73%; }\n.bar-74 .growing-bar {\n  width: 74%; }\n.bar-75 .growing-bar, input[id='pos-2']:checked ~ .chart .growing-bar {\n  width: 75%; }\n.bar-76 .growing-bar {\n  width: 76%; }\n.bar-77 .growing-bar {\n  width: 77%; }\n.bar-78 .growing-bar {\n  width: 78%; }\n.bar-79 .growing-bar {\n  width: 79%; }\n.bar-80 .growing-bar, input[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar {\n  width: 80%; }\n.bar-81 .growing-bar {\n  width: 81%; }\n.bar-82 .growing-bar {\n  width: 82%; }\n.bar-83 .growing-bar {\n  width: 83%; }\n.bar-84 .growing-bar {\n  width: 84%; }\n.bar-85 .growing-bar {\n  width: 85%; }\n.bar-86 .growing-bar {\n  width: 86%; }\n.bar-87 .growing-bar {\n  width: 87%; }\n.bar-88 .growing-bar {\n  width: 88%; }\n.bar-89 .growing-bar {\n  width: 89%; }\n.bar-90 .growing-bar {\n  width: 90%; }\n.bar-91 .growing-bar {\n  width: 91%; }\n.bar-92 .growing-bar {\n  width: 92%; }\n.bar-93 .growing-bar {\n  width: 93%; }\n.bar-94 .growing-bar {\n  width: 94%; }\n.bar-95 .growing-bar {\n  width: 95%; }\n.bar-96 .growing-bar {\n  width: 96%; }\n.bar-97 .growing-bar {\n  width: 97%; }\n.bar-98 .growing-bar {\n  width: 98%; }\n.bar-99 .growing-bar {\n  width: 99%; }\n.bar-100 .growing-bar, input[id='pos-3']:checked ~ .chart .growing-bar, input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(3) .growing-bar {\n  width: 100%; }\n/*\r\nEND // CHART'S RULES\r\n*\r\n*\r\n*/\n.chart.grid {\n  display: flex;\n  flex-direction: row; }\n.chart.grid .exercise {\n    flex: 0 0 100%;\n    display: flex; }\n.chart.grid .exercise .bar {\n      flex: 1;\n      margin: 0 .5em; }\n.chart.grid .exercise .bar:nth-child(2) {\n        z-index: 8;\n        flex: 1 0 40%; }\n.chart.grid .exercise .bar:first-child {\n        z-index: 10;\n        margin-left: 0; }\n.chart.grid .exercise .bar:last-child {\n        margin-right: 0; }\n.actions {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0;\n  padding-bottom: 2em;\n  border-bottom: 1px dotted rgba(68, 68, 68, 0.4); }\nlabel {\n  box-sizing: border-box;\n  padding: 1em;\n  margin: 0 .2em;\n  cursor: pointer;\n  transition: all .15s ease-in-out;\n  color: #0a4069;\n  border: 1px solid rgba(254, 254, 254, 0.6);\n  border-radius: 0;\n  flex: 1; }\nlabel:first-child {\n    margin-left: 0;\n    border-radius: .2em 0 0 .2em; }\nlabel:last-child {\n    margin-right: 0;\n    border-radius: 0 .2em .2em 0; }\ninput[id='exercise-1']:checked ~ .actions label[for='exercise-1'],\ninput[id='exercise-2']:checked ~ .actions label[for='exercise-2'],\ninput[id='exercise-3']:checked ~ .actions label[for='exercise-3'],\ninput[id='exercise-4']:checked ~ .actions label[for='exercise-4'],\ninput[id='pos-0']:checked ~ .actions label[for='pos-0'],\ninput[id='pos-1']:checked ~ .actions label[for='pos-1'],\ninput[id='pos-2']:checked ~ .actions label[for='pos-2'],\ninput[id='pos-3']:checked ~ .actions label[for='pos-3'],\ninput[id='red']:checked ~ .actions label[for='red'],\ninput[id='cyan']:checked ~ .actions label[for='cyan'],\ninput[id='lime']:checked ~ .actions label[for='lime'] {\n  color: #76c900;\n  border: 1px solid #031523;\n  background-color: #0a4069; }\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(1) {\n  flex: 1 0 0%; }\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(2) {\n  flex: 1; }\ninput[id='exercise-2']:checked ~ .chart.grid .exercise .bar:nth-child(3) {\n  flex: 1 0 30%; }\ninput[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(1), input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(2), input[id='exercise-3']:checked ~ .chart.grid .exercise .bar:nth-child(3) {\n  flex: 1; }\ninput[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(1), input[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(2) {\n  flex: 1 0 30%; }\ninput[id='exercise-4']:checked ~ .chart.grid .exercise .bar:nth-child(3) {\n  flex: 1; }\n.SickyPage {\n  position: fixed;\n  top: 60px;\n  background: #eceff4;\n  z-index: 9;\n  width: 83%; }\n.md-input-element {\n  margin-top: -0.7em !important; }\n"

/***/ }),

/***/ "./src/app/home/twitter_inflluencers.html":
/*!************************************************!*\
  !*** ./src/app/home/twitter_inflluencers.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<div class=\"page-content\">-->\r\n    <!--<div class=\"SickyPage\">-->\r\n        <!--<div id=\"wrapper\">-->\r\n            <!--<div id=\"yourdiv\">-->\r\n                <!--<nav>-->\r\n                    <!--<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">-->\r\n\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">-->\r\n                                <!--First-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">-->\r\n                                <!--<span aria-hidden=\"true\">&laquo;</span>-->\r\n                                <!--<span class=\"sr-only\">Previous</span>-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n\r\n                        <!--<li class=\"page-item\" *ngFor=\"let page of pager.pages\"-->\r\n                            <!--[ngClass]=\"{active:pager.currentPage === page}\"-->\r\n                            <!--(click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>-->\r\n\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">-->\r\n                                <!--<span aria-hidden=\"true\">&raquo;</span>-->\r\n                                <!--<span class=\"sr-only\">Next</span>-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">-->\r\n                                <!--Last-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n\r\n                    <!--</ul>-->\r\n                <!--</nav>-->\r\n\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"container-fluid\">-->\r\n\r\n    <!--<div *ngIf=\"loaded && influencers.totalItems==0\">-->\r\n        <!--<div class=\"box-typical box-typical-full-height\" style=\"min-height: 119px;\">-->\r\n            <!--<div class=\"add-customers-screen tbl\" style=\"height: 119px;\">-->\r\n                <!--<div class=\"add-customers-screen-in\">-->\r\n                    <!--<div class=\"add-customers-screen-user\">-->\r\n                        <!--<i class=\"font-icon font-icon-user\"></i>-->\r\n                    <!--</div>-->\r\n                    <!--<h2>OOPS!</h2>-->\r\n                    <!--<p class=\"lead color-blue-grey-lighter\">No twitter influencers found.</p>-->\r\n                    <!--&lt;!&ndash;<a href=\"#\" class=\"btn\">Add customer</a>&ndash;&gt;-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>&lt;!&ndash;.box-typical&ndash;&gt;-->\r\n    <!--</div>-->\r\n\r\n<!--<div class=\"SickyPage\">-->\r\n    <!--<div id=\"wrapper\">-->\r\n        <!--<div id=\"yourdiv\">-->\r\n            <!--<nav>-->\r\n                <!--<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">-->\r\n\r\n                    <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                        <!--<a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">-->\r\n                            <!--First-->\r\n                        <!--</a>-->\r\n                    <!--</li>-->\r\n                    <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                        <!--<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">-->\r\n                            <!--<span aria-hidden=\"true\">&laquo;</span>-->\r\n                            <!--<span class=\"sr-only\">Previous</span>-->\r\n                        <!--</a>-->\r\n                    <!--</li>-->\r\n\r\n                    <!--<li class=\"page-item\" *ngFor=\"let page of pager.pages\"-->\r\n                        <!--[ngClass]=\"{active:pager.currentPage === page}\"-->\r\n                        <!--(click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>-->\r\n\r\n                    <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                        <!--<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">-->\r\n                            <!--<span aria-hidden=\"true\">&raquo;</span>-->\r\n                            <!--<span class=\"sr-only\">Next</span>-->\r\n                        <!--</a>-->\r\n                    <!--</li>-->\r\n                    <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                        <!--<a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">-->\r\n                            <!--Last-->\r\n                        <!--</a>-->\r\n                    <!--</li>-->\r\n\r\n                <!--</ul>-->\r\n            <!--</nav>-->\r\n\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</div>-->\r\n\r\n        <!--<section class=\"box-typical\" style=\"margin-top: 4%;\" *ngIf=\"loaded && influencers.totalItems!=0\">-->\r\n\r\n\r\n            <!--<div class=\"box-typical-body\">-->\r\n                <!--<div class=\"table-responsive\">-->\r\n                    <!--<div class=\"bootstrap-table\">-->\r\n                        <!--<p-dataTable #dt exportFilename=\"Influencers\" [value]=\"influencers.results\"-->\r\n                                     <!--class=\"table table-striped table-hover\">-->\r\n\r\n                            <!--<p-header class=\"box-typical-header\">-->\r\n                                <!--<div class=\"fixed-table-toolbar\">-->\r\n\r\n                                    <!--<div class=\"bars pull-left\">-->\r\n                                        <!--<div id=\"toolbar\">-->\r\n                                            <!--<div class=\"bootstrap-table-header\">Search results</div>-->\r\n                                            <!--<button class=\"btn btn-primary\" (click)=\"add_create_list()\">-->\r\n                                                <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                                                <!--Add to list-->\r\n                                            <!--</button>-->\r\n                                            <!--<button class=\"btn btn-primary\" (click)=\"clear_list()\">-->\r\n                                                <!--&lt;!&ndash;<i class=\"font-icon font-icon-close-2\"></i> &ndash;&gt;-->\r\n                                                <!--Clear selected-->\r\n                                            <!--</button>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"columns columns-right btn-group pull-right\">-->\r\n\r\n                                        <!--<div class=\"export btn-group\">-->\r\n                                            <!--<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"-->\r\n                                                    <!--type=\"button\" aria-expanded=\"false\"><i-->\r\n                                                    <!--class=\"font-icon font-icon-download\"></i> <span-->\r\n                                                    <!--class=\"caret\"></span>-->\r\n                                            <!--</button>-->\r\n                                            <!--<ul class=\"dropdown-menu\" role=\"menu\"-->\r\n                                                <!--style=\"min-width: fit-content;left: auto\">-->\r\n                                                <!--<li data-type=\"json\"><a href=\"javascript:void(0)\">JSON</a></li>-->\r\n                                                <!--<li data-type=\"xml\"><a href=\"javascript:void(0)\">XML</a></li>-->\r\n                                                <!--<li data-type=\"csv\"><a href=\"javascript:void(0)\">CSV</a></li>-->\r\n                                                <!--<li data-type=\"txt\"><a href=\"javascript:void(0)\">TXT</a></li>-->\r\n                                                <!--<li data-type=\"sql\"><a href=\"javascript:void(0)\">SQL</a></li>-->\r\n                                                <!--<li data-type=\"excel\"><a href=\"javascript:void(0)\">MS-Excel</a></li>-->\r\n                                            <!--</ul>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--&lt;!&ndash;<div class=\"pull-right search\">&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;<input class=\"form-control\" type=\"text\" [(ngModel)]=\"locEm\" name=\"loc_em\"&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;(keypress)=\"searchByLocEm($event)\"&ndash;&gt;-->\r\n                                    <!--&lt;!&ndash;placeholder=\"Specify by location/email\">&ndash;&gt;-->\r\n\r\n                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                                <!--</div>-->\r\n\r\n                            <!--</p-header>-->\r\n                            <!--<p-column>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div class=\"table-check\">-->\r\n                                        <!--<div class=\"checkbox checkbox-only\">-->\r\n                                            <!--<input type=\"checkbox\" id=\"table-check-head\" name=\"main_checkbox\"-->\r\n                                                   <!--[(ngModel)]=\"main_checkbox\"-->\r\n                                                   <!--(change)=\"cheakall($event.target.checked)\">-->\r\n                                            <!--<label for=\"table-check-head\"></label>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n                                    <!--<div class=\"table-check\">-->\r\n                                        <!--<div class=\"checkbox checkbox-only\">-->\r\n                                            <!--<input type=\"checkbox\" name=\"{{car['id']}}\" [(ngModel)]=\"inflist[car['id']]\"-->\r\n                                                   <!--(change)=\"chec()\" id=\"table-check-{{car['id']}}\">-->\r\n                                            <!--<label for=\"table-check-{{car['id']}}\"></label>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n\r\n                            <!--<p-column (sortFunction)=\"sortByName($event)\" sortable=\"custom\" field=\"name\"-->\r\n                                      <!--[filter]=\"true\">-->\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--<input class=\"form-control\" style=\"width:73%\" placeholder=\"Name/Screen name\"-->\r\n                                           <!--[(ngModel)]=\"name_value\" (keydown)=\"custom_filter($event)\">-->\r\n                                    <!--<br>-->\r\n\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Influencer</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"body\" let-col let-car=\"rowData\">-->\r\n\r\n\r\n                                    <!--<a (click)=\"goTwitterProfile(car)\"-->\r\n                                       <!--title=\"{{car['name']}}\" style=\"text-align: left;\">-->\r\n                                        <!--<div class=\"mail-box-item selected-line red\" style=\"max-width: 250px\">-->\r\n                                            <!--<div class=\"mail-box-item-header\">-->\r\n\r\n                                                <!--<div class=\"mail-box-item-photo\">-->\r\n                                                    <!--<img *ngIf=\"car['image_url']\"-->\r\n                                                         <!--src=\"{{car['image_url']}}\"-->\r\n                                                         <!--style=\"width: 32px;height: 32px\" alt=\"\" data-toggle=\"tooltip\"-->\r\n                                                         <!--data-placement=\"bottom\">-->\r\n\r\n                                                <!--</div>-->\r\n                                                <!--<div class=\"tbl mail-box-item-head-tbl\">-->\r\n                                                    <!--<div class=\"tbl-row\">-->\r\n                                                        <!--<div class=\"tbl-cell\">-->\r\n                                                            <!--<div class=\"tbl mail-box-item-user-tbl\">-->\r\n                                                                <!--<div class=\"tbl-row\">-->\r\n                                                                    <!--<div class=\"tbl-cell tbl-cell-name\"-->\r\n                                                                         <!--[innerHTML]=\"car['name']\"></div>-->\r\n                                                                    <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-new\"><span class=\"label label-pill label-danger\">11</span></div>&ndash;&gt;-->\r\n                                                                <!--</div>-->\r\n                                                            <!--</div>-->\r\n\r\n                                                        <!--</div>-->\r\n                                                        <!--&lt;!&ndash;<div class=\"tbl-cell tbl-cell-date\" title=\"Type of website\"><strong>{{car['data']['site_type']&ndash;&gt;-->\r\n                                                        <!--&lt;!&ndash;| uppercase}}</strong></div>&ndash;&gt;-->\r\n                                                    <!--</div>-->\r\n                                                <!--</div>-->\r\n\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"mail-box-item-content\">-->\r\n                                                <!--&lt;!&ndash;<div *ngIf=\"!car['highlightText']\" class=\"txt\" title=\"{{car['data']['title_full']}}\" [innerHTML]=\"car['data']['title_full']\"></div>&ndash;&gt;-->\r\n                                                <!--<div *ngIf=\"car['description']\" class=\"txt\"-->\r\n                                                     <!--title=\"{{car['description']}}\"-->\r\n                                                     <!--style=\"white-space: normal;max-height: 75px;text-overflow: ellipsis\"-->\r\n                                                     <!--[innerHTML]=\"car['description']\"></div>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</a>-->\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n                            <!--<p-column [filter]=\"true\" (sortFunction)=\"sortByLoc($event)\" sortable=\"custom\"-->\r\n                                      <!--field=\"location\">-->\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--<input [(ngModel)]=\"loc\" class=\"form-control\" placeholder=\"Search\" style=\"width:73%\"-->\r\n                                           <!--(keydown)=\"filter_loc_email($event)\">-->\r\n                                    <!--<br>-->\r\n                                    <!--&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Location/Contact</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                                    <!--<div class=\"col-item col-contact tooltips\">-->\r\n                                        <!--<ul>-->\r\n                                            <!--<li *ngIf=\"car['location']\">-->\r\n                                                <!--<div>-->\r\n                                                    <!--<i class=\"fa fa-map-marker\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                    <!--{{car['location']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                <!--</div>-->\r\n                                            <!--</li>-->\r\n                                            <!--<li *ngIf=\"car['email']\">-->\r\n                                                <!--<div>-->\r\n                                                    <!--<i class=\"font-icon-mail\"></i>&lt;!&ndash;ko text:AlexaCountry&ndash;&gt;-->\r\n                                                    <!--{{car['email']}}&lt;!&ndash;/ko&ndash;&gt;-->\r\n                                                <!--</div>-->\r\n                                            <!--</li>-->\r\n                                            <!--<li>-->\r\n\r\n                                            <!--</li>-->\r\n\r\n                                        <!--</ul>-->\r\n\r\n                                    <!--</div>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n                            <!--<p-column (sortFunction)=\"sortByInfluence($event)\" [filter]=\"true\" sortable=\"custom\"-->\r\n                                      <!--field=\"infscore.score\" >-->\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--<div style=\"text-align: center;\">-->\r\n                                        <!--<h3>Range: {{scoreValues[0] + ' - ' + scoreValues[1]}}</h3>-->\r\n                                        <!--<p-slider [(ngModel)]=\"scoreValues\" [min]=\"influencers['min']\" [max]=\"influencers['max']\"-->\r\n                                                  <!--[style]=\"{'width':'200px'}\" style=\"display: inline-block;\" [range]=\"true\" (onSlideEnd)=\"filter_score($event)\"></p-slider>-->\r\n                                        <!--&lt;!&ndash;<md-slider min=\"1\" max=\"5\" step=\"0.5\" value=\"1.5\"></md-slider>&ndash;&gt;-->\r\n                                        <!--&lt;!&ndash;<button md-mini-fab color=\"accent\">Go</button>&ndash;&gt;-->\r\n                                        <!--<br>-->\r\n                                    <!--</div>-->\r\n                                    <!--&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Influence</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" pTemplate=\"body\">-->\r\n                                    <!--<div class=\"col-lg-1\"></div>-->\r\n                                    <!--&lt;!&ndash;{{car['infscore']['score']}}&ndash;&gt;-->\r\n                                    <!--<div class=\"chart\" style=\" width: 243px;\">-->\r\n                                        <!--<div class=\"bar bar-{{car['infscore']['score'] | round}} cyan\">-->\r\n                                            <!--<div class=\"face top\">-->\r\n                                                <!--<div class=\"growing-bar\"></div>-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"face side-0\">-->\r\n                                                <!--<div class=\"growing-bar\"></div>-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"face floor\">-->\r\n                                                <!--<div class=\"growing-bar\"></div>-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"face side-a\"></div>-->\r\n                                            <!--<div class=\"face side-b\"></div>-->\r\n                                            <!--<div class=\"face side-1\">-->\r\n                                                <!--<div class=\"growing-bar\"></div>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n                            <!--</p-column>-->\r\n\r\n                            <!--&lt;!&ndash;<p-column field=\"location\" header=\"Location\"></p-column>&ndash;&gt;-->\r\n                            <!--<p-column [filter]=\"true\">-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Interests</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--<input [(ngModel)]=\"interest_value\" class=\"form-control\" style=\"width:73%\" placeholder=\"Interests\"-->\r\n                                           <!--(keydown)=\"interest_filter($event)\">-->\r\n                                    <!--<br>-->\r\n\r\n                                <!--</ng-template>-->\r\n                                <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n\r\n                                    <!--<div class=\"col-lg-1\"></div>-->\r\n                                    <!--<button type=\"text\" (click)=\"fillinterests(car)\" pButton-->\r\n                                            <!--class=\"btn btn-rounded btn-inline btn-info\">Show Interests-->\r\n                                    <!--</button>-->\r\n                                <!--</ng-template>-->\r\n\r\n                            <!--</p-column>-->\r\n                            <!--<p-column [filter]=\"true\">-->\r\n                                <!--<ng-template pTemplate=\"header\">-->\r\n                                    <!--<div style=\"text-align: center; \" class=\"th-inner\">Twitter Stats</div>-->\r\n                                    <!--<div class=\"fht-cell\"></div>-->\r\n\r\n                                <!--</ng-template>-->\r\n\r\n\r\n                                <!--<ng-template pTemplate=\"filter\" let-col>-->\r\n                                    <!--<input [(ngModel)]=\"tweets_value\" class=\"form-control\" placeholder=\"Tweets prospecting\" style=\"width:73%\"-->\r\n                                           <!--(keydown)=\"filter_tweets($event)\">-->\r\n                                    <!--<br>-->\r\n                                    <!--&lt;!&ndash;<md-input  [style]=\"{'width':'100%'}\" styleClass=\"ui-column-filter\"></md-input>&ndash;&gt;-->\r\n                                <!--</ng-template>-->\r\n\r\n\r\n\r\n\r\n                                <!--<ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">-->\r\n                                    <!--<button type=\"text\" (click)=\"filltwitterdata(car)\" pButton-->\r\n                                            <!--class=\"btn btn-rounded btn-inline btn-info\">Show-->\r\n                                    <!--</button>-->\r\n\r\n\r\n                                <!--</ng-template>-->\r\n\r\n                            <!--</p-column>-->\r\n\r\n\r\n                        <!--</p-dataTable>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</section>-->\r\n        <!--<p-dialog *ngIf=\"dialogVisible_features\" [(visible)]=\"dialogVisible_features\" [responsive]=\"true\"-->\r\n                  <!--showEffect=\"fade\"-->\r\n                  <!--[modal]=\"true\" width=\"450\">-->\r\n            <!--<p-header *ngIf=\"dialogVisible_features\">-->\r\n\r\n                <!--Interests of {{interests.name}}-->\r\n\r\n            <!--</p-header>-->\r\n            <!--<ul class=\"list-group\">-->\r\n                <!--<li *ngIf=\"interests.infscore.interests\" class=\"list-group-item\">Interests:-->\r\n                    <!--<ul>-->\r\n                        <!--<li *ngFor=\"let c of interests.infscore.interests\" class=\"list-group-item\"-->\r\n                            <!--style=\"text-align: right;\">{{c}}-->\r\n                        <!--</li>-->\r\n\r\n                    <!--</ul>-->\r\n                <!--</li>-->\r\n                <!--<li *ngIf=\"interests.trend \" class=\"list-group-item\">Category:-->\r\n                    <!--<ul>-->\r\n\r\n                        <!--<li>-->\r\n                            <!--<ul *ngFor=\"let c of interests.trend \" class=\"list-group-item\" style=\"text-align: right;\">-->\r\n                                <!--<li *ngFor=\"let cat of c.category | unique: 'name'\">-->\r\n                                    <!--{{cat.name}}-->\r\n\r\n                                <!--</li>-->\r\n                                <!--<li *ngIf=\"!c.location\">-->\r\n                                    <!--{{c.name}}-->\r\n                                <!--</li>-->\r\n                                <!--&lt;!&ndash;<li *ngFor=\"let c of interests.trend\" class=\"list-group-item\" style=\"text-align: right;\"> <span *ngIf=\"c.category[1].name\">{{c.category[1].name}}</span></li>&ndash;&gt;-->\r\n                            <!--</ul>-->\r\n\r\n                        <!--</li>-->\r\n\r\n\r\n                    <!--</ul>-->\r\n            <!--</ul>-->\r\n        <!--</p-dialog>-->\r\n\r\n        <!--<p-dialog *ngIf=\"dialogVisible\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"-->\r\n                  <!--width=\"450\">-->\r\n            <!--<p-header *ngIf=\"dialogVisible\">-->\r\n\r\n                <!--Stats of {{twitterdata.name}}-->\r\n\r\n            <!--</p-header>-->\r\n            <!--<ul class=\"list-group\">-->\r\n                <!--<li *ngIf=\"twitterdata.followers_count\" class=\"list-group-item\"><span>Followers:</span>-->\r\n                    <!--<span style=\"float: right;\">{{twitterdata.followers_count}}</span></li>-->\r\n\r\n                <!--<li *ngIf=\"twitterdata.favourites_count\" class=\"list-group-item\"><span>Favourites:</span>-->\r\n                    <!--<span style=\"float: right;\">{{twitterdata.favourites_count}}</span></li>-->\r\n                <!--<li *ngIf=\"twitterdata.friends_count\" class=\"list-group-item\"><span>Friends:</span>-->\r\n                    <!--<span style=\"float: right;\">{{twitterdata.friends_count}}</span></li>-->\r\n\r\n\r\n            <!--</ul>-->\r\n        <!--</p-dialog>-->\r\n\r\n        <!--<div class=\"container-fluid\" *ngIf=\"loaded\">-->\r\n\r\n        <!--</div>-->\r\n\r\n        <!--<div id=\"wrapper\">-->\r\n            <!--<div id=\"yourdiv\">-->\r\n                <!--<nav>-->\r\n                    <!--<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-lg\">-->\r\n\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(1)\" aria-label=\"Previous\">-->\r\n                                <!--First-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\" aria-label=\"Previous\">-->\r\n                                <!--<span aria-hidden=\"true\">&laquo;</span>-->\r\n                                <!--<span class=\"sr-only\">Previous</span>-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n\r\n                        <!--<li class=\"page-item\" *ngFor=\"let page of pager.pages\"-->\r\n                            <!--[ngClass]=\"{active:pager.currentPage === page}\"-->\r\n                            <!--(click)=\"setPage(page)\"><a class=\"page-link\" (click)=\"navSearch()\">{{page}}</a></li>-->\r\n\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\" aria-label=\"Next\">-->\r\n                                <!--<span aria-hidden=\"true\">&raquo;</span>-->\r\n                                <!--<span class=\"sr-only\">Next</span>-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n                        <!--<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">-->\r\n                            <!--<a class=\"page-link\" (click)=\"setPage(pager.totalPages)\" aria-label=\"Next\">-->\r\n                                <!--Last-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n\r\n                    <!--</ul>-->\r\n                <!--</nav>-->\r\n\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n\r\n<!--</div>-->\r\n\r\n"

/***/ })

}]);
//# sourceMappingURL=blog-search-blog-search-module~blog-search-blogosphere-list-inf-module~facebook-search-facebook-sear~b5aeab9e.js.map