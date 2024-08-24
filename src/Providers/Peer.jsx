import React, { useMemo} from "react";

const PeerContext = React.createContext(null);

export const usePeer = () => React.useContext(PeerContext);

export const PeerProvider = (props) => {
  const peer = useMemo(() => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:global.stun.twilio.com:3478",
          ],
        },
      ],
    });

    // Cleanup on unmount
    return peerConnection;
  }, []);
 const createOffer =  async () =>{
   const offer = await peer.createOffer();
   await peer.setLocalDescription(offer);
   return offer
 }
  
  // Return the Provider component
  return (
    <PeerContext.Provider value={{ peer, createOffer }}>
      {props.children}
    </PeerContext.Provider>
  );
};
