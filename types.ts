
export interface Product {
  id: string;
  name: string;
  category: 'AI' | 'Browser' | 'VPN' | 'Game';
  rating: number;
  description: string;
  image: string;
  affiliateUrl: string;
  tag?: string;
  score?: string;
  pros?: string[];
}

export interface ComparisonData {
  criteria: string;
  products: {
    name: string;
    value: string;
    status: 'high' | 'medium' | 'low' | 'none' | 'built-in' | 'add-on';
  }[];
}

export interface ReviewArticle {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  category: string;
}
