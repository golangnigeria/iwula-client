'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Video, MessageCircle, CalendarCheck } from 'lucide-react'
import ConsultationCard from './ConsultationCard'
import BookingModal from './BookingModal'

export default function Consultations() {
  const router = useRouter()
  const user = true // Replace with useSelector(state => state.user?.currentUser)
  const [selected, setSelected] = useState(null)

  const handleBook = (type, price) => {
    if (!user) return router.push('/login')
    setSelected({ type, price })
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-green-600 bg-clip-text text-transparent">
          Consult with Dr. Iwula
        </h1>
        <p className="text-slate-600 mt-3 text-sm sm:text-base">
          Choose your preferred consultation method and connect directly with Dr. Iwula.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        <ConsultationCard
          color="amber"
          Icon={Video}
          title="Video Consultation"
          price={30000}
          description="Meet face-to-face via video from the comfort of your home."
          onBook={() => handleBook('Video Consultation', 30000)}
        />
        <ConsultationCard
          color="blue"
          Icon={MessageCircle}
          title="Chat Consultation"
          price={20000}
          description="Send messages directly for questions, follow-ups, or quick advice."
          onBook={() => handleBook('Chat Consultation', 20000)}
        />
        <ConsultationCard
          color="green"
          Icon={CalendarCheck}
          title="In-Person Visit"
          price={40000}
          description="Book a physical visit to the clinic for a detailed examination."
          onBook={() => handleBook('In-Person Visit', 40000)}
        />
      </div>

      {selected && (
        <BookingModal
          data={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
