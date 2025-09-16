import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Chandrika' },
  { path: 'about', component: AboutComponent, title: 'About | Chandrika' },
  { path: 'skills', component: SkillsComponent, title: 'Skills | Chandrika' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Chandrika' },
  { path: 'journey', component: ExperienceComponent, title: 'Experience | Chandrika' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Chandrika' },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
