import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Place } from '../place.model';
import { PlaceService } from '../place.service';


@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {
  @Input() place: Place[];
  @Input() type: string = "";
  placeByType: Place[] = [];
  constructor(private dataService: DataService) {
    dataService.dataSub.subscribe(data => {
      this.place = data;
      switch (this.type) {
        case "dynamic":
          for (let i = 0; i < this.place.length; i++) {
            if (this.place[i].type === "dynamic") {
              this.placeByType.push(this.place[i])
            }
          }
          break;
        case "peaceful":
          for (let i = 0; i < this.place.length; i++) {
            if (this.place[i].type === "peaceful") {
              this.placeByType.push(this.place[i])
            }
          }
          break;
        default:
          for (let i = 0; i < this.place.length; i++) {
            if (this.place[i].type === "natural") {
              this.placeByType.push(this.place[i])
            }
          }
          break;
      }
    })
  }
  ngOnInit(): void {
    // switch (this.type) {
    //   case "dynamic":
    //     console.log(this.place.length)
    //     for (let i = 0; i < this.place.length; i++) {
    //       if (this.place[i].type === "dynamic") {
    //         this.placeName.push(this.place[i].name)
    //       }
    //     }
    //     break;
    //   case "peaceful":
    //     for (let i = 0; i < this.place.length; i++) {
    //       if (this.place[i].type === "peaceful") {
    //         this.placeName.push(this.place[i].name)
    //       }
    //     }
    //     break;
    //   default:
    //     for (let i = 0; i < this.place.length; i++) {
    //       if (this.place[i].type === "natural") {
    //         this.placeName.push(this.place[i].name)
    //       }
    //     }
    //     break;
    // }
  }
}
