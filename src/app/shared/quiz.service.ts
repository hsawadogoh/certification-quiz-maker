import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { QuizQuestion } from '../models/quiz-question.model';
import { QuizRequest } from '../models/quiz-request.model';
import { TriviaCategories } from '../models/trivia-categories.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  _BASE_URL = 'https://opentdb.com';
  _AMOUNT = 5;
  _TYPE = 'multiple';
  userQuizAnswers: QuizQuestion[] = [];
  userQuizAnswers$: BehaviorSubject<QuizQuestion[]> = new BehaviorSubject<
    QuizQuestion[]
  >([]);

  constructor(private http: HttpClient) {}

  getCategories(): Observable<TriviaCategories> {
    return this.http.get<TriviaCategories>(
      `${this._BASE_URL}/api_category.php`
    );
  }

  onCreateQuizQuestion(
    categoryId: number,
    difficulty: string
  ): Observable<QuizRequest> {
    return this.http.get<QuizRequest>(
      `${this._BASE_URL}/api.php?amount=${this._AMOUNT}&category=${categoryId}&difficulty=${difficulty}&type=${this._TYPE}`
    );
  }

  formatQuiz(quizRequest: QuizRequest): QuizQuestion[] {
    let quizQuestions: QuizQuestion[] = [];

    if (quizRequest.response_code === 0 && quizRequest.results !== undefined) {
      quizQuestions = quizRequest.results.map((quiz) => {
        let quizQuestion = new QuizQuestion();
        quizQuestion.category = quiz.category;
        quizQuestion.question = quiz.question;
        quizQuestion.correct_answer = quiz.correct_answer;
        quizQuestion.answers = quiz.incorrect_answers;
        quizQuestion.answers?.push(quiz.correct_answer!);
        return quizQuestion;
      });
    }

    return quizQuestions;
  }

  sendUserAnswers(quizQuestions: QuizQuestion[]): void {
    this.userQuizAnswers$.next(quizQuestions);
  }

  getUserAnswers(): QuizQuestion[] {
    return this.userQuizAnswers;
  }
}
