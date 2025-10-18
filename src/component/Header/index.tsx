'use client'

import { Menu, Search } from 'lucide-react'
import { DropdownMessage } from './DropdownMessage'
import { DropDownUser } from './DropDownUser'
import { useSidebar } from '@/components/ui/sidebar'



const Header = () => {
const { state, toggleSidebar, isMobile } = useSidebar();
 
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      {/* Left section — mobile toggle + search */}
      <div className="flex items-center gap-3">
        {/* Sidebar toggle (mobile only) */}
        <button
          aria-controls="sidebar"
           onClick={toggleSidebar}
          className="block rounded-lg border border-gray-300 bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-black dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 "
        >
           {state === "collapsed" || isMobile ? (
            <Menu className="size-4" />
          ) : (
            <Menu className="size-4" />
          )}
        </button>

        {/* Search bar */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search molecules, models, research..."
            className="w-72 rounded-xl border border-gray-300 bg-gray-50 px-10 py-2 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-indigo-400"
          />
          <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      {/* Right section — message + user */}
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          <DropdownMessage />
        </ul>

        <div className="relative">
          <DropDownUser />
        </div>
      </div>
    </header>
  )
}

export default Header
