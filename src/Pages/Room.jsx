import React, { useEffect  , useCallback} from "react";
import { useSocket } from "../Providers/Socket";
import { usePeer } from "../Providers/Peer";

const RoomPage = () =>{
  const { socket } = useSocket();
  const {createOffer} = usePeer()


   const handleNewUserjoined =  useCallback (async  (data) =>{
   const {emailId} = data
   console.log('New User Joined Room' ,emailId);
   const  offer =  await createOffer();
   socket.emit('call-user' ,{emailId, offer})
  },[createOffer , socket])

 const  handleIncommingCall = useCallback((data) =>{
    const {from , offer} = data
    console.log('Incomming call from' , from , offer);
 },[])


  useEffect( () =>{
    socket.on('user-joined' , handleNewUserjoined)
    socket.on('incomming-call' , handleIncommingCall)
  },[handleNewUserjoined  ,socket])


  return (
    <div className="room-page-cantiner">
        <h1>Room</h1>
    </div>
  );
}

export default RoomPage