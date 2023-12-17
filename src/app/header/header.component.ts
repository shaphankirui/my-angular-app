import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
//Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

closeNav() {
  // Function to close the navigation
  if (window.innerWidth <= 768) { // Assuming 768px is your "small screen" breakpoint
    this.status = false;
  }
}

}