import * as angular from "angular";
import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app-template.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Impactguru";

  private hasDatePassed: boolean = false;
  private show: boolean = false;
  private show1: boolean = false;


  constructor() {
    var today = new Date();
    var endDate = new Date(2016, 16, 10);
    if (today > endDate) {
      this.hasDatePassed = true;
    }
  }
  showMore() {
    this.show = true;
  }
  showMore1() {
    this.show1 = true;
  }
}

