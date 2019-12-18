import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  insulti : String[];

  constructor() {

    this.insulti = ["gay", "frocio", "venturini", "stronzo", "dio porco"];

   }

  ngOnInit() {
  }

}
