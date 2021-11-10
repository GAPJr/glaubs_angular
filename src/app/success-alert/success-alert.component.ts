import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  enableBtn = false;
  constructor() {
    setTimeout(() => {
      this.enableBtn = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  ngOnClick() {
    alert('Success');
  }

}

