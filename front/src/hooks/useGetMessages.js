import { useEffect, useState } from 'react';
import useConversations from '../store/useconversation.js';

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversations();

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted

    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/message/${selectedConversation._id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include' // Include credentials such as cookies
        });
        const data = await response.json();
        if (data && isMounted) {
          setMessages(data.messages || []);
        } else if (isMounted) {
          setMessages([]);
        }
      } catch (error) {
        console.error('Failed to fetch messages:', error);
        if (isMounted) setMessages([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    } else {
      setMessages([]);
    }

    return () => {
      isMounted = false; // Cleanup function to prevent state updates if unmounted
    };
  }, [selectedConversation, setMessages]);

  return { loading, messages };
}
