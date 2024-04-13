import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  standalone: true,
  imports: [],
  templateUrl: './coordinates.component.html',
  styleUrl: './coordinates.component.css'
})
export class CoordinatesComponent {
  message: string = '';

  constructor() {}

  updateMessage(clickEvent: MouseEvent) {
    this.message = `You clicked at coordinates x = ${clickEvent.clientX}, y = ${clickEvent.clientY}`;
  }

}
