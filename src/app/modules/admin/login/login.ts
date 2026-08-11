import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';
@Component({
  selector: 'app-login',
  imports: [FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   email = '';
  password = '';

  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  async login(): Promise<void> {

    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password.';
      return;
    }

    this.isLoading = true;

    const result = await this.authService.login(
      this.email,
      this.password
    );

    this.isLoading = false;

    if (result.error) {
      this.errorMessage = result.error;
      return;
    }

    console.log('Login successful:', result.user);

    await this.router.navigate(['/admin']);
  }
}
