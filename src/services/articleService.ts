import type { Article } from '../types/article.ts';
import axios from 'axios';

interface ArticleHTTPResponse {
  hits: Article[];
}

export default async function fetchArticles(topic: string): Promise<Article[]> {
  const response = await axios.get<ArticleHTTPResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`
  );
  return response.data.hits;
}
