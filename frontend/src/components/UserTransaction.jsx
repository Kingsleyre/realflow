import React from 'react'

export default function UserTransaction() {
  return (
    <div>
    <table class="table-auto w-full">
    <thead>
      <tr class="bg-white">
        <th class="px-4 py-2 text-left text-gray-500">Task</th>
        <th class="px-4 py-2 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white">
        <td class="border px-4 py-2 text-xs">Upload sellers transaction to MLS</td>
        <td class="border px-4 py-2">
          <span class="inline-block bg-blue-200 px-3 py-1 rounded-full text-xs font-small text-blue-600">In Progress</span>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2 text-xs">Photos & Measurements</td>
        <td class="border px-4 py-2">
          <span class="inline-block bg-green-300 px-3 py-1 rounded-full text-xs font-small text-green-900">Completed</span>
        </td>
      </tr>
      <tr class="bg-white">
        <td class="border px-4 py-2 text-xs">Buyers Representative Agreement</td>
        <td class="border px-4 py-2">
          <span class="inline-block bg-blue-200 px-3 py-1 rounded-full text-xs font-small text-blue-600">In Progress</span>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2 text-xs">Fintrac</td>
        <td class="border px-4 py-2">
          <span class="inline-block bg-green-300 px-3 py-1 rounded-full text-xs font-small text-green-900">Completed</span>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div class="text-center">
    <a href="#" class="text-blue-500 underline">View All</a>
  </div>
  </div>

  

  )
}
