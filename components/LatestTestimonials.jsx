'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import {testimonialImage} from '@/assets/assets'

const testimonials = [
  {
    name: "Chinwe E.",
    role: "Patient",
    image: testimonialImage.pic1,
    rating: 5,
    feedback:
      "Dr. Iwula is not only professional but very compassionate. His advice and care completely changed how I manage my health. I feel better than ever!",
  },
  {
    name: "Emeka O.",
    role: "Patient",
    image: testimonialImage.pic2,
    rating: 5,
    feedback:
      "I booked a consultation online and got personalized advice the same day. His attention to detail and follow-up was amazing.",
  },
  {
    name: "Ngozi M.",
    role: "Patient",
    image: testimonialImage.pic3,
    rating: 4,
    feedback:
      "Excellent service and care! I highly recommend Dr. Iwula’s clinic for anyone seeking reliable and friendly medical support.",
  },
];

const LatestTestimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          What Our Patients Are Saying
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Real stories from real patients who’ve experienced care, compassion, and results with Dr. Iwula.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-gray-200 dark:text-gray-700 w-8 h-8" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex justify-center mb-3">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestTestimonials;
