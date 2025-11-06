'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { articlesImage } from '@/assets/assets'
import Title from './Title'

// Example article data — can later come from API or database
const articles = [
  {
    id: 1,
    title: '10 Tips for Maintaining a Healthy Heart',
    excerpt:
      'Discover practical ways to keep your heart strong with balanced nutrition and active habits.',
    image: articlesImage.article1,
    author: 'Dr. Iwula',
    date: 'Oct 28, 2025',
    category: 'Cardiology',
  },
  {
    id: 2,
    title: 'The Role of Sleep in Mental Health',
    excerpt:
      'Learn how quality rest can improve mood, focus, and long-term mental wellness.',
    image: articlesImage.article3,
    author: 'Dr. Jane Obi',
    date: 'Oct 24, 2025',
    category: 'Mental Health',
  },
  {
    id: 3,
    title: 'Managing Stress Naturally — Doctor’s Guide',
    excerpt:
      'Explore holistic techniques and medical advice for handling stress effectively.',
    image: articlesImage.article2,
    author: 'Dr. Iwula',
    date: 'Oct 22, 2025',
    category: 'Wellness',
  },
]

const LatestArticles = () => {
  return (
    <section className="px-6 my-14 max-w-6xl mx-auto">
      <Title
        title="Latest Health Articles"
        description="Stay informed with the latest medical insights, research, and wellness tips curated by professionals."
        href="/blog"
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-100"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-48">
              <div>
                <span className="inline-block text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 line-clamp-2 group-hover:text-green-600 transition">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <p>
                  By <span className="font-medium text-slate-700">{article.author}</span>
                </p>
                <p>{article.date}</p>
              </div>
            </div>

            <div className="flex items-center justify-between px-5 pb-4">
              <Link
                href={`/blog/${article.id}`}
                className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 transition"
              >
                Read More
                <ArrowRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestArticles
