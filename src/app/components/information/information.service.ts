import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Information } from './information.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private information: Information[] =[];
  private informationUpdated = new Subject<Information[]>;
  getInformationUpdated(){
    return this.informationUpdated.asObservable();
  }
  constructor(private dataService: DataService, private http: HttpClient) {
  }
  addInformation(information: Information){
    this.http.post<{ name: string, email: string }>("http://localhost:3000/api/information", information)
    .subscribe(responseData=>{
      const informationData: Information = {
        name : responseData.name,
        email: responseData.email
      }
      this.information.push(informationData);
      this.informationUpdated.next([...this.information]);
    }
    );
  }
  getInformation(){
    this.http.get<{information: any}>("http://localhost:3000/api/information").pipe(map(informationData=>{
      return informationData.information.map(data=>{
        return{
          name: data.name,
          email: data.email
        }
      })
    })).subscribe(transformedData=>{
      this.information = transformedData;
      this.informationUpdated.next([...this.information]);
    })
  }
  // ngOnInit(): void {
  //   console.log("hehe");

  // }
}
