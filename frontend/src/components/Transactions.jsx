import React from 'react'

export default function Transactions() {
  return (
    <>
      <div className="md:px-4 ml-12 px-6 mb-10 md:ml-64 ">
        {/* Social Traffic */}
        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-300 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-900">Transactions</h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  See all
                </button>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 bg-gray-100 dark:bg-gray-300 text-gray-500 dark:text-gray-900 align-middle border border-solid border-gray-200 dark:border-gray-900 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Address
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-300 text-gray-500 dark:text-gray-900 align-middle border border-solid border-gray-200 dark:border-gray-900 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Type
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-300 text-gray-500 dark:text-gray-900 align-middle border border-solid border-gray-200 dark:border-gray-900 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                  </tr>
                </thead>
                <tbody>
  <tr className="text-gray-700 dark:text-gray-900">
    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      24 Marylyn blvd NW
    </th>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      Buyers
    </td>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div className="flex items-center">
        <span className="mr-2">70%</span>
        <div className="relative w-full">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div style={{width: '70%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
          </div>
        </div>
      </div>
    </td>
  </tr>
  <tr className="text-gray-700 dark:text-gray-900">
    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      52 Bennard way SE
    </th>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      Sellers
    </td>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div className="flex items-center">
        <span className="mr-2">40%</span>
        <div className="relative w-full">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div style={{width: '40%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
        </div>
      </div>
    </td>
  </tr>
  <tr className="text-gray-700 dark:text-gray-900">
    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      123 Flyway view NE
    </th>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      Sellers
    </td>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div className="flex items-center">
        <span className="mr-2">45%</span>
        <div className="relative w-full">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
            <div style={{width: '45%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
          </div>
        </div>
      </div>
    </td>
  </tr>
  <tr className="text-gray-700 dark:text-gray-900">
    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      254 5th Ave NE
    </th>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  Buyers
</td>
<td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  <div className="flex items-center">
    <span className="mr-2">60%</span>
    <div className="relative w-full">
      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
        <div style={{width: '60%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
      </div>
    </div>
  </div>
</td>
</tr>
  <tr className="text-gray-700 dark:text-gray-900">
    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      45 Eagle view SE
    </th>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      Sellers
    </td>
    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div className="flex items-center">
        <span className="mr-2">30%</span>
        <div className="relative w-full">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div style={{width: '30%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
          </div>
        </div>
      </div>
    </td>
  </tr>
</tbody>
      </table>
    </div>
  </div>
</div>
</div>
    </>
  )
}
