import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new Subject<any>();
  public dataSub = this.dataSource.asObservable();
  private informationSource = new Subject<any>();
  public informationSub = this.informationSource.asObservable();
  sendData(data: any) {
    this.dataSource.next(data);
  }
  sendInformation(information: any){
    console.log(information.name);
    this.informationSource.next(information);
  }
  constructor() {

  }
}
