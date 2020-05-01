
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Account } from './account-center/account';




import { BehaviorSubject } from 'rxjs';
import { ACCOUNT } from './account-center/mock-account';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  static nextCrisisId = 100;
  //private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);
  private crises$: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>(ACCOUNT);

  constructor(private messageService: MessageService) { }

  getAllAccounts() { return this.crises$; }

  getAccount(id: number | string) {
    console.log('GetAcccount called *****************************' + id);
    return this.getAllAccounts().pipe(
      map(account => account.find(account => account.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let account = { id: AccountService.nextCrisisId++, name };
      ACCOUNT.push(account);
      this.crises$.next(ACCOUNT);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/