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
    fetchPostMatches: () => Promise<void>,
    matches: Profile[],
}
  
export const MatchContext = createContext({} as MatchContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}
  
export function MatchContextProvider({ children }: OrderContextProviderProps) {
    const [profile, setProfile] = useState<Profile>({} as Profile)
    const [matches, setMatches] = useState<Profile[]>([])

    console.log(matches)

    async function fetchProfile(){
      const response = await api.get('/person')
      setProfile(response.data.profile)
    }

    async function fetchMatches(){
      const response = await api.get('/matches')
      setMatches(response.data.matches)
    }


    async function fetchPostMatches(){
        await api.post('/choose-person', {
          'id': profile.id,
          "choice": true
        })
        .then((response) => {
          fetchProfile()
          alert('Perfil Adicionado')
        })
        .catch((response) =>{
          alert('Erro ao adicionar')
        })
    }
    

    useEffect(() => {
      fetchProfile()
    }, [])

    useEffect(() => {
      fetchMatches()
    }, [])
    
    return (
      <MatchContext.Provider
        value={{
          profile,
          fetchPostMatches,
          matches
        }}
      >
        {children}
      </MatchContext.Provider>
    )
}
  