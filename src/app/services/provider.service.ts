import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private httpClient: HttpClient) { }

  get providers(){
    const url = "https://examenfinalarango.000webhostapp.com/servicioalumnos/registros.php";
    return this.httpClient.get(url);
  }
}
