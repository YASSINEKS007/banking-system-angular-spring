import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {TemplateComponent} from './template/template.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatListModule} from "@angular/material/list";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {NewTransactionComponent} from './new-transaction/new-transaction.component';
import {LoginComponent} from './login/login.component';
import {MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {MatDialogClose} from "@angular/material/dialog";
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DashboardComponent,
    CustomersComponent,
    AccountsComponent,
    TransactionsComponent,
    NewTransactionComponent,
    LoginComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatIconButton,
    MatDrawer,
    MatDrawerContainer,
    MatListModule,
    MatListItem,
    MatDrawerContent,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatFormFieldModule,
    MatCardActions,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatDialogClose
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
