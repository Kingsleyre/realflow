import React from 'react'

export default function MyTeamHeader() {
  return (
    <>
      <div className="h-full ml-14 mt-20 px-8 md:ml-64">
            <div className="flex justify-between text-black items-center mb-8">
        <p className="text-2xl font-bold">My Team</p>
        <p className="">December, 12</p>
      </div>
      <div className="flex flex-wrap justify-between items-center pb-8">
        <div className="flex flex-wrap text-black">
          <div className="pr-10">
            <div className="text-2xl font-bold">45</div>
            <div className="">In Progress</div>
          </div>
          <div className="pr-10">
            <div className="text-2xl font-bold">24</div>
            <div className="">Upcoming</div>
          </div>
          <div>
            <div className="text-2xl font-bold">62</div>
            <div className="">Total Transactions</div>
          </div>

          
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <button className="text-white bg-transparent" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button className="text-white bg-gray-500 p-2 ml-2" title="Grid View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
