import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import ApplicationComponent from './components/application/application.component';
import ProductItemComponent from './components/product_item/product_item.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import SearchComponent from './components/search/search.component';
import StarsComponent from './components/stars/stars.component';

import { ProductService } from './services/product.service';

import HomeComponent from './components/home/home.component';
import ProductDetailComponent from './components/product_detail/product_detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:productTitle', component: ProductDetailComponent }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes) ],   //TODO: 왜 forRoot안나올까
  declarations: [
    ApplicationComponent,
    ProductItemComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    StarsComponent,
    HomeComponent,
    ProductDetailComponent,
  ],
  providers: [ ProductService, { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ ApplicationComponent ]
})
export class AppModule {
}