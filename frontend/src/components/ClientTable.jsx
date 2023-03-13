import React from 'react'

export default function ClientTable() {
  return (
    <>
{/* <!-- Client Table --> */}
<div className="mt-4 mx-1 md:px-3 ml-12 mb-10 px-6 md:ml-64">
  <div className="w-full overflow-hidden rounded-lg shadow-xs">
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-900 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-900 dark:bg-gray-300">
            <th className="px-4 py-3">Client</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last Activity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-400">
          <tr className="bg-gray-50 dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-400 text-white dark:text-gray-900">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">Hans Burger</p>
                  <p className="text-xs text-gray-600 dark:text-gray-900">Seller</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">$8550.85</td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Closed </span>
            </td>
            <td className="px-4 py-3 text-sm">15-01-2021</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-700 dark:text-gray-900">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">Jolina Angelie</p>
                  <p className="text-xs text-gray-600 dark:text-gray-900">Buyer</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">$3690.75</td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
            </td>
            <td className="px-4 py-3 text-sm">23-03-2021</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-700 dark:text-gray-900">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">Dave Li</p>
                  <p className="text-xs text-gray-600 dark:text-gray-900">Buyer</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">$7750.45</td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-yellow-700 dark:bg-yellow-100"> Pending </span>
            </td>
            <td className="px-4 py-3 text-sm">09-02-2021</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-700 dark:text-gray-900">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">Rulia Joberts</p>
                  <p className="text-xs text-gray-600 dark:text-gray-900">Seller</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">$12760.75</td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Closed </span>
            </td>
            <td className="px-4 py-3 text-sm">17-04-2021</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-700 dark:text-gray-900">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">Hitney Wouston</p>
                  <p className="text-xs text-gray-600 dark:text-gray-900">Buyer</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">$8630.45</td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-white dark:bg-green-700"> Closed </span>
            </td>
            <td className="px-4 py-3 text-sm">11-01-2021</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="grid py-3 text-xs font-semibold tracking-wide text-gray-900 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-900 dark:bg-gray-300">
    <div className="relative w-full max-w-full flex-grow flex-1 ml-4">
                <button className="bg-gray-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  See all
                </button>
              </div>
      <span className="col-span-2"></span>
      {/* <!-- Pagination --> */}
    </div>
  </div>
</div>
{/* <!-- ./Client Table --> */}
    </>
  )
}
