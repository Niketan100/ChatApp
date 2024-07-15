import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./authcontext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io('http://localhost:3000', {
                query: { userId: authUser._id },
                reconnectionAttempts: 5, // limit reconnection attempts
            });
            setSocket(newSocket);

            const handleGetOnlineUsers = (users) => {
                setOnlineUsers(users);
            };

            newSocket.on('getonlineusers', handleGetOnlineUsers);

            return () => {
                newSocket.close();
            };
        } else if (socket) {
            socket.close();
            setSocket(null);
        }

        return () => {
            if (socket) {
                socket.off('getonlineusers');
                socket.close();
            }
        };
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}
