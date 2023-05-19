import React from 'react';
import { useChallengesContext } from '../Challenges/ChallengesContext';

const WalletAccess: React.FC = () => {
  //Ignore the next line which is related to the challenges
  const {setWalletConnects} = useChallengesContext();

  const handleClick = async () => {
    try {
      throw Error
      //Your code for handling connecting and disconnecting to the wallet goes here
    } catch (err) {
      console.error(err);
      //Ignore the next line, this is related to the challengest
      setWalletConnects("fail")
    }
  };

  return (
    <div className="component">
    <h4>Wallet Access Component</h4>

        <>
        <p> No wallet connected
        </p>
        <button onClick={handleClick}>Connect Wallet</button>
        </>
        <br/>
      </div>
  );
};

export default WalletAccess;
