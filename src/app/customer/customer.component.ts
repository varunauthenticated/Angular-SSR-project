import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  service = inject(UserService);
    users: any[] = [];
  
    ngOnInit(): void {
        this.fetchUser();
    }
  
    fetchUser() {
      this.service.getUsers().subscribe((users: any) => {
        console.log(users);
        this.users = users.data;
      }, err => {
        console.error('error while fetching users data:::', err);
      });
    }

}
