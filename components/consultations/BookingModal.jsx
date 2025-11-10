'use client'
import React, { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function BookingModal({ data, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    date: '',
    note: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [bookingId, setBookingId] = useState('') // 🆕 for booking ID

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 🧩 Generate a temporary booking ID (simulate backend)
    const tempId = 'BK-' + Date.now().toString().slice(-6) + '-' + Math.random().toString(36).substr(2, 4).toUpperCase()
    setBookingId(tempId)

    // TODO: Replace this with actual backend API call later
    // e.g. const response = await fetch('/api/book', { method: 'POST', body: JSON.stringify(form) });

    setSubmitted(true)
  }

  const message = encodeURIComponent(
    `Hello Dr. Iwula 👋,\n\nMy name is ${form.fullName}.\nI’d like to confirm my ${data.type} on ${form.date}.\n\nEmail: ${form.email}\nBooking ID: ${bookingId}\nNotes: ${form.note || 'N/A'}`
  )

  const whatsapp = `https://wa.me/2347014704943?text=${message}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 w-full max-w-md shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          aria-label="Close booking modal"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
              {data.type}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent rounded-md p-3 text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent rounded-md p-3 text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent rounded-md p-3 text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <textarea
                name="note"
                placeholder="Additional Notes (Optional)"
                value={form.note}
                onChange={handleChange}
                rows="3"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent rounded-md p-3 text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-md transition"
              >
                Confirm Booking
              </button>
            </form>
          </>
        ) : (
          <div className="text-center flex flex-col items-center">
            <CheckCircle2 className="text-green-500 w-14 h-14 mb-3" />
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Booking Submitted
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Your booking has been recorded successfully.
            </p>

            {/* 🆕 Booking ID Display */}
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md mb-4">
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Booking ID:
              </span>
              <p className="text-green-600 dark:text-green-400 font-semibold text-sm">
                {bookingId}
              </p>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Click below to message Dr. Iwula directly.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition"
            >
              Message on WhatsApp
            </a>

            <button
              onClick={onClose}
              className="mt-4 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
