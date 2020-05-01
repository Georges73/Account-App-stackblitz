import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';




import { AccountComponent } from './account/account.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountCenterRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountCenterRoutingModule
  ],
  declarations: [
    AccountListComponent,
    AccountDetailComponent,
    AccountComponent,
    AccountHomeComponent
  ]
})
export class AccountModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/