import { Component, OnInit, Renderer } from '@angular/core';
import { Junky, Cup } from '../models';
import { BackgroundImageService } from '../';

@Component({
  selector: 'app-coffeecorner',
  templateUrl: './coffeecorner.component.html',
  styleUrls: ['./coffeecorner.component.scss']
})
export class CoffeecornerComponent implements OnInit {

  junkys: Junky[];

  constructor(private biS: BackgroundImageService, private ren: Renderer) {
    this.junkys = [];
  }

  ngOnInit() {
    this.biS.setBackgroundImage(this.ren, 'beans');
    let cups: Cup[];
    for (let i = 0; i < 15; i++) {
      cups = [];
      for (let c = 0; c < Math.ceil(Math.random() * i); c++) {
        cups.push(new Cup(new Date()));
      }
      this.junkys.push(new Junky(i + 'Langer Nachname', i + 'test@test.de', 1234, (i + 1).toString(), cups));
    }
  }

}
