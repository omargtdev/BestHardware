import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainHeaderComponent } from './pages/shared/main-header/main-header.component';
import { BannerComponent } from './pages/home/components/banner/banner.component';
import { ServicesComponent } from './pages/home/components/services/services.component';
import { PricesComponent } from './pages/home/components/prices/prices.component';
import { NewsComponent } from './pages/home/components/news/news.component';
import { ClientsComponent } from './pages/home/components/clients/clients.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { MainFooterComponent } from './pages/shared/main-footer/main-footer.component';
import { SedesComponent } from './pages/home/components/sedes/sedes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MainHeaderComponent,
    BannerComponent,
    ServicesComponent,
    PricesComponent,
    NewsComponent,
    ClientsComponent,
    ProvidersComponent,
    ProductsComponent,
    MainFooterComponent,
    SedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
