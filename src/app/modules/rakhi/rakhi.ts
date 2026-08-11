import { Component ,ChangeDetectorRef } from '@angular/core';
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
constructor(private productService: Product , private cdr: ChangeDetectorRef) {}
ngOnInit() {
   this.loadRakhiProducts();
}
  // loadRakhiProducts(): void {
  //   this.productService.getRakhiProducts().subscribe({
  //     next: (data) => {
  //       this.products = data;
  //       this.cdr.detectChanges();
  //       console.log('Rakhi products:', this.products);
  //     },
  //     error: (error) => {
  //       console.error('Error loading Rakhi products:', error);
  //     }
  //   });
  // }
    async loadRakhiProducts(): Promise<void> {

    try {

      const data =
        await this.productService.getRakhiProducts();

      console.log('Rakhi products:', data);

      this.products = data;
      this.cdr.detectChanges();

      console.log(
        'Rakhi products length:',
        this.products.length
      );

    } catch (error) {

      console.error(
        'Error loading Rakhi products:',
        error
      );

    }
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
