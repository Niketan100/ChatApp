import { useState } from "react";
import { useAuthContext } from '../context/authcontext.jsx';
import toast from "react-hot-toast";

const uselogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/logout', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();

            localStorage.removeItem("chat-user"); // Assuming 'token' is the key for storing JWT
            setAuthUser(null);
            toast.success("Successfully logged out!");

        } catch (err) {
            console.error(err);
            toast.error("Failed to log out. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout }
}

export default uselogout;
