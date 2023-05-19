import React from 'react';
import { useChallengesContext } from '../Challenges/ChallengesContext'

interface PokeButtonProps {
  onClick: () => void;
} 

const Poker = () => {

  // The following line is associated with the challenge assessment. You can safely ignore it
  const { pokeEntrypointChallenge } = useChallengesContext()

  const callPoke = async (): Promise<void> => {
    try {
      throw Error //Replace this line with your code to call the poke entrypoint
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
  <>
 <p> The button below pokes the contract at the following address: 
   </p>
  <PokeButton onClick={callPoke}/>
  </>
  </div>)

}



export default Poker;