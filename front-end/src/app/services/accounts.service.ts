import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../model/bankAccount.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http : HttpClient) { }

  getUserAccounts(id: number) {
    return this.http.get<BankAccount[]>(`http://localhost:8085/bank-accounts/userId/${id}`);
  }
}
