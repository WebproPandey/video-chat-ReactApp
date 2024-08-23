import {Routes , Route} from 'react-router-dom'
import Homepage from './Pages/Home';
import {SocketProvider}  from './Providers/Socket'
import './App.css';
function App (){

  return (
  <div className="App">
        <SocketProvider>
      <Routes>
          <Route path="/" element={<Homepage/>} />
      </Routes>
        </SocketProvider>
  </div>
  )
}
export default App;