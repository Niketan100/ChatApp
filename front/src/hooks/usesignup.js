import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authcontext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirm, gender }) => {
        // Validate inputs
        const success = handleInputError({ fullName, username, password, confirm, gender });
        if (!success) {
            return;
        }

        setLoading(true);

        try {
            // Example endpoint URL, update this to your actual backend endpoint
            const res = await fetch("api/auth/signup", {
                method: "POST",
                cros : true,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password,confirm, gender })
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

            toast.success("Signed up successfully");
        } catch (error) {
            console.error("Error:", error.message);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputError = ({ fullName, username, password, confirm, gender }) => {
        let success = true;

        if (!fullName || !username || !password || !confirm || !gender) {
            toast.error("Please fill in all fields.");
            success = false;
        }

        if (password !== confirm) {
            toast.error("Passwords do not match.");
            success = false;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            success = false;
        }

        return success;
    };

    return { loading, signup };
};

export default useSignup;
