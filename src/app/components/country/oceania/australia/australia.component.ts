import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Place } from '../../place.model';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.scss']
})
export class AustraliaComponent implements OnInit {
  place: Place[] = [];
  constructor(private route: ActivatedRoute, private placeService: PlaceService, private dataService: DataService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.placeService.getPlaces(params['data']);
      this.placeService.getPlacesUpdateListener().subscribe((place: Place[]) => {
        this.place = place;
        this.dataService.sendData(place);
      })
    })
  }
}
