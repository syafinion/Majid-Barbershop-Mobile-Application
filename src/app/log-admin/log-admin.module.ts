import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogAdminPageRoutingModule } from './log-admin-routing.module';

import { LogAdminPage } from './log-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogAdminPageRoutingModule
  ],
  declarations: [LogAdminPage]
})
export class LogAdminPageModule {}
