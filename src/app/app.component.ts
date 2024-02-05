import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  counter = 0;

  incDec(type: string) {
    type === 'subtract' ? this.counter-- : this.counter++;
  }

}