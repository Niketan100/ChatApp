import { useEffect } from 'react';
import { useSocketContext } from '../context/socketcontext';
import useUserConversations from './../store/useconversation.js';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useUserConversations();

    useEffect(() => {
       socket?.on("newMessage", (newMessage) =>{
        setMessages((prevMessages) => [...prevMessages, newMessage]);
       } )

       return ()  =>socket?.off("newMessage");

    }, [socket, setMessages]);

    return null;
};

export default useListenMessages;
