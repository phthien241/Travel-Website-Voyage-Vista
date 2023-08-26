import { Injectable } from '@angular/core';
import { Country } from './country.model';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries: Country[];
  private countriesUpdated = new Subject<Country[]>();
  constructor(private http: HttpClient, private router: Router) { }

  getCountries() {
    this.http.get<{ message: string, countries: any }>("http://localhost:3000/api/countries")
      .pipe(map(countryData => {
        return countryData.countries.map(country => {
          return {
            name: country.name,
            description: country.description,
            // imagePath: country.imagePath,
            id: country.id,
            image: country.image
          }
        })
      })).subscribe(transformedCountries => {
        this.countries = transformedCountries;
        this.countriesUpdated.next([...this.countries]);
      }
      )
  }

  getCountry(continent: string) {
    return this.http.get<{ countries: any }>(
      "http://localhost:3000/api/countries/" + continent
    ).pipe(map(countryData => {
      return countryData.countries.map(country => {
        return {
          name: country.name,
          description: country.description,
          image: country.image,
          continent: country.continent,
          id: country.id,
        }
      })
    })).subscribe(transformedCountries => {
      this.countries = transformedCountries;
      this.countriesUpdated.next([...this.countries]);
    }
    );

    // .subscribe(transformedCountries => {
    //   this.countries = transformedCountries.map(({image,...rest})=>{
    //     console.log(image.data.data.toString('base64'));
    //     let base64String = {data : image.data.data.toString("base64"), contentType: image.contentType}
    //     return {...rest, image : base64String};
    //   });
    //   this.countriesUpdated.next([...this.countries]);
    // }
    // );
  }

  getCountriesUpdateListener() {
    return this.countriesUpdated.asObservable();
  }
}
