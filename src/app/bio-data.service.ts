import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioDataService {

  constructor() { }

  // this is the data to send to the component
  howServiceWorks() {
    return "this is how service works";
  }

  // method2
  biodataService() {
    return [
      {"name" : "Amir 1",'age': 26, 'profile' : 'Web developer' },
      {"name" : "Amir 2",'age': 26, 'profile' : 'Web developer' },
      {"name" : "Amir 3",'age': 26, 'profile' : 'Web developer' }
    ];
  }
}
