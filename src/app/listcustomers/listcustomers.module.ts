import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcustomersPageRoutingModule } from './listcustomers-routing.module';

import { ListcustomersPage } from './listcustomers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcustomersPageRoutingModule
  ],
  declarations: [ListcustomersPage]
})
export class ListcustomersPageModule {}
