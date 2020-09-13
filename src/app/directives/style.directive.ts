import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight: string = 'normal';

  @HostBinding("style.color") elColor = null;


  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red'; // bad use, not optimise

    this.r.setStyle(this.el.nativeElement, 'color', 'blue') // should use via Renderer2, it is optimise
  }

  @HostListener('click', ['$event']) onMyClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onMyEnter() {
    this.elColor = this.color;
  }

  @HostListener('mouseleave') onLeave() {
   this.elColor = null
  }



}


