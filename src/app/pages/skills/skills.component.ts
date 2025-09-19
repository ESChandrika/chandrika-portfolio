import { Component } from '@angular/core';

type ChipSection = { title: string; items: string[] };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // One simple list of chip sections
  sections: ChipSection[] = [
    {
      title: 'Frontend',
      items: [
        'Angular 16+','React','JavaScript','TypeScript','HTML5','CSS3','JSON', 'Angular Signals'
        ,'AgGrid','Bootstrap','PrimeNG','Redux',
        'SSR','Micro Front-Ends','Component-Driven UI'
      ]
    },
    {
      title: 'Backend',
      items: ['Java (Spring Boot)','RESTful APIs','Python','Node.js']
    },
    {
      title: 'UX Tools',
      items: ['Figma','UX design principles']
    },
    {
      title: 'Testing Frameworks',
      items: ['Jasmine','Karma']
    },
    {
      title: 'DevOps & Tools',
      items: ['Git','NPM','Jenkins','Docker','Azure','Swagger','AWS (Cloud & Hosting)']
    },
    {
      title: 'Methodologies & Principles',
      items: ['Agile','SOLID Principles','Jira','WCAG']
    },
    {
      title: 'Databases',
      items: ['MySQL','SQL Server']
    },
    {
      title: 'Data Analytics & Visualization',
      items: ['Tableau','Power BI']
    },
    {
      title: 'IDEs & Dev Environments',
      items: ['Visual Studio Code','Jupyter Notebook','Jupyter Lab']
    },
    {
      title: 'Soft Skills',
      items: [
        'Effective Communication','Team Collaboration','Problem-Solving',
        'Time Management','Leadership','Continuous Learning',
        'User-centred design','Customer-first mindset'
      ]
    }
  ];
}
