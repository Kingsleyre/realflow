import React from 'react';

export default function Profile() {
  return (
    <div>
      <div className="h-full ml-14 md:ml-64">
        <div className="w-full bg-white p-10">
          <div className="md:flex items-center border-b pb-6 border-gray-200">
          <h1
            tabIndex={0}
            role="heading"
            aria-label="profile information"
            className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
            Profile info
          </h1>
          </div>
          <p
            role="contentinfo"
            className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
            Fill in the data for profile. It will take a couple of minutes.{' '}
            <br />
            You only need a passport
          </p>
     
          <h2
            role="heading"
            aria-label="enter Personal data"
            className="text-xl font-semibold leading-7 text-gray-800 mt-10">
            Personal data
          </h2>
          <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
            Please fill in your details
          </p>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                First name
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 focus:outline-gray-300"
                placeholder='First Name'
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Last name
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 focus:outline-gray-300"
                placeholder='Last Name'
              />
            </div>
          </div>

          <div className="mt-12 md:flex items-center">
          <div className="flex flex-col ">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Email Address
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter email address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 focus:outline-gray-300"
                placeholder='Email Address'
              />
            </div>

             <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Phone Number
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter phone number"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 focus:outline-gray-300"
                placeholder='Phone Number'
              />
            </div>
          </div>

          <div className="mt-12 md:flex items-center">
          <div className="flex flex-col ">
              <label className="mb-3 text-sm leading-none text-gray-800">
                City
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter city"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 focus:outline-gray-300"
                placeholder='City'
              />
            </div>

             <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Brokerage Name
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter brokerage name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 focus:outline-gray-300"
                placeholder='Brokerage Name'
              />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 mt-10 sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="photo" class="block text-md font-medium leading-6 text-gray-800">Photo</label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <div class="flex items-center">
              <span class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button type="button" class="ml-5 rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
            </div>
          </div>
        </div>




         
          <button
            role="button"
            aria-label="Next step"
            className="flex items-center justify-center py-4 px-7 focus:outline-none bg-gray-50 border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
            <span className="text-sm font-medium text-center text-gray-800 capitalize">
              Update Profile
            </span>
            <svg
              className="mt-1 ml-3"
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
