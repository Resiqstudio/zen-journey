import { useParams, Navigate } from 'react-router-dom';
import { diseaseSeedData } from '../data';
import DiseasePageTemplate from '../components/DiseasePageTemplate';

export default function DiseaseDetailPage() {
  const { slug } = useParams();
  const disease = diseaseSeedData.find((entry) => entry.slug === slug);

  if (!disease) {
    return <Navigate to="/diseases" replace />;
  }

  return <DiseasePageTemplate disease={disease} />;
}
