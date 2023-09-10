import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder ,private authService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  handleSubmit(): void {
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;

    const isAuthenticated = this.authService.login(email, password);

    if (isAuthenticated) {
      console.log('Login successful');
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }
}
