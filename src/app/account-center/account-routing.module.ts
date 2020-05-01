import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CanDeactivateGuard }             from '../can-deactivate.guard';
import { AccountDetailResolverService }    from './account-detail-resolver.service';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountHomeComponent } from './account-home/account-home.component';

const AccountCenterRoutes: Routes = [
  
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: AccountListComponent,
        children: [
          {
            path: ':id',
            component: AccountDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: AccountDetailResolverService
            }
          },
          {
            path: '',
            component: AccountHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AccountCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountCenterRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/