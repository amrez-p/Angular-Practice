import { Component } from '@angular/core';

// interface parentInfo {
//   name: string;
//   age: number;
//   married: boolean;
// }

@Component({
  selector: 'app-parent',
  // templateUrl: './parent.component.html',
  template: `
    <app-child
      [childData]="parentData"
      (ChildDataEvent)="receiveData($event)"
    ></app-child>
    <p *ngIf="toggler">{{ receivedMessage }}</p>

    <ul *ngIf="parentInfo">
      <!-- <li>name: {{ parentInfo.address.contacts.name }}</li> -->
      <li>name: {{ parentInfo.name }}</li>
      <li>age: {{ parentInfo.age }}</li>
      <li>married: {{ parentInfo.married }}</li>
    </ul>
  `,
})
export class ParentComponent {
  parentInfo: any;
  constructor() {}
  ChildDataEvent: any;

  receivedMessage: string = '';
  toggler: boolean | null = null;

  parentData: string = `"Hi child, this is parent data"`;

  // receiveMessage({ message }: any): void {
  //   this.receivedMessage = message;
  // }

  receiveData(data: any): void {
    console.log(data);
    if (data.eventType == 'childMessage') {
      this.receivedMessage = data.message;
      this.toggler = data.toggle;
    }
    // else {
    //   this.toggler = false;
    // }

    if (data.eventType == 'submitParent') {
      this.parentInfo = data.parentData;
      this.toggler = false;
    }
    //   this.receivedMessage = message;
    // }
  }
}
