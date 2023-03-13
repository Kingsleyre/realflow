import React from 'react';
import { useState } from 'react';

export default function AssignedTaskTable() {
  const [show, setShow] = useState(null);
  return (
    <>
      <div>
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  Tasks{' '}
                  <span>
                    {' '}
                    <p class="mt-2 text-sm text-gray-700">
                      A list of all the tasks you have been assigned including
                      the address, agents name, status and role.
                    </p>
                  </span>{' '}
                </p>
                <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                  <p>Sort By:</p>
                  <select className="focus:outline-none bg-transparent  border-none">
                    <option className="text-sm text-indigo-800">Latest</option>
                    <option className="text-sm text-indigo-800">Oldest</option>
                    <option className="text-sm text-indigo-800">Latest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
              <div className="sm:flex items-center justify-between">
                <div className="flex items-center">
                  <a href="javascript:void(0)">
                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                      <p>All</p>
                    </div>
                  </a>
                  <a href="javascript:void(0)">
                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                      <p>Done</p>
                    </div>
                  </a>
                  <a href="javascript:void(0)">
                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                      <p>Pending</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-7 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <tbody>
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Listing Presentation
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Kelly Briggs
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded">
                          Due today at 18:00
                        </button>
                      </td>

                      <td></td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Sign Installation
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Mark Price
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-6 focus:outline-none text-sm leading-none text-red-600 bg-red-100 hover:bg-red-200 rounded">
                          Due today at 18:00
                        </button>
                      </td>

                      <td></td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Buyers Presentation
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Neil Young
                        </p>
                      </td>

                      <td className="pl-5"></td>
                      <td className="pl-5"></td>
                      <td className="pl-5">
                        <button className="py-3 px-7 text-sm leading-none text-red-600 focus:outline-none bg-red-100 hover:bg-red-200 rounded">
                          Due today at 18:00
                        </button>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input defaultChecked type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Open House
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Jonathan Smith
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-7 text-sm leading-none text-gray-600 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded">
                          Due tomorrow at 16:00
                        </button>
                      </td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Sign Removal
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Jenny Wilson
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-7 text-sm leading-none text-gray-600 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">
                          Due tomorrow at 16:00
                        </button>
                      </td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input defaultChecked type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Sign Removal
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Joi Carrington
                        </p>
                      </td>

                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-7 text-sm leading-none text-gray-600 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">
                          Due next week at 15:00
                        </button>
                      </td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Conditions
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Melanie Hamilton
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-3 text-sm leading-none text-gray-500 bg-gray-100 hover:bg-red-200 rounded focus:outline-none">
                          Due next week at 15:00
                        </button>
                      </td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input defaultChecked type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Purchase Contract
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Sally O'Neil
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>

                      <td className="pl-5">
                        <button className="py-3 px-3 text-sm leading-none text-gray-500 bg-gray-100 hover:bg-red-200 rounded focus:outline-none">
                          Due next month at 17:00
                        </button>
                      </td>
                    </tr>
                    <tr className="h-3" />
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            Fintrac
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <p className="text-base font-medium leading-none text-gray-400 mr-2 text-sm">
                          Debbie Olu
                        </p>
                      </td>
                      <td className="pl-5"></td>
                      <td className="pl-5"></td>
                      <td className="pl-5">
                        <button className="py-3 px-3 text-sm leading-none text-gray-600 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">
                          Due next month at 17:00
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <style>
            {/* {` .checkbox:checked + .check-icon {
                display: flex;
            }`} */}
          </style>
        </div>
      </div>
    </>
  );
}
