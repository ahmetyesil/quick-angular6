import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {PageComponentBase} from '../pages.component.base';

declare var $: any;

@Component({
  selector: 'page-tos',
  templateUrl: './tos.component.html'
})

export class PageTosComponent extends PageComponentBase implements AfterViewInit, OnDestroy, OnInit {
  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }
}

