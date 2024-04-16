import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { InteriorCategoriesComponent } from './interior-categories/interior-categories.component';
import { InteriorProductComponent } from './interior-product/interior-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'product-categories', component: InteriorCategoriesComponent },
  { path: 'interior-product/:id', component: InteriorProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
