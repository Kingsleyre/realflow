import React from 'react';

export default function MyTask() {
  return (
    <>
      <div className="h-full ml-14 mt-14 mb-5 md:ml-64">
        <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              Assigned Tasks
            </h1>
          </div>
          <div className="mt-4 flex sm:mt-0 sm:ml-4">
            {/* <a href="#">
            <button
              type="button"
              className="order-0 inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 sm:order-1 sm:ml-3">
               Create
            </button>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
