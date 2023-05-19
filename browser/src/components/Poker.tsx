import React from 'react';
import { useChallengesContext } from '../Challenges/ChallengesContext'
import { useContract } from '../contexts/Contract';
import { useContractAddress } from '../contexts/Settings';
import { useIsConnected } from '../contexts/Beacon';


interface PokeButtonProps {
  onClick: () => void;
} 

const Poker = () => {

  // Related to testing - ignore this line
  const { pokeEntrypointChallenge } = useChallengesContext()
  // END testing block

  const pokeContract = useContract()
  const contractAddress = useContractAddress()
  const isConnected = useIsConnected()

  const callPoke = async (): Promise<void> => {
    try {
      await pokeContract.poke({});
      //TODO: Ideally setPokeCallable would be triggered by watching the chain for a successful call, rather than the user having to input this themselves.
      pokeEntrypointChallenge("pass")
    } catch {
      pokeEntrypointChallenge("fail")
    }
  };

  const PokeButton: React.FC<PokeButtonProps> = ({ onClick }) => {
    return (
    <>
      <button onClick={onClick}> Poke
      </button>
      </>
    );
  };
  
  return (
  <div className="component">
  <h3>Poking Component</h3>
  {isConnected() &&
  <>
 <p> The button below pokes the contract at address: <br/> {contractAddress}  </p>
  <PokeButton onClick={callPoke}/>
  </>
  }
  </div>)

}



export default Poker;