export interface UserProfile {
  id: string;
  email: string;
  role: 'admin' | 'viewer';
}

export interface ContentEntry {
  id: string;
  title: string;
  type: 'article' | 'disease' | 'nutrition' | 'fitness';
  body: string;
}
