import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {ProfileRoutes} from "./profile.routing";
import {FormsModule} from "@angular/forms";
import {PagerService} from "../_services/paginator.service";
import {MatCardModule, MatFormFieldModule} from '@angular/material';
import {SidebarComponent} from './../sidebar/sidebar.component';

@NgModule({
    imports: [CommonModule,MatCardModule, MatFormFieldModule, RouterModule.forChild(ProfileRoutes),FormsModule],
    declarations: [ProfileComponent , SidebarComponent],
    providers:[PagerService], 
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
})

export class ProfileModule { }
