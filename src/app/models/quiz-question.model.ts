export class QuizQuestion {
  constructor(
    public category?: string,
    public question?: string,
    public correct_answer?: string,
    public user_answer?: string,
    public answers?: string[]
  ) {}
}
