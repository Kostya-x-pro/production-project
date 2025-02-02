import { Article } from 'entities/Article';

export interface articleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
