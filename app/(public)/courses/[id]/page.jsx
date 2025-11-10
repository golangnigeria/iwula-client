'use client'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { coursesImage } from '@/assets/assets'


const courses = [
  {
    id: '1',
    title: 'Healthy Nutrition for Busy People',
    description:
      'This course teaches you how to plan and maintain a balanced diet even with a tight schedule. You will learn meal prep strategies, nutrition basics, and daily wellness habits.',
    image: coursesImage.course1,
    price: 10000,
    category: 'Nutrition',
    level: 'Beginner',
    duration: '3 Weeks',
  },
  {
    id: '2',
    title: 'Stress Management & Mental Health',
    description:
      'Understand how stress affects your body and mind. Learn evidence-based techniques to stay calm, focused, and emotionally balanced in your daily life.',
    image: coursesImage.course2,
    price: 15000,
    category: 'Mental Health',
    level: 'Intermediate',
    duration: '4 Weeks',
  },
  {
    id: '3',
    title: 'Fitness Fundamentals for Everyday Life',
    description:
      'A holistic fitness program designed for people of all ages. Learn how to stay active, improve posture, and build a routine that fits your lifestyle.',
    image: coursesImage.course3,
    price: 12000,
    category: 'Fitness',
    level: 'Beginner',
    duration: '2 Weeks',
  },
]

export default function CourseDetailsPage() {
  const { id } = useParams()
  const router = useRouter()
  const course = courses.find((c) => c.id === id)

  if (!course) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Course Not Found</h2>
        <button
          onClick={() => router.push('/courses')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Courses
        </button>
      </main>
    )
  }

  const handleEnroll = () => {
    alert(`Redirecting to payment for ${course.title}...`)
    setTimeout(() => {
      router.push(`/courses/${course.id}/enrolled`)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{course.title}</h1>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {course.category}
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              {course.level}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {course.duration}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">{course.description}</p>

          <p className="text-2xl md:text-3xl font-bold text-green-600">
            ₦{course.price.toLocaleString()}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEnroll}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Enroll Now
            </button>
            <button
              onClick={() => router.push('/courses')}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-100 transition font-semibold"
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
