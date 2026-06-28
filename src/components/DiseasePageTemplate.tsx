import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import type { Disease } from '../types';
import { buildDiseaseBreadcrumbs, buildStructuredData, buildDiseaseMeta } from '../lib/knowledge';

interface DiseasePageTemplateProps {
  disease: Disease;
}

const sectionMap: Array<{ key: keyof Disease['sections']; label: string }> = [
  { key: 'overview', label: 'Overview' },
  { key: 'definition', label: 'Definition' },
  { key: 'symptoms', label: 'Symptoms' },
  { key: 'causes', label: 'Causes' },
  { key: 'riskFactors', label: 'Risk Factors' },
  { key: 'prevention', label: 'Prevention' },
  { key: 'diagnosis', label: 'Diagnosis' },
  { key: 'treatments', label: 'Treatment' },
  { key: 'homeCare', label: 'Home Care' },
  { key: 'lifestyle', label: 'Lifestyle' },
  { key: 'complications', label: 'Complications' },
  { key: 'prognosis', label: 'Prognosis' },
  { key: 'faq', label: 'FAQ' },
  { key: 'references', label: 'References' }
];

export default function DiseasePageTemplate({ disease }: DiseasePageTemplateProps) {
  const { title, description, canonical } = buildDiseaseMeta(disease);
  const breadcrumbs = buildDiseaseBreadcrumbs(disease);
  const structuredData = buildStructuredData(disease);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="text-sm text-slate-500">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {index > 0 ? ' / ' : ''}
              {crumb.href ? <Link to={crumb.href} className="hover:text-teal-600">{crumb.label}</Link> : <span className="text-slate-700">{crumb.label}</span>}
            </span>
          ))}
        </nav>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">{disease.category}</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">{disease.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{disease.definition}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {disease.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{tag}</span>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Medical disclaimer</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">This information is educational only. It does not diagnose or replace professional care. Please consult a qualified healthcare professional for diagnosis and treatment.</p>
            <p className="mt-4 text-sm font-semibold text-teal-600">Last reviewed: {disease.lastReviewed}</p>
          </aside>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-900">Knowledge sections</h2>
            <ul className="mt-4 space-y-2">
              {sectionMap.map((section) => (
                <li key={section.key} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">{section.label}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            {Object.entries(disease.sections).map(([key, value]) => (
              <div key={key} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-slate-900">{sectionMap.find((section) => section.key === key)?.label}</h2>
                {Array.isArray(value) ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-600">
                    {value.map((item, index) => (
                      <li key={`${key}-${index}`}>{typeof item === 'string' ? item : `${item.question}: ${item.answer}`}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-slate-600">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Related diseases</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {disease.relatedDiseases.map((related) => (
              <Link key={related} to={`/diseases/${related.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="rounded-full bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-700">
                {related}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
