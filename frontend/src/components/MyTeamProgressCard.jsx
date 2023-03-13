import React from 'react';

export default function MyTeamProgressCard() {
  return (
    <div>
      <div className="h-full ml-14   md:ml-64">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <div className="p-6">
              <div
                className="p-4 rounded-3xl"
                style={{ backgroundColor: '#fee4cb' }}>
                <div className="flex items-center justify-b">
                  <span className="text-sm">December 10, 2020</span>
                </div>
                <div className="text-center mb-4 mt-5">
                  <p className="text-base font-bold opacity-70">
                  24 Marylyn blvd NW
                  </p>
                  <p className="text-sm opacity-70 mt-2">Buyers</p>
                </div>
                <div>
                  <p className="text-sm font-bold m-0">Progress</p>
                  <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                    <span className="block h-1 rounded-md bg-yellow-700 w-6/12" />
                  </div>
                  <p className="text-right m-0 text-sm font-bold">60%</p>
                </div>
                <div className="flex justify-between pt-4 relative">
                  <div className="flex items-center">
                    <img
                      className="w-5 h-5 rounded-full overflow-hidden object-cover"
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                      alt="participant2"
                    />
                    <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-yellow-600">
                    2 Days Left
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12">
          <div className="p-6">
            <div className="p-4 rounded-3xl bg-gray-300">
              <div className="flex items-center justify-b">
                <span className="text-sm">December 10, 2020</span>
              </div>
              <div className="text-center mb-4 mt-5">
                <p className="text-base font-bold opacity-70">52 Bennard way SE</p>
                <p className="text-sm opacity-70 mt-2">Sellers</p>
              </div>
              <div>
                <p className="text-sm font-bold m-0">Progress</p>
                <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                  <span className="block h-1 rounded-md bg-indigo-700 w-5/12" />
                </div>
                <p className="text-right m-0 text-sm font-bold">50%</p>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant3"
                  />
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant4"
                  />
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-indigo-700">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>


          
        </div>

        <div className="w-full md:w-4/12">
          <div className="p-6">
            <div className="p-4 rounded-3xl bg-green-200">
              <div className="flex items-center justify-b">
                <span className="text-sm">December 10, 2020</span>
              </div>
              <div className="text-center mb-4 mt-5">
                <p className="text-base font-bold opacity-70">123 Flyway view NE</p>
                <p className="text-sm opacity-70 mt-2">Sellers</p>
              </div>
              <div>
                <p className="text-sm font-bold m-0">Progress</p>
                <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                  <span className="block h-1 rounded-md bg-green-700 w-7/12" />
                </div>
                <p className="text-right m-0 text-sm font-bold">70%</p>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant5"
                  />
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant6"
                  />
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-green-700">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12">
          <div className="p-6">
            <div className="p-4 rounded-3xl bg-blue-200">
              <div className="flex items-center justify-b">
                <span className="text-sm">December 10, 2020</span>
              </div>
              <div className="text-center mb-4 mt-5">
                <p className="text-base font-bold opacity-70">254 5th Ave NE</p>
                <p className="text-sm opacity-70 mt-2">Buyers</p>
              </div>
              <div>
                <p className="text-sm font-bold m-0">Progress</p>
                <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                  <span className="block h-1 rounded-md bg-blue-700 w-7/12" />
                </div>
                <p className="text-right m-0 text-sm font-bold">70%</p>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  {/* <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant7"
                  /> */}
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant8"
                  />
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-blue-700">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12">
          <div className="p-6">
            <div className="p-4 rounded-3xl bg-red-200">
              <div className="flex items-center justify-b">
                <span className="text-sm">December 10, 2020</span>
              </div>
              <div className="text-center mb-4 mt-5">
                <p className="text-base font-bold opacity-70">45 Eagle view SE</p>
                <p className="text-sm opacity-70 mt-2">Sellers</p>
              </div>
              <div>
                <p className="text-sm font-bold m-0">Progress</p>
                <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                  <span className="block h-1 rounded-md bg-red-700 w-7/12" />
                </div>
                <p className="text-right m-0 text-sm font-bold">70%</p>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  {/* <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant9"
                  /> */}
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant10"
                  />
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-red-700">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12">
          <div className="p-6">
            <div className="p-4 rounded-3xl bg-purple-200">
              <div className="flex items-center justify-b">
                <span className="text-sm">December 10, 2020</span>
              </div>
              <div className="text-center mb-4 mt-5">
                <p className="text-base font-bold opacity-70">23 Haven Drive Circle NW</p>
                <p className="text-sm opacity-70 mt-2">Buyers</p>
              </div>
              <div>
                <p className="text-sm font-bold m-0">Progress</p>
                <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                  <span className="block h-1 rounded-md bg-purple-700 w-7/12" />
                </div>
                <p className="text-right m-0 text-sm font-bold">70%</p>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  {/* <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant11"
                  /> */}
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant12"
                  />
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-purple-700">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
