// middleware.js

import { NextResponse } from 'next/server';

// Example function to check if a user is authenticated
// Replace this with your actual logic or flag
const isAuthenticated = (request) => {
    // Example logic: Check for a cookie or session data
    const token = request.cookies.get('token');
    return !!token; // Simplified: Check if token exists
};

export function middleware(request) {
    const url = request.nextUrl.clone();
    const authenticated = isAuthenticated(request);

    // Define protected routes
    const protectedRoutes = ['/dashboard', '/profile'];
    const publicRoutes = ['/login', '/signup'];

    if (protectedRoutes.some((path) => url.pathname.startsWith(path))) {
        // Redirect unauthenticated users to the login page
        if (!authenticated) {
            url.pathname = '/login'; // Redirect to login if not authenticated
            return NextResponse.redirect(url);
        }
    } else if (publicRoutes.some((path) => url.pathname.startsWith(path))) {
        // Redirect authenticated users away from public routes
        if (authenticated) {
            url.pathname = '/dashboard'; // Redirect to dashboard if authenticated
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*', '/login/:path*', '/signup/:path*'],
};
