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
                    credentials: "include", // Ensure credentials are set correctly
                });
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch conversations');
                }

                setConversations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, []); // Empty dependency array means it runs once on mount

    return { loading, conversations, error };
}
