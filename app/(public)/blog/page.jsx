// app/public/blog/page.jsx
import Link from 'next/link';
import { blogs } from './data';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Health Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Category Badge */}
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-3">
                {blog.category}
              </span>

              {/* Blog Title */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {blog.title}
              </h2>

              {/* Blog Description */}
              <p className="text-gray-600 mb-6">
                {blog.description}
              </p>

              {/* Footer: Date + Read More */}
              <div className="mt-auto flex items-center justify-between">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <Link
                  href={`/public/blog/${blog.slug}`}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (non-functional placeholder) */}
      <div className="flex justify-center mt-12 space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
          Previous
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
          Next
        </button>
      </div>
    </main>
  );
}
