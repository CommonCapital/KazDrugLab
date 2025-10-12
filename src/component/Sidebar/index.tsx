'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import SidebarItem from './SidebarItem'
import useLocalStorage from '@/hook/useLocalStorage'
import {
  Atom,
  ChevronLeftIcon,
  LayoutDashboard,
  MessageSquareText,
  Microscope,
  Network,
  Settings,
} from 'lucide-react'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const menuGroups = [
  {
    name: '',
    menuItems: [
      {
        icon: <LayoutDashboard size={22} />,
        label: 'Dashboard',
        route: '/dashboard',
      },
      {
        icon: <Atom size={22} />,
        label: 'Molecules Bank',
        route: '/molecule-bank',
      },
      {
        icon: <Network size={22} />,
        label: 'Model',
        route: '/model',
      },
      {
        icon: <Microscope size={22} />,
        label: 'Research',
        route: '/research',
      },
      {
        icon: <MessageSquareText size={22} />,
        label: 'Messages',
        route: '/message',
      },
    ],
  },
  {
    name: 'OTHERS',
    menuItems: [
      {
        icon: <Settings size={22} />,
        label: 'Settings',
        route: '/settings',
      },
    ],
  },
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()
  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'Dashboard')

  useEffect(() => {
    const current = menuGroups
      .flatMap(g => g.menuItems)
      .find(i => pathname.includes(i.route))
    if (current) setPageName(current.label)
  }, [pathname])

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-black/90 shadow-2xl ring-1 ring-white/5 transition-all duration-300 ease-in-out backdrop-blur-xl
        lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30">
            <Image
              width={32}
              height={32}
              src="/KazDrugLab-removebg-preview.png"
              alt="KazDrugLab Logo"
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold text-white tracking-wide">KazDrugLab</span>
        </Link>

        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
          className="rounded-lg p-2 text-gray-400 hover:bg-gray-800/80 hover:text-white transition-colors lg:hidden"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation */}
      <div className="no-scrollbar flex flex-1 flex-col overflow-y-auto px-3 py-6">
        <nav className="space-y-7">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.name && (
                <h3 className="px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500/70">
                  {group.name}
                </h3>
              )}
              <ul className="mt-3 space-y-1.5">
                {group.menuItems.map((menuItem, menuIndex) => {
                  const active = pageName === menuItem.label
                  return (
                    <li key={menuIndex}>
                      <Link
                        href={menuItem.route}
                        onClick={() => {
                          setPageName(menuItem.label)
                          if (window.innerWidth < 1024) setSidebarOpen(false)
                        }}
                        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200
                          ${
                            active
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                          }`}
                      >
                        <span
                          className={`flex items-center justify-center rounded-lg ${
                            active
                              ? 'text-white'
                              : 'text-gray-400 group-hover:text-indigo-400'
                          }`}
                        >
                          {menuItem.icon}
                        </span>
                        {menuItem.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer (optional) */}
      <div className="border-t border-white/10 px-6 py-4 text-xs text-gray-500/70">
        © {new Date().getFullYear()} KazDrugLab
      </div>
    </aside>
  )
}

export default Sidebar
