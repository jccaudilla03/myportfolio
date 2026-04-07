import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiencesList: ExperienceClass[] = [];

  constructor() {
    this.experiencesList = [
      {
        companyName: 'Accenture Inc.',
        companyLocation: 'NCR, Philippines',
        jobDesc: [
          {
            position: 'Custom Software Engineering Analyst',
            duration: 'October 2024 - January 2026',
            contributions: [
              'Provide expert technical support, resolving complex issues in a timely manner.',
              'Lead upgrades for Angular, Node.js, .NET Framework, and AWS Lambda.',
              'Serve as a hands-on technical lead, facilitating Agile processes, team collaboration, and communication.'
            ]

          },
          {
            position: 'Associate Software Engineer',
            duration: 'August 2021 - September 2024',
            contributions: [
              'Complete bootcamp training on React, Node.js, and AWS services.',
              'Achieve certification as an AWS Certified Cloud Practitioner.',
              `Engage in a project focused on the employer’s employee and alumni stock management portal.`,
              'Develop dynamic, responsive web applications using Angular, improving user experience and interface.',
              'Contribute to the creation of APIs using Node.js, enhancing backend functionality and scalability.',
              'Integrate RESTful APIs, enabling seamless data exchange between client and server.',
              'Design and maintain SQL databases, including complex queries, stored procedures, and triggers for data-driven applications.',
              'Perform database migration from SQL to PostgreSQL.',
              'Refactor console applications using the .NET Framework (C#).',
              'Utilize Azure DevOps for continuous integration and continuous delivery (CI/CD) pipelines.',
              'Participate actively in Agile development processes, delivering iterative updates and responding to feedback promptly.',
            ]

          }
        ]

      },
      {
        companyName: 'ON Semiconductor Philippines Inc.',
        companyLocation: 'Governors Drive, Carmona, Cavite, Philippines',
        jobDesc: [
          {
            position: 'Intern',
            duration: 'January 2020 - March 2020',
            contributions: [
              'TM (Testing Machine) data gatherer for effeciency of production',
              'Maintenance Support'
            ]

          }
        ]

      },
      {
        companyName: 'BISCAST Multimedia Office',
        companyLocation: 'Penafrancia Ave, Naga City',
        jobDesc: [
          {
            position: 'Student Aide',
            duration: '2018 - 2020',
            contributions: [
              'Operate technical equipment during school events, ensuring smooth execution.',
              'Organize and sort files for efficient record management.',
              'Assist office guests, providing support and addressing inquiries.'
            ]

          }
        ]

      }
    ];
  }

}

class ExperienceClass {
  companyName: string;
  companyLocation: string;
  jobDesc: any;


  constructor() {
    this.companyName = '';
    this.companyLocation = '';
    this.jobDesc = [];
  }

}

