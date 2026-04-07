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
      {
        title: 'Skills', 
        description: 'A showcase of my technical and professional skills, highlighting expertise in Angular, Node.js, .NET, cloud technologies, and modern development practices.', 
        link: '/skills', 
        icon: 'bi bi-code-slash'
      },
      {
        title: 'Experience', 
        description: 'An overview of my professional journey, including projects, contributions, and hands-on experience in building scalable web applications and APIs.', 
        link: '/experience', 
        icon: 'bi bi-briefcase'
      },
      {
        title: 'Contacts', 
        description: 'Get in touch with me for collaboration, opportunities, or inquiries through my available communication channels.', 
        link: '/contacts', 
        icon: 'bi bi-envelope'
      },
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
