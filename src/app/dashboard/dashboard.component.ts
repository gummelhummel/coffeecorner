import { Component, OnInit, Renderer } from '@angular/core';
import { BackgroundImageService } from '../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private biS: BackgroundImageService, private ren: Renderer) { }

  ngOnInit() {
    this.biS.setBackgroundImage(this.ren, 'spoon');
  }

}
