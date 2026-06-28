export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface Disease {
  id: number;
  slug: string;
  name: string;
  category: string;
  definition: string;
  aliases: string[];
  tags: string[];
  sections: {
    overview: string;
    definition: string;
    symptoms: string[];
    causes: string[];
    riskFactors: string[];
    prevention: string[];
    diagnosis: string[];
    treatments: string[];
    homeCare: string[];
    lifestyle: string[];
    complications: string[];
    prognosis: string;
    faq: Array<{ question: string; answer: string }>;
    references: string[];
  };
  relatedDiseases: string[];
  lastReviewed: string;
}

export interface DiseaseCategory {
  id: number;
  name: string;
  description: string;
}

export interface NutritionTip {
  id: number;
  title: string;
  description: string;
  tag: string;
}

export interface WorkoutPlan {
  id: number;
  title: string;
  duration: string;
  intensity: string;
  focus: string;
  steps: string[];
}
