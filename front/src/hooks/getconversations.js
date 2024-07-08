import React, { useEffect, useState } from 'react';

function useFetchConversations() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);

            try {
                const response = await fetch(`http://localhost:3000/api/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include' // Include credentials such as cookies
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                setConversations(data);
            } catch (error) {
                console.error(`Fetching conversations failed: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
}

export default useFetchConversations;
