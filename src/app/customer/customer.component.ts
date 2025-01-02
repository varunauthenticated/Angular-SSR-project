import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit {
  service = inject(UserService);
  users: any[] = [];
  customer: Customer[] = [];

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.service.getUsers().subscribe(
      (users: any) => {
        console.log(users);
        this.users = users.data;
      },
      (err) => {
        console.error('error while fetching users data:::', err);
      }
    );
  }

  addCustomer($event: Customer) {
    this.customer.unshift($event);
  }

  removeCustomer(id: number) {
    const idx = this.customer.findIndex(val => val.id === id);
    if(idx != -1) {
      this.customer.splice(idx, 1);
    }
  }
}
