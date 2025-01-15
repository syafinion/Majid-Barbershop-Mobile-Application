import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListordersPageRoutingModule } from './listorders-routing.module';

import { ListordersPage } from './listorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListordersPageRoutingModule
  ],
  declarations: [ListordersPage]
})
export class ListordersPageModule {}
