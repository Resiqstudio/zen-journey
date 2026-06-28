import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { articles } from '../data';

export default function ArticlesPage() {
  return (
    <>
      <Seo title="Articles" description="Browse VitaCare articles on wellness, nutrition, and mindset." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Article collection</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Practical pieces for everyday care.</h1>
          <p className="mt-4 text-lg text-slate-600">Each article is designed to be concise, supportive, and easy to revisit when you need a reset.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{article.title}</h2>
                <p className="mt-3 text-slate-600">{article.excerpt}</p>
                <Link to={`/articles/${article.slug}`} className="mt-5 inline-flex font-semibold text-teal-600">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
