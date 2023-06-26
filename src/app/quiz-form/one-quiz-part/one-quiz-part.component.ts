import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz-question.model';

@Component({
  selector: 'app-one-quiz-part',
  templateUrl: './one-quiz-part.component.html',
  styleUrls: ['./one-quiz-part.component.css'],
})
export class OneQuizPartComponent implements OnInit {
  @Input()
  quizQuestion: QuizQuestion = new QuizQuestion();

  @Output()
  answerEmitter = new EventEmitter<QuizQuestion>();

  constructor() {}

  ngOnInit() {}

  onGetChoice(answer: string): void {
    this.quizQuestion.user_answer = answer;
    this.answerEmitter.emit(this.quizQuestion);
  }

  
}
