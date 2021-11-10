import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <button class="btn btn-warning" (click)="ngOnClick()">Warning</button>
  `,
  styles: [
    `
      .btn {
        margin: 20px;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {}

  ngOnClick() {
    alert('Warning');
  }
}
