import { Component, OnInit, Input } from '@angular/core';
import { Junky } from '../../';

@Component({
  selector: 'app-junky',
  templateUrl: './junky.component.html',
  styleUrls: ['./junky.component.scss']
})
export class JunkyComponent implements OnInit {

  @Input() junky: Junky;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
