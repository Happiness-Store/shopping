import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Supabase } from '../../../services/supabase';
@Component({
  selector: 'app-add-rakhi',
  imports: [FormsModule],
  templateUrl: './add-rakhi.html',
  styleUrl: './add-rakhi.scss',
})
export class AddRakhi {
   name = '';
  description = '';
  price: number | null = null;

  selectedFile: File | null = null;

  previewUrl: string | null = null;

  isLoading = false;

  errorMessage = '';
  successMessage = '';

  constructor(
    private supabaseService: Supabase,
    private router: Router
  ) {}

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedFile = input.files[0];

    console.log(
      'Selected file:',
      this.selectedFile
    );

    // Image preview
    this.previewUrl =
      URL.createObjectURL(this.selectedFile);

  }

  async addRakhi(): Promise<void> {

    this.errorMessage = '';
    this.successMessage = '';

    // Validate form
    if (!this.name.trim()) {
      this.errorMessage = 'Please enter Rakhi name.';
      return;
    }

    if (!this.description.trim()) {
      this.errorMessage =
        'Please enter Rakhi description.';
      return;
    }

    if (!this.price || this.price <= 0) {
      this.errorMessage =
        'Please enter a valid price.';
      return;
    }

    if (!this.selectedFile) {
      this.errorMessage =
        'Please select a Rakhi image.';
      return;
    }

    this.isLoading = true;

    try {

      // 1. Upload image
      const imageUrl =
        await this.uploadImage(this.selectedFile);

      console.log(
        'Image uploaded:',
        imageUrl
      );

      // 2. Insert product
      const { error } =
        await this.supabaseService.client
          .from('products')
          .insert({
            name: this.name.trim(),
            description: this.description.trim(),
            price: this.price,
            image_url: imageUrl,
            category: 'rakhi'
          });

      if (error) {
        throw error;
      }

      console.log(
        'Product inserted successfully'
      );

      this.successMessage =
        'Rakhi added successfully!';

      // Reset form
      this.resetForm();

    } catch (error: any) {

      console.error(
        'Error adding Rakhi:',
        error
      );

      this.errorMessage =
        error?.message ||
        'Failed to add Rakhi.';

    } finally {

      this.isLoading = false;

    }
  }

  private async uploadImage(
    file: File
  ): Promise<string> {

    const fileExtension =
      file.name.split('.').pop();

    const fileName =
      `rakhi/${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

    const filePath =
      `rakhi/${fileName}`;

    console.log(
      'Uploading:',
      filePath
    );

    const { error } =
      await this.supabaseService.client
        .storage
        .from('happinessCatllog')
        .upload(
          filePath,
          file,
          {
            cacheControl: '3600',
            upsert: false
          }
        );

    if (error) {
      throw error;
    }

    // Get public URL
    const { data } =
      this.supabaseService.client
        .storage
        .from('happinessCatllog')
        .getPublicUrl(filePath);

    return data.publicUrl;
  }

  private resetForm(): void {

    this.name = '';
    this.description = '';
    this.price = null;

    this.selectedFile = null;

    this.previewUrl = null;
  }

}
