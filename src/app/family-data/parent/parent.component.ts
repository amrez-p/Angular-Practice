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
      (ChildDataEvent)="receiveMessage($event)"
    ></app-child>

    <p *ngIf="receivedMessage">{{ receivedMessage }}</p>
    <!-- <ul>
      <li>name: {{ ChildDataEvent.name }}</li>
      <li>age: {{ ChildDataEvent.age }}</li>
      <li>married: {{ ChildDataEvent.married }}</li>
    </ul> -->
  `,
})
export class ParentComponent {
  // parentInfo: parentInfo = {
  //   name: '',
  //   age: 4,
  //   married: false,
  // };

  constructor() {}
  ChildDataEvent: any;

  receivedMessage: string = '';

  parentData: string = `"Parent send data to child"`;

  receiveMessage({ message }: any): void {
    this.receivedMessage = message;
  }
}
