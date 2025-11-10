'use client'
import Link from 'next/link'
import { coursesImage } from '@/assets/assets'
import Image from 'next/image'

const courses = [
  {
    id: '1',
    title: 'Healthy Nutrition for Busy People',
    description: 'Learn how to plan balanced meals even with a tight schedule.',
    image: coursesImage.course1,
    price: 10000,
    category: 'Nutrition',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'Stress Management & Mental Health',
    description: 'Discover practical strategies to reduce stress and improve focus.',
    image: coursesImage.course2,
    price: 15000,
    category: 'Mental Health',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Fitness Fundamentals for Everyday Life',
    description: 'A holistic approach to staying fit without the gym.',
    image: coursesImage.course3,
    price: 12000,
    category: 'Fitness',
    level: 'Beginner',
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Available Courses
        </h1>
        <p className="text-gray-600 text-lg">
          Learn from Dr. Iwula — health, nutrition, and wellness courses designed for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 md:h-64 lg:h-72">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-60 md:h-64">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
              </div>

              <div>
                <p className="text-green-600 font-bold text-lg mb-3">
                  ₦{course.price.toLocaleString()}
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full inline-block text-center bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
