import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private httpClient: HttpClient) { }

  get campus(){
    const url = `${API.baseUrl}/serviciosedes/registros.php`;
    return this.httpClient.get(url);
  }
}
