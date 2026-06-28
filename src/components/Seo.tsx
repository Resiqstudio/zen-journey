import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>{title} | VitaCare</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
