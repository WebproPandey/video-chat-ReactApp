import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import RoomPage from "./Pages/Room";
import { SocketProvider } from "./Providers/Socket";
import { PeerProvider } from "./Providers/Peer";

import "./App.css";
function App() {
  return (
    <div className="App">
      <SocketProvider>
        <PeerProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        </PeerProvider>
      </SocketProvider>
    </div>
  );
}
export default App;
