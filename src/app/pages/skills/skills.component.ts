import { Component } from '@angular/core';

type BarSkill = { name: string; pct: number };
type BarSection = { title: string; items: BarSkill[] };
type ChipSection = { title: string; items: string[] };

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  // === Animated bar sections ===
  barSections: BarSection[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular 16+', pct: 90 },
        { name: 'JavaScript', pct: 85 },
        { name: 'TypeScript', pct: 85 },
        { name: 'HTML5', pct: 90 },
        { name: 'CSS3', pct: 88 },
        { name: 'JSON', pct: 80 },
        { name: 'React', pct: 55 },
        { name: 'AgGrid', pct: 80 },
        { name: 'Bootstrap', pct: 70 },
        { name: 'PrimeNG', pct: 65 },
        { name: 'Redux', pct: 50 },
        { name: 'SSR', pct: 45 },
        { name: 'Micro Front-Ends', pct: 45 },
        { name: 'Component-Driven UI', pct: 70 }
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Java (Spring Boot)', pct: 60 },
        { name: 'RESTful APIs', pct: 80 },
        { name: 'Python', pct: 45 },
        { name: 'Node.js', pct: 50 }
      ]
    },
    {
      title: 'UX Tools',
      items: [
        { name: 'Figma', pct: 70 },
        { name: 'UX design principles', pct: 75 }
      ]
    },
    {
      title: 'Testing Frameworks',
      items: [
        { name: 'Jasmine', pct: 60 },
        { name: 'Karma', pct: 55 }
      ]
    },
    {
      title: 'DevOps & Tools',
      items: [
        { name: 'Git', pct: 85 },
        { name: 'NPM', pct: 80 },
        { name: 'Jenkins', pct: 60 },
        { name: 'Docker', pct: 50 },
        { name: 'Azure', pct: 50 },
        { name: 'Swagger', pct: 65 },
        { name: 'Cloud & Hosting - AWS', pct: 45 }
      ]
    },
    {
      title: 'Methodologies & Software Development Principles',
      items: [
        { name: 'Agile', pct: 75 },
        { name: 'SOLID Principles', pct: 70 },
        { name: 'Jira', pct: 70 },
        { name: 'WCAG', pct: 75 }
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MySQL', pct: 60 },
        { name: 'SQL Server', pct: 55 }
      ]
    }
  ];

  // === Chips-only sections ===
  chipSections: ChipSection[] = [
    {
      title: 'Soft Skills',
      items: [
        'Effective Communication','Team Collaboration','Problem-Solving',
        'Time Management','Leadership','Continuous Learning',
        'User-centered design','Customer-first problem solving'
      ]
    },
    {
      title: 'Data Analytics & Visualization',
      items: ['Tableau','Power BI']
    },
    {
      title: 'IDEs & Development Environments',
      items: ['Visual Studio Code','Jupyter Notebook','Jupyter Lab']
    }
  ];
}
