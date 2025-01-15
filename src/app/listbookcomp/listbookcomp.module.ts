import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListbookcompPageRoutingModule } from './listbookcomp-routing.module';

import { ListbookcompPage } from './listbookcomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListbookcompPageRoutingModule
  ],
  declarations: [ListbookcompPage]
})
export class ListbookcompPageModule {}
