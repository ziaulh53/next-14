// app/layouts/GuestLayout.js

import Link from 'next/link';

const GuestLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/login">Login</Link>
                        <Link href="/signup">Sign Up</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default GuestLayout;
