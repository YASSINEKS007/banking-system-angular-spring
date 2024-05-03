import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorsService } from "../services/errors.service";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AccountsService } from "../services/accounts.service";
import { BankAccount } from "../model/bankAccount.model";

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css']
})
export class MyAccountsComponent implements OnInit {
  private userId = 4;
  public dataSource: MatTableDataSource<BankAccount>; // Update the type based on your model
  public displayedColumns = ['id', 'balance', 'createdAt', 'accountStatus', 'type']; // Update the columns based on your model

  constructor(
    private accountsService: AccountsService,
    private errorService: ErrorsService,
    private dialog: MatDialog // <-- Add MatDialog here
  ) {
    this.dataSource = new MatTableDataSource<BankAccount>();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getUserAccounts();
  }

  getUserAccounts(): void {
    this.accountsService.getUserAccounts(this.userId).subscribe({
      next: (data: BankAccount[]) => {
        console.log('Data received: ', data);
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        if (data.length === 0) {
          this.errorService.openSnackBar(
            'No data received!',
            'Close',
            'red-snackbar'
          );
        }
      },
      error: (err) => {
        console.log(err);
        this.errorService.openSnackBar(
          'Error occurred!',
          'Close',
          'red-snackbar'
        );
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
