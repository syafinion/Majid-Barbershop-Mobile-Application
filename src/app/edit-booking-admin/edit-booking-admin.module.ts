import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBookingAdminPageRoutingModule } from './edit-booking-admin-routing.module';

import { EditBookingAdminPage } from './edit-booking-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBookingAdminPageRoutingModule
  ],
  declarations: [EditBookingAdminPage]
})
export class EditBookingAdminPageModule {}
