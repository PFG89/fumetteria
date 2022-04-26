import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {

  c:number;
  f:number;
  km:number;
  mi:number;

  constructor() { }

  convertitore(valoreInput:string):void {
    if (valoreInput === "c") {
      this.f = (this.c * 9/5) + 32;
    } else if (valoreInput === "f") {
      this.c = (this.f * 32) * 5/9;
    } else if (valoreInput === "km") {
      this.mi = this.km / 1.609;
    } else {
      this.km = this.mi * 1.609;
    }
  }

  ngOnInit() {
  }
}
