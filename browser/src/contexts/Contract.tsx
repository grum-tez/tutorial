import { set_binder_tezos_toolkit } from '@completium/dapp-ts'
import constate from 'constate'
import { useState } from 'react'

import { Poke_contract as ContractBinding } from '../dapp_bindings/poke_contract'
import { useContractAddress } from './Settings'
import { useTezosToolkit } from './Taquito'

export const [
  ContractProvider,
  useContract
] = constate(
  () => {
    const ttk = useTezosToolkit()
    const address = useContractAddress()
    const [contract] = useState({contract: new ContractBinding(address)})
    set_binder_tezos_toolkit(ttk)
    return contract
  },
  (v) => v.contract
)
