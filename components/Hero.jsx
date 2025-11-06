'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarCheck2, GraduationCap, Users2 } from 'lucide-react'
import CategoriesMarquee from './CategoriesMarquee'

export default function Hero() {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₦'

  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-16 sm:py-6">
      <div className="grid xl:grid-cols-2 gap-10 items-center">
        {/* === LEFT SECTION: TEXT CONTENT === */}
        <div>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-medium">
            Trusted Healthcare • Online & In-person
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold mt-6 leading-tight bg-gradient-to-r from-slate-900 to-green-700 bg-clip-text text-transparent">
            Compassionate Care, Expert Guidance — <br className="hidden sm:block" />
            with <span className="font-bold">Dr. Iwula</span>
          </h1>

          <p className="mt-6 text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            Your well-being deserves attention. Book a consultation or enroll in
            health courses tailored to your journey — all in one trusted space.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consultations"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm sm:text-base font-medium py-3 px-8 rounded-md hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
            >
              Book a Session <ArrowRight size={18} />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 border border-slate-900 text-slate-900 text-sm sm:text-base font-medium py-3 px-8 rounded-md hover:bg-slate-900 hover:text-white hover:scale-105 active:scale-95 transition-all"
            >
              View Courses
            </Link>
          </div>

          <div className="mt-10 text-sm text-slate-600">
            <p>
              Consultation starts from{' '}
              <span className="font-semibold text-slate-900">{currency}0.00</span>
            </p>
          </div>
        </div>

        {/* === RIGHT SECTION: ACTION CARDS === */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="group bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <CalendarCheck2 className="text-green-700" size={26} />
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Now Open</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Book Your Appointment
            </h3>
            <p className="text-sm text-slate-600">
              Schedule online consultations with ease — anytime, anywhere.
            </p>
            <Link
              href="/consultations"
              className="text-green-700 font-medium text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Start Booking <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition">
            <GraduationCap className="text-blue-700" size={26} />
            <h3 className="text-lg font-semibold text-slate-800">
              Learn From Experts
            </h3>
            <p className="text-sm text-slate-600">
              Join certified courses that simplify complex health topics.
            </p>
            <Link
              href="/courses"
              className="text-blue-700 font-medium text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Explore Courses <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition sm:col-span-2 xl:col-span-1">
            <Users2 className="text-amber-700" size={26} />
            <h3 className="text-lg font-semibold text-slate-800">
              What Our Patients Say
            </h3>
            <p className="text-sm text-slate-600">
              Read trusted experiences from those who found healing and clarity.
            </p>
            <Link
              href="/testimonials"
              className="text-amber-700 font-medium text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              View Testimonials <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Optional: Category Marquee */}
      <div className="mt-10">
        <CategoriesMarquee />
      </div>
    </section>
  )
}
