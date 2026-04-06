import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skillsList: Skill[] = [];

  constructor() {
    this.skillsList = [
      { name: 'Angular Framework', proficiency: 97 },
      { name: 'Node.js', proficiency: 90 },
      { name: '.NET Framework', proficiency: 70 },
      { name: 'Agile Development', proficiency: 95 },
      { name: 'Microsoft SQL Server', proficiency: 90 },
      { name: 'PostgreSQL', proficiency: 85 },
      { name: 'RESTful API', proficiency: 88 },
      { name: 'CI/CD', proficiency: 98 },
      { name: 'Azure DevOps', proficiency: 90 },
      { name: 'Amazon Web Services', proficiency: 90 },
      { name: 'Git', proficiency: 100 },
      { name: 'Security compliance', proficiency: 90 },
      { name: 'Technical leadership', proficiency: 90 },
      { name: 'Problem solving', proficiency: 90 },
      { name: 'Creative thinking', proficiency: 90 },
      { name: 'Team collaboration', proficiency: 90 },
      { name: 'Effective communication', proficiency: 90 },
    
    ];
  }

}

class Skill {
  name: string;
  proficiency: number; // Percentage (0-100)

  constructor() {
    this.name = '';
    this.proficiency = 0;
  }
}
