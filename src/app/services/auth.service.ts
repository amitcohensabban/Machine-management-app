import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
   userEmailSubject= new BehaviorSubject<string>('Guest');

  constructor(private router:Router) { }
  isUserLoggedIn = this.isUserLoggedInSubject.asObservable();

  login(email: string, password: string): boolean {

    const isValidUser = email === 'example@email.com' && password === 'password';
    if (isValidUser) {
      this.isUserLoggedInSubject.next(true);
      this.userEmailSubject.next(email);
      localStorage.setItem('isUserLoggedIn', 'true');
      localStorage.setItem('userEmail', this.userEmailSubject.getValue());
      this.router.navigate(['/home-page']);
      return true;
    }

    return false;
  }

  logout(): void {
    this.isUserLoggedInSubject.next(false);
    this.userEmailSubject.next('Guest');
    localStorage.removeItem('isUserLoggedIn');
    localStorage.setItem('userEmail', 'Guest');
  }
  getUserEmail(): string {
    return localStorage.getItem('userEmail') || '';
  }
  setIsUserLoggedIn(isUserLoggedIn: boolean){
    this.isUserLoggedInSubject.next(isUserLoggedIn);
  }
}
