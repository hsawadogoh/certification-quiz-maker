import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChoiceAnswerColorDirective } from './choice-answer-color.directive';

@NgModule({
  declarations: [ChoiceAnswerColorDirective],
  imports: [CommonModule],
  exports: [ChoiceAnswerColorDirective],
})
export class SharedModule {}
