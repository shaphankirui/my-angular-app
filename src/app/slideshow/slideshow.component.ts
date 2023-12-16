import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  images: string[] = [
    'assets/images/couch1.jpeg',
    'assets/images/couch1.jpeg',
    'assets/images/couch1.jpeg'
  ];
}
