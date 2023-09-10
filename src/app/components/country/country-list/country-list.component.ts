import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { Subscription } from 'rxjs';
import { CountryService } from '../country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  isLoading = true;
  countries: Country[] = [];
  private countriesSub: Subscription;
  constructor(private router: Router ,private route: ActivatedRoute, private countriesService: CountryService){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const continent = params['data'];
      this.countriesService.getCountry(continent);
    })
    
    this.countriesSub = this.countriesService.getCountriesUpdateListener()
    .subscribe((countries: Country[])=>{
      this.isLoading = false;
      this.countries = countries;
    })
  }


}
