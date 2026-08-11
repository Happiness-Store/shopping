import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../models/productI.model';
import { Supabase } from '../services/supabase';
@Injectable({
  providedIn: 'root',
})
export class Product {
    constructor(private http: HttpClient, private supabase: Supabase) {}

  // getRakhiProducts(): Observable<ProductI[]> {
  //   return this.http.get<ProductI[]>('data/rakhi.json');

  // }
    async getRakhiProducts(): Promise<ProductI[]> {

    const { data, error } = await this.supabase.client
      .from('products')
      .select('*')
       .eq('category', 'rakhi')
    .order('created_at', { ascending: false });
        console.log('Supabase data:', data);
  console.log('Supabase error:', error);

    if (error) {
      console.error('Error loading Rakhi products:', error);
      throw error;
    }

    return data ?? [];
  }
    getReturnGiftsProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>('data/returnGifts.json');

  }
}
