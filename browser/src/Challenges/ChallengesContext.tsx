import React, { useState } from "react";
import constate from "constate";

function useTrackChallenges() {

  const [walletConnects, setWalletConnects] = useState("unknown")

  const [contractExists, setContractExists] = useState("unknown")

  const [pokeCallable, setPokeCallable] = useState("unknown")

  const pokeEntrypointChallenge = (x:string) => {
    setPokeCallable(x)
  }

  return { 
    walletConnects,
    setWalletConnects, 
    contractExists, 
    setContractExists,
    pokeCallable,
    setPokeCallable,
    pokeEntrypointChallenge
  };
}

export const [ChallengesProvider, useChallengesContext] = constate(useTrackChallenges);