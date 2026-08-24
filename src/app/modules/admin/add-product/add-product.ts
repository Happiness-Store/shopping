import { Component,inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Product } from '../../../services/product';
@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {
  private fb = inject(FormBuilder);
  constructor(private productService: Product) {}
  selectedImage: File | null = null;

  isSaving = false;

  successMessage = '';

  errorMessage = '';


  productForm = this.fb.group({

    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(255)
      ]
    ],

    description: [
      ''
    ],

    category: [
      'rakhi',
      Validators.required
    ],

    price: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    stock_quantity: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ]

  });


  onImageSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (
      input.files &&
      input.files.length > 0
    ) {

      this.selectedImage =
        input.files[0];

      console.log(
        'Selected image:',
        this.selectedImage
      );
    }
  }


  saveProduct(): void {

    this.successMessage = '';

    this.errorMessage = '';


    if (this.productForm.invalid) {

      this.productForm.markAllAsTouched();

      return;
    }


    this.isSaving = true;


    const formData = new FormData();


    formData.append(
      'name',
      this.productForm.value.name ?? ''
    );


    formData.append(
      'description',
      this.productForm.value.description ?? ''
    );


    formData.append(
      'category',
      this.productForm.value.category ?? ''
    );


    formData.append(
      'price',
      String(
        this.productForm.value.price ?? 0
      )
    );


    formData.append(
      'stock_quantity',
      String(
        this.productForm.value.stock_quantity ?? 0
      )
    );


    if (this.selectedImage) {

      formData.append(
        'image',
        this.selectedImage
      );
    }


    this.productService
      .addProduct(formData)
      .subscribe({

        next: (response) => {

          console.log(
            'Product added:',
            response
          );


          if (response.success) {

            this.successMessage =
              'Product added successfully!';


            this.productForm.reset({
              category: 'rakhi',
              price: 0,
              stock_quantity: 0
            });


            this.selectedImage = null;
          }

          this.isSaving = false;
        },


        error: (error) => {

          console.error(
            'Error adding product:',
            error
          );


          this.errorMessage =
            error?.error?.message ??
            'Unable to add product';


          this.isSaving = false;
        }

      });
  }
}
