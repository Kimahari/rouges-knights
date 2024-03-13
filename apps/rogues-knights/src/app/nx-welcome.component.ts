import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rogues-knights-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl : './nx-welcome.component.html',
  styleUrl : './nx-welcome.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
