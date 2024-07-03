import { useEffect, useState } from 'react';

export default function useConversations() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConversations = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("http://localhost:3000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include", // Correctly set credentials here
                });
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, []);

    return { loading, conversations, error };
}
