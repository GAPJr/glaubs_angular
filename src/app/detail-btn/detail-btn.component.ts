import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-btn',
  templateUrl: './detail-btn.component.html',
  styleUrls: ['./detail-btn.component.css']
})
export class DetailBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showPassword: boolean = false;
  log: Array<Date> = [];

  onToggle() {
    this.showPassword = !this.showPassword;
    this.log.push(new Date());
  }


}
