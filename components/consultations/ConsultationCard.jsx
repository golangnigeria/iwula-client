import React from 'react'

export default function ConsultationCard({ color, Icon, title, description, price, onBook }) {
  return (
    <div
      className={`flex flex-col justify-between items-center bg-${color}-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition`}
    >
      <div className="text-center">
        <Icon className={`w-10 h-10 text-${color}-600 mb-4`} />
        <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
        <p className="text-sm text-slate-600 mt-2">{description}</p>
        <p className="mt-4 font-medium text-slate-700">₦{price.toLocaleString()}</p>
      </div>

      <button
        onClick={onBook}
        className={`mt-6 bg-${color}-600 text-white py-2 px-6 rounded-md hover:bg-${color}-700 transition`}
      >
        Book Now
      </button>
    </div>
  )
}
