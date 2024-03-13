import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rogues-knights-nx-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nx-welcome.component.html',
  styleUrl: './nx-welcome.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  darkMode = true;
}
