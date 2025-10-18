'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import useLocalStorage from '@/hook/useLocalStorage'
import {
  Atom,
  Home,
  LayoutDashboard,
  MessageSquareText,
  Microscope,
  Network,
  Settings,
} from 'lucide-react'

// Menu data (same as before)
const menuGroups = [
  {
    name: '',
    menuItems: [
      { icon: <Home size={20} />, label: 'Home', route: '/dashboard' },
      { icon: <Atom size={20} />, label: 'Molecules Bank', route: '/molecule-bank' },
      { icon: <Network size={20} />, label: 'Model', route: '/model' },
      { icon: <Microscope size={20} />, label: 'Research', route: '/research' },
      { icon: <MessageSquareText size={20} />, label: 'Messages', route: '/message' },
    ],
  },
  {
    name: 'OTHERS',
    menuItems: [
      { icon: <Settings size={20} />, label: 'Settings', route: '/settings' },
    ],
  },
]

// Your custom Sidebar component using shadcn/ui primitives
export function AppSidebar() {
  const pathname = usePathname()
  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'Dashboard')

  useEffect(() => {
    const current = menuGroups
      .flatMap(g => g.menuItems)
      .find(i => pathname.includes(i.route))
    if (current) setPageName(current.label)
  }, [pathname])

  return (
    <Sidebar className="border-r border-white/10 bg-gradient-to-b from-gray-900 via-gray-950 to-black/90 text-white">
      <SidebarHeader className="px-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30">
            <Image
              width={32}
              height={32}
              src="/KazDrugLab-removebg-preview.png"
              alt="KazDrugLab Logo"
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold tracking-wide">KazDrugLab</span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {menuGroups.map((group, groupIndex) => (
          <SidebarGroup key={groupIndex} className="py-1">
            {group.name && (
              <div className="px-3 pb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500/70">
                  {group.name}
                </span>
              </div>
            )}
            <SidebarMenu>
              {group.menuItems.map((item, index) => {
                const isActive = pageName === item.label
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        href={item.route}
                        onClick={() => {
                          setPageName(item.label)
                          // Sidebar auto-closes on mobile after navigation
                        }}
                        className="gap-3"
                      >
                        <span
                          className={
                            isActive
                              ? 'text-white'
                              : 'text-gray-400 group-hover:text-indigo-400'
                          }
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-4 py-3 border-t border-white/10">
        <div className="text-xs text-gray-500/70">
          © {new Date().getFullYear()} KazDrugLab
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
