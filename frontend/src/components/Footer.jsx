import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className="bg-teal-700 dark:bg-gray-800 fixed bottom-0 w-full">
  <div className="mx-auto max-w-screen-xl text-center">
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
      </ul>
      <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">©2023 <a href="#">RealFlow</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}
