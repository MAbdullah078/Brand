import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    scrollTop() {
        if (isPlatformBrowser(this.platformId)) {
            window.scroll(0, 0);
        }
    }
    ngOnInit() {
      window.onbeforeunload = function () {
        $(this).scrollTop(0);
      };
    }
}
