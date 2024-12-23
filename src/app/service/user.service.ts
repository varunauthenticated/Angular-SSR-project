import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = 'https://reqres.in/api/users';
    return this.http.get(url);
  }

  getUsersById(id: number) {
    const url = `https://reqres.in/api/users/${id}`;
    return this.http.get(url);
  }
}
