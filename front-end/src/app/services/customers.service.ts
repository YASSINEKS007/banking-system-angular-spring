import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {
  }

  getAllCustomers() {
    return this.http.get('http://localhost:8085/customers');
  }

  deleteCustomer(id: String) {
    return this.http.delete(`http://localhost:8085/delete-customer/${id}`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8085/add-customer", customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:8085/update-customer/${customer.id}`, customer);
  }

}
