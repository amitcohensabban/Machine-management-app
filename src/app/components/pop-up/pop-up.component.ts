import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpService } from 'src/app/services/pop-up.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  isOpen: boolean = false;

  constructor(private popUpService: PopUpService, private router: Router) {}
  ngOnInit(): void {
    this.popUpService.isOpen.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });
  }
  handle() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
    this.popUpService.openDialog();
  }

  onLogoutClick() {
    this.router.navigate(['/login']);
    this.popUpService.closeDialog();
  }

  onHomeClick() {
    this.router.navigate(['/home-page']);
    this.popUpService.closeDialog();
  }
}
