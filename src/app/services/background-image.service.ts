import { Injectable, Renderer } from '@angular/core';

@Injectable()
export class BackgroundImageService {

  public images: string[];

  constructor() {
    this.images = [];
    this.images['spoon'] = 'url("assets/coffee_spoon.jpg")';
    this.images['beans'] = 'url("assets/coffee_beans.jpg")';
  }

  setBackgroundImage(ren: Renderer, image: string) {
    ren.setElementStyle(document.body, 'background-image', this.images[image]);
  }

}
