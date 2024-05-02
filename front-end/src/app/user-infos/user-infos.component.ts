import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../model/customer.model";

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css'] // <-- Corrected here
})
export class UserInfosComponent implements OnInit {
  userId!: number;
  name!: string;
  email!: string;

  constructor(public authService: AuthService,
              private http: HttpClient) {}

  ngOnInit(): void {

  }


}
