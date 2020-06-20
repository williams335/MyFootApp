import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButeursPageRoutingModule } from './buteurs-routing.module';

import { ButeursPage } from './buteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButeursPageRoutingModule
  ],
  declarations: [ButeursPage]
})
export class ButeursPageModule {}
