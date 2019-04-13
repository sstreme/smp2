import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IndexComponent } from './index/index.component';
import { FeaturedComponent } from './featured/featured.component';
import { ProductsComponent } from './products/products.component';
import { FeaturedtComponent } from './featuredt/featuredt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FeaturedComponent,
    ProductsComponent,
    FeaturedtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
