import { Component, OnInit, Renderer } from '@angular/core';
import { Junky } from '../models';
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
    for (let i = 0; i < 15; i++) {
      this.junkys.push(new Junky(i + 'Langer Nachname', Math.ceil(Math.random() * i), i + 'test@test.de'));
    }
  }

}
