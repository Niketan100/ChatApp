import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';

export default function UseLogin() {
    const { setAuthUser } = useAuthContext(); // Correctly invoke useAuthContext
    const [loading, setLoading] = useState(false);

    const login = async (username, password) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

             
        if (!res.ok) { // Check if response is not ok (status code >= 400)
           throw new Error(toast.error(res.data, res.status))
        }
            const data = await res.json();
            console.log(data);
            if (data.error) {
                toast.error(data.error);
                throw Error(data.error);
               
            } else {
                localStorage.setItem('chat-user', JSON.stringify(data));
                setAuthUser(data);
            }
        } catch (error) {
            console.error('Login Error:', error);
        
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
}
