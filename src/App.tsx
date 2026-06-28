import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import DiseaseLibraryPage from './pages/DiseaseLibraryPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';
import NutritionPage from './pages/NutritionPage';
import FitnessPage from './pages/FitnessPage';
import CalculatorsPage from './pages/CalculatorsPage';
import SearchPage from './pages/SearchPage';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/diseases" element={<DiseaseLibraryPage />} />
          <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/fitness" element={<FitnessPage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
