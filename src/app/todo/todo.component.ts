import { Component } from '@angular/core';

interface List {
  id: number;
  text: string;
}

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
          <li *ngFor="let textList of textArray">
            <span>{{ textList.text }} </span>

            <!-- <input type="text" [(ngModel)]="editTitle" /> -->
            <Button *ngIf="textList" (click)="deleteIndex(textList)"
              >delete</Button
            >
            <!-- <Button *ngIf="textList" (click)="updateIndex(textList)"
              >update</Button
            > -->
            <Button *ngIf="textList" (click)="updateIndex(textList)"
              >update</Button
            >
          </li>
        </ul>
      </form>
      <button (click)="reset()">reset</button>
    </div>
  `,
})
export class TodoComponent {
  Text: string = '';
  editTitle: string = '';
  textArray: List[] = [];

  onSubmit = () => {
    let textList = { id: Date.now() + 1, text: this.Text };
    this.textArray.push(textList);
    console.log(this.textArray);
    this.Text = '';
  };

  updateIndex(textList: List) {
    // Find the index of the todo in the array
    const index = this.textArray.findIndex((t) => t.id === textList.id);
    // Update the title of the todo in the array
    // this.textArray[index].text = textList.text;
    this.textArray[index].text = this.editTitle;
    this.editTitle = '';
  }

  // updateIndex(index: number) {
  //   console.log('Current editTitle:', this.editTitle);
  //   this.textArray[index].text = this.editTitle;
  // }
  deleteIndex(textList: List) {
    const dataIndex = this.textArray.findIndex((t) => t.id === textList.id);
    this.textArray.splice(dataIndex, 1);
    // this.textArray.filter((data, index): any => {
    //   let DataIndex = this.textArray.findIndex((i) => i == index);
    //   return data[DataIndex] !== index;
    // if (data[index] == this.Text) {
    //   return data[index] !== index;
    // }
    console.log(this.textArray);
  }

  reset() {
    this.textArray = [];
    console.log(this.textArray);
  }
}
