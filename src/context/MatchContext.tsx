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
    profile: Profile,
    fetchMatches: (id: string) => Promise<void>,
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

    async function fetchMatches(id: string){
        await api.post('/choose-person', {
          'id': id,
          "choice": true
        })
        .then((response) => fetchProfile())
    }
    

    useEffect(() => {
      fetchProfile()
    }, [])
    
    return (
      <MatchContext.Provider
        value={{
          profile,
          fetchMatches
        }}
      >
        {children}
      </MatchContext.Provider>
    )
}
  