import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'vitacare-api' });
});

app.get('/api/articles', (_req, res) => {
  res.json([
    {
      id: 1,
      slug: 'heart-healthy-routine',
      title: 'Build a Heart-Healthy Daily Routine',
      category: 'Wellness',
      excerpt: 'Small habits like mindful breathing and hydration can meaningfully improve cardiovascular health.'
    },
    {
      id: 2,
      slug: 'gut-health-essentials',
      title: 'Gut Health Essentials for Better Energy',
      category: 'Nutrition',
      excerpt: 'Fiber, hydration, and fermented foods can support a calmer, more resilient digestive system.'
    }
  ]);
});

app.get('/api/diseases', (_req, res) => {
  res.json([
    { id: 1, name: 'Type 2 Diabetes', description: 'A metabolic condition affecting blood sugar regulation.' },
    { id: 2, name: 'Hypertension', description: 'Elevated blood pressure that increases cardiovascular risk.' }
  ]);
});

app.get('/api/nutrition', (_req, res) => {
  res.json([{ id: 1, title: 'Protein pacing', description: 'Spread protein across meals for better satiety.' }]);
});

app.get('/api/fitness', (_req, res) => {
  res.json([{ id: 1, title: 'Morning Mobility', focus: 'Flexibility' }]);
});

app.listen(port, () => {
  console.log(`VitaCare API listening on port ${port}`);
});
