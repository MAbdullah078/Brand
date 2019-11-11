import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from "angular4-social-login";


declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },
    
];
@Component({
  selector: 'app-listsidebar',
  templateUrl: './listsidebar.component.html',
  styleUrls: ['./listsidebar.component.css']
})
export class ListsidebarComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _nav:Router) { }

  ngOnInit() {
  }

}
