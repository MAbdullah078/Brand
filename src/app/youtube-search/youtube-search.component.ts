import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpService } from '../services/http-service';
import { Headers,Response, Http } from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/map'
import { Config } from '../../config';
import { PagerService } from '../_services/paginator.service';
import Swal from 'sweetalert2';
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import 'jspdf-autotable';



@Component({
    selector: 'app-youtube-search',
    templateUrl: './youtube-search.component.html',
    styleUrls: ['./youtube-search.component.scss'],
    providers: []
})
export class YoutubeSearchComponent implements OnInit {
    myControl: FormControl = new FormControl();
    max = 100;
    inflist: any = {};
    influencers;
    inf_list: string = 'Influencers List';
    influencers2;
    pdfArray: any=[];
    influencers_by_default: any = [];
    query;

    slice;
    loaded = false;
    inf_name:any = [];
    inf_channel_link:any = [];
    inf_subscribers:any = [];
    inf_total_views:any = [];
    inf_thismonthviews:any = [];
    inf_date:any = [];
    inf_rank:any = [];
    inf_todayupload:any = [];
    listnamecheck: boolean = false;
    pager: any = {};
    user_list = {};
    main_checkbox;
    qparamschecker: any;
    currentUser;
    inCurrentpage: boolean = false;
    currentList;
    selected_category;
    options = ["Abortion Service", "Academic Camp", "Accessories", "Accessories Store", "Accountant", "Actor", "Actor/director", "Acupuncturist", "Addiction Resources Center", "Addiction Service", "Addiction Treatment Center", "Adoption Service", "Adult Entertainment Service", "Advertising Agency", "Advertising/Marketing", "Advertising/Marketing Service", "Aerospace Company", "Aerospace/defense", "Afghani Restaurant", "African Restaurant", "Agricultural Cooperative", "Agricultural Service", "Agriculture", "Agriculture Company", "AIDS Resource Center", "Aircraft Dealership", "Airline Company", "Airline Industry Service", "Airport", "Airport Lounge", "Airport Shuttle Service", "Airport Terminal", "Album", "Alcohol Addiction Treatment Center", "Allergist", "Alternative & Holistic Health Service", "Amateur sports team", "Amateur Sport Team", "American Restaurant", "Amusement Center", "Amusement & Theme Park", "Andhra Restaurant", "Anesthesiologists", "Anglican Church", "Animal", "Animal breed", "Animal Shelter", "Antique Store", "Apartment & Condo Building", "Apostolic Church", "Apparel", "Apparel & Clothing", "Apparel Company", "Apparel Distributor", "Appliance Manufacturer", "Appliance Repair Service", "Appliances", "App page", "Aquarium", "Aquatic Pet Store", "Arabian Restaurant", "Arcade", "Archaeological Service", "Archery Range", "Archery Shop", "Architect", "Architectural Designer", "Architectural Engineer", "Argentinian Restaurant", "Armed Forces", "Armenian Restaurant", "Aromatherapy Service", "Art", "Art Gallery", "Artist", "Art Museum", "Art Restoration Service", "Art School", "Arts & Crafts Store", "Arts & Entertainment", "Arts/entertainment/nightlife", "Arts/humanities website", "Arts & Humanities Website", "Art Tour Agency", "Asian Fusion Restaurant", "Asian Restaurant", "Astrologist", "Astrologist & Psychic", "Athlete", "Attractions/things to do", "ATV Dealership", "ATV Recreation Park", "ATV Rental", "ATV Rental Shop", "Auction House", "Audiologist", "Audio Visual Equipment Store", "Auditorium", "Australian Restaurant", "Austrian Restaurant", "Author", "Auto Detailing Service", "Automation Service", "Automobiles and parts", "Automotive", "Automotive, Aircraft & Boat", "Automotive, Aircraft, Boat", "Automotive Body Shop", "Automotive Company", "Automotive Consultant", "Automotive Customization Shop", "Automotive Dealership", "Automotive Glass Service", "Automotive Leasing Service", "Automotive Manufacturer", "Automotive Parts Store", "Automotive Repair Shop", "Automotive Restoration Service", "Automotive Service", "Automotive Shipping Service", "Automotive Storage Facility", "Automotive Store", "Automotive Wholesaler", "Automotive Window Tinting Service", "Aviation", "Aviation School", "Awning Supplier", "Baby & Children's Clothing Store", "Baby Goods/Kids Goods", "Babysitter", "Bags/luggage", "Bags & Luggage Company", "Bags & Luggage Store", "Bail Bondsmen", "Bakery", "Ballroom", "Band", "Bank", "Bank Equipment & Service", "Bank/financial institution", "Bank/Financial Service", "Bank/financial services", "Bankruptcy Lawyer", "Baptist Church", "Bar", "Barbecue Restaurant", "Barber Shop", "Bar & Grill", "Bartending School", "Bartending Service", "Baseball Field", "Basketball Court", "Basque Restaurant", "Batting Cage", "Bavarian Restaurant", "Beach", "Beach Resort", "Beauty", "Beauty, Cosmetic & Personal Care", "Beauty/Cosmetics Company", "Beauty Salon", "Beauty Service", "Beauty Store", "Beauty Supplier", "Beauty Supply Store", "Bed and Breakfast", "Beer Bar", "Beer Garden", "Belgian Restaurant", "Bengali/Bangladeshi Restaurant", "Betting Shop", "Bicycle Rental Shop", "Bicycle Repair Service", "Bicycle Shop", "Big Box Retailer", "Bike Rental", "Bike Trail", "Bingo Hall", "Biotechnology", "Biotechnology Company", "Blacksmith", "Blinds & Curtains Store", "Blogger", "Blood Bank", "Board game", "Boat Dealership", "Boat/Ferry Company", "Boat Rental", "Boat / Sailing Instructor", "Boat Service", "Boat Tour Agency", "Book", "Book & Magazine Distributor", "Book series", "Books & Magazines", "Bookstore", "Book Store", "Borough", "Botanical Garden", "Bottled Water Company", "Bottled Water Supplier", "Boutique Store", "Bowling Alley", "Brand", "Brand Agency", "Brand/Company Type", "Brazilian Restaurant", "Breakfast & Brunch Restaurant", "Brewery", "Bridal Shop", "Bridge", "British Restaurant", "Broadcasting & Media Production Company", "Brokerage", "Brokerage Firm", "Bubble Tea Shop", "Buddhist Temple", "Buffet Restaurant", "Building Materials", "Building Material Store", "Burger Restaurant", "Burmese Restaurant", "Business", "Business Center", "Business Consultant", "Business/economy website", "Business & Economy Website", "Business person", "Business Service", "Business services", "Business Supply Service", "Bus Line", "Bus Station", "Bus Tour Agency", "Butcher Shop", "Cabin", "Cabinet & Countertop Store", "Cable & Satellite Company", "Cafe", "Cafeteria", "Cajun & Creole Restaurant", "Calabrian Restaurant", "Cambodian Restaurant", "Camera/photo", "Camera Store", "Campground", "Campus Building", "Canadian Restaurant", "Canal", "Candy Store", "Canoe & Kayak Rental", "Canoe & Kayak Rental Shop", "Cantonese Restaurant", "Car Dealership", "Cardiologist", "Career Counselor", "Cargo & Freight Company", "Caribbean Restaurant", "Car Rental", "Car Stereo Store", "Car Wash"];
    filteredOptions: Observable<string[]>;
    name: any;
     subscribers: any;
     today_upload_video: any;
     t_views: any;
     rank: any;
     tomorrow_upload_video: any;
    minsubscribers: any;
    maxsubscribers: any;
    minrank: any;
    maxrank: any;
    minviews: any;
    maxviews: any;

