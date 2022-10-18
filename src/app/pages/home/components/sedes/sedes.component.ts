import { Component, OnInit } from '@angular/core';
import { CampusService } from 'src/app/services/campus.service';
import { Sede } from "../../../../../entities";

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {
  campus: Array<Sede>;

  constructor(private campusService: CampusService) { 
    this.campus = []
  }

  ngOnInit(): void { 
      this.campusService.campus.subscribe(res => {
      this.campus = JSON.parse(JSON.stringify(res)); 
    })
  }

}
