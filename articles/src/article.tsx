export type ArticleType = {
  id: number;
  userId: number;
  body: string;
  title: string;
};
export default function Article({ id, userId, body, title }: ArticleType) {
  return (
    <div className="article">
      <p className="article__info">
        #{id}, by: user#{userId}
      </p>
      <p className="article__title">{title}</p>
      <p>{body}</p>
    </div>
  );
}
