import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

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
