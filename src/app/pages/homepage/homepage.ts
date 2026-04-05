import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  
  name: string = '';
  role: string = '';
  description: string = '';

  cardContents: CardContent[] = [];

  constructor() {
    this.name = 'JEWEL CAUDILLA';
    this.role = 'Software Engineer | Full-Stack Developer';
    this.description = 'Passionate developer specializing in Angular and modern web technologies. I build clean, scalable, and user-friendly applications with a focus on performance and design.';

    this.cardContents = [
      {title: 'Skills', description: 'Description for Card 1', link: '/skills', icon: 'bi bi-code-slash'},
      {title: 'Experience', description: 'Description for Card 2', link: '/experience', icon: 'bi bi-briefcase'},
      {title: 'Contacts', description: 'Description for Card 3', link: '/contacts', icon: 'bi bi-envelope'},
    ]
  }
}

class CardContent {
  title: string;
  description: string;
  link: string;
  icon: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.link = '';
    this.icon = '';
  }
}
