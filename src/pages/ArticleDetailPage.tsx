import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { articles } from '../data';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Article not found</h1>
        <Link to="/articles" className="mt-6 inline-flex text-teal-600">Return to articles</Link>
      </section>
    );
  }

  return (
    <>
      <Seo title={article.title} description={article.excerpt} />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/articles" className="text-sm font-semibold text-teal-600">← Back to articles</Link>
        <img src={article.image} alt={article.title} className="mt-6 h-72 w-full rounded-[2rem] object-cover" />
        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">{article.category}</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">{article.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{article.content}</p>
        </div>
      </section>
    </>
  );
}
