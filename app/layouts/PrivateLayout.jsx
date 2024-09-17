// app/layouts/AuthLayout.js

import Link from 'next/link';

const PrivateLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/profile">Profile</Link>
                        <Link href="/logout">Logout</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default PrivateLayout;
