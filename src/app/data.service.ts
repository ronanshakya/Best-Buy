import { Injectable } from '@angular/core';
import { productList } from '../assets/product-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products:any[] = productList;

  // private productsLocation = 'assets/products.json';

  getAllProducts(): any[] {
    return this.products;
  }

  getAllCategories(): string[] {
    return [...new Set(this.products.map(product => product.Category))];
  }

  getProduct(id: number): any{
    return this.products.find(product => product.ID === id);
  }

  getProductsByCategory(category:string): any[] {
    return this.products.filter(product => product.Category === category);
  }

  constructor() { }
}
