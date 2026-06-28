import type { Disease } from '../types';

export function getDiseaseSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function buildDiseaseMeta(disease: Disease) {
  return {
    title: `${disease.name} | VitaCare Medical Knowledge Library`,
    description: disease.definition,
    canonical: `/diseases/${disease.slug}`
  };
}

export function buildDiseaseBreadcrumbs(disease: Disease) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Diseases', href: '/diseases' },
    { label: disease.name }
  ];
}

export function filterDiseases(diseases: Disease[], query: string, category: string, letter: string) {
  const normalizedQuery = query.toLowerCase();

  return diseases.filter((disease) => {
    const matchesQuery =
      !normalizedQuery ||
      disease.name.toLowerCase().includes(normalizedQuery) ||
      disease.definition.toLowerCase().includes(normalizedQuery) ||
      disease.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
      disease.category.toLowerCase().includes(normalizedQuery);

    const matchesCategory = category === 'All' || disease.category === category;
    const matchesLetter = !letter || letter === 'All' || disease.name.charAt(0).toUpperCase() === letter;

    return matchesQuery && matchesCategory && matchesLetter;
  });
}

export function paginateDiseases(diseases: Disease[], page: number, perPage: number) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    items: diseases.slice(start, end),
    totalPages: Math.max(1, Math.ceil(diseases.length / perPage))
  };
}

export function buildStructuredData(disease: Disease) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      headline: disease.name,
      description: disease.definition,
      url: `https://vitacare.example.com/diseases/${disease.slug}`,
      about: {
        '@type': 'MedicalCondition',
        name: disease.name,
        alternateName: disease.aliases.join(', ')
      },
      author: {
        '@type': 'Organization',
        name: 'VitaCare'
      },
      dateModified: disease.lastReviewed
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitacare.example.com/' },
        { '@type': 'ListItem', position: 2, name: 'Diseases', item: 'https://vitacare.example.com/diseases' },
        { '@type': 'ListItem', position: 3, name: disease.name, item: `https://vitacare.example.com/diseases/${disease.slug}` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: disease.sections.faq.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  ];
}
