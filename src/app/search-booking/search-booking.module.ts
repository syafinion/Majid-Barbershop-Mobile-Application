import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBookingPageRoutingModule } from './search-booking-routing.module';

import { SearchBookingPage } from './search-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBookingPageRoutingModule
  ],
  declarations: [SearchBookingPage]
})
export class SearchBookingPageModule {}
