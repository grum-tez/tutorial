import './App.css';
import WalletAccess from './components/WalletAccess';
import { useWalletAddress, useIsConnected } from './contexts/Beacon';
import Poker from './components/Poker'

function App() {

  const walletAddress = useWalletAddress()

  const isConnected = useIsConnected()
  


  return (
    <>
    <h1>Decentralised Poker</h1>
            <WalletAccess />
            <br/>  
            <Poker/>      
    </>
  );

  
}

export default App;


