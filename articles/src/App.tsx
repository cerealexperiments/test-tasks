import "./App.css";
import { useQuery } from "react-query";
import Article from "./article.tsx";
import { useState } from "react";
import { ArticleType } from "./article.tsx";

const getArticles = async () => {
  const response = await fetch(" https://jsonplaceholder.typicode.com/posts/");
  const articles: ArticleType[] = await response.json();
  return articles;
};
function App() {
  const [loadIndex, setLoadIndex] = useState(1);
  const articlesQuery = useQuery({
    queryKey: "articles",
    queryFn: getArticles,
  });
  return (
    <>
      <div className="container">
        {articlesQuery.data && (
          <div className="articles-container">
            {articlesQuery.data.slice(0, 10 * loadIndex).map((item) => (
              <Article
                key={item.id}
                id={item.id}
                userId={item.userId}
                body={item.body}
                title={item.title}
              />
            ))}
          </div>
        )}
        <div className="button-container">
          <button
            className="button"
            onClick={() => setLoadIndex((prev) => prev + 1)}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
