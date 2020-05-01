import { Component, OnInit, HostBinding } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { products } from 'src/app/products';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  // crisis: Crisis;
  account: Account;
  editName: string;
  

  constructor(
    private activateroute: ActivatedRoute,
    private router: Router
    
  ) {}

  ngOnInit() {
    console.log('********************oninit 1***************************')
   
   
    this.activateroute.data
      .subscribe((data: {account: Account }) => {
        this.editName = data.account.name;
        this.account = data.account;
      });
  }

  

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.account.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.account || this.account.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return null;
  }

  gotoCrises() {
    let accountId = this.account ? this.account.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: accountId, foo: 'foo' }], { relativeTo: this.activateroute });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/