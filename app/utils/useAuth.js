// app/utils/useAuth.js

import { useSelector } from 'react-redux';

const useAuth = () => {
    const token = useSelector((state) => state.auth.token);
    const isAuthenticated = !!token;

    return { isAuthenticated };
};

export default useAuth;
