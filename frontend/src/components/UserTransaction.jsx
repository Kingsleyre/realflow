import React from 'react'

export default function UserTransaction() {
  return (
    <div>
    <table className="table-auto w-full">
    <thead>
      <tr className="bg-white">
        <th className="px-4 py-2 text-left text-gray-500">Task</th>
        <th className="px-4 py-2 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="border px-4 py-2 text-xs">Upload sellers transaction to MLS</td>
        <td className="border px-4 py-2">
          <span className="inline-block bg-blue-200 px-3 py-1 rounded-full text-xs font-small text-blue-600">In Progress</span>
        </td>
      </tr>
      <tr className="bg-gray-100">
        <td className="border px-4 py-2 text-xs">Photos & Measurements</td>
        <td className="border px-4 py-2">
          <span className="inline-block bg-green-300 px-3 py-1 rounded-full text-xs font-small text-green-900">Completed</span>
        </td>
      </tr>
      <tr className="bg-white">
        <td className="border px-4 py-2 text-xs">Buyers Representative Agreement</td>
        <td className="border px-4 py-2">
          <span className="inline-block bg-blue-200 px-3 py-1 rounded-full text-xs font-small text-blue-600">In Progress</span>
        </td>
      </tr>
      <tr className="bg-gray-100">
        <td className="border px-4 py-2 text-xs">Fintrac</td>
        <td className="border px-4 py-2">
          <span className="inline-block bg-green-300 px-3 py-1 rounded-full text-xs font-small text-green-900">Completed</span>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div className="text-center">
    <a href="#" className="text-blue-500 underline">View All</a>
  </div>
  </div>

  

  )
}
