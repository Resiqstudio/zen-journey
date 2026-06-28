import type { Article, Disease, DiseaseCategory, NutritionTip, WorkoutPlan } from './types';

export const articles: Article[] = [
  {
    id: 1,
    slug: 'heart-healthy-routine',
    title: 'Build a Heart-Healthy Daily Routine',
    category: 'Wellness',
    excerpt: 'Small habits like mindful breathing and hydration can meaningfully improve cardiovascular health.',
    content: 'A sustainable heart-healthy routine begins with gentle movement, balanced meals, and restorative sleep. Prioritize a brisk walk, a plant-forward plate, and self-checks for stress and blood pressure. Consistency matters more than intensity.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    featured: true
  },
  {
    id: 2,
    slug: 'gut-health-essentials',
    title: 'Gut Health Essentials for Better Energy',
    category: 'Nutrition',
    excerpt: 'Fiber, hydration, and fermented foods can support a calmer, more resilient digestive system.',
    content: 'Support your gut microbiome by enjoying diverse vegetables, whole grains, and fermented foods. Hydration and regular sleep also reinforce digestive comfort and energy stability.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    slug: 'stress-management-tools',
    title: 'Stress Management Tools That Work',
    category: 'Mindset',
    excerpt: 'Discover practical techniques to lower daily stress and return to balance faster.',
    content: 'Try short breathing exercises, journaling, and mindful walks. When stress becomes chronic, structure and social support can make a substantial difference.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80'
  }
];

export const diseaseCategories: DiseaseCategory[] = [
  { id: 1, name: 'Cardiology', description: 'Heart and circulatory conditions' },
  { id: 2, name: 'Respiratory', description: 'Lung and airway disorders' },
  { id: 3, name: 'Neurology', description: 'Brain and nerve conditions' },
  { id: 4, name: 'Endocrinology', description: 'Hormonal and metabolic diseases' },
  { id: 5, name: 'Dermatology', description: 'Skin and hair conditions' },
  { id: 6, name: 'Gastroenterology', description: 'Digestive and stomach conditions' },
  { id: 7, name: 'Infectious Diseases', description: 'Contagious infections and outbreaks' }
];

