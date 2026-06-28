import { diseases } from '../data';

export function getSearchSuggestions(query: string) {
  const normalized = query.toLowerCase();
  if (!normalized) return [];

  return diseases
    .filter((disease) => disease.name.toLowerCase().includes(normalized) || disease.tags.some((tag) => tag.toLowerCase().includes(normalized)))
    .slice(0, 6)
    .map((disease) => ({ label: disease.name, href: `/diseases/${disease.slug}` }));
}
