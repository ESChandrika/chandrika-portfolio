import { Component, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements AfterViewInit, OnDestroy {
  @Input() name = '';
  @Input() pct = 0;

  filled = false;
  displayPct = 0;

  private io?: IntersectionObserver;
  private rafId?: number;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting)) {
          this.start();
          this.io?.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    this.io.observe(this.host.nativeElement);
  }

  private start() {
    this.filled = true;                             // triggers width transition
    const start = performance.now();
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      this.displayPct = Math.round(this.pct * p);
      if (p < 1) this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
