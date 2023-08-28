import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private places: Place[] = [];
  private placesUpdated = new Subject<Place[]>()
  constructor(private http: HttpClient) { }

  getPlaces(country: string) {
    this.http.get<{ places: any }>("http://localhost:3000/api/continents/" + country)
      .pipe(map(placeData => {
        return placeData.places.map(place => {
          return {
            name: place.name,
            description: place.description,
            state: place.state,
            type: place.type,
            image: place.image,
            country: place.country,
          }
        })
      })
      ).subscribe(transformedPlaces => {
        this.places = transformedPlaces;
        this.placesUpdated.next([...this.places]);
      }
      );
  }
  getPlacesUpdateListener() {
    return this.placesUpdated.asObservable();
  }
}
