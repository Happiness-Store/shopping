import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { ProductI } from '../../models/productI.model';
@Component({
  selector: 'app-rakhi',
  imports: [],
  templateUrl: './rakhi.html',
  styleUrl: './rakhi.scss',
})
export class Rakhi {
   products: ProductI[] = [];
constructor(private productService: Product) {}
ngOnInit() {
   this.loadRakhiProducts();
}
  loadRakhiProducts(): void {
    this.productService.getRakhiProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Rakhi products:', this.products);
      },
      error: (error) => {
        console.error('Error loading Rakhi products:', error);
      }
    });
  }
}
