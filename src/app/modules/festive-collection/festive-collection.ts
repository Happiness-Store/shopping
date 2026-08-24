import { Component,ChangeDetectorRef } from '@angular/core';
import { Product } from '../../services/product';
import { ProductI } from '../../models/productI.model';
@Component({
  selector: 'app-festive-collection',
  imports: [],
  templateUrl: './festive-collection.html',
  styleUrl: './festive-collection.scss',
})
export class FestiveCollection {
  products: ProductI[] = [];
constructor(private productService: Product , private cdr: ChangeDetectorRef) {}
ngOnInit() {
   this.loadProducts();
}
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.products || [];
        this.cdr.detectChanges();
        console.log('Products:', this.products);
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }
   buyNow(product: ProductI): void {
    const phoneNumber = '918483881691';

          const imageUrl =
            `https://raw.githubusercontent.com/happiness-store/shopping/main/public/${product.image_url}`;

          const message = `
        Hi, I want to order this Rakhi.

        Product: ${product.name}
        Price: ₹${product.price}
        Quantity: 1
        Product Image: ${imageUrl}
        `;

          const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

          window.open(whatsappUrl, '_blank');
    //let url ="https://wa.me/918483881691?text=Hi,I want to buy " + encodeURIComponent(product.name);
  //window.open (url, "_blank");
  }
}
