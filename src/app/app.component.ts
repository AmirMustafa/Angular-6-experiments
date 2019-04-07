import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'My First project: Amir Mustafa';
  video : string = 'Akon - Criminal'; // we can define datatype by using :
  music : string = 'Dua Cover | Maryam Waquar';

  firstName : string = ' Amir';
  lastName  : string = ' Mustafa';

  checkProperty : string = 'My text';

  // isHidden : boolean = true;
  isHidden : boolean = false;

  youknowmyname() : string {
      return this.firstName + this.lastName;
  }

  // initializing data for Event binding
  text : string = '';
  myFunc(event) {
    // console.log(event);
    console.log(event.target.value);
  }

  // Class Binding
  isActive: boolean = false;
  isDis: boolean = true;

  // multiCssClasses
  multiCssClasses: string = 'colorChange bgColor'  // these are classes name which we will apply in app.component.css file

  // Style Binding
  inlineColor: string = 'green'
  inlineColor2: boolean = true;

    // Template Reference

  /* getEmail(event) {
    alert(event.target.value);
  } */
  email = 'amirengg15@gmail.com';
  getEmail() {
    console.log(this.email);  
  }

  // Pipes in Angular 5
  biodata = {
    name: "Amir Mustafa",
    age: 26,
    boards: 69.86,
    salary: 0.001,
    born: new Date(1992, 10, 1)
  }

  // Adding class for multiple css for ngClass
  multiCssClass = {
    'colorChange': true,
    'bgColor': true,
    'singleCssColorChange': true
  }

  // Adding class for ngStyle
  inlineCSSStyle = {
    'color': 'red',
    'background': 'pink'
  }

  // using for ngIf
  myName : string = 'Amir Mustafa';

  // using for switch case
  favColor = 'green';         // note default datatype is any

  // using for ngFor
  colors = ['Red', 'Green', 'Blue'];

  biodatas = [
    {'id': 1, 'name': 'Amir'},
    {'id': 2, 'name': 'Loves'},
    {'id': 3, 'name': 'Workout'},
  ];

  // sending data to child (@Input Decorator)
  public newData = 'This data is sent by parent component';

  // receiving data from child component
  public childData;
}
