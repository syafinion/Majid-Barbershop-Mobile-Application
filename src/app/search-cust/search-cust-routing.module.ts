import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCustPage } from './search-cust.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCustPageRoutingModule {}
