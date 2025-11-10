// app/public/blog/[slug]/page.jsx
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogs } from '../data';

export default function BlogPostPage() {
  const params = useParams();
  const { slug } = params;

  // Find the blog with the matching slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen p-6 md:p-12 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-700 text-lg">Blog post not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/public/blog"
        className="text-blue-600 font-medium hover:underline mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      {/* Blog Header */}
      <div className="mb-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-2">
          {blog.category}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm">
          {blog.date} | {blog.author}
        </p>
      </div>

      {/* Featured Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 md:h-96 object-cover rounded mb-8 shadow-md"
      />

      {/* Blog Content */}
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </main>
  );
}
