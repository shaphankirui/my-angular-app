import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [
    'assets/images/couch1.jpeg',
    'assets/images/couch1.jpeg',
    'assets/images/couch1.jpeg'
  ];

}
