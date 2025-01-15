import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCustPageRoutingModule } from './search-cust-routing.module';

import { SearchCustPage } from './search-cust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCustPageRoutingModule
  ],
  declarations: [SearchCustPage]
})
export class SearchCustPageModule {}
