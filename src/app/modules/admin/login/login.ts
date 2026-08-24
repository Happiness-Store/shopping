import { Component , ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../../../services/auth-service';
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

isLoading = false;
errorMessage = '';

constructor(
  private authService: AuthService,
  private router: Router,
  private cdr: ChangeDetectorRef
) {}

login(): void {

  this.errorMessage = '';
  this.isLoading = true;

  this.authService
    .login(this.email, this.password)
    .subscribe({

      next: (response) => {

        this.isLoading = false;

        if (response.success) {

          if (response.user?.role === 'admin') {

            this.router.navigate(['/admin']);

          } else {

            this.router.navigate(['/']);
          }

        } else {

          this.errorMessage =
            response.message || 'Login failed';
        }
      },

      error: (error) => {

        this.isLoading = false;
     console.log('Login API error:', error);
        this.errorMessage =
          error.error?.message ||
          'Unable to login. Please try again.';
          this.cdr.detectChanges();
      }

    });
}
}
