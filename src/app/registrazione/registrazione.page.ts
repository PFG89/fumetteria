import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

registerForm = new FormGroup ({
  nome: new FormControl(),
  cognome: new FormControl(),
  email: new FormControl (),
  password: new FormControl (),
  password2: new FormControl (),

});

  constructor() {}
    


  ngOnInit() {}

}
