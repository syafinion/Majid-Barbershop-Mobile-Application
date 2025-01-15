import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBookingAdminPage } from './edit-booking-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EditBookingAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBookingAdminPageRoutingModule {}
