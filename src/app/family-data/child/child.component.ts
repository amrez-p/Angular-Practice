import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ParentData {
  name: string;
  age: number;
  married: boolean;
}

@Component({
  selector: 'app-child',
  template: `<p>Child component received data: {{ childData }}</p>
    <button (click)="sendMessage()">Send Message</button>

    <form
      #myForm="ngForm"
      (ngSubmit)="onSubmit()"
      style="display:grid; grid-row-gap: 5px; "
    >
      <label>Name:</label>
      <input type="text" name="name" ngModel="ParentData.name" required />
      <label>age:</label>
      <input type="number" name="age" ngModel="ParentData.age" required />
      <label>married:</label>
      <input
        type="checkbox"
        name="married"
        ngModel="ParentData.married"
        required
      />
      <!-- <input type="checkbox" name="married" ngModel="ParentData.name" required /> -->

      <button type="submit" [disabled]="!myForm.valid">Submit</button>
    </form> `,
})
export class ChildComponent {
  //variable
  message = 'Hello from child component!';

  ParentData: ParentData = {
    name: '',
    age: 0,
    married: false,
  };
  //variable

  //parameters
  @Input() childData: any;
  //parameters

  // @Output() messageEvent = new EventEmitter<string>();

  @Output() ChildDataEvent = new EventEmitter<any>();

  //function
  // sendMessage() {
  //   let ChildMessage = {
  //     message: this.message,
  //     eventType: 'Message',
  //   };
  //   this.ChildDataEvent.emit(ChildMessage);
  // }

  // onSubmit(): void {
  //   let SubmitParent = {
  //     parentData: this.ParentData,
  //     eventType: 'ParentData',
  //   };
  //   this.ChildDataEvent.emit(SubmitParent);
  // }
  sendMessage() {
    this.ChildDataEvent.emit(this.message);
  }

  onSubmit(): void {
    this.ChildDataEvent.emit(this.ParentData);
  }

  constructor() {}
}
