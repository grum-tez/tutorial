import { createContext } from "react" 

interface WertProviderContextProps {
  checkout: (id: number) => Promise<void>
}

const WertProviderContext = createContext<WertProviderContextProps>({
  checkout: async () => {},
})

