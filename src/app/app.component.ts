import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';
  loadNavigation: string = 'recipes';
  featureNavigation = (feature: string) => {
    this.loadNavigation = feature;
  }
}
