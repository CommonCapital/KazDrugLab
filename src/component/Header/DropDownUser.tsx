'use client'
import { ChevronDownIcon, LogOut, Settings, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const DropDownUser = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="relative">
      {/* User trigger */}
      <button
        onClick={() => setDropDownOpen(!dropdownOpen)}
        className="flex items-center gap-3 rounded-lg p-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      >
        <div className="hidden text-right lg:block">
          <p className="text-sm font-medium text-gray-800 dark:text-white">
            Nursan Omarov
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Drug Researcher
          </p>
        </div>

        <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700">
          <Image
            width={80}
            height={80}
            src="/Default_User_image.png"
            alt="user image"
            className="h-full w-full object-cover"
          />
        </div>

        <ChevronDownIcon
          className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-3 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <ul className="flex flex-col text-sm text-gray-700 dark:text-gray-300">
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <User2 size={16} />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Settings size={16} />
                Account Settings
              </Link>
            </li>
          </ul>
          <button
            onClick={() => router.push('/logout')}
            className="flex w-full items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-800"
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}
