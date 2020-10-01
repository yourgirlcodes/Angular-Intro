import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'my first Angular project',
    by: 'Zoe Cohen',
  };

  onClick() {
    alert('Clicked!')
  }

}
