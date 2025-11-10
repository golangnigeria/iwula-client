'use client'
import React from 'react'
import clsx from 'clsx'

export default function ConsultationCard({ color, Icon, title, description, price, onBook }) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between items-center p-8 rounded-2xl shadow-sm transition',
        {
          'bg-amber-100 hover:bg-amber-50 text-slate-800': color === 'amber',
          'bg-blue-100 hover:bg-blue-50 text-slate-800': color === 'blue',
          'bg-green-100 hover:bg-green-50 text-slate-800': color === 'green',
        }
      )}
    >
      <div className="text-center">
        <Icon
          className={clsx('w-10 h-10 mb-4', {
            'text-amber-800': color === 'amber',
            'text-blue-800': color === 'blue',
            'text-green-800': color === 'green',
          })}
        />
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm opacity-90 mt-2">{description}</p>
      </div>

      <button
        onClick={onBook}
        className={clsx(
          'mt-6 py-2 px-6 rounded-md font-medium transition',
          {
            'bg-amber-800 hover:bg-amber-900 text-white': color === 'amber',
            'bg-green-800 hover:bg-green-900 text-white': color === 'green',
            'bg-blue-800 hover:bg-blue-900 text-white': color === 'blue',
          }
        )}
      >
        Book Now
      </button>
    </div>
  )
}
