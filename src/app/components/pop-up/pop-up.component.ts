import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PopUpService } from 'src/app/services/pop-up.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  isOpen: boolean = false;

  constructor(
    private popUpService: PopUpService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.popUpService.isOpen.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    });
  }
  handle() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
    this.popUpService.openDialog();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.popUpService.closeDialog();
  }

  onHomeClick() {
    this.router.navigate(['/home-page']);
    this.popUpService.closeDialog();
  }
}
