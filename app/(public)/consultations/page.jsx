'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { CalendarCheck, MessageCircle, Video, CheckCircle2 } from 'lucide-react'

export default function Consultations() {
  const router = useRouter()
  const user = true /* useSelector((state) => state.user?.currentUser) */
  const [selectedType, setSelectedType] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBook = (type) => {
    if (!user) {
      router.push('/login')
      return
    }
    setSelectedType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedType(null)
  }

  return (
    <section className="max-w-6xl mx-auto px-6 my-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-slate-700 to-green-500 bg-clip-text text-transparent">
          Book a Consultation
        </h1>
        <p className="text-slate-600 mt-3 text-sm sm:text-base">
          Choose a convenient way to consult with Dr. Iwula — video, chat, or in-person.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        <ConsultationCard
          color="green"
          Icon={Video}
          title="Video Consultation"
          price={30000}
          description="Speak face-to-face with Dr. Iwula from anywhere."
          onBook={() => handleBook({ type: 'Video Consultation', price: 30000 })}
        />

        <ConsultationCard
          color="blue"
          Icon={MessageCircle}
          title="Chat Consultation"
          price={20000}
          description="Text directly with Dr. Iwula for quick questions or follow-ups."
          onBook={() => handleBook({ type: 'Chat Consultation', price: 20000 })}
        />

        <ConsultationCard
          color="orange"
          Icon={CalendarCheck}
          title="In-Person Visit"
          price={40000}
          description="Visit Dr. Iwula’s clinic for physical checkups."
          onBook={() => handleBook({ type: 'In-Person Visit', price: 40000 })}
        />
      </div>

      {isModalOpen && <BookingModal data={selectedType} onClose={closeModal} />}
    </section>
  )
}

/* ---------- Consultation Card ---------- */
const ConsultationCard = ({ color, Icon, title, description, price, onBook }) => (
  <div className={`flex flex-col items-center bg-${color}-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition`}>
    <Icon className={`w-10 h-10 text-${color}-600 mb-4`} />
    <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
    <p className="text-sm text-slate-600 mt-2 text-center">{description}</p>
    <p className="mt-4 font-medium text-slate-700">₦{price.toLocaleString()}</p>
    <button
      onClick={onBook}
      className={`mt-5 bg-${color}-600 text-white py-2 px-6 rounded-md hover:bg-${color}-700 transition`}
    >
      Book Now
    </button>
  </div>
)

/* ---------- Booking Modal ---------- */
const BookingModal = ({ data, onClose }) => {
  const [form, setForm] = useState({ fullName: '', email: '', date: '', note: '' })
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [bookingID, setBookingID] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePayment = async () => {
    setLoading(true)
    setTimeout(() => {
      const id = `VID-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
      setBookingID(id)
      setStep(3)
      setLoading(false)
    }, 2000)
  }

  // ✅ Automated WhatsApp message with dynamic booking info
  const message = encodeURIComponent(
    `Hello Dr. Iwula 👋,\n\nMy name is ${form.fullName}.\nI just booked a ${data?.type} scheduled for ${form.date}.\nBooking ID: ${bookingID || 'N/A'}.\n\nPlease confirm my appointment.\n\nThank you!`
  )
  const doctorWhatsApp = `https://wa.me/2347014704943?text=${message}`

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-slate-500 hover:text-slate-700">
          ✕
        </button>

        {/* STEP 1: Form */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">{data.type}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <textarea
                name="note"
                placeholder="Additional Notes (Optional)"
                value={form.note}
                onChange={handleChange}
                rows="3"
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button type="submit" className="w-full bg-green-600 text-white py-2.5 rounded-md hover:bg-green-700 transition">
                Proceed to Payment
              </button>
            </form>
          </>
        )}

        {/* STEP 2: Payment */}
        {step === 2 && (
          <div className="flex flex-col items-center text-center">
            <p className="text-slate-700 mb-4">
              You are about to pay for <span className="font-semibold">{data.type}</span>.
            </p>
            <p className="text-lg font-semibold mb-6 text-slate-800">
              ₦{data.price.toLocaleString()}
            </p>
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-green-600 text-white py-2.5 rounded-md hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? 'Processing Payment...' : 'Pay Now'}
            </button>
            <button onClick={() => setStep(1)} className="mt-3 text-sm text-slate-500 hover:text-slate-700">
              ← Go Back
            </button>
          </div>
        )}

        {/* STEP 3: Success Screen */}
        {step === 3 && (
          <div className="text-center flex flex-col items-center">
            <CheckCircle2 className="text-green-500 w-14 h-14 mb-3" />
            <h2 className="text-xl font-semibold text-slate-800 mb-2">Booking Confirmed</h2>
            <p className="text-sm text-slate-600 mb-4">Your consultation is confirmed. Here’s your booking info:</p>

            <div className="bg-slate-50 rounded-lg p-4 text-left w-full mb-4">
              <p className="text-sm"><strong>Booking ID:</strong> {bookingID}</p>
              <p className="text-sm"><strong>Type:</strong> {data.type}</p>
              <p className="text-sm"><strong>Date:</strong> {form.date}</p>
              <p className="text-sm"><strong>Email:</strong> {form.email}</p>
            </div>

            <a
              href={doctorWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-2.5 px-6 rounded-md hover:bg-green-700 transition"
            >
              Message Doctor on WhatsApp
            </a>

            <button onClick={onClose} className="mt-4 text-sm text-slate-500 hover:text-slate-700">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
