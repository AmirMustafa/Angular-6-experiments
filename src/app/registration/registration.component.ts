import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() public parentData;

  @Output() public childClass = new EventEmitter();

  sendDataToParent() {
    this.childClass.emit("This is the data from the child class");
  }

  constructor() { }

  ngOnInit() {
  }

  // This is for the custom pipe
  articles = 'This is for my youtube video';

}
