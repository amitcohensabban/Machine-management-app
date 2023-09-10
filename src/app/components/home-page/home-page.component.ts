import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private authService: AuthService,private router:Router) {}
  userEmail: string = '';
  ngOnInit(): void {
    this.authService.userEmailSubject.subscribe((userEmail: string) => {
      this.userEmail = userEmail;
    });
  }

  handle(){
    this.router.navigate(['/machine-management']);
  }
}
