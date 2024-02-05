import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  counter = 0;

  incrementValue() {
    this.counter += 5;
  }

  decrementValue() {
    this.counter -= 5;
  }
}