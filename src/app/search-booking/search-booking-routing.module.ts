import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBookingPage } from './search-booking.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBookingPageRoutingModule {}
