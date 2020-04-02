import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef,
  HostListener, 
  HostBinding,
  Input 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor: string = 'transparent'
@Input() highlightColor: string = 'lightpink'

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue', false, false)
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue', false, false);
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }
}
