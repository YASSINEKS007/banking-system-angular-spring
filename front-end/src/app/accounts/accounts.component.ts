import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  addAccountForm!: FormGroup;


}
