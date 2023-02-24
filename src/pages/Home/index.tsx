import {
    Wrapper,
    LogoContainer,
    Content,
    FooterContainer
} from "./styled"

import Logo from  '../../assets/Logo.svg'
import { Heart, XCircle } from "phosphor-react"
import { useContext } from "react"
import { MatchContext } from "../../context/MatchContext"



export function Home (){
    const {profile} = useContext(MatchContext)


    return(
        <Wrapper>
            <LogoContainer src={Logo} alt='logo to app: tinder'/>
            <Content>
                <p>{profile.name}</p>
            </Content>


            <FooterContainer>
                <button title="rejeitar">
                    <XCircle 
                        size={50} 
                        weight='fill' 
                        color="red"
                    />
                </button>
                
                <button title="adicionar">
                    <Heart 
                        size={50} 
                        weight='fill' 
                        color="green"
                    />
                </button>
            </FooterContainer>
        </Wrapper>


    )
}