
import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';


import {Account} from './account';
import { AccountService } from '../account.service';


@Injectable({
  providedIn: 'root',
})
export class AccountDetailResolverService implements Resolve<Account> {
  constructor(private as: AccountService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> | Observable<never> {
    let id = route.paramMap.get('id');

    console.log('*****AccountDetailResolverService******')

    return this.as.getAccount(id).pipe(
      take(1),
      mergeMap(account => {
        if (account) {
          return of(account);
        } else { // id not found
          this.router.navigate(['/account-center']);
          return EMPTY;
        }
      })
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/