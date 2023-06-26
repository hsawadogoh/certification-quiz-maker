import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizQuestion } from '../models/quiz-question.model';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css'],
})
export class QuizResultComponent implements OnInit {
  userAnswers$: Observable<QuizQuestion[] | undefined> = new Observable<
    QuizQuestion[]
  >();
  score: number = 0;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.userAnswers$ = this.quizService.userQuizAnswers$;
    this.getScore();
  }

  getScore(): void {
    this.userAnswers$.subscribe({
      next: (response) => {
        if (response !== undefined) {
          response.forEach((answer) => {
            if (answer.correct_answer === answer.user_answer) {
              this.score++;
            }
          });
        }
        console.log(this.score);
        console.log(response);
      },
    });
  }
}
