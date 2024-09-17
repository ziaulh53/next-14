'use client';

import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
import { postRequest } from "../utils/axios";

export default function Login (){
    const dispatch = useDispatch();
    const handleLogin = async()=>{
        const res = await postRequest('/auth/login', {email: 'test1@gmail.com', password: '1234'});
        console.log(res);
        dispatch(setAuth(res))
        
    }
    return <div><button onClick={handleLogin}>Login</button></div>
}