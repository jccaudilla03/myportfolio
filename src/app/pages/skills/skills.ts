import { Component, OnInit } from '@angular/core';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {

  skillsList: Skill[] = [];

  groupedSkills: any = {};
  finalArray: any = [];

  constructor() {
    this.skillsList = [
      {
        group: 'Technical Skills',
        category: 'Frontend',
        name: 'Angular Framework',
        proficiency: 98
      },
      {
        group: 'Technical Skills',
        category: 'Backend',
        name: 'Node.js [TypeScript-based]',
        proficiency: 93
      },
      {
        group: 'Technical Skills',
        category: 'Backend',
        name: '.NET Framework',
        proficiency: 70
      },
      {
        group: 'Technical Skills',
        category: 'Database Management',
        name: 'Microsoft SQL Server',
        proficiency: 95
      },
      {
        group: 'Technical Skills',
        category: 'Database Management',
        name: 'PostgreSQL',
        proficiency: 90
      },
      {
        group: 'Technical Skills',
        category: 'API Development & Integration',
        name: 'RESTful API',
        proficiency: 95
      },
      {
        group: 'Technical Skills',
        category: 'DevOps & Cloud',
        name: 'CI/CD',
        proficiency: 98
      },
      {
        group: 'Technical Skills',
        category: 'DevOps & Cloud',
        name: 'Azure DevOps',
        proficiency: 92
      },
      {
        group: 'Technical Skills',
        category: 'DevOps & Cloud',
        name: 'Amazon Web Services',
        proficiency: 90
      },
      {
        group: 'Technical Skills',
        category: 'DevOps & Cloud',
        name: 'Git',
        proficiency: 99
      },
      {
        group: 'Technical Skills',
        category: 'Security & Compliance',
        name: 'Security compliance',
        proficiency: 90
      },
      {
        group: 'Technical Skills',
        category: 'Development Methodologies',
        name: 'Agile Development',
        proficiency: 98
      },
      {
        group: 'Soft Skills',
        category: 'Soft Skills',
        name: 'Technical leadership',
        proficiency: 90
      },
      {
        group: 'Soft Skills',
        category: 'Soft Skills',
        name: 'Problem solving',
        proficiency: 94
      },
      {
        group: 'Soft Skills',
        category: 'Soft Skills',
        name: 'Creative thinking',
        proficiency: 88
      },
      {
        group: 'Soft Skills',
        category: 'Soft Skills',
        name: 'Team collaboration',
        proficiency: 90
      },
      {
        group: 'Soft Skills',
        category: 'Soft Skills',
        name: 'Effective communication',
        proficiency: 97
      },
    ];
  }

  ngOnInit() {
    this.groupSkills();
  }

  groupSkills() {
    this.groupedSkills = this.skillsList.reduce((acc, skill) => {
      // 1. Group level (Technical Skills / Soft Skills)
      if (!acc[skill.group]) {
        acc[skill.group] = {};
      }

      // 2. Category level (Frontend, Backend, etc.)
      if (!acc[skill.group][skill.category]) {
        acc[skill.group][skill.category] = [];
      }

      // 3. Push skill inside category
      acc[skill.group][skill.category].push({
        name: skill.name,
        proficiency: skill.proficiency
      });

      return acc;
    }, {} as any);

    console.log(this.groupedSkills);

    this.formatArraySkills();
  }


  formatArraySkills() {
    this.finalArray = Object.keys(this.groupedSkills).map(group => ({
      group,
      categories: Object.keys(this.groupedSkills[group]).map(category => ({
        category,
        skills: this.groupedSkills[group][category]
      }))
    }));

    console.log(this.finalArray);
  }

}

class Skill {
  group: string;
  category: string;
  name: string;
  proficiency: number; // Percentage (0-100)

  constructor() {
    this.group = '';
    this.category = '';
    this.name = '';
    this.proficiency = 0;
  }
}

