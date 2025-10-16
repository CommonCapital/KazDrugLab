'use client'
import React, {useState, useLayoutEffect} from "react"
import Sidebar from "../Sidebar";
import Header from "../Header";


export default function DefaultLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
return(
    <div className='flex'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
<div className='relative flex flex-1 flex-col lg:ml-72.5'>
<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
<main>
    <div className='flex flex-col mx-auto max-w-screen-2xl dark:bg-[#121212]'>
{children}
    </div>
</main>
</div>
    </div>
)

}