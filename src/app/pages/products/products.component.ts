import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/entities';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  animals: Array<Animal>

  constructor(private animalService: AnimalService) {
    this.animals = []
  }

  ngOnInit(): void {
    this.animalService.animals.subscribe(res => {
      console.log(res)
      this.animals = JSON.parse(JSON.stringify(res));
    })
  }

}
