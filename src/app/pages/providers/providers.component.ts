import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from 'src/entities';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  providers: Array<Provider>;

  constructor(private providerService: ProviderService) { 
    this.providers = []
  }

  ngOnInit(): void {
    this.providerService.providers.subscribe(res => {
      this.providers = JSON.parse(JSON.stringify(res)); 
    })
  }

}
