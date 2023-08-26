import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent {
  constructor(private http: HttpClient){}
  image: File
  onFileChange($event: any) {
  this.image = $event.target.files[0];
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("description",form.value.description);
    formData.append("continent", form.value.continent);
    formData.append("image", this.image);
    this.http.post("http://localhost:3000/api/countries/addCountry", formData)
    .subscribe(res=>{
      console.log("hehe")
    })
  } 
}
