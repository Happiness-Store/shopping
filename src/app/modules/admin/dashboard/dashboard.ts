import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
    constructor(
    private authService: Auth,
    private router: Router
  ) {}

  async logout(): Promise<void> {

    const error = await this.authService.logout();

    if (error) {
      console.error('Logout error:', error);
      return;
    }

    await this.router.navigate(['/admin/login']);
  }
  addRakhi(): void {
  this.router.navigate(['/admin/add-rakhi']);
}
}
