import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChoiceAnswerColor]',
})
export class ChoiceAnswerColorDirective {
  constructor() {}

  @HostBinding('class') class!: string;

  @HostListener('click')
  onHoverBtn() {
    this.class = 'btn btn-success text-white';
  }
}
