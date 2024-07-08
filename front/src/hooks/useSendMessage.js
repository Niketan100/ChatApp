import { useState } from 'react';
import useConversation from '../store/useconversation.js';

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      // Send message to backend
      const response = await fetch(`http://localhost:3000/api/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include", // 
        body: JSON.stringify({
          message,
          conversationId: selectedConversation._id,
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);

      setMessages([...messages, data]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}
