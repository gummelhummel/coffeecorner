import { Component, OnInit } from '@angular/core';
import { Junky } from '../models';

@Component({
  selector: 'app-coffeecorner',
  templateUrl: './coffeecorner.component.html',
  styleUrls: ['./coffeecorner.component.scss']
})
export class CoffeecornerComponent implements OnInit {

  junkys: Junky[];

  constructor() {
    this.junkys = [];
  }

  ngOnInit() {
    for (let i = 0; i < 15; i++) {
      this.junkys.push(new Junky(i + 'Langer Nachname', Math.ceil(Math.random() * i), i + 'test@test.de'));
    }
  }

}
