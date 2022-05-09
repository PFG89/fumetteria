import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss'],
})
export class ButtonLoginComponent implements OnInit {
@Input() testo:string;
indirizzi:string []=[];
@Input() indirizzo:string;

  constructor() { }

  ngOnInit() {
this.indirizzi.push(this.indirizzo);}
}
