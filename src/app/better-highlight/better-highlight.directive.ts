import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef,
  HostListener, 
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue', false, false)
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue', false, false);
    this.backgroundColor = 'lightblue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = 'transparent';
  }
}
