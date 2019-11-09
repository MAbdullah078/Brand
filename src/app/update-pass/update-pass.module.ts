import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {UpdatePassComponent} from "./update-pass.component";
import {UpdatePassRoutes} from "./update-pass.routing";
import {FormsModule} from "@angular/forms";
import {PagerService} from "../_services/paginator.service";
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {SidebarComponent} from './../sidebar/sidebar.component';


@NgModule({
    imports: [CommonModule,MatFormFieldModule,MatInputModule, MatIconModule, RouterModule.forChild(UpdatePassRoutes),FormsModule],
    declarations: [UpdatePassComponent,SidebarComponent],
    providers:[PagerService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class UpdatePassModule { }
