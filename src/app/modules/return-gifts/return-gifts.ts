import { Component , ChangeDetectorRef } from '@angular/core';
import { Product } from '../../services/product';
import { ProductI } from '../../models/productI.model';
@Component({
  selector: 'app-return-gifts',
  imports: [],
  templateUrl: './return-gifts.html',
  styleUrl: './return-gifts.scss',
})
export class ReturnGifts {
  products: ProductI[] = [];
  constructor(private productService: Product, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.loadReturnGiftsProducts();
  }
    loadReturnGiftsProducts(): void {
    this.productService.getReturnGiftsProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.cdr.detectChanges();
        console.log('Return Gifts products:', this.products);
      },
      error: (error) => {
        console.error('Error loading Return Gifts products:', error);
      }
    });
  }
}
