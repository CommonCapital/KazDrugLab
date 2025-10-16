'use client'
import { MessageCircleMore } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const DropdownMessage = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const [notifying, setNotifying] = useState(true) // show badge for demo

  return (
    <li className="relative">
      <button
        onClick={() => {
          setNotifying(false)
          setDropDownOpen(!dropdownOpen)
        }}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        {notifying && (
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
        )}
        <MessageCircleMore size={20} />
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="flex flex-col  right-0 mt-3 w-80 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-gray-800">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Messages
            </h4>
            <Link
              href="/message"
              className="text-xs text-indigo-500 hover:underline"
            >
              View all
            </Link>
          </div>

          <ul className="max-h-64 overflow-y-auto py-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
              <p className="font-medium">New molecule dataset available</p>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </li>
            <li className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
              <p className="font-medium">Lab report updated</p>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </li>
          </ul>
        </div>
      )}
    </li>
  )
}
