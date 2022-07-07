import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorDirective]',
})
export class ColorDirectiveDirective {
  @Input() color: string = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = this.color;
  }
}
