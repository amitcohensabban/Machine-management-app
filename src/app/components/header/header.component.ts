import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PopUpService } from 'src/app/services/pop-up.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpen: boolean = false;
  userEmail: string|null = 'Guest';
  isUserLoggedIn: boolean = false;
  constructor(
    private popUpService: PopUpService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.popUpService.isOpen.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    });
    this.authService.userEmailSubject.subscribe((userEmail: string) => {
      this.userEmail = userEmail;
    });
    this.authService.isUserLoggedIn.subscribe((isUserLoggedIn: boolean) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
    if (localStorage.getItem('isUserLoggedIn')==='true') {
      this.authService.setIsUserLoggedIn(true);
    }
    if (localStorage.getItem('userEmail')) {
       this.userEmail = localStorage.getItem('userEmail');
       if (this.userEmail !== null) {
        this.authService.userEmailSubject.next(this.userEmail);
      }
    }

  }
  handle() {
    this.popUpService.openDialog();
  }
}
