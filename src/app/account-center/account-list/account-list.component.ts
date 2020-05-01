import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
 import { Account } from '../account';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {


  accounts$: Observable<Account[]>;
  selectedId: number;

  constructor(
    private service: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.accounts$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getAllAccounts();
      })
    );
  }
}