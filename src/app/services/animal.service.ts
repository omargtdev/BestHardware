import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private count: number;

  constructor(private httpClient: HttpClient) { 
    this.count = 10;
  }

  get animals(){
    const url = `https://zoo-animal-api.herokuapp.com/animals/rand/${this.count}`;
    return this.httpClient.get(url);
  }
}
