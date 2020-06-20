import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButeursPage } from './buteurs.page';

const routes: Routes = [
  {
    path: '',
    component: ButeursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButeursPageRoutingModule {}
