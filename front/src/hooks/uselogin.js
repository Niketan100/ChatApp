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
                cros : true,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (!res.ok) { // Check if response is not ok (status code >= 400)
                throw new Error(toast.error('Login failed', res.status));
            }

            const data = await res.json();
            console.log(data);

            if (data.error) {
              
                throw Error(data.error);
            } else {
               
                localStorage.setItem('chat-user', JSON.stringify(data));
                
                setAuthUser(data);
            }
        } catch (error) {
            console.error('Login Error:', error);
            toast.error('Login Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
}
