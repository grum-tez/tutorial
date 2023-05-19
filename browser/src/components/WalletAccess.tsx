import React from 'react';
import { useConnect, useDisconnect, useIsConnected, useWalletAddress } from '../contexts/Beacon'
import { useChallengesContext } from '../Challenges/ChallengesContext';

const WalletAccess: React.FC = () => {
  const {setWalletConnects} = useChallengesContext();
  const connect = useConnect();
  const disconnect = useDisconnect()
  const isConnected = useIsConnected()
  const walletAddress = useWalletAddress() 

  const handleClick = async () => {
    try {
      if (!isConnected()) {
        await connect();
        console.log("connect successful")
      } else {
        await disconnect();
      }
    } catch (err) {
      console.error(err);
      setWalletConnects("fail")
      console.log("CONNECTION FAILED")
    }
  };

  return (
    <div className="component">
    <h4>Wallet Access Component</h4>
      {isConnected() ? (<>
        <p> Connected to wallet at address: <br/>
           {walletAddress}
           </p>
        <button onClick={handleClick}>Disconnect Wallet</button>
        </>
      ) : (<>
        <p> No wallet connected
        </p>
        <button onClick={handleClick}>Connect Wallet</button>
        </>
        )}
        <br/>
      </div>
  );
};

export default WalletAccess;
