import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  serverId: number = 10;
  serverNamne: string = 'Glauber';
  constructor() {}

  ngOnInit(): void {}

}
