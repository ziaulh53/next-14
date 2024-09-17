// app/layout.js

import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const ClientProvider = dynamic(() => import('./components/ClientProvider'), {
    ssr: false,
});

const LayoutSelector = dynamic(() => import('./components/LayoutSelector'), {
    ssr: false,
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <ClientProvider>
                <LayoutSelector>
                    {children}
                </LayoutSelector>
            </ClientProvider>
        </body>
    </html>
    );
}
