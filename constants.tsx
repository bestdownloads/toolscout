
import React from 'react';
import { Product, ComparisonData, ReviewArticle } from './types';

export const TOP_VPNS: Product[] = [
  { id: '1', name: 'PureVPN', category: 'VPN', rating: 4.9, description: 'Best overall security', score: '9.9/10', image: '', affiliateUrl: '#' },
  { id: '2', name: 'Lumos VPN', category: 'VPN', rating: 4.8, description: 'Fastest connection', score: '9.6/10', image: '', affiliateUrl: '#' },
  { id: '3', name: 'NordVPN', category: 'VPN', rating: 4.7, description: 'Secure and reliable', score: '9.2/10', image: '', affiliateUrl: '#' },
  { id: '4', name: 'ExpressVPN', category: 'VPN', rating: 4.5, description: 'Global coverage', score: '8.9/10', image: '', affiliateUrl: '#' },
];

export const BROWSER_COMPARISON: ComparisonData[] = [
  {
    criteria: 'Privacy Score',
    products: [
      { name: 'Opera GX', value: 'High', status: 'high' },
      { name: 'Avast Secure', value: 'Ultra', status: 'high' },
      { name: 'AVG Browser', value: 'Good', status: 'medium' }
    ]
  },
  {
    criteria: 'Gaming Mode',
    products: [
      { name: 'Opera GX', value: 'BUILT-IN', status: 'built-in' },
      { name: 'Avast Secure', value: 'NONE', status: 'none' },
      { name: 'AVG Browser', value: 'NONE', status: 'none' }
    ]
  },
  {
    criteria: 'Load Speed',
    products: [
      { name: 'Opera GX', value: 'FASTEST', status: 'high' },
      { name: 'Avast Secure', value: 'STABLE', status: 'medium' },
      { name: 'AVG Browser', value: 'FAST', status: 'medium' }
    ]
  },
  {
    criteria: 'Native VPN',
    products: [
      { name: 'Opera GX', value: 'Free Unlimited', status: 'built-in' },
      { name: 'Avast Secure', value: 'Paid Add-on', status: 'add-on' },
      { name: 'AVG Browser', value: 'X', status: 'none' }
    ]
  }
];

export const FEATURED_AI: Product[] = [
  {
    id: 'ai-1',
    name: 'ChatGPT Plus',
    category: 'AI',
    rating: 5,
    description: 'The industry standard for LLMs. Unrivaled for coding assistance, content drafting, and data analysis.',
    image: 'https://picsum.photos/seed/chatgpt/800/450',
    affiliateUrl: '#',
    tag: 'GOLD CHOICE',
    score: 'Free Tier Available'
  },
  {
    id: 'ai-2',
    name: 'Midjourney',
    category: 'AI',
    rating: 5,
    description: 'High-fidelity image generation that has redefined digital artistry. Perfect for rapid prototyping.',
    image: 'https://picsum.photos/seed/midjourney/800/450',
    affiliateUrl: '#',
    tag: 'ART TECH',
    score: 'Paid Only'
  },
  {
    id: 'ai-3',
    name: 'Notion AI',
    category: 'AI',
    rating: 4.5,
    description: 'Integrated intelligence directly within your workspace. Summarizes meetings and improves writing.',
    image: 'https://picsum.photos/seed/notion/800/450',
    affiliateUrl: '#',
    tag: 'WORKFORCE READY',
    score: 'Free Trial'
  },
  {
    id: 'ai-4',
    name: 'Jasper',
    category: 'AI',
    rating: 4.8,
    description: 'Professional marketing copy tool designed for brands. Maintains tone of voice across campaigns.',
    image: 'https://picsum.photos/seed/jasper/800/450',
    affiliateUrl: '#',
    tag: 'BUSINESS FOCUS',
    score: 'Business Focus'
  }
];

export const BROWSER_ARTICLES: ReviewArticle[] = [
  {
    id: 'opera-gx-2026',
    title: 'Opera GX Review: Is It Still the Best Gaming Browser in 2026?',
    subtitle: 'We test the new GX Lightspeed engine and resource limiters in high-intensity scenarios.',
    author: 'Tech Analyst Eric',
    date: 'Jan 15, 2026',
    readTime: '15 min read',
    category: 'Browsers',
    image: 'https://picsum.photos/seed/operagx/1200/600',
    content: `Opera GX has redefined what a browser can do for gamers. In 2026, with the introduction of the GX Lightspeed engine, it has successfully eliminated the browser-lag that plagued streamers and pro-players for years. 

The RAM and CPU limiters are now dynamic, adjusting based on the game's demand. Our tests show a 15% improvement in frame rates when running Opera GX in the background compared to traditional browsers. The integrated Discord and Twitch bars have also seen significant UI upgrades, making multitasking smoother than ever.`
  },
  {
    id: 'avast-browser-2026',
    title: 'Avast Secure Browser 2026: Military-Grade Privacy for Everyone',
    subtitle: 'Exploring the new Ironclad Sandbox mode and built-in decentralized VPN features.',
    author: 'Sarah Chen',
    date: 'Feb 02, 2026',
    readTime: '12 min read',
    category: 'Privacy',
    image: 'https://picsum.photos/seed/avast/1200/600',
    content: `Privacy is no longer a luxury; it's a necessity. Avast Secure Browser's 2026 edition introduces the 'Ironclad Sandbox' mode. When active, your banking and sensitive sessions are completely isolated from the rest of your system. 

It prevents all forms of screen scraping and keylogging. The browser also includes an automatic decentralized VPN (dVPN) that routes your traffic through high-speed nodes globally, ensuring that even your ISP cannot see your activity logs. This is truly the gold standard for secure browsing.`
  },
  {
    id: 'avg-browser-2026',
    title: 'AVG Secure Browser: The Stealth King of 2026',
    subtitle: 'Performance meets invisible security in the latest AVG release.',
    author: 'Mark Sterling',
    date: 'Mar 10, 2026',
    readTime: '10 min read',
    category: 'Security',
    image: 'https://picsum.photos/seed/avg/1200/600',
    content: `AVG has always been about "invisible" protection. Their 2026 Secure Browser continues this legacy with a footprint that is 30% smaller than Chromium. 

The 'Stealth Mode' is now the default, automatically blocking over 2,500 tracking scripts out of the box. Our speed tests show it is particularly efficient on older hardware, breathing new life into laptops that might otherwise struggle with modern web applications. If you want speed without sacrificing security, AVG is your top choice.`
  }
];

export const LATEST_ARTICLE: ReviewArticle = {
  id: 'art-1',
  title: 'The Rise of Local LLMs: Why Privacy is the Future of AI',
  subtitle: 'As centralized AI models continue to dominate, a quiet revolution is taking place on the edge.',
  author: 'Tech Analyst Eric',
  date: 'Oct 24, 2024',
  readTime: '12 min read',
  category: 'AI Trends',
  image: 'https://picsum.photos/seed/local-llm/1200/600',
  content: `As centralized AI models like GPT-4 continue to dominate the headlines, a quiet revolution is taking place on the edge. Local Large Language Models (LLMs) are no longer just toys for researchers; they are becoming essential tools for developers, enterprises, and privacy-conscious users.

The shift toward local computing is driven by three core pillars: Latency, Cost, and Privacy. In this guide, we'll explore why running your own AI might be the smartest move you make this year.`
};
