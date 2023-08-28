import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent {
  constructor(private authService: AuthService,private http: HttpClient, private route: ActivatedRoute, private router: Router){}
  image: File
  onFileChange($event: any) {
  this.image = $event.target.files[0];
  }

  onSubmitCountry(form: NgForm){
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("description",form.value.description);
    formData.append("continent", form.value.continent);
    formData.append("image", this.image);
    this.http.post("http://localhost:3000/api/countries/addCountry", formData)
    .subscribe(res=>{

    })
    form.reset();
  }
  onSubmitPlace(form: NgForm){
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("description",form.value.description);
    formData.append("country", form.value.country);
    formData.append("state", form.value.state);
    formData.append("type", form.value.type);
    formData.append("image", this.image);
    this.http.post("http://localhost:3000/api/continents/addPlace", formData)
    .subscribe(res=>{
    })
    form.reset();
  }  


}
