'use client'
import React, {useState, useLayoutEffect} from "react"
import { AppSidebar } from "../Sidebar";
import Header from "../Header";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function DefaultLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
return(
   <SidebarProvider>
           <AppSidebar />
           <main className="flex flex-col h-screen w-screen bg-muted">
            <Header />
            {children}
            </main>
        </SidebarProvider>
)

}