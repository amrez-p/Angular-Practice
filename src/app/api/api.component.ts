import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-api',
  template: `
    <h1>Random Advice:</h1>
    <p>{{ advice }}</p>

    <h1>API Data:</h1>
    <ul>
      <li *ngFor="let item of apiData">{{ item.name }}</li>
    </ul>
  `,
  // templateUrl: './api.component.html',
  // styleUrls: ['./api.component.css']
})
export class ApiComponent {
  advice: any;
  apiData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Call the API initially
    this.fetchAdvice();

    // Refresh the API data every 2 seconds
    interval(7000).subscribe(() => {
      this.fetchAdvice();
    });
  }

  fetchAdvice() {
    this.http
      .get('https://api.adviceslip.com/advice')
      .subscribe((data: any) => {
        this.advice = data.slip.advice;
      });
  }

  // ngOnInit() {
  //   this.http
  //     .get('https://api.adviceslip.com/advice')
  //     .subscribe((data: any) => {
  //         this.advice = data.slip.advice;
  //     });
  // }
  // ngOnInit() {
  //   this.http.get('https://example-api.com/data').subscribe((data) => {
  //     this.apiData = data;
  //   });
  // }
}
