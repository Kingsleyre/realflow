import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react';
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  BarsArrowUpIcon,
  StarIcon,
} from '@heroicons/react/20/solid';

const navigation = [
  { name: 'My Day', href: '/', icon: HomeIcon, current: false },
  {
    name: 'Users Activity',
    href: '/usersactivity',
    icon: ClockIcon,
    current: true,
  },
  {
    name: 'Transactions',
    href: '#',
    icon: DocumentChartBarIcon,
    current: false,
  },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];


const transactions = [
  {
    id: 1,
    name: 'Upload Sellers transaction to MLS',
    href: '#',
    status: 'completed',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 2,
    name: 'Photos & Measurements',
    href: '#',
    status: 'processing',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 3,
    name: 'Buyers Representative Agreement',
    href: '#',
    status: 'completed',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },

  {
    id: 4,
    name: 'Fintrac',
    href: '#',
    status: 'processing',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];
const statusStyles = {
  completed: 'bg-green-100 text-green-800',
  processing: 'bg-blue-100 text-blue-800',
  failed: 'bg-gray-100 text-gray-800',
};


const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Domains', href: '#', current: false },
]
const projects = [
  {
    name: 'Workcation',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: true,
  },
  // More projects...
]
const activityItems = [
  { project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UsersActivity() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <>
        {/* // Home page content */}
        <div className="min-h-full">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full">
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}>
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex flex-shrink-0 items-center px-4"></div>
                    <nav
                      className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                      aria-label="Sidebar">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.id}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-cyan-800 text-white'
                                : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                            )}
                            aria-current={item.current ? 'page' : undefined}>
                            <item.icon
                              className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6 pt-6">
                        <div className="space-y-1 px-2">
                          {secondaryNavigation.map((item) => (
                            <a
                              key={item.form}
                              href={item.href}
                              className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white">
                              <item.icon
                                className="mr-4 h-6 w-6 text-cyan-200"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                  {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4"></div>
              <nav
                className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.side}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-cyan-800 text-white'
                          : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}>
                      <item.icon
                        className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.help}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white">
                        <item.icon
                          className="mr-4 h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="flex flex-1 flex-col lg:pl-64">
            <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}>
                <span className="sr-only">Open sidebar</span>
                <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Search bar */}
              <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div
                        className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true">
                        <MagnifyingGlassIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search-field"
                        name="search-field"
                        className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                          <span className="sr-only">Open user menu for </span>
                          Emilia Birch
                        </span>
                        <ChevronDownIcon
                          className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}>
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}>
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}>
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <main className="flex-1 pb-8">
              {/* Page header */}
              <div className="bg-white shadow">
                <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                  <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div className="min-w-0 flex-1">
                      {/* Profile */}
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                              Users Activity
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-8"></div> */}
            </main>
          </div>
        </div>
      </>

      {/* Activity feed */}
 <div className="bg-gray-50 pr-4 xl:mr-20 xl:w-3/4 xl:mx-auto sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
 <div className="pl-6 pr-6 ">
   <div className="pt-6 pb-2 ">
     <h2 className="text-sm font-semibold">Activity</h2>
   </div>
   <div>
     <ul role="list" className="divide-y divide-gray-200">
       {activityItems.map((item) => (
         <li key={item.commit} className="py-4">
           <div className="flex space-x-3">
             <img
               className="h-6 w-6 rounded-full"
               src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
               alt=""
             />
             <div className="flex-1 space-y-1">
               <div className="flex items-center justify-between">
                 <h3 className="text-sm font-medium">You</h3>
                 <p className="text-sm text-gray-500">{item.time}</p>
               </div>
               <p className="text-sm text-gray-500">
                 Deployed {item.project} ({item.commit} in master) to{' '}
                 {item.environment}
               </p>
             </div>
           </div>
         </li>
       ))}
     </ul>
     <div className="border-t border-gray-200 py-4 text-sm">
       <a
         href="#"
         className="font-semibold text-indigo-600 hover:text-indigo-900">
         View all activity
         <span aria-hidden="true"> &rarr;</span>
       </a>
     </div>
   </div>
 </div>
</div>
    </>
  );
}
