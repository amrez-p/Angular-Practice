import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  // templateUrl: './todo.component.html',
  // styleUrls: ['./todo.component.css']
  template: `
    <h1>hello, this todo works!</h1>
    <div
      style="display:grid; justifyContent:center; fontWeight:bold;fontSize:20px"
    >
      <!-- <form #myForm="ngForm" (ngSubmit)="onSubmit()"> -->
      <form #todoForm="ngForm" (ngSubmit)="onSubmit()">
        <label>text:</label>
        <input
          type="text"
          name="text"
          minlength="4"
          maxlength="100"
          [(ngModel)]="Text"
          required
        />
        <!-- <button type="submit" [disabled]="!myForm.valid">Submit</button> -->
        <button type="submit" [disabled]="!todoForm.valid">submit</button>
        <!-- <ul *ngFor="let texts in text" style="display:grid; grid-row-gap:15px"> -->
        <ul style="display:grid; grid-row-gap:15px">
          <!-- <li *ngFor="let text; for: textArray"> -->
          <li *ngFor="let text of textArray">
            <span>{{ text }} </span>
            <Button>delete</Button>
          </li>
        </ul>
      </form>
      <button (click)="reset()">reset</button>
    </div>
  `,
})
export class TodoComponent {
  Text: string = '';
  textArray: string[] = [];

  onSubmit = () => {
    this.textArray.push(this.Text);
    console.log(this.textArray);
    this.Text = '';
  };

  reset() {
    this.textArray = [];
  }
}
