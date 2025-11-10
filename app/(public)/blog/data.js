// app/public/blog/data.js

import { articlesImage } from '@/assets/assets';

export const blogs = [
  {
    id: '1',
    slug: 'healthy-eating-tips',
    title: 'Healthy Eating Tips for Busy Professionals',
    description: 'Learn how to maintain a balanced diet even on a tight schedule.',
    category: 'Nutrition',
    date: '2025-11-10',
    author: 'Dr. Dimkpa',
    image: articlesImage.article1,
    content: `
      <p>Eating healthy doesn’t have to be complicated. Here are some tips:</p>
      <ul>
        <li>Meal prep your week in advance</li>
        <li>Include protein in every meal</li>
        <li>Hydrate consistently</li>
      </ul>
    `,
  },
  {
    id: '2',
    slug: 'morning-exercise-benefits',
    title: 'Benefits of Morning Exercise',
    description: 'Start your day right with simple morning exercises.',
    category: 'Fitness',
    date: '2025-11-09',
    author: 'Dr. Dimkpa',
    image: articlesImage.article2,
    content: `<p>Exercising in the morning boosts metabolism and improves focus throughout the day.</p>`,
  },
  {
    id: '3',
    slug: 'stress-management-tips',
    title: 'Top Stress Management Tips',
    description: 'Simple strategies to reduce stress and improve mental health.',
    category: 'Mental Health',
    date: '2025-11-08',
    author: 'Dr. Dimkpa',
    image: articlesImage.article3,
    content: `<p>Managing stress is essential for overall well-being. Here are some effective techniques:</p>
      <ul>
        <li>Practice mindfulness and meditation</li>
        <li>Exercise regularly</li>
        <li>Maintain a balanced work-life schedule</li>
      </ul>
    `,
  },
  {
    id: '4',
    slug: 'hydration-and-health',
    title: 'Hydration and Its Importance for Health',
    description: 'Why staying hydrated is crucial for your body and mind.',
    category: 'Nutrition',
    date: '2025-11-07',
    author: 'Dr. Dimkpa',
    image: articlesImage.article2,
    content: `<p>Proper hydration affects every system in your body. Drink water consistently and consider these tips:</p>
      <ul>
        <li>Start your day with a glass of water</li>
        <li>Keep a water bottle handy</li>
        <li>Include hydrating foods like fruits and vegetables</li>
      </ul>
    `,
  },
  {
    id: '5',
    slug: 'benefits-of-yoga',
    title: 'The Benefits of Daily Yoga Practice',
    description: 'Improve flexibility, strength, and mental clarity with yoga.',
    category: 'Fitness',
    date: '2025-11-06',
    author: 'Dr. Dimkpa',
    image: articlesImage.article1,
    content: `<p>Yoga is an excellent way to enhance both body and mind. Benefits include:</p>
      <ul>
        <li>Reduced stress and anxiety</li>
        <li>Improved posture and flexibility</li>
        <li>Better sleep quality</li>
      </ul>
    `,
  },
  {
    id: '6',
    slug: 'mental-health-awareness',
    title: 'Mental Health Awareness for Busy People',
    description: 'Simple practices to maintain mental well-being during a hectic schedule.',
    category: 'Mental Health',
    date: '2025-11-05',
    author: 'Dr. Dimkpa',
    image: articlesImage.article2,
    content: `<p>Even a busy lifestyle can include mental health care. Tips include:</p>
      <ul>
        <li>Take short breaks throughout the day</li>
        <li>Practice journaling</li>
        <li>Stay connected with friends and family</li>
      </ul>
    `,
  },
  {
    id: '7',
    slug: 'balanced-diet-for-weight-loss',
    title: 'Balanced Diet for Sustainable Weight Loss',
    description: 'How to create a balanced diet plan for long-term health.',
    category: 'Nutrition',
    date: '2025-11-04',
    author: 'Dr. Dimkpa',
    image: articlesImage.article3,
    content: `<p>A balanced diet is key to healthy weight management. Consider the following:</p>
      <ul>
        <li>Include lean proteins, vegetables, and whole grains</li>
        <li>Avoid excessive sugar and processed foods</li>
        <li>Practice portion control</li>
      </ul>
    `,
  },
];
