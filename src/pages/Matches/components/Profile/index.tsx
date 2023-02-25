
import {
    Container
} from './styles'

interface Profile {
    id: string;
    photo_alt: string;
    name: string;
    photo: string;
    bio: string;
    age: number;
  }

interface ProfileProps {
    profile: Profile
}

export function Profile ({profile}: ProfileProps){


    return (
        <Container>
           <img src={profile.photo} alt={profile.photo_alt}/>
           <p>{profile.name}</p>
        </Container>
    )
}