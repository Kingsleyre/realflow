import React from 'react'
import { MagnifyingGlassIcon, Fragment} from '@heroicons/react/20/solid';


export default function Header() {
  return (
    <div className="flex flex-col flex-auto flex-shrink-0 antialiased ">
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
    <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-gray-300 border-none">
      {/* <img className="w-7 h-7 md:w-6 md:h-6 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
      <span className="hidden md:block">ADMIN</span> */}
    </div>
    <div className="flex justify-between items-center h-14  bg-gray-300  header-right ">
    <div className="text-gray-900 ">
            <label htmlFor="search" className="sr-only ">
              Search
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                aria-hidden="true">
                <MagnifyingGlassIcon
                  className="h-4 w-4 text-gray-900"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pl-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                placeholder="Search"
              />
            </div>
          </div>

      <ul className="flex items-center">
      <img className="flex inline-block h-6 w-6 rounded-full avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" ></img>

        <li>
          <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
        </li>
        <li>
          <a href="#" className="flex items- mr-4 hover:text-gray-500 text-gray-900">
            <span className="inline-flex mr-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </span>
            Logout
          </a>
        </li>
      </ul>
    </div>
    </div>
    </div>

    
  )
}
