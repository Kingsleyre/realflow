import React from 'react'

export default function Notifications() {
  return (
    <>
      <div className="h-full ml-14 mt-20 md:ml-64">
      <div className="w-10/12 xl:w-3/4 md:w-3/5 sm:w-9/12 mx-auto relative  pl-8 pr-4 sm:pl-8 lg:pr-8 py-4 my-8 rounded-lg  ">
  <div className="flex flex-wrap items-center justify-between">
    <h1 className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-black">Notifications</h1>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 sm:h-6 sm:w-6 sm:-ml-8 text-gray-700 dark:text-black cursor-pointer hover:text-gray-800"
        viewBox="0 0 20 20" fill="currentColor">
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </span>
  </div>
  <div className="border-l-2 mt-10">
    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 sm:px-3 py-2 text-black rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
       <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"></path>
</svg> 
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">254 5th Ave NE <span
            className="font-medium text-purple-600 dark:text-blue-20">"Listing Presentation"</span>  <span className='text-xs dark:text-gray-500'> COMPLETED</span> </h3>
        <small className="text-gray-500 dark:text-black">Today . 3.12 PM</small>
      </div>
    </div>
    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 px-3 py-2  text-white  mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-red-300 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
        <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="red" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
</svg>
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">785 Boston Lane Ave NE <span
            className="font-medium text-purple-600 dark:text-blue-20">"New Task Assigned"</span>  <span className='text-xs dark:text-gray-500'> ACCEPTED</span> </h3>
        <small className="text-gray-500 dark:text-black">Today . 3.24 PM</small>
      </div>
    </div>
    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
              <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"></path>
</svg> 
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">24 Marylyn Blvd NW <span
            className="font-medium text-purple-600 dark:text-blue-20">"Transaction"</span>  <span className='text-xs dark:text-gray-500'> COMPLETED</span> </h3>
        <small className="text-gray-500 dark:text-black">Yesterday . 8.25 PM</small>
      </div>
    </div>
    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-red-300 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
               <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="red" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
</svg>
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">123 Flyway view NE <span
            className="font-medium text-purple-600 dark:text-blue-20">"Assigned Task"</span> <span className='text-xs dark:text-gray-500'> ACCEPTED</span> </h3>
        <small className="text-gray-500 dark:text-black">Yesterday . 8.49 PM</small>
      </div>
    </div>

    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                  <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"></path>
</svg>
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">52 Bayview Crescent SE <span
            className="font-medium text-purple-600 dark:text-blue-20">"Transaction"</span>  <span className='text-xs dark:text-gray-500'> COMPLETED</span> </h3>
        <small className="text-gray-500 dark:text-black">Yesterday . 10.25 PM</small>
      </div>
    </div>

    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 sm:px-3 py-2 text-black rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                   <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="blue" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"></path>
</svg>
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">1154 Jasper Circle NW <span
            className="font-medium text-purple-600 dark:text-blue-20">"Buyers Presentation"</span>  <span className='text-xs dark:text-gray-500'> COMPLETED</span> </h3>
        <small className="text-gray-500 dark:text-black">Last week . 3.12 PM</small>
      </div>
    </div>

    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-red-300 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                      <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="red" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
</svg>
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">20 Sugarmill Drive SW <span
            className="font-medium text-purple-600 dark:text-blue-20">"Assigned Task"</span> <span className='text-xs dark:text-gray-500'> ACCEPTED</span> </h3>
        <small className="text-gray-500 dark:text-black">Last week . 8.49 PM</small>
      </div>
    </div>

    <div
      className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 px-3 py-2  text-white  mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
      <div
        className="w-8 h-8 bg-blue-200 dark:bg-red-300 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                     <svg className='h-5 w-5 mx-auto mt-1.5' fill="none" stroke="red" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
</svg>
      </div>
      <div className="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
        <h3 className="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-black">235 Lawrence Close Ave NE <span
            className="font-medium text-purple-600 dark:text-blue-20">"New Task Assigned"</span>  <span className='text-xs dark:text-gray-500'> ACCEPTED</span> </h3>
        <small className="text-gray-500 dark:text-black">Last Month . 3.24 PM</small>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