export const diseaseSeedData: Disease[] = [
  {
    id: 1,
    slug: 'common-cold',
    name: 'Common Cold',
    category: 'Respiratory',
    definition: 'A mild viral infection affecting the upper respiratory tract that usually improves within a week or two.',
    aliases: ['Upper respiratory infection'],
    tags: ['virus', 'respiratory', 'common'],
    sections: {
      overview: 'The common cold is one of the most frequent infectious illnesses and typically causes nasal congestion, sneezing, and sore throat.',
      definition: 'It is usually caused by rhinoviruses and often spreads through respiratory droplets or contaminated surfaces.',
      symptoms: ['Runny or stuffy nose', 'Sneezing', 'Sore throat', 'Cough', 'Mild fatigue'],
      causes: ['Viral infection', 'Close contact with an infected person', 'Exposure to contaminated surfaces'],
      riskFactors: ['Frequent travel', 'Crowded indoor spaces', 'Weakened immune defenses'],
      prevention: ['Wash hands regularly', 'Avoid close contact when sick', 'Maintain good ventilation'],
      diagnosis: ['Clinical assessment based on symptoms', 'Consider testing when severe or unusual symptoms are present'],
      treatments: ['Rest and fluids', 'Symptom relief for congestion or sore throat', 'Medical review if symptoms worsen'],
      homeCare: ['Hydration', 'Warm saltwater gargles', 'Steam inhalation'],
      lifestyle: ['Sleep well', 'Avoid smoking', 'Reduce stress'],
      complications: ['Secondary sinus infection', 'Worsening asthma symptoms'],
      prognosis: 'Most people recover fully within 7 to 10 days, though cough may linger longer.',
      faq: [{ question: 'Is a cold the same as flu?', answer: 'No. Influenza usually causes more severe body aches, fever, and fatigue than a common cold.' }],
      references: ['CDC respiratory health guidelines', 'WHO acute respiratory infection resources']
    },
    relatedDiseases: ['Influenza', 'COVID-19', 'Asthma'],
    lastReviewed: '2026-01-15'
  },
  {
    id: 2,
    slug: 'influenza',
    name: 'Influenza',
    category: 'Respiratory',
    definition: 'Influenza is a contagious respiratory illness caused by influenza viruses that can lead to fever, aches, and fatigue.',
    aliases: ['Flu'],
    tags: ['virus', 'flu', 'seasonal'],
    sections: {
      overview: 'Influenza can range from mild to severe and may lead to complications in older adults or people with chronic conditions.',
      definition: 'It is caused by influenza A or B viruses and spreads mainly through respiratory droplets.',
      symptoms: ['High fever', 'Muscle aches', 'Headache', 'Cough', 'Fatigue'],
      causes: ['Influenza virus exposure', 'Close contact with infected persons'],
      riskFactors: ['Age over 65', 'Pregnancy', 'Chronic health conditions'],
      prevention: ['Vaccination', 'Good hand hygiene', 'Staying home when sick'],
      diagnosis: ['Clinical evaluation', 'Rapid influenza test when needed'],
      treatments: ['Rest', 'Fluids', 'Antiviral medications in selected cases'],
      homeCare: ['Hydration', 'Warm liquids', 'Rest'],
      lifestyle: ['Balanced diet', 'Regular sleep', 'Avoid strenuous activity while sick'],
      complications: ['Pneumonia', 'Dehydration', 'Exacerbation of chronic disease'],
      prognosis: 'Most people recover within one to two weeks, though fatigue may last longer.',
      faq: [{ question: 'How can flu be prevented?', answer: 'Annual vaccination and routine hand hygiene reduce risk.' }],
      references: ['WHO influenza factsheet', 'CDC influenza prevention']
    },
    relatedDiseases: ['Common Cold', 'COVID-19', 'Pneumonia'],
    lastReviewed: '2026-02-10'
  },
  {
    id: 3,
    slug: 'covid-19',
    name: 'COVID-19',
    category: 'Infectious Diseases',
    definition: 'COVID-19 is an infectious disease caused by the SARS-CoV-2 virus that can affect the lungs and other organs.',
    aliases: ['Coronavirus disease 2019'],
    tags: ['viral', 'pandemic', 'respiratory'],
    sections: {
      overview: 'COVID-19 can present with mild symptoms or progress to severe illness, especially in higher-risk populations.',
      definition: 'The disease is caused by the SARS-CoV-2 virus and primarily spreads through close contact and respiratory particles.',
      symptoms: ['Fever', 'Cough', 'Shortness of breath', 'Fatigue', 'Loss of taste or smell'],
      causes: ['SARS-CoV-2 infection', 'Close contact with infected individuals'],
      riskFactors: ['Older age', 'Heart disease', 'Weakened immunity'],
      prevention: ['Vaccination', 'Masking in high-risk settings', 'Hand hygiene'],
      diagnosis: ['Clinical evaluation', 'PCR or antigen testing'],
      treatments: ['Supportive care', 'Antivirals in selected cases', 'Hospital care for severe illness'],
      homeCare: ['Rest', 'Fluids', 'Monitoring symptoms'],
      lifestyle: ['Good sleep', 'Avoid overexertion', 'Follow local public health guidance'],
      complications: ['Pneumonia', 'Long COVID', 'Blood clotting issues'],
      prognosis: 'Most cases recover with supportive care, while severe disease requires medical attention.',
      faq: [{ question: 'What is long COVID?', answer: 'Long COVID refers to persistent symptoms that continue after the acute phase of infection.' }],
      references: ['WHO COVID-19 overview', 'CDC COVID-19 guidance']
    },
    relatedDiseases: ['Influenza', 'Pneumonia', 'Asthma'],
    lastReviewed: '2026-03-01'
  },
  {
    id: 4,
    slug: 'diabetes',
    name: 'Diabetes',
    category: 'Endocrinology',
    definition: 'Diabetes is a metabolic condition that affects how the body handles glucose and blood sugar.',
    aliases: ['Diabetes mellitus'],
    tags: ['metabolic', 'blood sugar', 'chronic'],
    sections: {
      overview: 'Diabetes can interfere with energy regulation and may increase risk for complications over time.',
      definition: 'It is characterized by elevated blood sugar and may involve insulin resistance or insufficient insulin production.',
      symptoms: ['Frequent urination', 'Increased thirst', 'Fatigue', 'Blurred vision'],
      causes: ['Genetic predisposition', 'Lifestyle factors', 'Insulin resistance'],
      riskFactors: ['Family history', 'Obesity', 'Sedentary lifestyle'],
      prevention: ['Balanced diet', 'Regular activity', 'Routine medical screening'],
      diagnosis: ['Blood glucose tests', 'Hemoglobin A1c testing'],
      treatments: ['Lifestyle changes', 'Medication', 'Monitoring blood sugar'],
      homeCare: ['Meal planning', 'Regular movement', 'Medication adherence'],
      lifestyle: ['Healthy eating patterns', 'Stress management', 'Regular sleep'],
      complications: ['Retinopathy', 'Kidney damage', 'Nerve damage'],
      prognosis: 'With ongoing care, many people manage symptoms and reduce complications.',
      faq: [{ question: 'Can diabetes be prevented?', answer: 'Some risk can be reduced through healthy habits, but genetics also play a role.' }],
      references: ['American Diabetes Association', 'WHO diabetes facts']
    },
    relatedDiseases: ['Hypertension', 'Heart Attack', 'Kidney Stones'],
    lastReviewed: '2026-02-22'
  },
  {
    id: 5,
    slug: 'hypertension',
    name: 'Hypertension',
    category: 'Cardiology',
    definition: 'Hypertension is a long-term condition where blood pressure remains consistently above the normal range.',
    aliases: ['High blood pressure'],
    tags: ['cardiovascular', 'blood pressure', 'chronic'],
    sections: {
      overview: 'Hypertension often develops silently and increases cardiovascular risk over time.',
      definition: 'It can be influenced by genetics, diet, stress, and body weight.',
      symptoms: ['Headaches', 'Dizziness', 'Shortness of breath', 'Chest discomfort'],
      causes: ['High sodium intake', 'Stress', 'Family history'],
      riskFactors: ['Obesity', 'Smoking', 'Sedentary lifestyle'],
      prevention: ['Reduce salt intake', 'Exercise regularly', 'Manage stress'],
      diagnosis: ['Blood pressure monitoring', 'Regular checkups'],
      treatments: ['Lifestyle modification', 'Medication when indicated'],
      homeCare: ['Track readings', 'Limit alcohol', 'Rest'],
      lifestyle: ['Balanced diet', 'Regular movement', 'Adequate sleep'],
      complications: ['Stroke', 'Heart attack', 'Kidney disease'],
      prognosis: 'It can often be controlled effectively with consistent management.',
      faq: [{ question: 'Can high blood pressure be cured?', answer: 'It is usually managed rather than cured, but symptoms and risk may be controlled well.' }],
      references: ['WHO hypertension overview', 'American Heart Association']
    },
    relatedDiseases: ['Diabetes', 'Stroke', 'Heart Attack'],
    lastReviewed: '2026-01-08'
  },
  {
    id: 6,
    slug: 'migraine',
    name: 'Migraine',
    category: 'Neurology',
    definition: 'Migraine is a neurological condition characterized by recurring headache attacks that can significantly affect daily life.',
    aliases: ['Migraine headache'],
    tags: ['neurology', 'headache', 'pain'],
    sections: {
      overview: 'Migraine attacks may include throbbing pain, nausea, and sensitivity to light or sound.',
      definition: 'The condition is associated with changes in brain signaling and may be triggered by hormones, stress, or diet.',
      symptoms: ['Severe headache', 'Nausea', 'Light sensitivity', 'Visual disturbances'],
      causes: ['Genetic tendency', 'Hormonal changes', 'Stress or sleep changes'],
      riskFactors: ['Hormonal fluctuations', 'Poor sleep', 'Certain foods'],
      prevention: ['Track triggers', 'Consistent sleep', 'Stress management'],
      diagnosis: ['Clinical history', 'Symptom review'],
      treatments: ['Rest', 'Hydration', 'Medication when appropriate'],
      homeCare: ['Dim lights', 'Quiet room', 'Cold compress'],
      lifestyle: ['Regular meal timing', 'Hydration', 'Limit caffeine overuse'],
      complications: ['Chronic migraine', 'Reduced quality of life'],
      prognosis: 'Many people improve with trigger management and treatment plans.',
      faq: [{ question: 'What triggers migraines?', answer: 'Common triggers include stress, hormonal shifts, sleep disruption, and some foods.' }],
      references: ['American Academy of Neurology', 'Migraine Research Foundation']
    },
    relatedDiseases: ['Stroke', 'Anxiety', 'Insomnia'],
    lastReviewed: '2026-03-05'
  }
];

export const diseases: Disease[] = diseaseSeedData;

export const nutritionTips: NutritionTip[] = [
  { id: 1, title: 'Protein pacing', description: 'Spread protein across meals for better satiety and recovery.', tag: 'Recovery' },
  { id: 2, title: 'Colorful plates', description: 'Aim for at least 5 colors of produce in your daily meals.', tag: 'Habits' },
  { id: 3, title: 'Hydration reset', description: 'Begin the day with water and pair it with meals for steadier energy.', tag: 'Energy' }
];

export const workouts: WorkoutPlan[] = [
  { id: 1, title: 'Morning Mobility', duration: '15 min', intensity: 'Gentle', focus: 'Flexibility', steps: ['3 min breathing', '10 min mobility flow', '2 min stretch'] },
  { id: 2, title: 'Strength Builder', duration: '25 min', intensity: 'Moderate', focus: 'Muscle', steps: ['5 min warm-up', '15 min bodyweight circuit', '5 min cool down'] },
  { id: 3, title: 'Cardio Boost', duration: '20 min', intensity: 'Energetic', focus: 'Heart health', steps: ['5 min brisk walk', '10 min intervals', '5 min cool down'] }
];
