import React from 'react';

export default function CreateTask() {
  return (
    <>
      <div className="h-full ml-14 mt-14 px-6 md:ml-64">
        <form className="space-y-6 mb-10" action="#" method="POST">
          <div className="">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Agents Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {' '}
                  <span className="underline font-bold">
                    {' '}
                    Delegate a task:{' '}
                  </span>
                  Assign a task to an agent of your choice.
                </p>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Add To Task
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 px-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                      <option disabled selected>
                        {' '}
                        Select Agent{' '}
                      </option>
                      <option>Katie Mack</option>
                      <option>Jeff Kent</option>
                      <option>Neil Tyson</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Task
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 px-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                      <option disabled selected>
                        {' '}
                        Select Task{' '}
                      </option>
                      <option>Listing Presentation</option>
                      <option>Open House</option>
                      <option>Showing</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end px-4 sm:px-0">
            <button
              type="button"
              className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
