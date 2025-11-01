'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle, ArrowRightIcon, Clock } from 'lucide-react'
import { coursesImage  } from '@/assets/assets'
import Title from './Title'

const courses = [
  {
    id: 1,
    title: 'Nutrition & Healthy Living',
    description: 'Learn how to maintain a balanced diet and improve your health naturally.',
    image: coursesImage.course1,
    instructor: 'Dr. Iwula',
    duration: '4 Weeks',
    level: 'Beginner',
    price: '₦15,000',
  },
  {
    id: 2,
    title: 'Mental Wellness Masterclass',
    description: 'Practical techniques and medical advice for managing stress and anxiety.',
    image: coursesImage.course2,
    instructor: 'Dr. Jane Obi',
    duration: '6 Weeks',
    level: 'Intermediate',
    price: '₦25,000',
  },
  {
    id: 3,
    title: 'Heart Health Fundamentals',
    description: 'Understand cardiovascular care and how to prevent common heart conditions.',
    image: coursesImage.course3,
    instructor: 'Dr. Iwula',
    duration: '5 Weeks',
    level: 'All Levels',
    price: '₦20,000',
  },
]

const LatestCourses = () => {
  return (
    <section className="px-6 my-24 max-w-6xl mx-auto">
      <Title
        title="Latest Courses"
        description="Learn from certified medical experts and improve your health knowledge at your own pace."
        href="/courses"
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-100"
          >
            {/* === Thumbnail === */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm font-medium bg-green-600/80 px-3 py-1.5 rounded-full">
                <PlayCircle size={16} /> {course.duration}
              </div>
            </div>

            {/* === Content === */}
            <div className="p-5 flex flex-col justify-between h-56">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 line-clamp-2 group-hover:text-green-600 transition">
                  {course.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                  <p>👨‍⚕️ {course.instructor}</p>
                  <p>{course.level}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-green-600 font-semibold text-base">{course.price}</p>
                <Link
                  href={`/courses/${course.id}`}
                  className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 transition"
                >
                  View Course
                  <ArrowRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestCourses
