import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListbookcompPage } from './listbookcomp.page';

const routes: Routes = [
  {
    path: '',
    component: ListbookcompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListbookcompPageRoutingModule {}
