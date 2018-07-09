import {AfterViewInit, Component} from '@angular/core';
import {ComponentBase} from 'bng-angular-base/components/base.component';
import {Event, NavigationEnd, Router} from '@angular/router';

declare const $: any;

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ComponentBase implements AfterViewInit {
  constructor(private router: Router) {
    super();
  }
  ngAfterViewInit() {
  }
}
