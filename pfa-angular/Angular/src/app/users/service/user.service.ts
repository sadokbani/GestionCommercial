import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  ajoutUser(user) {
    return this.http.post(`http://localhost:8080/User`, user);
  }
  findUser(adresse, password) {
    return this.http.get<User>(`http://localhost:8080/User/${adresse}/${password}`);
  }
  findUserById(id) {
    return this.http.get<User>(`http://localhost:8080/User/${id}`);
  }
  updateUser(id, user) {
    return this.http.put(`http://localhost:8080/User/${id}`, user);
  }
}
