import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ParentData {
  name: string;
  age: number | null;
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
      <input
        type="text"
        name="name"
        [(ngModel)]="ParentData.name"
        placeholder=""
        required
      />
      <label>age:</label>
      <input
        type="number"
        name="age"
        max="80"
        min="1"
        [(ngModel)]="ParentData.age"
        required
      />
      <label>married:</label>
      <input type="checkbox" name="married" [(ngModel)]="ParentData.married" />
      <!-- <input type="checkbox" name="married" ngModel="ParentData.name" required /> -->

      <button type="submit" [disabled]="!myForm.valid">Submit</button>
    </form> `,
})
export class ChildComponent {
  //variable
  message: string = 'Hello from child component!';
  toggle: boolean | null = true;
  ParentData: ParentData = {
    name: '',
    age: null,
    married: false,
  };
  // ParentData: any = {
  //   name: 'jhon',
  //   age: 0,
  //   address: {
  //     street: '123 Main St',
  //     city: 'Anytown',
  //     state: 'CA',
  //     country: 'USA',
  //     zipCode: '12345',
  //     location: {
  //       latitude: 37.7749,
  //       longitude: -122.4194,
  //     },
  //     contacts: {
  //       name: 'aa',
  //       phone: '555-1234',
  //     },
  //   },
  //   hobbies: ['reading', 'swimming', 'hiking'],
  //   education: {
  //     school: {
  //       name: 'ABC University',
  //       location: 'Anytown, USA',
  //     },
  //     degree: 'Bachelor of Science',
  //     major: 'Computer Science',
  //   },
  // };
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
    const Messenger = {
      message: this.message,
      toggle: this.toggle,
      eventType: 'childMessage',
    };
    this.ChildDataEvent.emit(Messenger);
    this.toggle = !this.toggle;
  }

  onSubmit(): void {
    const SubmitParent = {
      parentData: { ...this.ParentData },
      eventType: 'submitParent',
    };
    this.ChildDataEvent.emit(SubmitParent);
    this.ParentData = {
      name: '',
      age: null,
      married: false,
    };
  }

  constructor() {}
}
