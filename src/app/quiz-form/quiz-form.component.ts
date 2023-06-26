import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { QuizQuestion } from '../models/quiz-question.model';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
})
export class QuizFormComponent implements OnInit {
  categories$: Observable<Category[] | undefined> = new Observable<
    Category[]
  >();

  quizQuestions$: Observable<QuizQuestion[] | undefined> = new Observable<
    QuizQuestion[]
  >();
  userAnwsers: QuizQuestion[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categories$ = this.quizService
      .getCategories()
      .pipe(map((response) => response.trivia_categories));
  }

  onCreateQuiz(categoryId: string, difficulty: string): void {
    this.userAnwsers = [];
    this.quizQuestions$ = this.quizService
      .onCreateQuizQuestion(Number(categoryId), difficulty)
      .pipe(map((response) => this.quizService.formatQuiz(response)));
  }

  getUserAnswer(anwser: QuizQuestion): void {
    const checkAnwserExisted: boolean =
      this.userAnwsers.find(
        (userAnswer) => userAnswer.question === anwser.question
      ) !== undefined;

    if (checkAnwserExisted) {
      this.userAnwsers = this.userAnwsers.map((userAnwser) => {
        if (anwser.question === userAnwser.question) {
          return anwser;
        }
        return userAnwser;
      });
    } else {
      this.userAnwsers.push(anwser);
    }
  }

  sendUserAnwsers(): void {
    this.quizService.sendUserAnswers(this.userAnwsers);
    this.router.navigate(['results']);
  }
}
