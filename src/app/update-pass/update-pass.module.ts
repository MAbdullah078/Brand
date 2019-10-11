import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {UpdatePassComponent} from "./update-pass.component";
import {UpdatePassRoutes} from "./update-pass.routing";
import {FormsModule} from "@angular/forms";
import {PagerService} from "../_services/paginator.service";
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [CommonModule,MatFormFieldModule,MatInputModule, MatIconModule, RouterModule.forChild(UpdatePassRoutes),FormsModule],
    declarations: [UpdatePassComponent],
    providers:[PagerService]
})

export class UpdatePassModule { }
