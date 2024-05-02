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

  getCustomer(id: number) {
    return this.http.get<Customer>(`http://localhost:8085/customers/${id}`);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`http://localhost:8085/delete-customer/${id}`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8085/add-customer", customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:8085/update-customer/${customer.id}`, customer);
  }

}
