import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../models/productI.model';
// import { Supabase } from '../services/supabase';
export interface ProductResponse {
  success: boolean;
  message?: string;
  products?: ProductI[];
  product?: [];
}
@Injectable({
  providedIn: 'root',
})
export class Product {
  private apiUrl = '/api/products.php';
   // private apiUrl = 'data/data.json';

    constructor(private http: HttpClient) {}

  getProducts(category?: string): Observable<ProductResponse> {
     if (category) {
    this.apiUrl += `?category=${encodeURIComponent(category)}`;
    }
    else{
    this.apiUrl = '/api/products.php';
    //this.apiUrl = 'data/data.json';
    }

   // return this.http.get<ProductI[]>('data/rakhi.json');
     return this.http.get<ProductResponse>(this.apiUrl);
  }
   addProduct(
    formData: FormData
  ): Observable<ProductResponse> {

    return this.http.post<ProductResponse>(
      this.apiUrl,
      formData
    );
  }

  //   async getRakhiProducts(): Promise<ProductI[]> {

  //   const { data, error } = await this.supabase.client
  //     .from('products')
  //     .select('*')
  //      .eq('category', 'rakhi')
  //   .order('created_at', { ascending: false });
  //       console.log('Supabase data:', data);
  // console.log('Supabase error:', error);

  //   if (error) {
  //     console.error('Error loading Rakhi products:', error);
  //     throw error;
  //   }

  //   return data ?? [];
  // }
    getReturnGiftsProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>('data/returnGifts.json');

  }
}
