import { Component, OnInit } from '@angular/core';

// Importing our service here as well. (We imported in angular.module.ts as well)
import { BioDataService } from '../bio-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public data;  // will save data fetched from service here
  public data2;  // will save data fetched from service here
  constructor(private biodataService : BioDataService) { }  // accessing the service data alias : Service Name
                                    // now we have access to all he variable and function of the service class
  ngOnInit() {
    this.data = this.biodataService.howServiceWorks();      // acceessing the data we need(i.e. reqd funcn)
    this.data2 = this.biodataService.biodataService();
  }

/*   public bioData = [
    {"name" : "Amir 1",'age': 26, 'profile' : 'Web developer' },
    {"name" : "Amir 2",'age': 26, 'profile' : 'Web developer' },
    {"name" : "Amir 3",'age': 26, 'profile' : 'Web developer' }
  ]; */

}
