import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[appScrollReveal]' })
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit(): void {
    this.r.addClass(this.el.nativeElement, 'reveal');
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.r.addClass(this.el.nativeElement, 'show');
            this.io?.unobserve(this.el.nativeElement); // reveal once
          }
        });
      },
      { threshold: 0.12 }
    );
    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
