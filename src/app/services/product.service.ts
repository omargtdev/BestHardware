import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  get products(){
    const url = `${API.baseUrl}/servicioproducts/registros.php`;
    return this.httpClient.get(url);
  }
}
