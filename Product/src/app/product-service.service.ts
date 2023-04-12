import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'model/product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = 'localhost:8888/product/allproducts';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  public save(user: Product) {
    return this.http.post<Product>(this.productUrl, Product);
  }
  
}
