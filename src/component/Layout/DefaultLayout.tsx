'use client'
import React, {useState, useLayoutEffect} from "react"
import { AppSidebar } from "../Sidebar";
import Header from "../Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


export default function DefaultLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    const {data: session} = useSession();
    const router = useRouter();

    const pathname = usePathname();
    useLayoutEffect(() => {
        if (!session?.user) {
            router.push('/auth/sign-in');
        }
    }, [session?.user, router, pathname]);
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