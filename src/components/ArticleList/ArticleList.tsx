import type { Article } from '../../types/article.ts';

interface ArticleListProps {
  articles: Article[];
}
export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          <a href={url} target='_blank'>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