    constructor(private http: HttpService,
                 private route: ActivatedRoute, private pagerService: PagerService, private router: Router) {

    }

    ngOnInit() {
        window.scroll(0,0)

        this.route.queryParams.subscribe(params => {
            this.qparamschecker = params['name'] || '0';
            if (this.qparamschecker === 'youtube') {
                this.inCurrentpage = true;
            }
        });
        this.currentList = JSON.parse(localStorage.getItem('selected_list_yt'));

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
        headers.append('Content-Type', 'application/json');

        this.http.get(Config.api + '/ml/youtube_categories', {headers: headers}, 'full')
            .subscribe(res => {

                this.options = res.json();
                this.filteredOptions = this.myControl.valueChanges
                    .startWith(null)
                    .map(val => val ? this.filterCategory(val) : this.options.slice());
            });
        this.http.get(Config.api + '/get_iList_names_yt/' + this.currentUser.username + '/-id/')
            .subscribe(res => {
                for (let li of res.json().results) {
                    this.user_list[li['id']] = li['name'];
                    this.listnamecheck = true;
                }


            });
        this.get_default_Youtube_data(1);

    }


    goToMedium(s:string){

        let arr:any;
        arr = s.indexOf('(@');
        if(arr!=-1) {
            // alert(s.slice(arr+1,-10))
            // window.open('https://www.instagram.com/'+s.slice(arr+2,-10))
            let url = s.slice(arr+2,-10);
            Swal.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content',
                // html: true,
                confirmButtonColor: '#2ecc71',
                // showCancelButton: true,

            }).then(() => {

                window.open(url);


            }, (dismiss) => {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    // localStorage.removeItem('selected_list_twitter');

                    Swal.fire(
                        'Cancelled',
                        '',
                        'success'
                    )
                }
            });
        }
        else{
            let url = s;
            Swal.fire({
                title: 'You&#39;re Leaving This Site!',
                text: 'This is a link to an external site. Click OK to continue to the content',
                // html: true,
                confirmButtonColor: '#2ecc71',
                // showCancelButton: true,

            }).then(() => {

                window.open(url);


            }, (dismiss) => {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    // localStorage.removeItem('selected_list_twitter');

                    Swal.fire(
                        'Cancelled',
                        '',
                        'success'
                    )
                }
            });
        }


    }

    get_default_Youtube_data(page: number){

            if (page < 1 || page > this.pager.totalPages) {
                return;
            }
        // let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
        // this.loaded = false;
        // headers.append('Content-Type', 'application/json');
        this.http.get(Config.api+'/ml/get_youtube_influencers_list/' )

            .subscribe(res => {
                    // this.main_checkbox = false;
                    this.influencers_by_default = res.json();
                    this.pdfArray=this.influencers_by_default['results'];
                    for (let item of this.influencers_by_default.results){
                        item['rank'] = parseFloat(item['rank']).toFixed(0);
                    }
                    for (let item of this.influencers_by_default.results){
                        item['contact'] = (item['contact']).slice(8);
                    }

                    this.pager = this.pagerService.getPager(this.influencers_by_default['totalItems'], page,10);

                });
    }

    go_to_list_yt(e: number, name: string) {

        this.router.navigate(['youtube/list/', e])

    }
    // getYTChannels(e) {
    //     // alert('called')
    //     this.selected_category = e['option']['value'];
    //     this.pager = {};
    //     this.setPage(1);
    // }
    
        cat;
    getYTChannels(){

        //   alert ( this.cat)
            this.selected_category= this.cat;
            this.pager= {};
            this.setPage(1);
        }


    filterCategory(val: string): string[] {
        return this.options.filter(option =>
            option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    chec()  {
    }
    goToLink(url) {
        //let url = 'https://twitter.com/' + influencer.screen_name.replace("('", '').replace("',)", '');
        Swal.fire({
            title: 'You&#39;re Leaving This Site!',
            text: 'This is a link to an external site. Click OK to continue to the content (' + url + ').',
            // html: true,
            confirmButtonColor: '#2ecc71',
            showCancelButton: true,

        }).then(() => {

            window.open(url);


        }, (dismiss) => {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                // localStorage.removeItem('selected_list_twitter');

                Swal.fire(
                    'Cancelled',
                    '',
                    'success'
                )
            }
        });
    }
    cheakall(e) {

        for (let i of this.influencers['results'])
        {
            this.inflist[i['id']] = e;
        }
        console.clear();
    }
    cheakalldef(e) {
        for (let i of this.influencers_by_default['results'])
        {
            this.inflist[i['id']] = e;
        }
        console.clear();
    }


    add_create_list() {

        let currentUser = this.currentUser;
        let mysvc = this.http;
        let list=this.inflist;
        let ilist = false;
        let user_list =this.user_list;
        let current_list = JSON.parse(localStorage.getItem('selected_list_yt'));
        for (let i in list) {
            if(list[i]) {
                ilist = true;
                // alert('jsdkada');
                break;
            }
        }
        if (current_list) {
            Swal.fire(
                {
                    title: 'Add influencers to the list"'+current_list.name+'" or cancel and add to other list?',
                    // text: "List",
                    type: "question",
                    preConfirm:  () => {
                        return new Promise( (resolve, reject)=> {
                            setTimeout( () => {
                                if (ilist) {
                                    resolve()
                                } else {
                                    reject('No influencers selected')
                                }
                            }, 1)
                        })
                    },
                    // input: "text",
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Add to list"'+current_list.name+'"',

                }
            ).then( () => {



                let headers = new Headers({'Authorization': 'JWT ' + currentUser.token});
                headers.append('Content-Type', 'application/json');

                mysvc.put(Config.api + '/create_add_ilist_yt/', JSON.stringify({id: current_list.id, list: list}),
                    {headers: headers}).map((response: Response) => response.json()).subscribe(
                    data => {

                        localStorage.removeItem('selected_list_yt');
                        for (let i in this.inflist) {
                            // this.inflist[i['id']] = e;
                            this.inflist[i] = false;

                        }
                        this.main_checkbox = false;
                        Swal.fire(
                            'List updated!',
                            current_list.name,
                            'success'
                        )
                    },
                    error => {
                        // alert('error')
                        Swal.fire(
                            'Try again after some time!',
                            // error.toString(),
                            'error'
                        )
                    });


            },  (dismiss)=> {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    localStorage.removeItem('selected_list_yt');

                    Swal.fire(
                        'Cancelled',
                        'No influencers added :)',
                        'success'
                    )
                }
            });

        }
        else {
            // let currentUser =JSON.parse(localStorage.getItem('currentUser'));
            Swal.fire({
                title: "Create new or add existing list of influencers?",
                // text: "List",
                type: "question",
                // input: "text",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: 'Create new list',
                cancelButtonText: 'Add to existing list',

                preConfirm:  () => {
                    return new Promise( (resolve, reject) => {
                        setTimeout( () => {
                            if (ilist) {
                                resolve()
                            } else {
                                reject('No influencers selected')
                            }
                            // else if(result.length>30) {
                            //     reject('Length of list name cannot be greater than 30')
                            // }
                            // resolve()
                        }, 1)
                    })
                },
                confirmButtonColor: '#00a8ff',
                cancelButtonColor: '#00a8ff',
                // closeOnConfirm: false,
                // inputPlaceholder: "Write something"
            }).then( () => {

                Swal.fire({
                    title: 'Enter the name of list',
                    text: 'New list will be created',
                    type: 'question',
                    input: 'text',
                    preConfirm:  (result) => {
                        return new Promise( (resolve, reject) => {
                            setTimeout( () => {
                                if (result === '') {
                                    reject('List name cannot be empty')
                                } else if (result.length > 30) {
                                    reject('Length of list name cannot be greater than 30')
                                }
                                else {
                                    let headers = new Headers({'Authorization': 'JWT ' + currentUser.token});
                                    headers.append('Content-Type', 'application/json');

                                    mysvc.post(Config.api + '/check_ilist_yt/', JSON.stringify({
                                            name: result,
                                            // name: result.value,
                                            username: currentUser.username
                                        }),
                                        {headers: headers}).map((response: Response) => response.json()).subscribe(
                                        data => {
                                            resolve()

                                        },
                                        error => {
                                            if(error.status===406){
                                                Swal.fire('List Already Exist')
                                            }
                                            // reject('List named "' + result + '" already exists')

                                        });
                                }
                            }, 2)
                        })
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Create',
                    cancelButtonText: 'Cancel'
                }).then( (result) => {


                    let headers = new Headers({'Authorization': 'JWT ' + currentUser.token});
                    headers.append('Content-Type', 'application/json');

                    mysvc.post(Config.api + '/create_add_ilist_yt/', JSON.stringify({
                            name: result.value,
                            // name: result,
                            list: list,
                            username: currentUser.username
                        }),
                        {headers: headers}).map((response: Response) => response.json()).subscribe(
                        data => {

                            for (let i in this.inflist) {
                                // this.inflist[i['id']] = e;
                                this.inflist[i] = false;

                            }
                            this.main_checkbox = false;
                            Swal.fire(
                                'List created and influencers added!',
                                result.value(),
                                'success'
                            )
                        },
                        error => {
                            Swal.fire(
                                'Try again after some time!',
                                // error.toString(),
                                'error'
                            )
                        });

                },  (dismiss) => {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss === 'cancel') {
                        Swal.fire(
                            'Cancelled',
                            'No list created :)',
                            'success'
                        )
                    }
                })

            },  (dismiss) => {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    if (ilist) {
                        if (this.listnamecheck) {
                            Swal.fire({
                                input: 'select',
                                confirmButtonText: 'Add',
                                showCancelButton: true,
                                confirmButtonColor: '#00a8ff',
                                cancelButtonColor: '#00a8ff',
                                inputOptions: user_list,
                                inputClass: 'form-control'

                            }).then((result) => {

                                let headers = new Headers({'Authorization': 'JWT ' + currentUser.token});
                                headers.append('Content-Type', 'application/json');

                                mysvc.put(Config.api + '/create_add_ilist_yt/', JSON.stringify({
                                        id: result,
                                        list: list
                                    }),
                                    {headers: headers}).map((response: Response) => response.json()).subscribe(
                                    data => {
                                        for (let i in this.inflist) {
                                            // this.inflist[i['id']] = e;
                                            this.inflist[i] = false;

                                        }
                                        this.main_checkbox = false;
                                        Swal.fire(
                                            'List updated!',
                                            '',
                                            'success'
                                        )
                                    },
                                    error => {
                                        // alert('error')
                                        Swal.fire(
                                            'Try again after some time!',
                                            // error.toString(),
                                            'error'
                                        )
                                    });

                            }, (dismiss) => {
                                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                                if (dismiss === 'cancel') {
                                    Swal.fire(
                                        'Cancelled',
                                        'No list Updated :)',
                                        'success'
                                    )
                                }
                            })
                        } else {
                            Swal.fire(
                                'No Lists are created yet!',
                                '',
                                'warning'
                            )
                        }
                    } else {
                        Swal.fire(
                            'No Influencers selected',
                            '',
                            'warning'
                        )
                    }

                }
            })
        }

    }
    clear_list() {
        for (let i in this.inflist) {
            this.inflist[i] = false;
        }
    }

    getCatName(e){
        this.selected_category= e.value;
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        // this.http.post(Config.api+'/ml/get_youtube_channels/' + this.selected_category + '/?page=' + page + '', {headers:headers}, 'full')
        this.http.post(Config.api+'/ml/get_youtube_channels/' + this.selected_category + '/?page=' + page + '', {
            name: this.name,
            // subscribers: this.subscribers,
            subscribersmin:this.minsubscribers,
            subscribersmax:this.maxsubscribers,
            // total_views:this.t_views,
            // rank:this.rank,
            rankmin:this.minrank,
            rankmax:this.maxrank,
            total_viewsmin:this.minviews,
            total_viewsmax:this.maxviews

        },{headers:headers})

            .subscribe(res => {
                this.main_checkbox = false;
                this.influencers = res.json();
                for (let item of this.influencers.results){
                    item['rank'] = parseFloat(item['rank']).toFixed(0)
                }

                this.pager = this.pagerService.getPager(this.influencers['totalItems'], page,10);
                this.loaded = true;

            });


    }

    clearsearch(){
        this.selected_category=null;
        this.name=null;
        this.minsubscribers=null;
        this.maxsubscribers=null;
        this.minrank=null;
        this.maxrank=null;
        this.minviews=null;
        this.maxviews=null;
    }
    setPageQuery(page: number, query:string) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
        this.loaded = false;
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api+'/ml/get_youtube_channels/' + query + '/?page=' + page + '', {headers:headers}, 'full')
            .subscribe(res => {
                this.main_checkbox = false;
                this.influencers = res.json();
                this.pager = this.pagerService.getPager(this.influencers['totalItems'], page,10);
                this.loaded = true;

            });
    }
    navSearch() {

    }





}
