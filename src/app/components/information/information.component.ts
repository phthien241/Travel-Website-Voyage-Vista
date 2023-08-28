import { Component, OnInit } from '@angular/core';
import { InformationService } from './information.service';
import { Information } from './information.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  information: Information[] = [];
  constructor(private authService: AuthService,private informationService: InformationService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.informationService.getInformation();
    this.informationService.getInformationUpdated().subscribe(information=>{
      this.information = information;
    })
  }
}
