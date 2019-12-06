import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective implements OnInit {
  @Input() creationDate: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const currentDate = new Date();
    const repoDate = new Date(this.creationDate);

    let months = currentDate.getMonth() - repoDate.getMonth()
    + (12 * (currentDate.getFullYear() - repoDate.getFullYear()));

    if (currentDate.getDate() < repoDate.getDate()) {
      months--;
    }

    if ( months > 6 ) {
      this.renderer.setStyle(this.element.nativeElement, 'background', 'grey');
      this.renderer.setStyle(this.element.nativeElement, 'border-color', 'black');
    }
  }

}
