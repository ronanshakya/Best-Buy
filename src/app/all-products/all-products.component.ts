import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-all-products',
	templateUrl: './all-products.component.html',
	styleUrl: './all-products.component.scss',
})
export class AllProductsComponent {
  private dataService: DataService = inject(DataService);

  get allProducts() {
    return this.dataService.getAllProducts();
  }
}

