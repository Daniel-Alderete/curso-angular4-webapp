import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetail } from './components/product-detail.component';
import { ProductsListComponent } from './components/products-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'add-product', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetail },
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
