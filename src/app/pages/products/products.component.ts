import { Component, OnInit } from '@angular/core';
import { API } from 'src/app/API';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/entities';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  baseUrl: string;

  constructor(private productService: ProductService) {
    this.products = [];
    this.baseUrl = API.baseUrl;
  }

  ngOnInit(): void {
    this.productService.products.subscribe(res => {
      this.products = JSON.parse(JSON.stringify(res));
    })
  }

}
