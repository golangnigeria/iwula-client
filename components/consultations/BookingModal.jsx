'use client'
import React, { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function BookingModal({ data, onClose }) {
  const [form, setForm] = useState({ fullName: '', email: '', date: '', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const message = encodeURIComponent(
    `Hello Dr. Iwula 👋,\n\nMy name is ${form.fullName}.\nI’d like to confirm my ${data.type} on ${form.date}.\n\nEmail: ${form.email}\nNotes: ${form.note || 'N/A'}`
  )
  const whatsapp = `https://wa.me/2347014704943?text=${message}`

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">{data.type}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              />
              <textarea
                name="note"
                placeholder="Additional Notes (Optional)"
                value={form.note}
                onChange={handleChange}
                rows="3"
                className="w-full border border-slate-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2.5 rounded-md hover:bg-green-700 transition"
              >
                Confirm Booking
              </button>
            </form>
          </>
        ) : (
          <div className="text-center flex flex-col items-center">
            <CheckCircle2 className="text-green-500 w-14 h-14 mb-3" />
            <h2 className="text-xl font-semibold text-slate-800 mb-2">Booking Submitted</h2>
            <p className="text-sm text-slate-600 mb-4">
              Your request has been received. Click below to message Dr. Iwula directly.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition"
            >
              Message on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="mt-4 text-sm text-slate-500 hover:text-slate-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
