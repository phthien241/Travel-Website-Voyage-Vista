import { Component, ElementRef } from '@angular/core';
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

  constructor(private el: ElementRef,private router: Router, private informationService: InformationService) { }
  continents = ["Oceania", "Asia", "North America", "South America", "Europe", "Africa"]
  smoothScroll(event: Event, targetId: string) {
    event.preventDefault();
    const targetElement = this.el.nativeElement.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  onClick(continent: string) {
    this.router.navigate([continent, { data: continent }]);
  }
  test(){
    console.log("haha");
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView()
  }
  sendInformation(form: NgForm) {
    this.informationService.addInformation({ name: form.value.name, email: form.value.email });
    form.reset();
  }

}


