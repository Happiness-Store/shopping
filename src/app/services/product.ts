import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../models/productI.model';
@Injectable({
  providedIn: 'root',
})
export class Product {
    constructor(private http: HttpClient) {}

  getRakhiProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>('data/rakhi.json');

  }
    getReturnGiftsProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>('data/returnGifts.json');

  }
}
