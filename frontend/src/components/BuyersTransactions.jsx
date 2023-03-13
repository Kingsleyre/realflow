import React from 'react'

export default function BuyersTransactions() {
  return (
    <>
 <div className="h-full ml-14  px-4  md:ml-64">
        <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-300 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-black">
                  Buyers Transactions
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-gray-500 dark:bg-gray-100 text-white active:bg-gray-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">
                  See all
                </button>
              </div>
            </div>
            <div className="block w-full">
              <div className="px-4 bg-gray-100 dark:bg-gray-400 text-gray-500 dark:text-black align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Active
              </div>
              <ul className="my-1">
                <li className="flex px-4">
                  <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                      <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-black"
                          >
                          254 5th Ave NE
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          href="/buyerviewmore"
                          className="flex items-center font-medium text-gray-500 hover:text-gray-600 dark:text-gray-800 dark:hover:text-gray-500 outline-none">
                          View
                          <span className="inline-block ml-1">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 transform transition-transform duration-500 ease-in-out">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex px-4">
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                      <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-black"
                          >
                          24 Marylyn Blvd NW
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          href="/buyerviewmore"
                          className="flex items-center font-medium text-gray-500 hover:text-gray-600 dark:text-gray-800 dark:hover:text-gray-500 outline-none">
                          View
                          <span className="inline-block ml-1">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 transform transition-transform duration-500 ease-in-out">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="px-4 bg-gray-100 dark:bg-gray-400 text-gray-500 dark:text-black align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Completed
              </div>
              <ul className="my-1">
                <li className="flex px-4">
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                      <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-black"
                          >
                          785 Boston Lane Ave NE
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          href="/buyerscompleted"
                          className="flex items-center font-medium text-gray-500 hover:text-gray-600 dark:text-gray-800 dark:hover:text-gray-500 outline-none">
                          View
                          <span className="inline-block ml-1">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 transform transition-transform duration-500 ease-in-out">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex px-4">
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                      <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-black"
                          >
                          145 New Haven Circle NW
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          href="/buyerscompleted"
                          className="flex items-center font-medium text-gray-500 hover:text-gray-600 dark:text-gray-800 dark:hover:text-gray-500 outline-none">
                          View
                          <span className="inline-block ml-1">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 transform transition-transform duration-500 ease-in-out">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
