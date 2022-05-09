import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { TitoloDevskillComponent } from '../components/titolo-devskill/titolo-devskill.component';
import { buttonLoginModule } from '../components/button-login/button-login.module';
import { ButtonLoginComponent } from '../components/button-login/button-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrazionePage, TitoloDevskillComponent, ButtonLoginComponent]
})
export class RegistrazionePageModule {}
