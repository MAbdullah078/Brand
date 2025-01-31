import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DataTableModule, OverlayPanelModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {NgPipesModule} from 'ngx-pipes';
import {PagerService} from "../_services/paginator.service";
import {RoundpipeModule} from "../home/roundpipe.module";
import {InstagramListInfComponent} from './instagram-list-inf.component';
import {InstagramListInfRoutes} from './instagram-list-inf.routing';
import {InlineEditorModule} from "ng2-inline-editor";
import {CustomPipeModule} from '../periscope-search/CustomPipe.module';



@NgModule({
    imports: [CommonModule, RouterModule.forChild(InstagramListInfRoutes),CustomPipeModule,ReactiveFormsModule,SliderModule,DataTableModule,InlineEditorModule,OverlayPanelModule,DialogModule,FormsModule,RoundpipeModule,NgPipesModule],
    declarations: [InstagramListInfComponent],
    providers:[PagerService]
})

export class InstagramListInfModule { }
