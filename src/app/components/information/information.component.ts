import { Component, OnInit } from '@angular/core';
import { InformationService } from './information.service';
import { Information } from './information.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  information: Information[] = [];
  constructor(private informationService: InformationService){}

  ngOnInit(): void {
    this.informationService.getInformation();
    this.informationService.getInformationUpdated().subscribe(information=>{
      this.information = information;
    })
  }
}
