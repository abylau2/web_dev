import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  locations = [
    { id: 1, name: 'New York', description: 'City that never sleeps' },
    { id: 2, name: 'Paris', description: 'City of lights' },
  ];
}
