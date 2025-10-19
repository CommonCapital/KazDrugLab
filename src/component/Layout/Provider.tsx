'use client';
import { UserProvider } from '@/app/context/UserContext';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
    <SessionProvider>
        <UserProvider>
        {children}
        </UserProvider>
    </SessionProvider>

)
}