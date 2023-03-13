import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className="bg-white xl:ml-60">
      <div className="mx-auto overflow-hidden   ">
        <nav className="columns-2 sm:flex sm:justify-center " aria-label="Footer">
        </nav>
        <p className="mb-8 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 RealFlow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
