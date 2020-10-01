import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Search',
    search: 'Project Name',
  };

  onClick() {
    alert('Clicked!')
  }

  onKeyUp(searchInput: string) { //typescript
    this.data.search = searchInput
  }

}
