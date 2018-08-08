import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './tos.component.html',
  styleUrls: [ './tos.component.scss' ]
})
export class TosComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
  }
}
