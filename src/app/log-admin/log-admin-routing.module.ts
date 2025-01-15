import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogAdminPage } from './log-admin.page';

const routes: Routes = [
  {
    path: '',
    component: LogAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogAdminPageRoutingModule {}
