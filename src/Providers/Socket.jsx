import React, { useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext(null);

// Custom hook to use the socket
export const useSocket = () => {
  return useContext(SocketContext);
};

// Provider component to provide the socket context
export const SocketProvider = (props) => {
  const socket = useMemo(() => io("http://localhost:5001"), []); 

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
