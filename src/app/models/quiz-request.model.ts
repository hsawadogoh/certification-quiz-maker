import { QuizRequestQuestion } from './quiz-request-question.model';

export class QuizRequest {
  constructor(
    public response_code?: number,
    public results?: QuizRequestQuestion[]
  ) {
    this.results = [];
  }
}
