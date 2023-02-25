import { ArrowUUpLeft, Clipboard } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MatchContext } from '../../context/MatchContext'
import { Profile } from './components/Profile'
import {
    Container,
    Content,
    Wrapper
} from './styles'



export function Matches (){
    const {matches} = useContext(MatchContext)



    return (
        <Wrapper>
            <Container>
                <NavLink to={'/'} title='voltar a home'>
                    <ArrowUUpLeft size={32} />
                </NavLink>

                <button title='limpar a lista'>
                    <Clipboard size={32} />
                </button>

            </Container>

            <Content>
                {matches.map((profiles) => 
                    <Profile 
                        key={profiles.id} 
                        profile={profiles}
                    />)}
            </Content>
        </Wrapper>
    )
}