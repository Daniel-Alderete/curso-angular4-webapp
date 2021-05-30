import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetail } from './components/product-detail.component';
import { ProductsListComponent } from './components/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductDetail,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
