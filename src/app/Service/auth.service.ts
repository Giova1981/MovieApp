import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(new User('', ''));

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const user = new User(email, password);
    this.user.next(user);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    const user = new User('', '');
    this.user.next(user);
    this.router.navigate(['/dashboard']);
  }
}
