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
  code?: { url?: string; label?: string };
  demoNote?: string;
  shots?: Shot[];
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
        'A web app that standardises terminology and speeds discovery across sub-glossaries. Built with a component-driven UI, REST integration and data-dense views for fast search and review.',
      code: { label: 'GitHub (private)' },
      demoNote: 'Live demo available on request',
      shots: [
        {
          src: 'assets/projects/glossary/shot1.png',
          caption: 'Owner & sub-glossary selection',
          explain: 'Role-based access with scoped views for owners and contributors.'
        },
        {
          src: 'assets/projects/glossary/shot2.png',
          caption: 'Term search & synonyms',
          explain: 'Fuzzy matching + synonym groups for faster term retrieval.'
        },
        {
          src: 'assets/projects/glossary/shot3.png',
          caption: 'Grid + filters',
          explain: 'AgGrid custom cells, column filters and virtualised lists.'
        }
      ],
      responsibilities: [
        'Designed a modular Angular 16 front end: routing, forms and reusable components',
        'Implemented REST API integration, error handling and empty/error states',
        'Built AgGrid views with custom cell renderers, quick filters and dense layouts',
        'Shipped responsive, WCAG-aware pages with pragmatic a11y checks',
        'Documented patterns for UI/data flows and handover'
      ],
      achievements: [
        'Delivered a client-approved UI framework adopted beyond the pilot',
        'Reduced search time with synonym matching and tuned grid filtering'
      ]
    },

    {
      title: 'Infosys — Helix Platform: UI Standardisation',
      cat: 'Enterprise',
      summary:
        'Contributed to a large-scale healthcare insurance platform, focusing on reusable front-end architecture, accessibility and performance to increase delivery speed across squads.',
      // (No public repo for enterprise work)
      demoNote: 'Internal demo / overview available on request',
      responsibilities: [
        'Built reusable Angular component libraries aligned with SOLID practices',
        'Integrated front end with Spring Boot APIs; added guards/interceptors',
        'Applied WCAG and responsive patterns to shared templates and flows',
        'Implemented AgGrid for heavy datasets: lazy loading, custom rendering'
      ],
      achievements: [
        'Helped secure two US healthcare clients through successful product demos',
        'Improved delivery speed by ~25% via standardised components and docs',
        'Supported CI/CD with Jenkins, Docker and Azure; mentored a 6-member team'
      ]
    },

    {
      title: 'React Commerce (WIP)',
      cat: 'Web Apps',
      summary:
        'In development 1st phase — online website for a small business, built with React: responsive storefront with product list, basic cart/checkout, and REST API integration.',
      
     
      responsibilities: [
        'Set up React app structure with routed pages and guarded views',
        'Integrated REST endpoints for catalog and cart operations',
        'Exploring Redux-style state patterns and API middleware',
        'Mobile-first UI and accessibility checks'
      ],
      
    }
  ];

  // per-project screenshot index (only used when shots exist)
  shotIndex: Record<string, number> = {};

  // used only on the "All" tab to step through feature projects
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
    // prev/next buttons only render on the All tab per your template
  }

  // Prev/Next only on “All”
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

  // Carousel helpers (for projects that have screenshots)
  shotPrev(p: Project) {
    if (!p.shots?.length) return;
    const n = p.shots.length;
    const idx = this.shotIndex[p.title] ?? 0;
    this.shotIndex[p.title] = (idx - 1 + n) % n;
  }
  shotNext(p: Project) {
    if (!p.shots?.length) return;
    const n = p.shots.length;
    const idx = this.shotIndex[p.title] ?? 0;
    this.shotIndex[p.title] = (idx + 1) % n;
  }
  shotGo(p: Project, i: number) {
    if (!p.shots?.length) return;
    this.shotIndex[p.title] = i;
  }

  trackByTitle = (_: number, p: Project) => p.title;
}
