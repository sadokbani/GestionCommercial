import { Component } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent  {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }


}
