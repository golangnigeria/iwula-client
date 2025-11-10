'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function CourseLearningPage() {
  const { id } = useParams()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const course = {
    id,
    title: 'Healthy Nutrition for Busy People',
    lessons: [
      { id: 1, title: 'Welcome & Course Overview', duration: '05:30', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 2, title: 'Understanding Nutrition Basics', duration: '08:45', videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
      { id: 3, title: 'Meal Planning for Busy Schedules', duration: '10:10', videoUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
      { id: 4, title: 'Healthy Snacks & Hydration Tips', duration: '06:25', videoUrl: 'https://www.youtube.com/embed/5NV6Rdv1a3I' },
    ],
  }

  const [currentLesson, setCurrentLesson] = useState(course.lessons[0])
  const [completedLessons, setCompletedLessons] = useState([])

  const markCompleted = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const handleNext = () => {
    const currentIndex = course.lessons.findIndex((l) => l.id === currentLesson.id)
    if (currentIndex < course.lessons.length - 1) {
      const nextLesson = course.lessons[currentIndex + 1]
      setCurrentLesson(nextLesson)
      markCompleted(currentLesson.id)
    }
  }

  const handlePrevious = () => {
    const currentIndex = course.lessons.findIndex((l) => l.id === currentLesson.id)
    if (currentIndex > 0) {
      const prevLesson = course.lessons[currentIndex - 1]
      setCurrentLesson(prevLesson)
    }
  }

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar for Desktop */}
      <aside className={`bg-white border-r border-gray-200 w-80 flex-shrink-0 overflow-y-auto h-screen fixed md:relative z-20 transform md:translate-x-0 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-5 border-b flex items-center justify-between md:hidden">
          <h2 className="text-lg font-bold text-gray-800">Lessons</h2>
          <button onClick={() => setSidebarOpen(false)}><X /></button>
        </div>
        <div className="p-5 border-b hidden md:block">
          <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{course.lessons.length} lessons</p>
        </div>
        <ul className="divide-y divide-gray-100">
          {course.lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={`p-4 cursor-pointer flex justify-between items-center hover:bg-blue-50 ${
                currentLesson.id === lesson.id ? 'bg-blue-100' : ''
              }`}
              onClick={() => setCurrentLesson(lesson)}
            >
              <div>
                <p className="text-sm font-medium text-gray-700">{lesson.title}</p>
                <p className="text-xs text-gray-500">{lesson.duration}</p>
              </div>
              {completedLessons.includes(lesson.id) && (
                <span className="text-green-500 text-xs font-semibold">✓</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-80">
        {/* Top bar for mobile */}
        <div className="flex items-center justify-between bg-white p-4 shadow md:hidden sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(true)} className="p-2 bg-gray-100 rounded-lg"><Menu /></button>
          <h1 className="text-lg font-semibold text-gray-800">{course.title}</h1>
          <button onClick={() => router.push(`/courses/${id}/enrolled`)} className="text-sm text-blue-600">Exit</button>
        </div>

        {/* Video Player */}
        <div className="relative w-full md:h-[60vh] h-[200px] bg-black">
          <iframe
            key={currentLesson.videoUrl}
            src={currentLesson.videoUrl}
            title={currentLesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Lesson Info */}
        <div className="bg-white p-6 md:p-8 flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{currentLesson.title}</h2>
          <p className="text-gray-600">Duration: {currentLesson.duration}</p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={course.lessons[0].id === currentLesson.id}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 w-full sm:w-auto"
            >
              ← Previous
            </button>

            <button
              onClick={() => markCompleted(currentLesson.id)}
              className={`px-4 py-2 rounded-lg w-full sm:w-auto ${
                completedLessons.includes(currentLesson.id)
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {completedLessons.includes(currentLesson.id) ? 'Completed ✓' : 'Mark as Complete'}
            </button>

            <button
              onClick={handleNext}
              disabled={course.lessons[course.lessons.length - 1].id === currentLesson.id}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 w-full sm:w-auto"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </main>
  )
}
