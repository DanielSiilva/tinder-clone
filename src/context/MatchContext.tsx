import {
    createContext,
    ReactNode,
} from 'react'


  

  
interface MatchContextType {
    
}
  
export const MatchContext = createContext({} as MatchContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}
  
export function MatchContextProvider({ children }: OrderContextProviderProps) {
   
  
    
    return (
      <MatchContext.Provider
        value={{
          
        }}
      >
        {children}
      </MatchContext.Provider>
    )
}
  