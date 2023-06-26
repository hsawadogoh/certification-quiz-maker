export class QuizRequestQuestion {
  constructor(
    public category?: string,
    public question?: string,
    public correct_answer?: string,
    public incorrect_answers?: string[]
  ) {
    this.incorrect_answers = [];
  }
}
