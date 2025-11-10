'use client'
import { useParams, useRouter } from 'next/navigation'

export default function EnrolledCoursePage() {
  const { id } = useParams()
  const router = useRouter()

  const courseTitles = {
    1: 'Healthy Nutrition for Busy People',
    2: 'Stress Management & Mental Health',
    3: 'Fitness Fundamentals for Everyday Life',
  }

  const title = courseTitles[id] || 'Your Course'

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <div className="mb-6">
          <img
            src="/images/success.svg"
            alt="Enrollment Successful"
            className="mx-auto w-32 h-32 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Enrollment Successful 🎉
          </h1>
          <p className="text-gray-600 mb-4">
            You have successfully enrolled in:
          </p>
          <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
        </div>

        <p className="text-gray-700 mb-6">
          You can now access the course materials, lessons, and videos anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => router.push(`/courses/${id}/learn`)}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Course
          </button>
          <button
            onClick={() => router.push('/courses')}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Back to Courses
          </button>
        </div>
      </div>
    </main>
  )
}
