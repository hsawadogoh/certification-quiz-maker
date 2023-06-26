import { Category } from './category.model';

export class TriviaCategories {
  constructor(public trivia_categories?: Category[]) {
    this.trivia_categories = [];
  }
}
