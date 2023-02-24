import {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from 'react'
import { api } from '../lib/axios';

interface Profile {
  id: string;
  photo_alt: string;
  name: string;
  photo: string;
  bio: string;
  age: number;
}
  

  
interface MatchContextType {
    profile: Profile
}
  
export const MatchContext = createContext({} as MatchContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}
  
export function MatchContextProvider({ children }: OrderContextProviderProps) {
    const [profile, setProfile] = useState<Profile>({} as Profile)

   

    async function fetchProfile(){
      const response = await api.get('/person')
      setProfile(response.data.profile)
    }
    

    useEffect(() => {
      fetchProfile()
    }, [])
    
    return (
      <MatchContext.Provider
        value={{
          profile
        }}
      >
        {children}
      </MatchContext.Provider>
    )
}
  