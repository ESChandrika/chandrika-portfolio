import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTop = false;
  solid = false;

  // ✅ use this in the template instead of `new Date()`
  readonly year = new Date().getFullYear();

  @HostListener('window:scroll', [])
  onScroll() {
    const y = window.scrollY || 0;
    this.showTop = y > 240;
    this.solid = y > 10; // header background becomes solid
  }

  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
