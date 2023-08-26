import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { InformationService } from '../information/information.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})

export class IntroductionComponent {

  constructor(private router: Router, private informationService: InformationService) { }
  continents = ["Oceania", "Asia", "North America", "South America", "Europe", "Africa"]
  onClick(continent: string) {
    this.router.navigate([continent, { data: continent } ]);
  }
  sendInformation(form : NgForm) {
      this.informationService.addInformation({name: form.value.name, email: form.value.email});
      form.reset();
  }

}


