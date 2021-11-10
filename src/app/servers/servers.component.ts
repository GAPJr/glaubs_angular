import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { }
  
  title: string = 'Larissa';

  username: string = '';

  checkUsername() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }
}
