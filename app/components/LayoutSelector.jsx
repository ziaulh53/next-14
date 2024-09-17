// app/components/LayoutSelector.js
"use client";
import { useSelector } from 'react-redux';
import GuestLayout from '../layouts/GuestLayout';
import PrivateLayout from '../layouts/PrivateLayout';

const LayoutSelector = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const isAuthenticated = !!token;

    const Layout = isAuthenticated ? PrivateLayout : GuestLayout;

    return <Layout>{children}</Layout>;
};

export default LayoutSelector;

