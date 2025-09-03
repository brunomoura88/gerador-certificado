
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css'
})
export class SecondaryButton {
  @Input() textoBotao: string = '';
  @Input() phClass: string = '';
}
