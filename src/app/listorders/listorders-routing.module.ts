import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListordersPage } from './listorders.page';

const routes: Routes = [
  {
    path: '',
    component: ListordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListordersPageRoutingModule {}
