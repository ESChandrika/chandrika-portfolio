import { Component } from '@angular/core';

type Cat = 'All' | 'Web Apps' | 'Enterprise';

type Shot = {
  src: string;
  caption: string;
  explain: string;
};

type Project = {
  title: string;
  cat: 'Web Apps' | 'Enterprise';
  summary: string;
  code?: { url?: string; label?: string }; // If no url, label is shown (e.g., "GitHub (private)")
  demoNote?: string;
  shots?: Shot[];                           // Optional; if empty/omitted -> carousel hidden
  responsibilities?: string[];
  achievements?: string[];
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  cats: Cat[] = ['All', 'Web Apps', 'Enterprise'];
  active: Cat = 'All';

  projects: Project[] = [
    {
      title: 'Glossary Management System — Angular 16',
      cat: 'Web Apps',
      summary:
        'Terminology platform that standardises terms and speeds up discovery across sub-glossaries. Built with Angular 16, routing/forms/state basics, AgGrid and REST integration.',
      code: { label: 'GitHub (private)' },
      demoNote: 'Live demo available on request',
      shots: [
        { src: 'assets/projects/glossary/shot1.png', caption: 'Owner & sub-glossary selection', explain: 'Role-based access, scoped views.' },
        { src: 'assets/projects/glossary/shot2.png', caption: 'Term search & synonyms', explain: 'Fast discovery with fuzzy matching.' },
        { src: 'assets/projects/glossary/shot3.png', caption: 'Grid + filters', explain: 'AgGrid with custom cells & filters.' }
      ],
      responsibilities: [
        'Angular 16 UI: routing, forms, reusable components',
        'AgGrid: filters, custom cell renderers, dense layouts',
        'REST integration & error handling',
        'Responsive & accessible (WCAG)'
      ],
      achievements: [
        'Client-approved UI framework for wider rollout',
        'Search time reduced with smarter filters & synonyms'
      ]
    },
    {
      title: 'Infosys — Helix Migration & UI Standardisation',
      cat: 'Enterprise',
      summary:
        'Contributed to UI standardisation, accessibility and performance checks. Streamlined documentation and patterns for faster delivery across teams.',
      code: { url: 'https://example.com/helix-overview' },
      demoNote: 'Internal demo on request',
      // no shots
      responsibilities: [
        'Design system alignment & reuse',
        'WCAG & responsive layouts',
        'Perf-focused reviews'
      ],
      achievements: [
        'Reduced UI inconsistencies across squads',
        'Improved onboarding via clear docs'
      ]
    },
    {
      title: 'React — Commerce (WIP)',
      cat: 'Web Apps',
      summary:
        'Learning build for a simple storefront (routing, state basics, API integration).',
      code: { url: 'https://github.com/ESChandrika/react-commerce' },
      demoNote: 'Demo link on request'
      // no shots
    }
  ];

  // per-project screenshot index
  shotIndex: Record<string, number> = {};

  // used only on the "All" tab to step through projects
  featureIdx = 0;

  constructor() {
    for (const p of this.projects) {
      if (p.shots?.length) this.shotIndex[p.title] = 0;
    }
  }

  setActive(cat: Cat) {
    this.active = cat;
    this.featureIdx = 0; // reset when switching tabs
  }

  // list for current tab
  get list(): Project[] {
    return this.active === 'All'
      ? this.projects
      : this.projects.filter(p => p.cat === this.active);
  }

  // feature project for "All" tab
  get feature(): Project | undefined {
    const l = this.list;
    return l.length ? l[this.featureIdx % l.length] : undefined;
  }

  // prev/next only used on "All"
  prevProject() {
    const l = this.list.length;
    if (!l) return;
    this.featureIdx = (this.featureIdx - 1 + l) % l;
  }
  nextProject() {
    const l = this.list.length;
    if (!l) return;
    this.featureIdx = (this.featureIdx + 1) % l;
  }

  // carousel helpers (only for projects with shots)
  shotPrev(p: Project) {
    const n = p.shots!.length;
    const idx = this.shotIndex[p.title] ?? 0;
    this.shotIndex[p.title] = (idx - 1 + n) % n;
  }
  shotNext(p: Project) {
    const n = p.shots!.length;
    const idx = this.shotIndex[p.title] ?? 0;
    this.shotIndex[p.title] = (idx + 1) % n;
  }
  shotGo(p: Project, i: number) {
    this.shotIndex[p.title] = i;
  }

  trackByTitle = (_: number, p: Project) => p.title;
}
