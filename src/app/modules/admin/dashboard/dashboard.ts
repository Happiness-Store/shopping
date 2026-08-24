import { Component } from '@angular/core';
import { Router , RouterLink} from '@angular/router';
import { Auth } from '../../../services/auth';
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
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
  addProduct(): void {
  this.router.navigate(['/admin/add-product']);
}
}
