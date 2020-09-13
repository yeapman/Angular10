import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight: string = 'normal';
  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red'; // bad use, not optimise

    this.r.setStyle(this.el.nativeElement, 'color', 'blue') // should use via Renderer2, it is optimise
  }

  @HostListener('click', ['$event']) onMyClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onMyEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', 'green')
  }



}


