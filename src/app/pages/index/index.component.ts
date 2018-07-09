import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {PageComponentBase} from '../pages.component.base';


@Component({
  selector: 'page-index',
  templateUrl: './index.component.html'
})

export class PageIndexComponent extends PageComponentBase implements AfterViewInit, OnDestroy, OnInit {
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
